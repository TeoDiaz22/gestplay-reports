import Chart from "react-google-charts";
import { Box, colors } from "@mui/material";

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
        hAxis: { title: 'Tiempo para completar el nivel (s)' },
        vAxis: { title: 'Puntuación' },
        colors: ["#F26A4B"],
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "425px",
                backgroundColor: "#fff",
                borderRadius: 2,
                p: 2,
                my: 2,
                boxShadow: 2,
            }}
        >
            <Chart
                chartType="Scatter"
                width={"100%"}
                height={"400px"}
                data={data}
                options={options}
            />
        </Box>
    )
}
