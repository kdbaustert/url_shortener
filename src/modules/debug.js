const color = require('colors');

color.setTheme({
    success: 'green',
    error: 'red',
    active: 'cyan',
});

//Debug

function debug_success(message) {
    if (process.env.DEBUG) {
        console.log(color.success(message));
    }
}

function debug_error(message) {
    if (process.env.DEBUG) {
        console.log(color.error(message));
    }
}

//Export

exports.debug_success = debug_success;
exports.debug_error = debug_error;
