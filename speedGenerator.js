// Challenge 2: Speed Detector

// takes as input the speed of a car

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}