const child_process = require("child_process")
let output = child_process.execSync(`python -u print.py"`);
console.log("" + output)