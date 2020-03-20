
// 定义接口 强约束
interface Istate {
    name: string,
    age: number
}
var obj1: Istate;
obj1 = { name: "张三", age: 10 }


// 可选属性 
interface Istate2 {
    name: string,
    age?: number   //可有可无
}
var obj2: Istate2;
obj2 = { name: "张三", age: 20 }
obj2 = { name: "李四" }


// 属性个数不确定的时候  any必须是任意类型
interface Istate3 {
    name: string,
    age?: number,
    [propName: string]: any
}
var obj3: Istate3 = { name: "张三", age: 10, sex: "男", isMarry: true }


// 只读属性
interface Istate4 {
    name: string,
    readonly age: number
}
var obj4: Istate4 = { name: "张三", age: 10 }
obj4.name = "李四"
// obj4.age=11;//报错

