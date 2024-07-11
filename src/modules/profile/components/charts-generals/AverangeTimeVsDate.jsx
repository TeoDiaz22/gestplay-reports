import Chart from "react-google-charts";
import { formatToOnlyDate } from "../../../../utils/utils";
import { Box } from "@mui/material";


export const AverangeTimeVsDate = ({ stats }) => {

	const dates = new Set();

	stats.map(stat => {
		dates.add(formatToOnlyDate(stat.date_time));
	});

	const maxLevel = Math.max(...stats.map(stat => Number(stat.level_id)));

	const averangeTimeByDateAndLevel = [];

	for (let date of dates) {
		const dateStats = stats.filter(stat => formatToOnlyDate(stat.date_time) === date);
		const dateStatsLevels = [];
		dateStatsLevels.push(date);
		for (let i = 1; i <= maxLevel; i++) {
			const levelStats = dateStats.filter(stat => Number(stat.level_id) === i);
			const time = levelStats.reduce((acc, stat) => acc + stat.elapsed_time, 0);
			const averange = time / levelStats.length;
			dateStatsLevels.push(averange);
		}
		averangeTimeByDateAndLevel.push(dateStatsLevels);
	};

	const data = [
		["Fecha", ...Array.from({ length: maxLevel }, (_, i) => `Nivel ${i + 1}`)],
		...averangeTimeByDateAndLevel
	];

	const options = {
		title: "Tiempo promedio por fecha y nivel",
		curveType: "function",
		legend: { position: "bottom" }
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
	)
}
