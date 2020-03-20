
// 1.声明式类型的函数(参数和返回值约束)
function funcType(name: string, age: number): number {
    return age
}
var ageNum: number = funcType("张三", 18)

// 2.函数参数不确定
function funcType2(name: string, age: number, sex?: string): number {
    return age
}
var ageNum2: number = funcType2("张三", 18)
var ageNum3: number = funcType2("张三", 18, "男")

// 3.函数参数的默认值
function funcType3(name: string = "张三", age: number = 18): number {
    return age
}



// 表达式类型的函数
var funcType4 = function (name: string, age: number): number {
    return age
}

/**
 *  1.变量约束：直接返回进行约束。TS类型定义中，=>表示函数的定义，左边是输入类型，
 * 用括号括起来，右边是输出类型
 */
var funcType5: (name: string, age: number) => number = function (name: string, age: number) {
    return age
}

// 2.变量约束：接口方式进行约束
interface funcType6 {
    (name: string, age: number): number
}
var funcType6: funcType6 = function (name: string, age: number): number {
    return age
}



// 对于联合类型的函数，可以采用重载的方式
// 输入是number，输出也是number
// 输出是string，输出也是string
function getValue(value:number):number;
function getValue(value:string):string;
function getValue(value: string | number): string | number {
    return value
}

let a:number=getValue(1);
let b:string=getValue("1");