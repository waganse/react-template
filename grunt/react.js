// Compilation jsx to js
// grunt-jsx: <https://github.com/yosuke-furukawa/grunt-jsx>

'use strict';

module.exports = {

    options: {
        harmony: true
    },
    dynamic: {
        files: [
            {
                expand: true,
                cwd: '<%= path.jsx %>',
                src: ['*.jsx'],
                dest: '<%= path.js %>',
                ext: '.js'
            }
        ]
    }
};
