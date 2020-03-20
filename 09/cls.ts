// 创建Person类
class Person {
    private name = "张三"
    protected age = 18
    say() {
        console.log(`我的名字是${this.name},我的年龄是${this.age}`);
    }
}

// 创建Person的实例
var p = new Person()
p.say()
// private属性只能在类的内部进行访问
// console.log(p.name);//当一个类成员变量没有修饰的时候，外界是可以进行访问的，默认就是public


// 创建Child子类
// 一旦父类将属性定义成私有的之后，子类就不可以进行访问了
// 父类的属性定义成受保护的之后，可以在子类中进行访问
class Child extends Person {
    callParent() {
        console.log(super.age);
        super.say()
    }

    static test(){
        console.log("test")
    }
}
var c = new Child();
c.callParent()
// console.log(c.age)//子类继承了父类，但是没有办法直接获取到父类私有的属性或受保护的属性
console.log(c.say());

console.log(Child.test())//类的静态方法里面，是不允许使用this