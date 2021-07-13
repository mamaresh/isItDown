import React from 'react';
import Status from './Status';
import HEALTH_CHECKS from '../constants/HealthChecks'


export default function StatusList({ environment }) {
    return (
        <ul>
            {Object.entries(HEALTH_CHECKS).map(([name, {getUrl}]) => {
                return (
                    <li key={`${environment}__${name}`}>
                        <Status name={name} url={getUrl(environment)} />
                    </li>
                );
            })}
        </ul>
    )
}