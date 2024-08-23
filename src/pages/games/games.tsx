import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {api} from "../../utils/api.ts";
import {useEffect, useState} from "react";
import {Star, StarHalf, StarOutline} from "@mui/icons-material";

const HIDDEN_COLUMNS = ["created_at", "id", "j", "p"];

export const Games = () => {
    const [games, setGames] = useState<any[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<string[]>([]);
    useEffect(() => {
    api.get("games").then(({data}) => setGames(data as any[]));
    }, []);
    console.log('games', games);
    if(games.length === 0) {
        return <div>Loading...</div>
    }
    const columnNames = Object.keys(games[0]);
    return (
        <div>
            <h1>Movies</h1>
            <div style={{
                display: 'flex',
                gap: '8px',
            }}>

            {
               columnNames.map((columnName) => {
                   if([...HIDDEN_COLUMNS, "title"].includes(columnName)) {
                          return null;
                     }
                     return (
                          <button style={{backgroundColor: visibleColumns.includes(columnName) ? 'green' : 'red',
                              color: 'white',
                                border: 'none',
                                padding: '8px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                          }}
                                  onClick={() => {
                            if(visibleColumns.includes(columnName)) {
                                 setVisibleColumns(visibleColumns.filter((column) => column !== columnName));
                            } else {
                                 setVisibleColumns([...visibleColumns, columnName]);
                            }
                          }}>{columnName}</button>
                     );
                })
            }
            </div>

            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(games[0]).map((key) => {
                                console.log('key', key);
                                if (HIDDEN_COLUMNS.includes(key) || (visibleColumns.length > 0 && !visibleColumns.includes(key))) {
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
                        if(row.title === undefined) {
                            return null;
                        }
                        return <TableRow key={row.id}>
                            {Object.entries(row).map(([key, value]:[string, any]) => {
                                if (HIDDEN_COLUMNS.includes(key) || (visibleColumns.length > 0 && !visibleColumns.includes(key))) {
                                    return
                                } else {
                                    if(["Si", "No"].includes(value)){
                                        return (
                                            <TableCell><input style={
                                                {
                                                    width: '20px',
                                                    height: '20px',
                                                    padding: '8px',
                                                }
                                            } type="checkbox" checked={value === "Si"}/></TableCell>
                                        )
                                    }
                                    if(typeof value === "number" && value < 10) {
                                        const filledStars = value / 2;
                                        const hasHalf = value % 2 === 1;
                                        const emptyStars = 5 - filledStars;

                                        console.log('value', value);
                                        return (
                                            <TableCell width={150}>{Array.from(
                                                {length: filledStars},
                                                (_, index) => <Star key={index} color="primary"/>
                                            )}
                                                {hasHalf && (
                                                    <StarHalf color="primary"/>
                                                )}
                                                {emptyStars && (
                                                    Array.from(
                                                        {length: emptyStars},
                                                        (_, index) => <StarOutline key={index} color="primary"/>
                                                    )
                                                )}</TableCell>
                                        );
                                    }
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