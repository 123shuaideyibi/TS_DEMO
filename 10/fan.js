// 没有确切定义返回值类型，运行的数组每一项都可以是任意类型
// function createArray(length: number, value: any): Array<any> {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         arr[i] = value
//     }
//     return arr
// }
// createArray(3,1)
// 使用泛型将其改造
// 不传的时候根据数据类型进行倒推
// 泛型可以帮助我们限定约束规范
function createArray(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
var strArray = createArray(3, 'x'); //['x','x','x']
var numArray = createArray(3, 1); //[1,1,1]
var func;
func = function (name, value) {
    return [];
};
func("张三", 'str');
