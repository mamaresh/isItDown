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
            trunk: 4,
            release: 17,
            newschema: 21
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
            trunk: 15,
            release: 18,
            newschema: 22
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
            trunk: 16,
            release: 20,
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