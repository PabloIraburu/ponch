import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {api} from "../../utils/api.ts";
import {useEffect, useState} from "react";

const HIDDEN_COLUMNS = ["created_at", "id"];

export const Games = () => {
    console.log('api', api)
    const [games, setGames] = useState<any[]>([]);
    useEffect(() => {
    api.get("games").then(({data}) => setGames(data as any[]));
    }, []);
    console.log('games', games);
    if(games.length === 0) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Movies</h1>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(games[0]).map((key) => {
                                console.log('key', key);
                                if (HIDDEN_COLUMNS.includes(key)) {
                                    return
                                }
                                return (
                                    <TableCell>{key}</TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((row: {id: string}) => {
                                    return <TableRow key={row.id}>
                                        {Object.entries(row).map(([key, value]) => {
                                            if (HIDDEN_COLUMNS.includes(key)) {
                                                return
                                            } else {
                                                return (
                                                    <TableCell>{value as string}</TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                    })
                    }
                </TableBody>
            </Table>
        </div>
    );
}