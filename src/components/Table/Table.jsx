import { Grid } from '@mui/material';
import {DataGrid} from '@mui/x-data-grid'
import { useInfo } from '../../hooks/useInfo';
import { ToId } from '../ToID/ToId';



export const Table = () => {
    const { info } = useInfo();
    const columns = [
        { field: '_id' ,headerName: 'ID', width:250, renderCell:(rows)=>{
            return (
                <ToId id={rows.id}/>
            )
        }},
        {field: 'cityid',headerName: 'CityID',width: 200,sortable: true,},
        { field: 'name', headerName: 'Name ', width: 300 },
        { field: 'state', headerName: 'State', width: 300 },
        {field: 'probabilityofprecip',headerName: 'probabilityofprecip',width: 200,sortable: true,},
        {field: 'validdateutc',headerName: 'LLueve',width: 200,sortable: true,renderCell:rows=>{
            return <span>{rows.row.probabilityofprecip > 60 || rows.row.relativehumidity > 50? 'si'  : 'no'}</span>
        }},
        {field: 'relativehumidity',headerName: 'relativehumidity',width: 200,sortable: true,},
        {field: 'lastreporttime',headerName: 'lastreporttime',width: 200,sortable: true, renderCell:rows=>{
            const fecha = rows.formattedValue.split('T')[0]
            const año = fecha.slice(0,4)
            const mes = fecha.slice(4,6)
            const dia = fecha.slice(6)
            return <>{`${año}-${mes}-${dia}`}</>            
        }},
    ];
    return (
        <div>
            { info?.length > 0?
            <>
            <h1>Evaluación React</h1>
            </> 
            : null}
            <Grid container>
                    <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                        <DataGrid
                            rows={ info }
                            columns={ columns }
                            pageSize={ 10 }
                            rowsPerPageOptions={ [10] }
                            getRowId={rows => rows._id}
                        />
                    </Grid>
            </Grid> 
        </div>
)
}

/**
 { field: 'precio', headerName: 'Precio', width: 300, renderCell: (rows)=>{
            return ( <ChangeData id={rows.id} info={allJson} target={"precio"} /> )
        } },
        {field: 'precioPublico',headerName: 'Precio Publico',width: 200,renderCell: rows=>{
            return( <ChangeData id={rows.id} info={allJson} target={'precioPublico'} /> )
        } },
        {headerName: "Cantidad", field:"stock" , renderCell: (rows) => {
            return( <ChangeData id={rows.id} info={allJson} target={'stock'} /> )
        }},
        {headerName: "Stock", renderCell: (rows)=>{
            return(
                    <ButtonStock  id={rows.id} info={allJson} />            
           )
        }},
 */