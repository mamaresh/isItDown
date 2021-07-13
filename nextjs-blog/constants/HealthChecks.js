const API_PREFIX = '/api/forwarder';
// Grabbed from https://redfin.atlassian.net/wiki/spaces/OPS/pages/583377711/Redfin+Service+Health+Checks
const HEALTH_CHECKS = {
    'Customer site': {
        getUrl: (env) => `${API_PREFIX}/${env}`,
        descriptionPanel: 0,
        graphPanel: 0,
    },
    'Corvair': {
        getUrl: (env) => `${API_PREFIX}/${env}/r3s/system-status`,
        descriptionPanel:0,
        graphPanel:0,
    },
    'Stingray':{
        getUrl: (env) => `${API_PREFIX}/${env}/stingray/do/system-status`,
        descriptionPanel:4,
        graphPanel:1,
    },
    'Commerce': {
        getUrl: (env) => `${API_PREFIX}/${env}/tools/system-status`,
        descriptionPanel:15,
        graphPanel:10,
    },
    'DSS': {
        getUrl: (env) => `${API_PREFIX}/${env}/documents-api/system-status`,
        descriptionPanel:0,
        graphPanel:0,
    },
    'MWS': {
        getUrl: (env) => `${API_PREFIX}/${env}/mortgage-api/system-status`,
        descriptionPanel:16,
        graphPanel:13,
    },
    'Title': {
        getUrl: (env) => `${API_PREFIX}/${env}/title-api/system-status`,
        descriptionPanel:0,
        graphPanel:0,
    }
};

export default HEALTH_CHECKS;