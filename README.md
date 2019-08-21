# mrbhans
this is first package in npm module


module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
