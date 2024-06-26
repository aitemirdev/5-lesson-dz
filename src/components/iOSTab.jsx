import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchIosData} from '../slice/iosSlice';

const IosTab = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.ios);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchIosData());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>Ios</h2>
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

export default IosTab;