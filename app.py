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


# charging stations markers and emission chloropleth
# Bar graph for charging station and emissions
# another visual graph

# temporary sample route endpoint to hook to javascript


# End point for landing page
@app.route("/")
def index():
    #print("Total number of stations is", Station.query.count())
    return render_template("index.html")


@app.route("/visualize1")
def visualize1():
   return render_template("visualization1.html")


# Temporary route to show connecting to database, fetching data and rendering
# the page for the browser
@app.route("/stations")
def stations():
    con = sql.connect("data/db.sqlite")
    con.row_factory = sql.Row

    cur = con.cursor()
    cur.execute("select * from Stations")

    rows = cur.fetchall()

    #print("Total number of stations is", Station.query.count())
    return render_template("stations.html", rows=rows)

#  Route get all the Electric Vehicle Charging Stations data. Read data from Stations table in json format and display it to the browser.
@app.route("/charge_stations")
def getAllStations():
    conn = engine.connect()
    query = f"select * from Stations LIMIT 10"
    df = pd.read_sql(query, conn)
    stations = df.to_json(orient="records")
    # return render_template("stations.html", rows=stations)
    return stations


@app.route("/topic-timeline/")
def topic_timeline():
    topic = request.values["Station Name"]
    data, labels = line_chart(topic)
    return render_template("linechart.html", data=data, labels=labels, topic=topic)

# temporary sample route endpoint to hook to javascript
@app.route("/leaflet")
def leaflet():
    return render_template("leaflet.html")


# simple example of how to return a jsonify response
@app.route('/hello')
def hello():
    # Returns HTTP Response with {"hello": "world"}
    return jsonify(hello='world')


if __name__ == '__main__':
    app.run(debug=True)
