<template>
  <div class="User">
    <!-- 新增编辑表单 -->
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        :inline="true"
        :rules="rules"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
        <div class="block"></div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

    <div
      class="manage-header"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <!-- 新增用户按钮 -->
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
      <!-- form搜索区域 -->
      <el-form
        inline
        ref="form"
        :model="form"
        label-width="80px"
        style="align-items: center"
      >
        <el-form-item style="margin-bottom: auto">
          <el-input
            v-model="searchWord"
            placeholder="在此输入过滤条件"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
        <el-button type="primary" @click="updateUser">所有人</el-button>
      </el-form>
    </div>

    <!-- 用户列表展示 -->
    <el-table :data="tableData" style="width: 100%" height="95%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="180">
        <template slot-scope="scope">
          {{ "男1".includes(scope.row.sex) ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="出生日期" width="180">
      </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      layout="prev, pager, next"
      :total="totalData.length"
      @current-change="toPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getUser, addUser, delUser, editUser } from '@/api';
export default {
  name: "UserVue",
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"))
      } else if (!/^\d+$/.test(value)) {
        callback(new Error("请输入数字值"))
      } else if (value < 0 || value > 180) {
        callback(new Error("年龄必须在0-180之间"))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      subType: 0, // 提交表单类型，0表示add，1表示编辑
      curPage: 0,
      totalData: [],
      searchWord: '',
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        birth: [{ required: true, message: "请输入出生日期", trigger: "blur" }],
        addr: [{ required: true, message: "请输入地址", trigger: "blur" }],
        age: [
          {
            validator: checkAge,
            required: true,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((validate) => {
        console.log('即将提交')
        if (validate) {
          console.log('合法，正在提交')
          // 填写表单提交、处理逻辑
          if (this.subType == 0)
            addUser(this.form).then(() => this.updateUser()).then(() => this.handleClose())
          else if (this.subType == 1)
            editUser(this.form).then(() => this.updateUser()).then(() => this.handleClose())
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    handleAdd() {
      this.subType = 0
      Object.keys(this.form).forEach(key => this.form[key] = '')
      this.dialogVisible = true
    },
    handleSearch() {
      this.totalData = this.totalData.filter(person => {
        return person.name.includes(this.searchWord)
      })
      this.searchWord = ''
    },
    handleEdit(person) {
      this.subType = 1
      this.form = JSON.parse(JSON.stringify(person))
      this.dialogVisible = true
    },
    handleDelete(person) {
      console.log(person)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser(person).then(() => {
          this.updateUser()
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    updateUser() {
      getUser().then(res => {
        this.totalData = res
      })
    },
    toPage(nextPage) {
      console.log(nextPage)
      this.curPage = nextPage - 1
      this.updateUser()
    },
    // 当前页的数据的逻辑处理函数
    handleTableData() {
      const res = this.totalData.slice(this.curPage * 10, 10 + this.curPage * 10)
      if (res.length === 0) {
        this.curPage = 0;
      }
      return this.totalData.slice(this.curPage * 10, 10 + this.curPage * 10)
    }
  },
  computed: {
    // 返回当前页的数据
    tableData() {
      return this.handleTableData()
    }
  },
  mounted() {
    this.updateUser()
  }
};
</script>

<style>
.User {
  height: 90%;
}
</style>