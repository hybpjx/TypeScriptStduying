(() => {
    let flag: boolean = true

    flag = false
    console.log(flag)

    //  数字类型
    let a1: number = 10
    let a2: number = 0b110
    let a3: number = 0o12
    let a4: number = 0xa
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)

    // 字符串类型
    let s1: string = "窗前明月光"
    let s2: string = "疑是地上霜"
    let s3: string = "举头望明月"
    let s4: string = "低头撕裤裆"
    console.log(`${s1},${s2},${s3},${s4},`)

    // 总结：ts中变量一开始是什么类型 就规定死了

    console.log("***************************************************************")
    let und: undefined = undefined
    let nll: null = null

    console.log(und)
    console.log(nll)
    // undefined 和 null 都可以作为其他类型的子类型

    let num2: number = undefined
    let num3: number = null
    console.log(num2)
    console.log(num3)
    console.log("***************************************************************")

    // 数组类型
    // 数组定义方式1
    // 语法: let 变量名: 数据类型[]=[值1,值2,值3]
    let arr1: number[] = [10, 20, 30, 40, 50]
    console.log(arr1)

    // 数组定义方式2: 泛型的写法
    // 语法: let 变量名 :Array<数据类型> = [值1,值2,值3]
    let arr2: Array<number> = [100, 200, 300]
    console.log(arr2)

    // 元组类型: 在定义数组的时候 类型和数据的个数就已经规定死了
    let arr3: [string, number, boolean] = ["小甜甜", 100, true]
    console.log(arr3)
    // 注意问题: 元组类型在使用的时候 位置和数量要对应

    console.log(arr3[0].split(""))
    // 保留几位小数
    console.log(arr3[1].toFixed(2))

    console.log("***************************************************************")

    //枚举类型 枚举里的没用过数据都可以叫元素 每个元素都有自己的 编号 编号从0 开始 依次递增 +1 
    enum Color {
        red = 1,
        green,
        blue,
    }

    // 定义一个Color的枚举类型的变量来接受枚举的值
    let color: Color = Color.red
    console.log(color)
    console.log(Color.red, Color.green, Color.blue)
    console.log(Color[3])

    // 小例子 枚举中的元素可以是中文的

    enum Gender {
        男,
        女,
    }
    console.log(Gender.男)

    console.log("***************************************************************")

    // any类型 可以存储任何类型的值
    let str: any = 100
    str = "年少不知富婆好,错把少女当成宝"
    console.log(str)

    //  当一个数组中要存储多个数据 类型不确定 数据个数不确定
    let arr: any[] = [100, "年少不止软饭香", true]

    console.log(arr)
    console.log(arr[1].split(""))
    console.log("***************************************************************")

    // void 类型 在函数声明的手 在小括号后面使用void  代表该函数没有任何返回值
    function showMsg(): void {
        console.log("只要富婆把握住,连夜搬进大别墅")
        // return "只要富婆把握住,连夜搬进大别墅" // 失败
        return
    }
    console.log(showMsg())

    // 定义一个void的对象
    let vd: void = undefined
    console.log(vd)

    console.log("***************************************************************")

    // object 类型 表示原始类型

    // 定义一个函数,参数是object 类型,返回值也是object类型
    function getObj(obj: Object): Object {

        console.log(obj)
        return {
            name: "卡卡西",
            age: 27
        }
    }

    console.log(getObj({ hello: "world" }))

    console.log(getObj(new String('123')))

    console.log(getObj(String))

    console.log("***************************************************************")

    // 联合类型（Union Types）表示取值可以为多种类型中的一种
    // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    function getString(str: number | string): string {
        return str.toString()
    }

    console.log(getString("1111"))
    console.log(getString(2222))

    // 需求2: 定义一个函数 得到一个数组或者字符产的长度

    // 类型断言: 告诉编译器,我知道自己是什么类型,也知道自己在干什么
    // 类型断言的语法方式: <类型>变量名
    // 类型断言的语法方式2: 值 as

    function getString1(str: number | string): number {
        // return str.toString().length
        // 需要判断一下 如果说str本身就是str 就不需要调用方法
        // 通过类型断言来判断数字

        if ((<string>str).length) {
            // return (<string>str).length
            return (str as string).length
        } else {
            return str.toString().length
        }

    }

    console.log(getString1("1111111"))
    console.log(getString1(222222))


    // 类型推断  没有明确类型 会推断一个类型

    let txt = 100 // number
    // txt="1111" 
    console.log(txt)

    let txt2; // any
    txt2 = 100
    txt2 = "1000"
    console.log(txt2)


})()