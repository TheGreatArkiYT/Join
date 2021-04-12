var inputs = [];

function DoIt() {
    for (var i = 1 ; i <= 6 ; i++) {
        inputs.push(document.getElementById("para_input_" + i).value);
        document.getElementById("showResult").innerHTML = inputs.join(" . ");
    };
};