let num: number | string = "10";
console.log((<string>num).length);

// 类型断言
function getAssert(name: string | number) {
    // 第一种：<类型值>
    // return (<string>name).length

    // 第二种：值 as 类型
    return (name as string).length

    // 错误，只能断言联合类型中存在的类型
    // return (name as boolean).lenfth
}
