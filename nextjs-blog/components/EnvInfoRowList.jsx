import React from 'react';
import EnvInfoRow from './EnvInfoRow';
import HealthChecks from '../constants/HealthChecks'

const EnvInfoRowList = ({environment}) => (
    Object.entries(HealthChecks).map(([service, rowInfo]) => {
        return (
            <EnvInfoRow
                key={environment + "_" + service}
                environment={environment}
                service={service}
                {...rowInfo}
            />
        )
    })
)

export default EnvInfoRowList;