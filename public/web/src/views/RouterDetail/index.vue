<!--
  @Description:
  @Author: George
  @Date: 2020/12/24 9:11 下午
-->
<template>
  <div class="router-detail">
    <div class="card router-title">
      <div>
        <h1>/users/${name}</h1>
        <p>获取用户信息</p>
      </div>
      <a-button type="primary" @click="handlerSave">保存</a-button>
    </div>
    <div class="card">
      <div class="params-title">
        <h1>Request</h1>
        <a-button type="primary" @click="handlerAddParams">新增参数</a-button>
      </div>
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="视图">
          <a-table bordered :columns="columns" :data-source="data" :pagination="false">
            <a-input slot="params" slot-scope="text, record" v-model="record.params"/>
            <a-input slot="type" slot-scope="text, record" v-model="record.type"/>
            <a-select slot="type" slot-scope="text, record" style="width: 100px" @change="handleChange($event, record)">
              <a-select-option
                v-for="(item, index) in typeList"
                :key="index"
                :value="item.value"
              >{{
                  item.label
                }}
              </a-select-option>
            </a-select>
            <a-checkbox slot="empty" slot-scope="text, record" @change="onChange($event, record)">为空</a-checkbox>
            <a-textarea slot="desc" slot-scope="text, record" v-model="record.desc" :rows="2"/>
<!--            <a-input slot="validator" slot-scope="text, record" v-model="record.validator"/>-->
            <a-input slot="validator" />
            <template slot="operation">
              <div style="text-align: center;">
                <a class="del">删除</a>
              </div>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="JavaScript">
          <monaco-editor
            height="400"
            language="javascript"
            :code="code"
            :editorOptions="options"
            @mounted="onMounted"
            @codeChange="onCodeChange"
          />
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="card">
      <div class="params-title">
        <h1>SQL语句</h1>
      </div>
      <div>
        <monaco-editor
          height="100"
          language="sql"
          :code="tableName"
          :editorOptions="options"
          @mounted="onMountedResult"
          @codeChange="onCodeChangeResult"
        />
<!--        <span>SQL方法：</span>-->
<!--        <a-select style="width: 100px" @change="handleSQLChange">-->
<!--          <a-select-option value="find">查询</a-select-option>-->
<!--          <a-select-option value="create">新增</a-select-option>-->
<!--          <a-select-option value="update">修改</a-select-option>-->
<!--          <a-select-option value="delete">删除</a-select-option>-->
<!--        </a-select>-->
<!--        <span class="left-gap">表名：</span>-->
<!--        <div class="table-name">-->
<!--          <a-input v-model="tableName"/>-->
<!--        </div>-->
<!--        <span class="left-gap"></span>-->
<!--        <a-checkbox @change="onPaginationChange">是否启用分页</a-checkbox>-->
      </div>
    </div>
    <div class="card">
      <div class="params-title">
        <h1>返回结果</h1>
      </div>
      <div>
        <monaco-editor
          height="300"
          language="javascript"
          :code="resultCode"
          :editorOptions="options"
          @mounted="onMountedResult"
          @codeChange="onCodeChangeResult"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MonacoEditor from 'vue-monaco-editor'
import _ from 'lodash'

const columns = [
  {
    title: '参数',
    dataIndex: 'params',
    key: 'params',
    scopedSlots: { customRender: 'params' }
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: 140,
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '是否为空',
    dataIndex: 'empty',
    key: 'empty',
    width: 140,
    scopedSlots: { customRender: 'empty' }
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    scopedSlots: { customRender: 'desc' }
  },
  {
    title: '验证',
    dataIndex: 'validator',
    key: 'validator',
    scopedSlots: { customRender: 'validator' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    width: 100,
    scopedSlots: { customRender: 'operation' }
  }
]

const data = [
  {
    params: '',
    type: '',
    empty: false,
    desc: '',
    validator: function () {}
  }
]

const emptyData = [
  {
    params: '',
    type: '',
    empty: false,
    desc: '',
    validator: function () {}
  }
]

const typeList = [
  {
    value: 'String',
    label: 'String'
  },
  {
    value: 'Number',
    label: 'Number'
  },
  {
    value: 'Boolean',
    label: 'Boolean'
  },
  {
    value: 'Array',
    label: 'Array'
  },
  {
    value: 'Object',
    label: 'Object'
  }
]

export default {
  name: 'RouterDetail',
  components: {
    MonacoEditor
  },
  data () {
    return {
      data,
      columns,
      typeList,
      editor: null,
      code: '// Type away! \n',
      options: {
        selectOnLineNumbers: false
      },
      tableName: '',
      resultCode: 'function resultHandler (res) { \n\treturn res \n}'
    }
  },
  methods: {
    onPaginationChange () {},
    onMountedResult () {},
    onCodeChangeResult () {},
    onMounted (editor) {
      this.editor = editor
      console.log(this.editor)
    },
    onCodeChange (editor) {
      // console.log(editor.getValue())
    },
    callback (key) {
      if (key === '2') {
        const res = []
        this.data.forEach(v => {
          res.push({
            params: '',
            type: '',
            empty: false,
            desc: '',
            validator: v.validator.toString()
          })
        })
        this.code = JSON.stringify(res, null, 4)
      }
    },
    handleSQLChange (e, record) {
      // this.$set(record, 'empty', e.target.checked)
      // console.log(this.data)
    },
    onChange (e, record) {
      this.$set(record, 'empty', e.target.checked)
      // console.log(this.data)
    },
    handleChange (value, record) {
      this.$set(record, 'type', value)
    },
    handlerAddParams () {
      this.data.push(_.cloneDeep(emptyData[0]))
    },
    handlerSave () {}
  }
}
</script>

<style scoped lang="scss">
.router-detail {
  height: calc(100vh - 24px);
  overflow: auto;
}
.router-title {
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f2f5;
}

.params-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
}

.del {
  color: #f13535;
}

.table-name {
  display: inline-block;
  width: 140px;
}
.left-gap {
  margin-left: 20px;
}
</style>
