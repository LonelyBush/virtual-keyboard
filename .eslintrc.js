module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "no-unused-vars": ["error", { "vars": "all"}],
        "no-var": "error"
    }

}
