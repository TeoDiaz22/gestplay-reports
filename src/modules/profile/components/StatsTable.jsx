import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { formatDate } from "../../../utils/utils";

export const StatsTable = ({ stats }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="fw-bold">Fecha</TableCell>
                        <TableCell className="fw-bold">Nivel</TableCell>
                        <TableCell className="fw-bold">Errores</TableCell>
                        <TableCell className="fw-bold">Tiempo (s)</TableCell>
                        <TableCell className="fw-bold">Puntuación</TableCell>
                        <TableCell className="fw-bold">Estrellas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        stats.map((stat, index) => (
                            <TableRow key={index}>
                                <TableCell>{formatDate(stat.date_time)}</TableCell>
                                <TableCell>{stat.level_id}</TableCell>
                                <TableCell>{stat.mistake}</TableCell>
                                <TableCell>{stat.elapsed_time}</TableCell>
                                <TableCell>{stat.score}</TableCell>
                                <TableCell>{stat.stars}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};