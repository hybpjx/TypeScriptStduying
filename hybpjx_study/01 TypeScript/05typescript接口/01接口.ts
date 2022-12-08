// 接口: 接口时一种类型,一种规范,一个能力 一个约束
(() => {
    // TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。
    // 接口是对象的状态(属性)和行为(方法)的抽象(描述)

    /*
        需求: 创建人的对象, 需要对人的属性进行一定的约束

        id是number类型, 必须有, 只读的
        name是string类型, 必须有
        age是number类型, 必须有
        sex是string类型, 可以没有
    */


    // 定义一个接口类型 作为person对象的类型使用
    interface IPerson {
        // 放在前面代表只读的
        readonly id: number
        name: string
        age: number
        sex?: string
    }

    // 定义一个对象 该对象的类型就是一个接口
    const person: IPerson = {
        id: 1,
        name: "小明",
        age: 18,
        // 这个属性可以设定为可有可无
        // sex: "男"
    }

    console.log(person)
    // id现在时可读可写的
    // person.id = 100

    person.sex = "女"
    console.log(person)




})()