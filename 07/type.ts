// 类型别名
type strType = string | number | boolean;
var str: strType = "10";
str = 10
str = true


// 接口采用类型别名
interface muchType1 {
    name: string
}
interface muchType2 {
    age: number
}
type muchType = muchType1 | muchType2
var obj1: muchType = { name: "张三" }
var obj2: muchType = { age: 10 }
var obj3: muchType = { name: "张三", age: 10 }


// 限制字符串的选择
type sex = "男" | "女"
function getSex(s:sex):string{
    return s
}
getSex("男")//只能传入"男"和"女"