var notes = [""]

var hourBlocks = [".8am", ".9am", ".10am", ".11am", ".12pm", ".1pm", ".2pm", ".3pm", ".4pm", ".5pm"]

var currentDay = $("#currentDay").text(moment().format('ddd, MMMM D, YYYY'));

var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentTime = parseInt(moment().format('H'));

var hourBlocksIndex = time.indexOf(currentTime)

// Create a function to add data to local storage with button

$(".storeBtn").on("click", function () {
    var todo = $(this).data('index');
    notes[todo] = $(hourBlocks[todo]).val();
    localStorage.setItem('notes', JSON.stringify(notes));
    alert("Schedule Updated");
})

// Create function to change color based off of the time of day

function formatTimes() {
    $(hourBlocks[hourBlocksIndex]).addClass("present");
    for (i = 0; i < hourBlocksIndex; i++) {
        $(hourBlocks[i]).addClass("past");
    }
    for (i = hourblocks + 1; i < hourBlocks.length; i++) {
        $(hourBlocks[i]).addClass("future");
    }
}

function showStorage() {
    notes = JSON.parse(localStorage.getItem("notes"));
    for (i = 0; i < hourBlocks.length; i++) {
        ($(hourBlocks[i])).val(notes[i])
    }
}

showStorage();
formatTimes();