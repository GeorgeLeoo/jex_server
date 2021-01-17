<!--
  @Description:
  @Author: George
  @Date: 2020/12/24 9:11 下午
-->
<template>
  <div>
    <div class="card">
      <h1>/users/${name}</h1>
      <p>获取用户信息</p>
    </div>
    <div class="card">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="视图">
          <a-table bordered :columns="columns" :data-source="data">
            <template slot="params" slot-scope="record">
              <a-input v-model="record.params"/>
            </template>
<!--            <a-input slot="params" slot-scope="record" v-model="record.params"/>-->
<!--            <a-input slot="type" slot-scope="record" v-model="record.type"/>-->
<!--            <a-input slot="empty" slot-scope="record" v-model="record.empty"/>-->
<!--            <a-input slot="desc" slot-scope="record" v-model="record.desc"/>-->
<!--            <a-input slot="validator" slot-scope="record" v-model="record.validator"/>-->
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="JavaScript">
          <a-textarea placeholder="代码" :rows="4"/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
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
    width: 100,
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '是否为空',
    dataIndex: 'empty',
    key: 'empty',
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
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
export default {
  name: 'RouterDetail',
  data () {
    return {
      data,
      columns
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
}
</style>
