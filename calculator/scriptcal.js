let display = document.getElementById("display");

function appendtodisplay(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
function del()
{
    display.value=display.value.slice(0,-1);
}
