/*

Hello World Implementation from Plotly
https://plotly.com/javascript/getting-started/

*/
HelloWorld = document.getElementById('helloWorld');

Plotly.plot(HelloWorld, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
}], {
    margin: { t: 0 }
}, { showSendToCloud: true });

/* Current Plotly.js version */
console.log(Plotly.BUILD);

/*

Responsive Plot Implementation from Plotly
https://plotly.com/javascript/responsive-fluid-layout/

*/

var trace1 = {
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }
    }
};

var data = [trace1];

var layout = {
    title: 'Responsive to window\'s size!',
    font: { size: 18 }
};

var config = { responsive: true }

Plotly.newPlot('responsive', data, layout, config);

/*

Line and Scatter Plot
https://plotly.com/javascript/responsive-fluid-layout/

*/

var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('scatter', data);

/*

Heat Map Plot
https://plotly.com/javascript/heatmaps/

*/

var data = [
    {
      z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
      x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      y: ['Morning', 'Afternoon', 'Evening'],
      type: 'heatmap',
      hoverongaps: false
    }
  ];
  
  Plotly.newPlot('heatMap', data);