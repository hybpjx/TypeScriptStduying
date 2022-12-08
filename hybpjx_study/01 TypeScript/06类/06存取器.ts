// 存取器：让我们可以有效的控制对昂中的成员访问，通过getters和setters来进行操作
(() => {
    // 外部可以传入姓和名， 同时使用set 和get 控制姓名的数据 外部也可以进行修改操作 
    class Person {
        firstName: string;
        lastName: string;
        // 姓名的成员属性(外部可以访问 也可以修改)
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // 读取器————负责读取数据
        get fullName() {
            // 
            console.log("get")
            return `${this.firstName} ${this.lastName}`;
        }

        // 设置器————负责设置数据
        set fullName(value: string) {
            console.log("set")
            // 姓名————> 把姓氏和名字获取到的重新赋值给firstName和lastName
            let name = value.split("_")
            this.firstName = name[0];
            this.lastName = name[1];
        }
    }


    // 实例化person
    const person = new Person("东方", "不败")
    console.log(person)
    console.log(person.fullName)
    // 设设置该属性的数据
    person.fullName = "诸葛_孔明"
    console.log(person.fullName)

})()