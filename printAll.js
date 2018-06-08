function spaceString(count) {
    const char = ' ';
    let string = '';

    for (let i = 0; i < count; i++) {
        string += char;
    }
    return string;
}

function printAll(item, spaces = 0) {

    let output = '';

    //if is array
    if (Array.isArray(item)) {
        //add spaceString + '{\n' to the output
        output += `${spaceString(spaces)}[\n`;

        //for each value in the array
        //recurse, concat returned value to output
        item.forEach(val => {
            output += `${spaceString(spaces + 2)}${printAll(val, spaces + 2)},\n`;
        });

        //add space String + '}\n' 
        output += `${spaceString(spaces)}]\n`;

    } else if (typeof item === 'object') {
        //add spaceString + '{\n' to the output
        output += `${spaceString(spaces)}{\n`;

        for (let x in item) {
            output += `${spaceString(spaces + 2)}${x}: ${printAll(item[x], spaces + 2)}\n`;
        }

        //add space String + '}\n' 
        output += `${spaceString(spaces)}}\n`;
    } else {
        return `${item}`;
    }

    if (spaces === 0) {
        console.log(output);
    } else {
        return `${output}`;
    }
}

module.exports = printAll;