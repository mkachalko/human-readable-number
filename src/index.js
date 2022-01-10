module.exports = function toReadable(number) {
    const objNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const oneNum = (num) => objNum[num];
    const twoNum = (num) =>
        num < 20
            ? objNum[num]
            : num % 10 === 0
            ? objNum[Math.floor(num / 10) * 10]
            : objNum[Math.floor(num / 10) * 10] + " " + oneNum(num % 10);
    const threeNum = (num) =>
        num % 100 === 0
            ? objNum[Math.floor(num / 100)] + " hundred"
            : objNum[Math.floor(num / 100)] + " hundred " + twoNum(num % 100);

    if (String(number).length == 1) {
        return oneNum(number);
    } else if (String(number).length == 2) {
        return twoNum(number);
    } else {
        return threeNum(number);
    }
};
