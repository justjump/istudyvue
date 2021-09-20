var flag = true;
// let say=function  () {
//     console.log('说我好帅');
//   }

// var 函数名=(参数*如果只有一个参数并且该参数没有默认值,则不用写括号)=>{函数体(函数体如果只有一行,则尖括号也可以省略)};
var say = (x = '张三') => {
    console.log(x);
    console.log("its" + x);
}

var things1=["买衣服","理发","吃药"];

var todo=(things=things1)=>{for(var thing of things){console.log(thing);}}

export {
    flag,
    say,
    todo
};