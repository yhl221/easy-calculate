function calculate_median(arr) {

    var evenArray = buildNewArray(arr);
    var tag = isEvenNumber(evenArray);
    var midNumber = buildMidNum(evenArray, tag);

    return midNumber;
}

function buildNewArray(arr) {
    var evenArray = [];

    for (var i = 0; i < arr.length; i++)
        if (arr[i] % 2 === 0)
            evenArray.push(arr[i]);

    return evenArray;
}

function isEvenNumber(evenArray) {
    var tag = 0;

    if (evenArray.length % 2 === 0)
        tag = 1;

    return tag;
}

function buildMidNum(evenArray, tag) {
    var midNumber = 0;

    var mid = parseInt(evenArray.length / 2);
    if (tag === 1)
        midNumber = parseInt((evenArray[mid - 1] + evenArray[mid]) / 2);
    else
        midNumber = evenArray[mid];

    return midNumber;
}

module.exports = calculate_median;
