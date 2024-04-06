import mockjs from "mockjs";
import home from "./mockServerData/home";
import user from "./mockServerData/user";

// 定义mock请求拦截
mockjs.mock(/^\/api\/home\/getData/, home.getStatisticData)

mockjs.mock(/^\/api\/user\/getUser/, user.getStatisticData)
mockjs.mock(/^\/api\/user\/addUser/, user.addUser)
mockjs.mock(/^\/api\/user\/delUser/, user.delUser)
mockjs.mock(/^\/api\/user\/editUser/, user.editUser)