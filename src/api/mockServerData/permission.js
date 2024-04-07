import mockjs from "mockjs"

const UserList = [
    { username: 'Admin', password: 'Admin' }
]

export default {
    check(form) {
        form = JSON.parse(form.body)
        const res = UserList.filter(item => item.username === form.username && item.password === form.password)

        if (res.length) {
            return {
                code: 20000,
                data: ['这里面是数据'],
                token: mockjs.Random.guid()
            }
        }
        return {
            code: -900,
            message: '密码错误'
        }
    }
}