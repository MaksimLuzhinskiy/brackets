module.exports = function check(str, bracketsConfig) {
    let confr = bracketsConfig.map((x)=> x.join(""));
    console.log(confr);
    for(let i=0;i<confr.length;){
        if (str.includes(confr[i])) {
            str = str.replace(confr[i], "");
            i=0;
            continue;
        }
        i++

    }
    return str.length==0 ? true : false;
}
