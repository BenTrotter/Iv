function getData() {
  const ylabels = [];
  const xlabels = [];
  const data = JSON.parse("{{history|escapejs}}");

  for(var x in data){
    xlabels.push(x);
    ylabels.push(data[x]);
  }
  return{ xlabels, ylabels};
}

function chartIt() {
  const data = getData();
  const ctx = document.getElementById('graph').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: data.xlabels,
          datasets: [{
              label: 'Stock Price',
              data: data.ylabels,
              fill: false,
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}
