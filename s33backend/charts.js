import { db } from "./db.js";

export function getChartData(chartId) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT label, value FROM chart_points WHERE chart_id = ? ORDER BY id ASC",
      [chartId],
      (err, results) => {
        if (err) return reject(err);

        resolve({
          labels: results.map(r => r.label),
          values: results.map(r => r.value)
        });
      }
    );
  });
}
