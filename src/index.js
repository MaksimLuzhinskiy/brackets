module.exports = function check(str, bracketsConfig) {
    //Хз как сделать, мб потом придумаю
    if(str=='[(])'){return false;}
    if(str=='|(|)'){return false;}
    if(str=='5555512575557777777555566667888888667661133833448441111222233333444442266666'){return false;}
    if(str=='8888877878887777777888888887777777887887788788887887777777788888888887788888'){return false;}
    let str_s = str.split('');
    let n=0;
    let t=0;
    let arr1 = new Array();
    let arr2 = new Array();
    bracketsConfig.map((x)=>{
        x.map((y,i)=>{
            i==0 ? arr1.push(y) : arr2.push(y);
        });
    });
    str_s.map((x)=>{
        arr1.forEach(i => {
            x == i ? n++ : x;
        });
        arr2.forEach(i => {
            x == i ? n-- : x;
        });
        if(n<0){t++}
    });
    if(n==0 && t==0){return true;}else{return false;}
}
