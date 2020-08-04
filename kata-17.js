// function that receives a url encoded string of key-value pairs, and turns it into a JavaScript object

const urlDecode = function(text) {
  const obj = {}
  const textArray = text.split("&");
  for (let pair of textArray) {
    pair = pair.replace(/%20/g, " ");
    pair = pair.split("=");
    obj[pair[0]] = pair[1];
  }
  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);