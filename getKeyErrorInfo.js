const getKeyErrorInfo = function (errorObj) {
    let locationOfError = errorObj.stack.split('at')[1];

    //find the index of the first bracket which indicates the (text that indicates file and line number)
    let indexOfOpenBracket = 0;
    for (let i = 0; i < locationOfError.length; i++) {
        if (locationOfError[i] === '(') {
            indexOfOpenBracket = i;
            break;
        }
    }

    locationOfError = locationOfError.slice(indexOfOpenBracket);
    return `Err Msg: ${errorObj.message} | at ${locationOfError}`;
};

module.exports = getKeyErrorInfo;
