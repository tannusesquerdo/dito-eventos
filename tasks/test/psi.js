var gulp = require('gulp'),
    fs = require('fs-extra'),
    psi = require('psi'),
    site = 'https://sqone.localtunnel.me',
    key = '';


module.exports = function (date) {

    gulp.task('test-psi-mobile', function () {

        // get the PageSpeed Insights report
        psi(site, { nokey: 'true', strategy: 'mobile' }).then(function (data) {
            writeJsonToFile('./reports/' + date + '/page-speed/mobile-page-speed.json', data, function () {
                console.log("Yaaasss");
            });
        });

    });

    gulp.task('test-psi-desktop', function () {

        // get the PageSpeed Insights report
        psi(site, { nokey: 'true', strategy: 'desktop' }).then(function (data) {
            writeJsonToFile('./reports/' + date + '/page-speed/desktop-page-speed.json', data)
        });

    });

    gulp.task('test-page-speed', ['test-psi-desktop', 'test-psi-mobile']);

}


function writeJsonToFile(name, data) {

    fs.ensureFile(name, function() {
        fs.writeFile(name, JSON.stringify(data, null, 4));
    });
}
