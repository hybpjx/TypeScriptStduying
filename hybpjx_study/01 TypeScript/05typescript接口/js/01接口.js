"use strict";
// 接口: 接口时一种类型,一种规范,一个能力 一个约束
(() => {
    // TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。
    // 接口是对象的状态(属性)和行为(方法)的抽象(描述)
    // 定义一个对象 该对象的类型就是一个接口
    const person = {
        id: 1,
        name: "小明",
        age: 18,
        // 这个属性可以设定为可有可无
        // sex: "男"
    };
    console.log(person);
    // id现在时可读可写的
    // person.id = 100
    person.sex = "女";
    console.log(person);
})();
