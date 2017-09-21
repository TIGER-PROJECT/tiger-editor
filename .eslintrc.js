module.exports = {
    root         : true,
    parser       : 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env          : {
        browser: true,
        node   : true
    },
    globals      : {
        __static: true
    },
    plugins      : [
        'html'
    ],
    'rules'      : {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'semi'       : 1,
        'indent'     : [ 'error', 4 ],
        'quotes'     : [ 'error', 'single', {'allowTemplateLiterals': true} ]
    }
};
