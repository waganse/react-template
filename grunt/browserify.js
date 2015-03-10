// grunt-browserify: <https://github.com/jmreidy/grunt-browserify>

'use strict';

module.exports = {

    options: {
        transform:  [ require('grunt-react').browserify ]
    },
    app: {
        src: '<%= path.jsx %>/main.jsx',
        dest: '<%= path.js %>/main.js'
    }

};
