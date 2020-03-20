// 使用枚举可以定义一些有名字的数字常量
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Web"] = 3] = "Web";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days.Sun); //0
console.log(Days.Sat); //6
console.log(Days); //枚举类型会被编译成一个双向映射的对象
console.log(Days[0] === "Sun"); //true
