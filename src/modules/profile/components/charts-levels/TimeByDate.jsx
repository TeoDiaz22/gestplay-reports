import { formatDate } from "../../../../utils/utils";
import { Chart } from "react-google-charts";
import { Box, colors } from "@mui/material";

export const TimeByDate = ({ stats }) => {

    const data = [
        ["Fecha", "Tiempo"],
    ];

    stats.map(stat => {
        data.push([formatDate(stat.date_time), stat.elapsed_time]);
    });

    const options = {
        title: "Tiempo para completar el nivel por fecha",
        legend: { position: "bottom" },
        colors: ["#0CDB7A"],
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
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </Box>
    );
}
