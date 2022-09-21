import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getInfoByID } from '../../redux/actions';

export const Detail = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getInfoByID(props.match.params.id))
    },[]);
    const detail = useSelector(state=>state.detail);
    const fecha = detail.validdateutc.split('T')[0]
    const año = fecha.slice(0,4)
    const mes = fecha.slice(4,6)
    const dia = fecha.slice(6)
    return (
        <div>
            {Object.keys(detail).length > 0? (
                <div>
                    <div>_id : {detail._id}</div>
                    <div>cityid : {detail.cityid}</div>
                    <div>validdateutc : {`${año}-${mes}-${dia}`}</div>
                    <div>winddirectioncardinal : {detail.winddirectioncardinal}</div>
                    <div>probabilityofprecip : {detail.probabilityofprecip}</div>
                    <div>date-insert : {detail['date-insert']}</div>
                    <div>iconcode : {detail.iconcode}</div>
                    <div>lastreporttime : {`${año}-${mes}-${dia}`}</div>
                    <div>latitude : {detail.latitude}</div>
                    <div>name : {detail.name}</div>
                    <div>relativehumidity : {detail.relativehumidity}</div>
                    <div>skydescriptionlong : {detail.skydescriptionlong}</div>
                    <div>state : {detail.state}</div>
                    <div>stateabbr : {detail.stateabbr}</div>
                    <div>tempc : {detail.tempc}</div>
                    <div>windspeedkm : {detail.windspeedkm}</div>
                    <Link to='/'>Regresar</Link>
                </div>
            ) : <span>algo salio mal :c</span>}
        </div>
    )
}
