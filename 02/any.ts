var num1: any = 1;
num1 = true;
num1 = "3";

var num2;//没有赋值操作，就会被认为任意类型 等价于var num2:any;
num2 = 1;
num2 = true;

var num3 = 1;//给变量赋值初始值的时候，如果没有指定类型，根据初始值倒推类型
// num3 = "hello"; //报错

