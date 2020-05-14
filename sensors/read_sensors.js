const output = document.getElementById("output");
const result = document.getElementById("result");
const button = document.getElementById("read");

function sensors_run() {
    cockpit.spawn(["sensors"])
        .stream(sensors_output)
        .then(sensors_success)
        .catch(sensors_fail);

    result.innerHTML = "";
    output.innerHTML = "";
}

function sensors_success() {
    result.style.color = "green";
    result.innerHTML = "success";
}

function sensors_fail() {
    result.style.color = "red";
    result.innerHTML = "fail";
}

function sensors_output(data) {
    output.append(document.createTextNode(data));
}

// Connect the button to starting the "ping" process
button.addEventListener("click", sensors_run);

// Send a 'init' message.  This tells integration tests that we are ready to go
cockpit.transport.wait(function() { });
