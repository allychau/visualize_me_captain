

// Load in data from url
const url = "/stations";

// Grab data with d3
d3.json(url, function(response) {


  function drawMap1(data) {
    let plotData = [
    {
        type: "choropleth",
        locationmode: "USA-states",
        locations: data.map(e => e.State),
        z: data.map(e => e.Year_2017),
        // text: data.map(e => e.state),
        zmin: 50,
        zmax: 600,
        colorscale: [
        [0, "rgb(242,240,247)"],
        [200, "rgb(218,218,235)"],
        [400, "rgb(188,189,220)"],
        [600, "rgb(158,154,200)"],
        [8000, "rgb(117,107,177)"],
        [1000, "rgb(84,39,143)"]
        ],
        colorbar: {
        title: "<b>State emissions</b>",
        thickness: 6
        },
        marker: {
        line: {
            color: "rgb(255,255,255)",
            width: 0.7
            }
            }
        },
        ];
        let layout = {
        title: "<b>State emissions</b>",
        geo: {
            scope: "usa",
            showlakes: true,
            lakecolor: "rgb(255,255,255)"
        }
        };
        Plotly.newPlot("bar", plotData, layout, { showLink: false });

    }});

// Load in data from url
const url = "/stations";

// Grab data with d3
d3.json(url, function(response) {

  console.log(stateData.length)
  state_names = [];
  state_emission = [];
    for(let i = 0; i < stateData.length; i++){ 
      state_names.push(stateData[i].State);
      state_emission.push(stateData[i].Year_2017);
      }
      
    function drawMap2(data) {

    // bubble chart
    var trace1 = {
      x: state_names,
      y: state_emission,
      mode: 'markers',
      marker: {
        size: state_emission,
        color: state_emission,
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'Size of emissions by State',
      showlegend: true,
      height: 1000,
      width: 1750,
      xaxis: {
        autotick: false,
        ticks: 'outside',
        tick0: 0,
        dtick: 1,
        ticklen: 8,
        tickwidth: 5,
        tickcolor: '#000'
      },
      yaxis: {
        autotick: false,
        ticks: 'outside',
        range: [0, 750],
        tick0: 0,
        dtick: 25,
        ticklen: 8,
        tickwidth: 8,
        tickcolor: '#000'
      }
    };
  }

    Plotly.newPlot('bubble', data, layout, { showLink: false });

  });



function init_1() {
  d3.csv("static/data/state_emissions.csv",function(data){
      console.log(data)
      drawMap1(data)
    })
  };

function init_2() {
    d3.csv("static/data/state_emissions.csv",function(data){
       console.log(data)
        drawMap2(data)
      })
    };

init_1();
init_2();