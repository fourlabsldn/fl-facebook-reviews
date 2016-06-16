/* eslint-env node */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const rollup = require('gulp-rollup');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const moduleName = 'fl-facebook-reviews';
const paths = {
  js: {
    src: './src/**/*',
    main: './src/js/main.js',
    dest: './dist/',
  },
  sass: {
    src: './src/sass/**/*',
    main: './src/sass/main.scss',
    dest: './dist/',
  },
  demo: {
    src: './demo',
  },
};

gulp.task('build:src', () => {
  gulp.src(paths.js.main)
  .pipe(sourcemaps.init())
  .pipe(rollup({
    plugins: [
      nodeResolve({ jsnext: true, main: true }),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        plugins: ['transform-async-to-generator', [
          'transform-runtime', {
            polyfill: false,
            regenerator: true,
          }]],
        presets: ['es2015-rollup'],
      }),
    ],
  }))
  .pipe(rename({ basename: moduleName }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch:build:src', () => {
  gulp.watch(paths.js.src, ['build']);
});


gulp.task('build:sass', () => {
  return gulp.src(paths.sass.main)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer({ browsers: ['last 15 versions'] })]))
  .pipe(rename({ basename: moduleName }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('watch:build:sass', () => {
  gulp.watch(paths.sass.src, ['build']);
});

gulp.task('build', [
  'build:src',
  'build:sass',
]);

gulp.task('watch', [
  'watch:build:sass',
  'watch:build:src',
]);

gulp.task('demo', ['copy-dependencies', 'build', 'watch']);
