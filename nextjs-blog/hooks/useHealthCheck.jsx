import { useState, useEffect } from 'react';
import HEALTH from '../constants/Health';
const MIN_PER_MILLIS = 60000;

export default function useHealthCheck(url, interval = MIN_PER_MILLIS) {
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

    const [lastUpdated, setLastUpdated] = useState(interval);
    useEffect(() => {
        const timer = setInterval(() => {
            setLastUpdated(lastUpdated - MIN_PER_MILLIS > 0 ? lastUpdated - MIN_PER_MILLIS : interval);
        }, MIN_PER_MILLIS);
        return () => clearInterval(timer);
    }, [lastUpdated])

    return {health, lastUpdated};
}