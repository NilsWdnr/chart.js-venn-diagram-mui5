import React, { useEffect, useRef } from "react";
import { VennDiagramChart } from "chartjs-chart-venn";

const ChartVenn = () => {
  const canvasRef = useRef(null);

  const config = {
    type: "euler",
    data: {
      labels: [
        "Soccer",
        "Tennis",
        "Volleyball",
        "Soccer ∩ Tennis",
        "Soccer ∩ Volleyball",
        "Tennis ∩ Volleyball",
        "Soccer ∩ Tennis ∩ Volleyball"
      ],
      datasets: [
        {
          label: "Sports",
          data: [
            { sets: ["Soccer"], value: 2 },
            { sets: ["Tennis"], value: 0 },
            { sets: ["Volleyball"], value: ["LAK2011", "LAK2011"] },
            { sets: ["Soccer", "Tennis"], value: "a" },
            { sets: ["Soccer", "Volleyball"], value: 0 },
            { sets: ["Tennis", "Volleyball"], value: "a" },
            { sets: ["Soccer", "Tennis", "Volleyball"], value: "a" }
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Chart.js Venn Diagram Chart"
      }
    }
  };

  useEffect(() => {
    const ctx = canvasRef.current;
    const vennChart = new VennDiagramChart(ctx, config);

    return () => {
      vennChart.destroy();
    };
  });

  return (
    <>
      <div className="App">
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default ChartVenn;
