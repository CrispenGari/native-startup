/*
                N

     W          c           E


                S

*/
const directions: any = {
  "0": "N",
  "45": "NE",
  "90": "E",
  "135": "SE",
  "180": "S",
  "225": "SW",
  "270": "W",
  "315": "NW",
};

const shortestDistance = (direction: number): string => {
  const majorPointsArray = [0, 45, 90, 135, 180, 225, 270, 315];
  const differenceArray = [
    Math.abs(0 - direction),
    Math.abs(45 - direction),
    Math.abs(90 - direction),
    Math.abs(135 - direction),
    Math.abs(180 - direction),
    Math.abs(225 - direction),
    Math.abs(270 - direction),
    Math.abs(315 - direction),
  ];
  let index: number = 0;
  let smallestDiff: number = Infinity;
  for (let i = 0; i < differenceArray.length; i++) {
    if (differenceArray[i] < smallestDiff) {
      index = i;
      smallestDiff = differenceArray[i];
    }
  }
  return String(majorPointsArray[index]);
};
const findWindDirection = (direction: number): string => {
  return directions[shortestDistance(direction)];
};

const helperFunctions = {
  findWindDirection,
};

export default helperFunctions;
