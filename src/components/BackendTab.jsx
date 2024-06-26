import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchBackendData} from '../slice/backendSlice';

const BackendTab = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.backend);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBackendData());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>Backend</h2>
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

export default BackendTab;