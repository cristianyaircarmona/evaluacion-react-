import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../redux/actions';
import axios from 'axios';

export const useInfo = () => {
    useEffect(()=>{
        dispatch(getInfo())
    },[]);
    const dispatch = useDispatch();
    const info = useSelector(state=>state.info);
    return {
        info
    }
}
