let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

function checkMonth(input) {
    if (input >= 1 && input <= 12) {
        let result = months[input];
        console.log(result)
        return result;
    }
    else {
        console.log("You've entered an invalid number");
        return;
    }
}

checkMonth(4);