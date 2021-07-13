import React from 'react';
import useHealthCheck from '../hooks/useHealthCheck';

export default function Status({
    name,
    url,
}) {
    const health = useHealthCheck(url);

    return (
        <div>
            {`${name}: ${health}`}
        </div>
    );
}