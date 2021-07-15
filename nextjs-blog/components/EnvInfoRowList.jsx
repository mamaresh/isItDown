import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import HEALTH from '../constants/Health';
import EnvInfoRow from './EnvInfoRow';
import StatusHeader from './StatusHeader';
import HealthChecks from '../constants/HealthChecks';
import { FcCheckmark, FcMediumPriority, FcHighPriority } from 'react-icons/fc';
import { VscLoading } from 'react-icons/vsc';
const MIN_PER_MILLIS = 60000;
const REFRESH_INTERVAL_IN_MILLIS = MIN_PER_MILLIS * 5;
import useHealthCheck from '../hooks/useHealthCheck';

export default function EnvInfoRowList({environment}){
    const size = 25;
    
    return (
        <Accordion>
        {Object.entries(HealthChecks).map(([service, rowInfo]) => {
            const url = rowInfo.getUrl(environment);
            const {health, lastUpdated} = useHealthCheck(url, REFRESH_INTERVAL_IN_MILLIS);
            let cardClassName, healthIcon;
            switch (health) {
                case HEALTH.UP:
                    cardClassName = "green";
                    healthIcon = <FcCheckmark size={size}/>;
                    break;
                case HEALTH.PARTIAL_DOWN:
                    healthIcon = <FcMediumPriority size={size} />;
                    cardClassName = "yellow";
                    break;
                case HEALTH.DOWN:
                    healthIcon = <FcHighPriority size={size} />;
                    cardClassName = "red";
                    break;
                default:
                    healthIcon = <VscLoading size={size} />;
                    cardClassName = "";
            }
            const key = environment + "_" + service;
            return (
                <Card  className={cardClassName}>
                    <Accordion.Toggle as={Card.Header} eventKey={key}>
                        <StatusHeader
                        name={service}
                        url={rowInfo.getUrl(environment)}
                        healthIcon={healthIcon}
                        lastUpdated={lastUpdated}
                    />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                            <EnvInfoRow
                            key={key}
                            environment={environment}
                            service={service}
                            {...rowInfo}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        })}
        </Accordion>
    )
}