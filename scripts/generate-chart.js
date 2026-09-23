const fs = require('fs');
const { ChartJSNodeCanvas } =
  require('chartjs-node-canvas');

const history = JSON.parse(
  fs.readFileSync(
    'metrics/history.json',
    'utf8'
  )
);

const chart =
  new ChartJSNodeCanvas({
    width: 1200,
    height: 500
  });

async function generateChart(
  fileName,
  label,
  data,
  color
) {
  const image =
    await chart.renderToBuffer({
      type: 'line',
      data: {
        labels: history.map(
          h => h.date
        ),
        datasets: [
          {
            label,
            data,
            borderColor: color,
            borderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 8,
            fill: false,
            tension: 0.3
          }
        ]
      }
    });

  fs.writeFileSync(
    `metrics/${fileName}`,
    image
  );
}

(async () => {

  await generateChart(
    'pass-rate.png',
    'Pass Rate (%)',
    history.map(
      h => h.passRate
    ),
    '#22c55e'
  );

  await generateChart(
    'failure-trend.png',
    'Failed Tests',
    history.map(
      h => h.failed
    ),
    '#ef4444'
  );

  await generateChart(
    'duration-trend.png',
    'Duration (Minutes)',
    history.map(
      h => (h.durationSeconds || 0) / 60
    ),
    '#3b82f6'
  );

  await generateChart(
    'test-count-trend.png',
    'Total Tests',
    history.map(
      h => h.total
    ),
    '#8b5cf6'
  );

  console.log(
    'Charts generated successfully'
  );

})();