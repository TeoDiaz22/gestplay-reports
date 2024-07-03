import Chart from "react-google-charts";
import { formatDate } from "../../../utils/utils";

export const StatsCharts = ({ stats }) => {
    const data = [
        ["Fecha","Tiempo"],
    ];

    stats.map(stat => {
        data.push([formatDate(stat.date_time), stat.elapsed_time]);
    });

    const options = {
        title: "Tiempo por fecha",
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
    );
};