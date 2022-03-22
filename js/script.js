var notes = [""]

var blocks = [".8am", ".9am", ".10am", ".11am", ".12pm", ".1pm", ".2pm", ".3pm", ".4pm", ".5pm"]

var currentDay = $("#currentDay").text(moment().format('ddd, MMMM D, YYYY'));

var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentTime = parseInt(moment().format('H'));

// Create a function to add data to local storage with button

$(".saveBtn").on("click", function () {
    var todo = $(this).data('index');
    allNotes[todo] = $(blocks[todo]).val();
    localStorage.setItem('notes', JSON.stringify(notes))
    alert("Schedule Updated")
})
