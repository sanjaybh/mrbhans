/*let authorName = (function(){
	var name = 'Sanjay Bhan';
	
	return name;
})()
*/

module.exports = function mrbhans_trim(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
