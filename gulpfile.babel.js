function camel(name) {
    return name.replace(/-[a-z]/g,
        match => match[1].toUpperCase());
}

require('matchdep')
    .filterDev(['gulp*'])
        .forEach(module => {
            global[camel(module.replace(/^gulp-/, ''))] = require(module);
        });

import {task, src, dest, watch} from 'gulp-es-next';

task('default', () => {
    return src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('lithe.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build'));
});
