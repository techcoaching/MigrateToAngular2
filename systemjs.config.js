(function (global) {
    System.config({
        defaultJSExtensions: true,
        baseUrl: '.',
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'src': 'src',
            "traceur":"node_modules/traceur/bin/traceur.js",
            "traceur-runtime":"node_modules/traceur/bin/traceur-runtime.js"
        },
        packages: {
            '@angular/core': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/compiler': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/common': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/http': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/platform-browser-dynamic': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/upgrade': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/router': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@angular/forms': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs': {
                defaultExtension: 'js'
            },
            'src': {
                format: 'register',
                defaultExtension: 'js'
            },
            'traceur': {
                defaultExtension: 'js'
            },
            'traceur-runtime': {
                defaultExtension: 'js'
            }
        }
    });
})(window);