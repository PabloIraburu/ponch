import {api} from "../../utils/api.ts";
import {useEffect, useState} from "react";
import {Star, StarHalf, StarOutline} from "@mui/icons-material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {Modal} from "@mui/material";

const HIDDEN_COLUMNS = ["created_at", "id", "j", "p"];

const getColumns = (columnNames: string[]) => {
    return columnNames.map((columnName) => {
        if(columnName.includes('score') || columnName.includes('average')) {
            return {
                field: columnName,
                width: 150,
                headerName: columnName,
                renderCell: (params: any) => {
                    const {value} = params;
                        const filledStars = Math.floor(value / 2);
                        const hasHalf = value % 2 === 1;
                        const emptyStars = 5 - filledStars - (hasHalf ? 1 : 0);
                        const stars = []
                        for(let i = 0; i < filledStars; i++) {
                            stars.push(<Star color="primary"/>);
                        }
                        if(hasHalf)
                            stars.push(<StarHalf color="primary"/>);
                        for(let i = 0; i < emptyStars; i++) {
                            stars.push(<StarOutline color="primary"/>);
                        }

                    return (
                        <div>
                            {stars}
                        </div>
                    )
                }
            }
        }
        if(columnName === "finished_story_javi" || columnName === "finished_story_pablo"){
            return {
                field: columnName,
                headerName: columnName,
                renderCell: (params: any) => {
                    const {value} = params;
                    const isBoolean = ['Si', "No", null].includes(value);
                    return (
                        <div>
                            {isBoolean ? <input type="checkbox" checked={value === "Si"}/> : <p>{value}</p>}
                        </div>
                    )
                }
        }}
        if(columnName === "id" || columnName === "j" || columnName === "p") {
            return {
                field: columnName,
                headerName: columnName,
                hide: true,
            }
        }
        return {
            field: columnName,
            headerName: columnName,
            hide: HIDDEN_COLUMNS.includes(columnName),
        }
    });
}

export const Games = () => {
    const [games, setGames] = useState<any[]>([]);
    const [viewModal, setViewModal] = useState(false);
    useEffect(() => {
    api.get("games").then(({data}) => setGames(data as any[]));
    }, []);
    console.log('games', games);
    if(games.length === 0) {
        return <div>Loading...</div>
    }
    const columnNames = Object.keys(games[0]);
    const columnsForGrid = getColumns(columnNames)
    console.log('columns for grid', columnsForGrid, games)
    return (
        <div>
            <h1>Movies</h1>
            <button onClick={()=> setViewModal(true)}>Add movie</button>
            <div style={{
                display: 'flex',
                gap: '8px',
            }}>
                <DataGrid columns={columnsForGrid} rows={games} checkboxSelection slots={{ toolbar: GridToolbar }}/>
            </div>
            <Modal open={viewModal} onClose={() => setViewModal(false)}>
                <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", justifyItems: "center", padding: "32px"}}>
                    <h1>Add movie</h1>
                    <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
                        {columnNames.map((columnName) => {
                            return (
                                <input style={{width: 150}} type="text" placeholder={columnName}/>
                            )
                        }
                        )}
                    <button style={{width: 150}} >Add</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}