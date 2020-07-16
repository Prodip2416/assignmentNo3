// First Problem - feetToMile

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance doesn't a negative value. Please provide a positive feet value.";
    }  
    return  feet * 0.000189394;
}
// First Problem solved

// Second Problem - woodCalculator

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Please provide the exactly value of Chair, table and bed. Chair , Table Or bed doesn't accept a negative value.";
    }
    else {
        return (1 * chair) + (3 * table) + (5 * bed); // Chair = 1 Cubic, Table = 3 Cubic, bed = 5 Cubic wood.
    }
}
// Second Problem solved

// Third Problem - brickCalculator 

function brickCalculator(totalFloor) {
    var totalBrick = 0;
    if (totalFloor < 0) {
        return "Total Floor doesn't accept a negative value";
    }

    if(totalFloor > 0){
        if (totalFloor >= 1 && totalFloor <= 10) {
            totalBrick = (totalFloor * 15) * 1000; // Find 1-10 Floor brick
        }
        else if (totalFloor >= 11 && totalFloor <= 20) {
            totalBrick = (10 * 15) * 1000; // Find 1-10 Floor brick
            totalBrick += ((totalFloor - 10) * 12) * 1000; // other floor brick
        }
        else {
            totalBrick = (10 * 15) * 1000;  // Find 1-10 Floor brick
            totalBrick += (10 * 12) * 1000;  // Find First 11-20 Floor brick
            totalBrick += ((totalFloor - 20) * 10) * 1000; // other floor brick
        }
    }
    return totalBrick;
}
// Third Problem solved

// Forth Problem - tinyFriend 

function tinyFriend(friendNames) {
    var shortLength = Infinity;
    var tinyName = "";
    if (friendNames === undefined || friendNames.length == 0) {
        return "friendNames empty or does not exist.";
    }

    for (i = 0; i < friendNames.length; i++) {
        if (friendNames[i].length < shortLength) { // Check the short length
            tinyName = friendNames[i];//assign tiny name
            shortLength = friendNames[i].length;//assign tinyName length
        }
    }
    return tinyName;
}
// Done :) all problem

//Now Check all the solution here....................................................

var totalMile = feetToMile(50000); // feetToMile
console.log("Total Mile : ", totalMile); // feetToMile

var totalCubicWood = woodCalculator(12, 5, 13); // woodCalculator
console.log("Total Cubic Wood : ", totalCubicWood); // woodCalculator

var totalBrick = brickCalculator(25); //brickCalculator
console.log("Total Brick : ", totalBrick); //brickCalculator

var tinyFriendName = tinyFriend(['prodip','tuhin','anik','tom']); //tinyFriend
console.log("Tiny Friend Name : ", tinyFriendName); //tinyFriend



