const API_PREFIX = '/api/forwarder';
// Grabbed from https://redfin.atlassian.net/wiki/spaces/OPS/pages/583377711/Redfin+Service+Health+Checks
const HEALTH_CHECKS = {
    'Customer site': {
        getUrl: (env) => `${API_PREFIX}/${env}`,
        descriptionPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
        graphPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
    },
    'Corvair': {
        getUrl: (env) => `${API_PREFIX}/${env}/r3s/system-status`,
        descriptionPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
        graphPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
    },
    'Stingray':{
        getUrl: (env) => `${API_PREFIX}/${env}/stingray/do/system-status`,
        descriptionPanel: {
            trunk: 23,
            release: 26,
            newschema: 29
        },
        graphPanel: {
            trunk: 1,
            release: 12,
            newschema: 11
        },
    },
    'Commerce': {
        getUrl: (env) => `${API_PREFIX}/${env}/tools/system-status`,
        descriptionPanel: {
            trunk: 24,
            release: 27,
            newschema: 30
        },
        graphPanel: {
            trunk: 10,
            release: 2,
            newschema: 3
        },
    },
    'DSS': {
        getUrl: (env) => `${API_PREFIX}/${env}/documents-api/system-status`,
        descriptionPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
        graphPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
    },
    'MWS': {
        getUrl: (env) => `${API_PREFIX}/${env}/mortgage-api/system-status`,
        descriptionPanel: {
            trunk: 25,
            release: 28,
            newschema: 0
        },
        graphPanel: {
            trunk: 13,
            release: 14,
            newschema: 0
        },
    },
    'Title': {
        getUrl: (env) => `${API_PREFIX}/${env}/title-api/system-status`,
        descriptionPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
        graphPanel: {
            trunk: 0,
            release: 0,
            newschema: 0
        },
    }
};

export default HEALTH_CHECKS;