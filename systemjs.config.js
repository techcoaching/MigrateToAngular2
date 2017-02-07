(function (global) {
    System.config({
        defaultJSExtensions: true,
        baseUrl: '.',
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular': 'node_modules/@angular',
            'traceur': 'node_modules/traceur/dist/commonjs/traceur.js',
            'src': 'src'
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
            'rxjs': {
                defaultExtension: 'js'
            },
            'src': {
                format: 'register',
                defaultExtension: 'js'
            }
            
        }
    });
})(window);