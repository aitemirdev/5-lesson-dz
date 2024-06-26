import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAndroidData} from '../slice/androidSlice';

const AndroidTab = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.android);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAndroidData());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>Android</h2>
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

export default AndroidTab;