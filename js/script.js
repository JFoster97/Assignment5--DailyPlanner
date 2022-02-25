// Create initial variables needed to generate schedule and time with moment
var date = $("#date");
var today = moment();

var scheduleBlock = $('.schedule-block');
var body = $('body');

// Format date display
date.text(today.format('dddd, MMMM Do'));
