from flask import Blueprint
from flask_restx import Resource, Api, reqparse

import urllib
import csv

blueprint = Blueprint(__name__, "api")
api = Api(blueprint)


@api.route('/v1/checkID/<string:id>')
class checkID(Resource):
    def get(self, id):
        url = f'https://sapsnkra.moe.gov.my/ajax/papar_carian.php?nokp={id}'
        with urllib.request.urlopen(url) as response:
            html = response.read().decode("utf-8").replace("\n", "").replace(" ", "")
        return {'id': html}


@api.route('/v1/search/<string:s>')
class search(Resource):
    def get(self, s):
        if len(s) == 5 and s.isdigit():
            res = {"school": []}
            with open("./resource/school_list.csv", "r")as school_list:
                school_list = csv.reader(school_list)
                for row in school_list:
                    if int(row[-1]) == int(s):
                        res["school"].append({
                            "id": row[0],
                            "name": row[1],
                            "poscode": row[2]
                        })
            return res
        elif len(s) == 7 and s[-4:].isdigit():
            res = {"school": []}
            with open("./resource/school_list.csv", "r", encoding='utf-8-sig')as school_list:
                school_list = csv.reader(school_list)
                for row in school_list:
                    if row[0] == s.upper():
                        res["school"].append({
                            "id": row[0],
                            "name": row[1],
                            "poscode": row[2]
                        })
            return res
        else:
            res = {"school": []}
            with open("./resource/school_list.csv", "r")as school_list:
                school_list = csv.reader(school_list)
                for row in school_list:
                    if s.upper() in row[1]:
                        res["school"].append({
                            "id": row[0],
                            "name": row[1],
                            "poscode": row[2]
                        })
            return res


@api.route('/v1/checkStudentValid/<string:school>/<string:id>')
class checkID(Resource):
    def get(self, school, id):
        print(school, id)
        url = f'https://sapsnkra.moe.gov.my/ajax/papar_carianpelajar.php?nokp={id}&kodsek={school}'
        with urllib.request.urlopen(url) as response:
            html = response.read().decode("utf-8").replace("\n", "").replace(" ", "")
        return {"status": html}
