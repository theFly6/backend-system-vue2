import mockjs from "mockjs";

export default {
    getStatisticData: () => {
        const chartData = []
        for (let i = 0; i < 7; i++) {
            chartData.push(
                mockjs.mock({
                    苹果: mockjs.Random.float(100, 8000, 0, 0),
                    vivo: mockjs.Random.float(100, 8000, 0, 0),
                    oppo: mockjs.Random.float(100, 8000, 0, 0),
                    魅族: mockjs.Random.float(100, 8000, 0, 0),
                    小米: mockjs.Random.float(100, 8000, 0, 0),
                    三星: mockjs.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    { name: '苹果', value: mockjs.Random.integer(100, 3000) },
                    { name: 'vivo', value: mockjs.Random.integer(100, 3000) },
                    { name: 'oppo', value: mockjs.Random.integer(100, 3000) },
                    { name: '魅族', value: mockjs.Random.integer(100, 3000) },
                    { name: '小米', value: mockjs.Random.integer(100, 3000) },
                    { name: '三星', value: mockjs.Random.integer(100, 3000) },
                ],
                // 柱状图
                userData: [
                    { date: '周一', new: 5, active: 200 },
                    { date: '周二', new: 10, active: 500 },
                    { date: '周三', new: 12, active: 550 },
                    { date: '周四', new: 7, active: 300 },
                    { date: '周五', new: 9, active: 240 },
                    { date: '周六', new: 6, active: 100 },
                    { date: '周日', new: 5, active: 420 },
                ],
                // 折线图
                orderData: {
                    date: ['2009001', '2009002', '2009003', '2009004', '2009005', '2009006', '2009007',],
                    data: chartData
                },
                // 表格数据
                tableData: [
                    {
                        name: "oppo",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "小米",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "HONOR",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "iPhone",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "vivo",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "三星",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "huawei",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "apple",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "one+",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "two+",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                    {
                        name: "three+",
                        todayBuy: mockjs.Random.integer(30, 80),
                        monthBuy: mockjs.Random.integer(90, 100),
                        totalBuy: mockjs.Random.integer(300, 800),
                    },
                ],
                // 销售量数据
                cardsData: [
                    {
                        name: "今日支付订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "success",
                        color: "#2ec7e9",
                    },
                    {
                        name: "今日收藏订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "star-on",
                        color: "#ffb980",
                    },
                    {
                        name: "今日未支付订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "s-goods",
                        color: "#5ab1ef",
                    },
                    {
                        name: "本月支付订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "success",
                        color: "#2ec7e9",
                    },
                    {
                        name: "本月收藏订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "star-on",
                        color: "#ffb980",
                    },
                    {
                        name: "本月未支付订单",
                        value: mockjs.Random.integer(100, 3000),
                        icon: "s-goods",
                        color: "#5ab1ef",
                    },
                ]
            }
        }
    }
}