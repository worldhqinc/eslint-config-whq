"use strict";

module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": "standard",
    "plugins": ["compat"],
    "rules": {
        "allow-parens": 0,
        "indent": [1, 4, {"SwitchCase": 1}],
        "compat/compat": "error",
        "object-curly-spacing": "always"
    }
};
