import React from 'react';
import useHealthCheck from '../hooks/useHealthCheck';
import { FcCheckmark } from 'react-icons/fc';
import { FcHighPriority } from 'react-icons/fc';
import { VscLoading } from 'react-icons/vsc';
import HEALTH from '../constants/Health';

export default function Status({
    name,
    url,
}) {
    const health = useHealthCheck(url);
    let healthIcon = <VscLoading />;
    switch(health){
        case HEALTH.UP:
            healthIcon = <FcCheckmark />
            break;
        case HEALTH.DOWN:
            healthIcon = <FcHighPriority />
            break;
        default:
            <VscLoading />;
        }
    return (
        <div>
          {name} : {healthIcon}
        </div>
    );
}