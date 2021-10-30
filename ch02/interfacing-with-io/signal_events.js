const process = require('process');

process.stdin.resume();

process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
});

function handle(signal) {
    console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);