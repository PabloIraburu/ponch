import Table from "@mui/material/Table";
import javiMovies from "./javiMovies.json";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {Movie} from "../../types/movies.ts";

export const Movies = () => {
    console.log(javiMovies);
    const rows = javiMovies as any as Movie[];
    return (
        <div>
            <h1>Movies</h1>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(rows[0]).map((key) => (
                                <TableCell>{key}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        const values = Object.values(row);
                        return (
                            <TableRow key={row.Título}>
                                {values.map((value) => (
                                    <TableCell>{value}</TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}