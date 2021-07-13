import { useState, useEffect } from 'react';

const HEALTH = {
    LOADING: 'LOADING',
    UP: 'UP',
    DOWN: 'DOWN',
};

export default function useHealthCheck(url, interval = 60000) {
    const [health, setHealth] = useState(HEALTH.LOADING);

    useEffect(() => {
        function checkHealth() {
            return fetch(url)
                .then((response) => {
                    const { ok } = response;
                    return ok;
                })
                .catch((err) => {
                    console.error('Caught error hitting health check URL', err);
                    return false;
                });
        }

        async function updateHealth() {
            const isHealthy = await checkHealth();
            setHealth(isHealthy ? HEALTH.UP : HEALTH.DOWN);
        }

        updateHealth();

        const id = setInterval(() => {
            updateHealth();
        }, interval);

        return () => clearInterval(id);
    }, [url, interval]);

    return health;
}