const whitelist = [
    'http://localhost:3500', 
    'http:/localhost:5174',
    'http://localhost:5174'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('This domain blocked by CORS. Frontend cant get backend'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;