import gulp from "gulp";
import path from "path";
import rimraf from "rimraf";

const $ = require("gulp-load-plugins")();

gulp.task("clean", done => {
    rimraf("./build", done);
});

gulp.task("build", gulp.series(
        "clean",
        gulp.parallel(
            buildServer,
            copyStaticServerAssets
        )
));

gulp.task("dev", gulp.series(
    "build",
    gulp.parallel(
        watchServer,
        runServer
    )
));

function buildServer() {
    return gulp.src([
        "./src/**/*.ts",
        "./src/**/*.js",
    ])
    .pipe($.changed("./build", {extension: ".js"}))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write(".", {sourceRoot: path.join(__dirname, "src")}))
    .pipe(gulp.dest("./build"));
}

function copyStaticServerAssets(){
    return gulp.src("./src/schema.graphql")
        .pipe(gulp.dest("./build"));
}

function watchServer() {
    return gulp.watch([
        "./src/**/*.ts",
        "./src/**/*.js",
        "./src/schema.graphql"
    ], gulp.parallel(
        copyStaticServerAssets,
        buildServer
    ));
}

function runServer() {
    return $.nodemon({
        script: "./run.js",
        watch: "./build",
        ignore: ["**/tests"],
        nodeArgs: ["--inspect=0.0.0.0:9229"]
    });
}