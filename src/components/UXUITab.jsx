import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUxuiData} from '../slice/uxuiSlice';

const UXUITab = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.uxui);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUxuiData());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>UX-UI</h2>
            {status === 'loading' && <div>Загрузка...</div>}
            {status === 'succeeded' && (
                <div>
                    {data.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            )}
            {status === 'failed' && <div>Ошибка: {error}</div>}
        </div>
    );
};

export default UXUITab;