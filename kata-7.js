// function that checks a collection of air samples and returns whether  the air is clean or polluted

const checkAir = function (samples, threshold) {
  const totalSamples = samples.length;
  let totalDirtySamples = 0;
  for (let sample of samples) {
    if (sample === 'dirty') {
      totalDirtySamples++;
    }
  }
  return totalDirtySamples/totalSamples < threshold ? 'Clean' : 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))