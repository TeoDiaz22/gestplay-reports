import { colors } from "@mui/material";
import { useState } from "react"
import Chart from "react-google-charts";


export const AverangeErrorsByLevel = ({ stats }) => {

    const maxLevel = Math.max(...stats.map(stat => Number(stat.level_id)));

    const averangeMissesByLevel = [];

    for (let i = 1; i <= maxLevel; i++) {
        const levelStats = stats.filter(stat => Number(stat.level_id) === i);
        const misses = levelStats.reduce((acc, stat) => acc + stat.mistake, 0);
        const averange = misses / levelStats.length;
        averangeMissesByLevel.push({ level: i, averange });
    }

    const data = [
        ["Nivel", "Errores promedio"],
        ...averangeMissesByLevel.map(stat => [stat.level, stat.averange])
    ];

    console.log(data);

    const options = {
        chart: {
            title: "Errores promedio por nivel",
            legend: { position: "bottom" }
        },
        colors: ["#F26A4B"], 
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
