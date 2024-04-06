import mockjs from "mockjs";

let UserList = [
    { id: mockjs.Random.guid(), name: "张伟", age: 28, sex: "男", birth: "1995-05-20", addr: "四川省成都市" },
    { id: mockjs.Random.guid(), name: "李娜", age: 31, sex: "女", birth: "1994-08-15", addr: "陕西省西安市" },
    { id: mockjs.Random.guid(), name: "王强", age: 25, sex: "男", birth: "1997-01-08", addr: "山东省济南市" },
    { id: mockjs.Random.guid(), name: "赵敏", age: 29, sex: "女", birth: "1996-03-24", addr: "辽宁省沈阳市" },
    { id: mockjs.Random.guid(), name: "刘磊", age: 30, sex: "男", birth: "1995-12-10", addr: "河北省石家庄市" },
    { id: mockjs.Random.guid(), name: "孙悦", age: 27, sex: "女", birth: "1998-07-17", addr: "广东省深圳市" },
    { id: mockjs.Random.guid(), name: "周涛", age: 26, sex: "男", birth: "1999-11-22", addr: "浙江省杭州市" },
    { id: mockjs.Random.guid(), name: "吴京", age: 32, sex: "男", birth: "1993-04-03", addr: "河南省郑州市" },
    { id: mockjs.Random.guid(), name: "郑秀文", age: 33, sex: "女", birth: "1992-09-19", addr: "湖北省武汉市" },
    { id: mockjs.Random.guid(), name: "王宝强", age: 24, sex: "男", birth: "2000-02-18", addr: "湖南省长沙市" },
    { id: mockjs.Random.guid(), name: "李晨", age: 35, sex: "男", birth: "1991-06-11", addr: "江苏省南京市" },
    { id: mockjs.Random.guid(), name: "马思纯", age: 23, sex: "女", birth: "1997-10-13", addr: "北京市" },
    { id: mockjs.Random.guid(), name: "陈伟霆", age: 34, sex: "男", birth: "1994-08-27", addr: "上海市" },
    { id: mockjs.Random.guid(), name: "赵丽颖", age: 28, sex: "女", birth: "1995-07-13", addr: "安徽省合肥市" },
    { id: mockjs.Random.guid(), name: "杨洋", age: 29, sex: "男", birth: "1996-09-03", addr: "江西省南昌市" },
    { id: mockjs.Random.guid(), name: "张铁林", age: 36, sex: "男", birth: "1993-1-08", addr: "贵州省贵阳市" },
    { id: mockjs.Random.guid(), name: "林心如", age: 32, sex: "女", birth: "1997-04-20", addr: "云南省昆明市" },
    { id: mockjs.Random.guid(), name: "刘欢", age: 27, sex: "男", birth: "1998-11-17", addr: "甘肃省兰州市" },
    { id: mockjs.Random.guid(), name: "王菲", age: 31, sex: "女", birth: "2000-05-22", addr: "陕西省西安市" },
    { id: mockjs.Random.guid(), name: "张天爱", age: 31, sex: "女", birth: "2000-05-22", addr: "北京市" }
]
export default {
    getStatisticData: () => {
        return UserList
    },
    addUser: (toAdd) => {
        console.log('toAdd', toAdd)
        console.log(JSON.parse(toAdd.body))
        console.log()
        const newUser = {
            id: mockjs.Random.guid(),
            ...JSON.parse(toAdd.body),
            birth: JSON.parse(toAdd.body).birth.slice(0, 10)
        }
        UserList.unshift(newUser)
    },
    delUser: (toDel) => {
        const targetPerson = JSON.parse(toDel.body)
        console.log('toDel', targetPerson)
        UserList = UserList.filter(p => p.id !== targetPerson.id)
    },
    editUser: (toEdit) => {
        const targetPerson = JSON.parse(toEdit.body)
        console.log('toEdit', targetPerson)
        UserList = UserList.map(person => {
            if (person.id === targetPerson.id) {
                return Object.assign({}, person, targetPerson); // 使用Object.assign()将t中的内容拷贝到person中
            } else {
                return person;
            }
        });

    }
}