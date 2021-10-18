from flask import Flask, render_template
from api import blueprint as api

app = Flask(__name__, template_folder="build", static_folder="build/static")
app.register_blueprint(api, url_prefix="/api")
app.secret_key = "9487_sEcReT_kEy"


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
