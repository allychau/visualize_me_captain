from flask import Flask
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
import sqlite3 as sql

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/db.sqlite'
db = SQLAlchemy(app)

db.Model.metadata.reflect(db.engine)

#class Station(db.Model):
    #__tablename__ = 'Stations'
    #__table_args__ = { 'extend_existing': True }
    #LOC_CODE = db.Column(db.Text, primary_key=True)
   

@app.route("/")
def index(): 
    #print("Total number of stations is", Station.query.count())
    return render_template("index.html")

@app.route("/leaflet")
def leaflet():
    return render_template("leaflet.html")

@app.route("/stations")
def stations():
    con = sql.connect("data/db.sqlite")
    con.row_factory = sql.Row
   
    cur = con.cursor()
    cur.execute("select * from Stations")
   
    rows = cur.fetchall()
    return render_template("stations.html",rows = rows)

if __name__ == '__main__':
    app.run(debug=True)