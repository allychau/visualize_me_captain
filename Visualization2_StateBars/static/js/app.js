
// Load in geojson data
var geoData = "static/data/alt_fuel_stations.json";

var geojson;



d3.json("static/data/alt_fuel_stations.json").then((importedData) => {
    
  console.log(importedData);


  var state = "AL"

  // // Establish datasets
  
  // // filter metadata for state
  var resultArray = importedData.fuel_stations.filter(fuelObj => fuelObj.state == state);
  console.log(resultArray)

  // get all the locations from that state
  var open_date = resultArray.map(state => state.open_date);
  console.log(open_date)

  number_of_stations = [];
  open_dates = []
  var x = 0
    for(let i = 0; i < resultArray.length; i++){
      console.log(open_date)

      
      if (resultArray[i].open_date == null) {

      } else {
        x = 1    
        number_of_stations.push(x);
        date = resultArray[i].open_date
        year = date.slice(0, 4)
        open_dates.push(year)

      }
    }

  var trace1 = {
    type: "bar",
    name: name,
    x: open_dates,
    y: number_of_stations,
    line: {
      color: "#17BECF"
    }
  };

  var data = [trace1];

  var layout = {
    title: `Number of charging stations built in state by year`,
    xaxis: {
      // range: [startDate, endDate],
      type: "date"
    },
    yaxis: {
      autorange: true,
      type: "linear"
    }
  };

  Plotly.newPlot("gauge", data, layout);


});



// Retrieve data from the CSV file and execute everything below
d3.csv("static/data/state_emissions.csv").then(function(stateData, err) {
  if (err) throw err;


  console.log(stateData.length)
  state_names = [];
  state_emission = [];
    for(let i = 0; i < stateData.length; i++){ 
      state_names.push(stateData[i].State);
      state_emission.push(stateData[i].Year_2017);
      }

      console.log(state_emission)

  var state = "AL"

  states = []

  // parse data
  stateData.forEach(function(data) {
    data.Year_1990 = +data.Year_1990;
    data.Year_1991 = +data.Year_1991;
    data.Year_1992 = +data.Year_1992;
    data.Year_1993 = +data.Year_1993;
    data.Year_1994 = +data.Year_1994;
    data.Year_1995 = +data.Year_1995;
    data.Year_1996 = +data.Year_1996;
    data.Year_1997 = +data.Year_1997;
    data.Year_1998 = +data.Year_1998;
    data.Year_1999 = +data.Year_1999;
    data.Year_2000 = +data.Year_2000;
    data.Year_2001 = +data.Year_2001;
    data.Year_2002 = +data.Year_2002;
    data.Year_2003 = +data.Year_2003;
    data.Year_2004 = +data.Year_2004;
    data.Year_2005 = +data.Year_2005;
    data.Year_2006 = +data.Year_2006;
    data.Year_2007 = +data.Year_2007;
    data.Year_2008 = +data.Year_2008;
    data.Year_2009 = +data.Year_2009;
    data.Year_2010 = +data.Year_2010;
    data.Year_2011 = +data.Year_2011;
    data.Year_2012 = +data.Year_2012;
    data.Year_2013 = +data.Year_2013;
    data.Year_2014 = +data.Year_2014;
    data.Year_2015 = +data.Year_2015;
    data.Year_2016 = +data.Year_2016;
    data.Year_2017 = +data.Year_2017;
  });



  var resultArray = stateData.filter(sampleObj => sampleObj.State == state);
  console.log(resultArray)

 
  Year_1990 = resultArray[0].Year_1990;  
  Year_1991 = resultArray[0].Year_1991; 
  Year_1992 = resultArray[0].Year_1992;
  Year_1993 = resultArray[0].Year_1993;  
  Year_1994 = resultArray[0].Year_1994;  
  Year_1995 = resultArray[0].Year_1995;  
  Year_1996 = resultArray[0].Year_1996; 
  Year_1997 = resultArray[0].Year_1997;
  Year_1998 = resultArray[0].Year_1998;  
  Year_1999 = resultArray[0].Year_1999;  
  Year_2000 = resultArray[0].Year_2000;  
  Year_2001 = resultArray[0].Year_2001; 
  Year_2002 = resultArray[0].Year_2002;
  Year_2003 = resultArray[0].Year_2003;  
  Year_2004 = resultArray[0].Year_2004;  
  Year_2005 = resultArray[0].Year_2005;  
  Year_2006 = resultArray[0].Year_2006; 
  Year_2007 = resultArray[0].Year_2007;
  Year_2008 = resultArray[0].Year_2008;  
  Year_2009 = resultArray[0].Year_2009;  
  Year_2010 = resultArray[0].Year_2010;  
  Year_2011 = resultArray[0].Year_2011; 
  Year_2012 = resultArray[0].Year_2012;
  Year_2013 = resultArray[0].Year_2013;  
  Year_2014 = resultArray[0].Year_2014;  
  Year_2015 = resultArray[0].Year_2015;  
  Year_2016 = resultArray[0].Year_2016; 
  Year_2017 = resultArray[0].Year_2017;

  emissions_for_state = [];

  emissions_for_state.push(Year_1990);
  emissions_for_state.push(Year_1991);
  emissions_for_state.push(Year_1992);
  emissions_for_state.push(Year_1993);
  emissions_for_state.push(Year_1994);
  emissions_for_state.push(Year_1995);
  emissions_for_state.push(Year_1996);
  emissions_for_state.push(Year_1997);
  emissions_for_state.push(Year_1998);
  emissions_for_state.push(Year_1999);
  emissions_for_state.push(Year_2000);
  emissions_for_state.push(Year_2001);
  emissions_for_state.push(Year_2002);
  emissions_for_state.push(Year_2003);
  emissions_for_state.push(Year_2004);
  emissions_for_state.push(Year_2005);
  emissions_for_state.push(Year_2006);
  emissions_for_state.push(Year_2007);
  emissions_for_state.push(Year_2008);
  emissions_for_state.push(Year_2009);
  emissions_for_state.push(Year_2010);
  emissions_for_state.push(Year_2011);
  emissions_for_state.push(Year_2012);
  emissions_for_state.push(Year_2013);
  emissions_for_state.push(Year_2014);
  emissions_for_state.push(Year_2015);
  emissions_for_state.push(Year_2016);
  emissions_for_state.push(Year_2017);

  console.log(emissions_for_state)

  years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]


    // bar chart
    var trace1 = {
      y: emissions_for_state,
      x: years,
      type: 'bar',
      orientation: 'v'
    };

    var data = [trace1];

    var layout = {
      title: `Yearly Co2 emissions for state by year`,
      yaxis: {
        range: [0, 750],
      }
    };

    Plotly.newPlot("bar", data, layout);




    // // bubble chart
    // var trace1 = {
    //   x: state_names,
    //   y: state_emission,
    //   mode: 'markers',
    //   marker: {
    //     size: state_emission,
    //     color: state_emission,
    //   }
    // };
    
    // var data = [trace1];
    
    // var layout = {
    //   title: 'Size of emissions by State',
    //   showlegend: true,
    //   height: 1000,
    //   width: 1750,
    //   xaxis: {
    //     autotick: false,
    //     ticks: 'outside',
    //     tick0: 0,
    //     dtick: 1,
    //     ticklen: 8,
    //     tickwidth: 5,
    //     tickcolor: '#000'
    //   },
    //   yaxis: {
    //     autotick: false,
    //     ticks: 'outside',
    //     range: [0, 750],
    //     tick0: 0,
    //     dtick: 25,
    //     ticklen: 8,
    //     tickwidth: 8,
    //     tickcolor: '#000'
    //   }
    // };
    
    // Plotly.newPlot('bubble', data, layout);





     // populate dropdown with data
     var dropdown = d3.select("#selDataset");

     for(let i = 0; i < stateData.length; i++){ 
         dropdown.append("option").text(stateData[i].State);
         }
 
     // populate the demographic table
       var result = resultArray[0];
       var PANEL = d3.select("#sample-metadata");
       PANEL.html("");
       Object.entries(result).forEach(([key, value]) => {
         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
       });
 
 
     // Call updatePlotly() when a change takes place to the DOM
     d3.selectAll("#selDataset").on("change", optionChanged);
 
 });











 function optionChanged() {


  d3.json("static/data/alt_fuel_stations.json").then((importedData) => {
    
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  var state = dataset

  
    // // Establish datasets
    
    // // filter metadata for state
    var resultArray = importedData.fuel_stations.filter(fuelObj => fuelObj.state == state);
    console.log(resultArray)
   
    number_of_stations = [];
    open_dates = []
    var x = 0
      for(let i = 0; i < resultArray.length; i++){
  
        
        if (resultArray[i].open_date == null) {
  
        } else {
          x = 1    
          number_of_stations.push(x);
          date = resultArray[i].open_date
          year = date.slice(0, 4)
          open_dates.push(year)
        }

          // restyle the charts with the new values
  Plotly.restyle("gauge", "x", [open_dates]);
  Plotly.restyle("gauge", "y", [number_of_stations]);
  Plotly.restyle("gauge", "title", state);

      }})








  d3.csv("static/data/state_emissions.csv").then(function(stateData, err) {
    if (err) throw err;


  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  var state = dataset

  // parse data
  stateData.forEach(function(data) {

    data.Year_1990 = +data.Year_1990;
    data.Year_1991 = +data.Year_1991;
    data.Year_1992 = +data.Year_1992;
    data.Year_1993 = +data.Year_1993;
    data.Year_1994 = +data.Year_1994;
    data.Year_1995 = +data.Year_1995;
    data.Year_1996 = +data.Year_1996;
    data.Year_1997 = +data.Year_1997;
    data.Year_1998 = +data.Year_1998;
    data.Year_1999 = +data.Year_1999;
    data.Year_2000 = +data.Year_2000;
    data.Year_2001 = +data.Year_2001;
    data.Year_2002 = +data.Year_2002;
    data.Year_2003 = +data.Year_2003;
    data.Year_2004 = +data.Year_2004;
    data.Year_2005 = +data.Year_2005;
    data.Year_2006 = +data.Year_2006;
    data.Year_2007 = +data.Year_2007;
    data.Year_2008 = +data.Year_2008;
    data.Year_2009 = +data.Year_2009;
    data.Year_2010 = +data.Year_2010;
    data.Year_2011 = +data.Year_2011;
    data.Year_2012 = +data.Year_2012;
    data.Year_2013 = +data.Year_2013;
    data.Year_2014 = +data.Year_2014;
    data.Year_2015 = +data.Year_2015;
    data.Year_2016 = +data.Year_2016;
    data.Year_2017 = +data.Year_2017;
  });

  console.log(stateData)


  var resultArray = stateData.filter(sampleObj => sampleObj.State == state);
  console.log(resultArray)

 
  Year_1990 = resultArray[0].Year_1990;  
  Year_1991 = resultArray[0].Year_1991; 
  Year_1992 = resultArray[0].Year_1992;
  Year_1993 = resultArray[0].Year_1993;  
  Year_1994 = resultArray[0].Year_1994;  
  Year_1995 = resultArray[0].Year_1995;  
  Year_1996 = resultArray[0].Year_1996; 
  Year_1997 = resultArray[0].Year_1997;
  Year_1998 = resultArray[0].Year_1998;  
  Year_1999 = resultArray[0].Year_1999;  
  Year_2000 = resultArray[0].Year_2000;  
  Year_2001 = resultArray[0].Year_2001; 
  Year_2002 = resultArray[0].Year_2002;
  Year_2003 = resultArray[0].Year_2003;  
  Year_2004 = resultArray[0].Year_2004;  
  Year_2005 = resultArray[0].Year_2005;  
  Year_2006 = resultArray[0].Year_2006; 
  Year_2007 = resultArray[0].Year_2007;
  Year_2008 = resultArray[0].Year_2008;  
  Year_2009 = resultArray[0].Year_2009;  
  Year_2010 = resultArray[0].Year_2010;  
  Year_2011 = resultArray[0].Year_2011; 
  Year_2012 = resultArray[0].Year_2012;
  Year_2013 = resultArray[0].Year_2013;  
  Year_2014 = resultArray[0].Year_2014;  
  Year_2015 = resultArray[0].Year_2015;  
  Year_2016 = resultArray[0].Year_2016; 
  Year_2017 = resultArray[0].Year_2017;

  emissions_for_state = [];

  emissions_for_state.push(Year_1990);
  emissions_for_state.push(Year_1991);
  emissions_for_state.push(Year_1992);
  emissions_for_state.push(Year_1993);
  emissions_for_state.push(Year_1994);
  emissions_for_state.push(Year_1995);
  emissions_for_state.push(Year_1996);
  emissions_for_state.push(Year_1997);
  emissions_for_state.push(Year_1998);
  emissions_for_state.push(Year_1999);
  emissions_for_state.push(Year_2000);
  emissions_for_state.push(Year_2001);
  emissions_for_state.push(Year_2002);
  emissions_for_state.push(Year_2003);
  emissions_for_state.push(Year_2004);
  emissions_for_state.push(Year_2005);
  emissions_for_state.push(Year_2006);
  emissions_for_state.push(Year_2007);
  emissions_for_state.push(Year_2008);
  emissions_for_state.push(Year_2009);
  emissions_for_state.push(Year_2010);
  emissions_for_state.push(Year_2011);
  emissions_for_state.push(Year_2012);
  emissions_for_state.push(Year_2013);
  emissions_for_state.push(Year_2014);
  emissions_for_state.push(Year_2015);
  emissions_for_state.push(Year_2016);
  emissions_for_state.push(Year_2017);

  console.log(emissions_for_state)

  years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]


  // restyle the charts with the new values
  Plotly.restyle("bar", "x", [years]);
  Plotly.restyle("bar", "y", [emissions_for_state]);



  // update metadata with the new sample    

  var resultArray = stateData.filter(sampleObj => sampleObj.State == state);
  var result = resultArray[0];
  var PANEL = d3.select("#sample-metadata");
  PANEL.html("");
  Object.entries(result).forEach(([key, value]) => {
    PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });
  console.log(result)

})};

