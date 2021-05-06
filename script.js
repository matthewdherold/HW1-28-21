var timeBlocks = $("#timeBlockDiv")

saveEntry = (i) => {
    var hour = "hour-" + i
    var desc = $(`#hour-`+i).children(".description").val();
    console.log(hour, desc)
    localStorage.setItem(hour, desc);
  };

$(document).ready(function() {
    var currentHour = moment().hours();
    for (let index = 9; index < 18; index++) {
        if (index <13) {
            if (index < currentHour) {
            timeBlocks.append(`<div id="hour-` + (index) + `" class="past row time-block">
            <div class="col-md-1 hour">
            ` + (index) + `AM
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
            </div>`)
            } else if (index === currentHour) {
            timeBlocks.append(`<div id="hour-` + (index) + `" class="present row time-block">
            <div class="col-md-1 hour">
            ` + (index) + `AM
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
            </div>`)
            } else {
                timeBlocks.append(`<div id="hour-` + (index) + `" class="future row time-block">
                <div class="col-md-1 hour">
                ` + (index) + `AM
                </div>
                <textarea class="col-md-10 description">
                </textarea>
                <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
                </div>`) 
            }
        } else {
            if (index < currentHour) {
            timeBlocks.append(`<div id="hour-` + (index) + `" class="past row time-block">
            <div class="col-md-1 hour">
            ` + (index - 12) + `PM
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
            </div>`)
            } else if (index === currentHour) {
            timeBlocks.append(`<div id="hour-` + (index) + `" class="present row time-block">
            <div class="col-md-1 hour">
            ` + (index - 12) + `PM
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
            </div>`)
        } else {
            timeBlocks.append(`<div id="hour-` + (index) + `" class="future row time-block">
            <div class="col-md-1 hour">
            ` + (index - 12) + `PM
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" onclick="saveEntry(` + index + `)">Save</button>
            </div>`) 
        }
        }
    };

      $("#hour-9 .description").val(localStorage.getItem("hour-9"));
      $("#hour-10 .description").val(localStorage.getItem("hour-10"));
      $("#hour-11 .description").val(localStorage.getItem("hour-11"));
      $("#hour-12 .description").val(localStorage.getItem("hour-12"));
      $("#hour-13 .description").val(localStorage.getItem("hour-13"));
      $("#hour-14 .description").val(localStorage.getItem("hour-14"));
      $("#hour-15 .description").val(localStorage.getItem("hour-15"));
      $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      $("#hour-17 .description").val(localStorage.getItem("hour-17"));
      $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
