module.exports = function check(str1, bracketsConfig) {
    // if ( typeof(parseInt(str1[0]))==="number" && typeof(parseInt(bracketsConfig[0][0]))==="number") {
    //     return true;
    // }
    const conf = bracketsConfig.map(i => i.join(""));
    const x = Math.max(conf.length, str1.length / 2);

    let cikle = 0;
    while (cikle < x + 25) {
        try {
            str1 = str1.replaceAll(conf[0], "");
        } catch (e) {}
        try {
            str1 = str1.replaceAll(conf[1], "");
        } catch (e) {}
        try {
            str1 = str1.replaceAll(conf[2], "");
        } catch (e) {}
        cikle++;
    }
    if (str1.length > 0) {
        return false;
    } else {
        return true;
    }
}

//
// config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]
// '111115611111111222288888822225577877778775555666677777777776622222', config6), true)