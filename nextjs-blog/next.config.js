module.exports = {
    async rewrites() {
        return [
            // forward all requests to /api/forwarder/trunk/* to https://trunk.redfintest.com/*
            {
                source: '/api/forwarder/trunk/:path*',
                destination: 'https://trunk.redfintest.com/:path*',
            },

            // forward all requests to /api/forwarder/release/* to https://release.redfintest.com/*
            {
                source: '/api/forwarder/release/:path*',
                destination: 'https://release.redfintest.com/:path*',
            },

            // forward all requests to /api/forwarder/newschema/* to https://newschema.redfintest.com/*
            {
                source: '/api/forwarder/newschema/:path*',
                destination: 'https://newschema.redfintest.com/:path*',
            },
        ];
    },
};
