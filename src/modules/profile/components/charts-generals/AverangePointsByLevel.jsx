import { colors } from "@mui/material";
import Chart from "react-google-charts";


export const AverangePointsByLevel = ({ stats }) => {
  
    const maxLevel = Math.max(...stats.map(stat => Number(stat.level_id)));

    const averangePointsByLevel = [];

    for (let i = 1; i <= maxLevel; i++) {
        const levelStats = stats.filter(stat => Number(stat.level_id) === i);
        const score = levelStats.reduce((acc, stat) => acc + stat.score, 0);
        const averange = score / levelStats.length;
        averangePointsByLevel.push({ level: i, averange });
    }

    const data = [
        ["Nivel", "Puntuación promedio"],
        ...averangePointsByLevel.map(stat => [stat.level, stat.averange])
    ];

    const options = {
        chart: {
            title: "Puntuación promedio por nivel",
            legend: { position: "bottom" },
        },
        colors: ['#0CDB7A'],
    };

    return (
        <Chart
            chartType="Bar"
            width={"100%"}
            height={"400px"}
            data={data}
            options={options}
        />
  )
}
