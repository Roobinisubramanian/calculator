let input1 = document.getElementById("inputE");

let num11 = (number) => {
    input1.value += number;
}


function del() {
    input1.value = input1.value.slice(0, -1);
}
function Clr() {
    document.getElementById("inputE").value = " ";
}

function check1() {
    var data = [];
    if (document.getElementById("inputE").value.includes("+")) {
        data = document.getElementById("inputE").value.split('+');
        return (parseInt(data[0]) + parseInt(data[1]));
    }

    else if (document.getElementById("inputE").value.includes("-")) {
        data = document.getElementById("inputE").value.split('-');
        return (parseInt(data[0]) - parseInt(data[1]));
    }

    else if (document.getElementById("inputE").value.includes("*")) {
        data = document.getElementById("inputE").value.split('*');
        return (parseInt(data[0]) * parseInt(data[1]));
    }

    else if (document.getElementById("inputE").value.includes("/")) {
        data = document.getElementById("inputE").value.split('/');
        return (parseInt(data[0]) / parseInt(data[1]));
    }

    else {
        data = document.getElementById("inputE").value.split('%');
        return (parseInt(data[0]) % parseInt(data[1]));
    }
}

function Eq() {
    var a = check1()
    document.getElementById("inputE").value = a;
}