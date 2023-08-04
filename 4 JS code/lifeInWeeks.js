function converter(age)
{
    // Assuming that we live only 90 years
    var yrsRemaining = 90 - age;
    var daysR = yrsRemaining * 365;
    var w = yrsRemaining * 52;
    var m = yrsRemaining * 12;

    console.log("Days left = "+ daysR)
    console.log("Weeks left = "+ w)
    console.log("Months left = "+ m)
}

converter(89);
