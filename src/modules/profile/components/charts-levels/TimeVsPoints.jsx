import Chart from "react-google-charts";

export const TimeVsPoints = ({ stats }) => {
  
    const data = [
        ["Tiempo", "Puntuación"],
        ...stats.map(stat => [stat.elapsed_time, stat.score])
    ];

    const options = {
        chart: {
            title: "Puntuación obtenida en el nivel por tiempo",
            legend: { position: "bottom" },
        },
        hAxis: {title: 'Tiempo para completar el nivel (s)'},
        vAxis: {title: 'Puntuación'},
    };
  
    return (
    <Chart
        chartType="Scatter"
        width={"100%"}
        height={"400px"}
        data={data}
        options={options}
    />
  )
}
