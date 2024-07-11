import { formatDate } from "../../../../utils/utils";
import { Chart } from "react-google-charts";
import { Box, colors } from "@mui/material";

export const PointsByTime = ({ stats }) => {

    const data = [
        ["Fecha", "Puntuación"],
    ];

    stats.map(stat => {
        data.push([formatDate(stat.date_time), stat.score]);
    });

    const options = {
        title: "Puntuacion obtenida en el nivel por fecha",
        legend: { position: "bottom" },
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
                my: 4,
                boxShadow: 2,
            }}
        >
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </Box>
    )
}
