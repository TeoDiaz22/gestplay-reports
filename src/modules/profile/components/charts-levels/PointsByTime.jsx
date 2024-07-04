import { formatDate } from "../../../../utils/utils";
import { Chart } from "react-google-charts";

export const PointsByTime = ({ stats }) => {
    
    const data = [
        ["Fecha", "Puntuación"],
    ];

    stats.map(stat => {
        data.push([formatDate(stat.date_time), stat.score]);
    });

    const options = {
        title: "Puntuacion obtenida en el nivel por fecha",
        legend: { position: "bottom" }
    };
  
    return (
    <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
    />
  )
}
