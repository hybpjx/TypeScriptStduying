// readonly 修饰符：首先是一个关键字 对类中的属性成员进行修饰， 改属性成员就不能在外部被随意修改了
// 构造函数中可以对只读的属性的数据进行修改
// 如果构造函数中没有任何修改。但是已经使用了readonly 修饰符 那么依然无法修改
(() => {

    // // 修饰成员属性
    // class Person {
    //     readonly name: string;
    //     constructor(name: string = "大甜甜") {
    //         this.name = name;
    //     }
    //     sayHello() {
    //         console.log(this.name + " says hello");
    //         // 类中的普通方法中 也是不能修改readonly修饰的成员属性值
    //         // this.name = "hello";
    //     }
    // }

    // const person = new Person("小甜甜")
    // console.log(person)
    // console.log(person.name)

    // // 此时无法修改 因为name属性是只读的
    // // person.name = "大甜甜"

    // // console.log(person.name)

    // readonly 修饰类中的构造函数中的参数（参数属性）

    class Person {
        // 构造函数中的name参数，一旦使用 readonly 进行修饰后，那么name 可以叫做参数属性，那么Person中就有了一个name的属性成员，那么外部也是无法修改类中的name属性成员值
        // constructor(private name: string = "大甜甜") {
        // this.name = name;
        // }
        // 构造函数中的name参数，一旦使用 public 进行修饰后，那么person类中就有了一个公共的name属性成员了
        // constructor(public name: string = "大甜甜") {
        //     // this.name = name;
        // }


        // 构造函数中的name参数，一旦使用 protected 进行修饰后，那么person类中就有了一个受保护的name属性成员了 (只能在本类或者派生类中访问)
        constructor(protected name: string = "大甜甜") {

        }

    }
    const person = new Person("小甜甜")
    console.log(person)
    // person.name = "真好"
    // console.log(person.name)
})()