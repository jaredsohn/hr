// TODO: doesn't work properly for '*'

width = (process.stdout.isTTY) ? process.stdout.getWindowSize()[0] : 0;
hrChar = (process.argv.length > 2) ? process.argv[2] : "=";
console.log(Array(Math.floor(width/hrChar.length) + 1).join(hrChar)); // TODO: also add partial word if multiple chars?
