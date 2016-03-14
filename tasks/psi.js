var gulp = require('gulp'),
    psi = require('psi'),
    site = 'https://sqone.localtunnel.me',
    key = '';

gulp.task('mobile', function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});

// gulp.task('mobile', function () {

//     // get the PageSpeed Insights report
//     return psi(site).then(function (data) {
//       console.log(data.ruleGroups.SPEED.score);
//       console.log(data.pageStats);
//     });

//     // output a formatted report to the terminal
//     return psi.output(site).then(function () {
//       console.log('done');
//     });

//     // Supply options to PSI and get back speed and usability scores
//     return psi(site, { nokey: 'true', strategy: 'mobile' }).then(function (data) {
//       console.log('Speed score: ' + data.ruleGroups.SPEED.score);
//       console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
//     });

// });

// gulp.task('desktop', function () {

//     // get the PageSpeed Insights report
//     return psi(site).then(function (data) {
//       console.log(data.ruleGroups.SPEED.score);
//       console.log(data.pageStats);
//     });

//     // output a formatted report to the terminal
//     return psi.output(site).then(function () {
//       console.log('done');
//     });

//     // Supply options to PSI and get back speed and usability scores
//     return psi(site, { nokey: 'true', strategy: 'desktop' }).then(function (data) {
//       console.log('Speed score: ' + data.ruleGroups.SPEED.score);
//       console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
//     });

// });
