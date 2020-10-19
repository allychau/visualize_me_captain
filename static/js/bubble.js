const url = "/emissions";

// Grab data with d3
d3.json(url).then((stateData) => {
  //console.log(stateData);
  state_names = [];
  state_emission = [];
    for(let i = 0; i < stateData.length; i++){ 
      state_names.push(stateData[i].State);
      state_emission.push(stateData[i].Year_2017);
      }  
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
    Plotly.newPlot('bubble', data, layout);

});
