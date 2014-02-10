// TODO: better support for multi-character strings (i.e. use a partial word at the end)
function hr(str) {
	width = (process.stdout.isTTY) ? process.stdout.getWindowSize()[0] : 0;
	hrChar = str.length > 0 ? str : "=";
	console.log(Array(Math.floor(width/hrChar.length) + 1).join(hrChar));
}

exports.hr = hr;
