import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFrontendData } from '../slice/frontendSlice';

const FrontendTab = () => {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.frontend);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchFrontendData());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h2>Frontend</h2>
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

export default FrontendTab;