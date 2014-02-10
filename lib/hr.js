function hr(inputHrStr) {
	width = (process.stdout.isTTY) ? process.stdout.getWindowSize()[0] : 0;
	hrStr = inputHrStr.length > 0 ? inputHrStr : "=";
	var out = (Array(Math.floor(width/hrStr.length) + 1).join(hrStr));

	var partialLen = (width - (Math.floor(width/hrStr.length)) * hrStr.length); // determine length of partial hrStr to finish the line
	out += hrStr.substring(0, partialLen);
	console.log(out);
}

exports.hr = hr;
