// Create initial variables needed to generate schedule and time with moment
var date = $("#date");
var today = moment();

var scheduleBlock = $('.schedule-block');
var body = $('body');

// Format date display
date.text(today.format('dddd, MMMM Do'));

for (var i = 9; i <= 17; i++) {
    // create timeblock div
    var timeblockEl = $('<div>');
    timeblockEl.attr('class', 'time-block-'+i+' row');



    var hourEl = $('<div>');
    hourEl.attr('class', 'hour col-1');
    hourEl.text(i);
    timeblockEl.append(hourEl);
