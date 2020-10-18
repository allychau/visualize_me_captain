from flask import Flask, jsonify, request
from flask import render_template
from flask_sqlalchemy import SQLAlchemy
import sqlite3 as sql

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

import pandas as pd

engine = create_engine("sqlite:///data/db.sqlite", echo=True)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

app = Flask(__name__)

#################### Flask routes #############################

# End point for landing page
@app.route("/")
def index():
    return render_template("index.html")

# Route for map.  Charging stations markers and emission chloropleth
@app.route("/map")
def map():
   return render_template("map.html")

@app.route("/chart")
def chart():
   return render_template("chart.html")

@app.route("/national")
def nationalEmission():
   return render_template("chartJSYear.html")

# Route get all the Electric Vehicle Charging Stations data.
# Read data from Stations table in json format and return it to the browser.
@app.route("/stations")
def getAllStations():
    conn = engine.connect()
    query = f"select state,station_name, latitude, longitude, open_date from Stations"
    df = pd.read_sql(query, conn)
    stations = df.to_json(orient="records")
    
    return stations
    #return render_template("stations.html")

@app.route("/emissions")
def getAllEmissions():
    conn = engine.connect()
    query = f"select * from States_co2"
    df = pd.read_sql(query, conn)
    emissions = df.to_json(orient="records")
    
    return emissions

if __name__ == '__main__':
    app.run(debug=True)

