import { Box } from "@mui/material";
import Chart from "react-google-charts";

export const ErrorsByLevelPie = ({ stats }) => {

    const maxLevel = Math.max(...stats.map(stat => Number(stat.level_id)));

    const errorsByLevel = [];

    for (let i = 1; i <= maxLevel; i++) {
        const levelStats = stats.filter(stat => Number(stat.level_id) === i);
        const errors = levelStats.reduce((acc, stat) => acc + stat.mistake, 0);
        errorsByLevel.push({ level: `Nivel ${i}`, errors });
    };

    const data = [
        ["Nivel", "Errores por nivel"],
        ...errorsByLevel.map(stat => [stat.level, stat.errors])
    ];

    const options = {
        title: "Errores por nivel",
        is3D: true,
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
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </Box>
    )
}
