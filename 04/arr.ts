// 数组表示法

// 1.类型+方括号
var arr: number[] = [1, 2, 3];
var arr2: string[] = ["1", "2", "3"];
var arr3: any[] = [1, "2", true];

// 2.数组泛型Array < elementType > 表示法
var arrType: Array<number> = [1, 2, 3];
var arrType2: Array<string> = ["1", "2", "3"];
var arrType3: Array<any> = [1, "2", true];


// 3.接口表示法
interface Istate {
    name: string,
    age: number
}

interface IArr {
    [index: number]: Istate
}
var arrType4: IArr = [{ name: "张三", age: 10 }];
var arrType5: Array<Istate> = [{ name: "张三", age: 10 }];
var arrType6: Istate[] = [{ name: "张三", age: 10 }];