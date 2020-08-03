// create four functions that, together, calculate the total volume of an object made by spheres, cones and prisms.


// for this exercise, we will use the following value as the value of Pi  
const PI = 3.14159;

// sphereVolume() calculates the volume of a sphere given a radius
const sphereVolume = function (radius) {
  return 4 / 3 * PI * Math.pow(radius, 3);
}

// coneVolume() calculates the volume of a cone given a radius and a height
const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3;
}

// prismVolume() calculates the volume of a prism given a height, a width, and a depth
const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

// totalVolume(), receives an array containing different shapes and uses the previous three functions to calculate the total volume.
const totalVolume = function (solids) {
  let total = 0;
  solids.forEach(element => {
    let vol;
    if (element.type === 'sphere') {
      vol = sphereVolume(element.radius);
    } else if (element.type === 'cone') {
      vol = coneVolume(element.radius, element.height);
    } else if (element.type === 'prism') {
      vol = prismVolume(element.height, element.width, element.depth);
    }
    total += vol;
  });
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);