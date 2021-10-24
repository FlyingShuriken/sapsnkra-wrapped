from flask import Blueprint, render_template
from flask_restx import Resource, Api, reqparse

import urllib
import csv
import json
import ssl

blueprint = Blueprint(__name__, "api")
api = Api(blueprint)
parser = reqparse.RequestParser()
context = ssl._create_unverified_context()


@api.route('/v1/checkID/<string:id>')
class checkID(Resource):
    def get(self, id):
        url = f'https://sapsnkra.moe.gov.my/ajax/papar_carian.php?nokp={id}'
        with urllib.request.urlopen(url, context=context) as response:
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
        with urllib.request.urlopen(url, context=context) as response:
            html = response.read().decode("utf-8").replace("\n", "").replace(" ", "")
        return {"status": html}


@api.route('/v1/check/<string:kodsek>/<string:tahun>/<string:ting>/<string:kelas>/<string:nokp>/<string:cboPep>')
class check(Resource):
    def get(self, kodsek, tahun, ting, kelas, nokp, cboPep):
        url = f'https://sapsnkra.moe.gov.my/ajax/papar_btn.php?nokp={nokp}&kodsek={kodsek}&ting={ting}&kelas={kelas}&tahun={tahun}&jpep={cboPep}'
        with urllib.request.urlopen(url, context=context) as response:
            cookies = [i.split(";")[0]
                       for i in response.info().get_all("Set-Cookie")]
            cookies_dict = ""
            for i in cookies:
                cookies_dict += f'{i}; '
            cookies_dict = cookies_dict[:-2]
        url = f'https://sapsnkra.moe.gov.my/ibubapa2/slipmr.php'
        data = {
            "nokp": nokp,
            "kodsek": kodsek,
            "ting": ting,
            "kelas": kelas,
            "cboPep": cboPep
        }
        data = urllib.parse.urlencode(data).encode()
        req = urllib.request.Request(url, data=data, headers={
                                     "Cookie": cookies_dict})
        resp = urllib.request.urlopen(
            req, context=context).read().decode("utf-8")
        return {"res": resp}
