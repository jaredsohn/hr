Displays an `<hr />` in your terminal.

A spiritual fork of https://github.com/LuRsT/hr that can be deployed via npm.

Installation instructions:

    npm install -g hr

## Usage:

    $ hr
    ================================== # Till the end of your terminal window
    $

    $ hr '*'
    ********************************** # Till the end of your terminal window
    $

It works differently than the shell app for multi-character strings

    $ hr =-
    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  # Till the end of your terminal window
    $


You can also use it within your nodejs programs or for debugging in browser JS if you browserify it.  Example for nodejs:

    var hr = require('hr');
    hr.hr("-");


License: MIT, GPL.
