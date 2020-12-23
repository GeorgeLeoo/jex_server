<template>
  <a-modal
    :title="title"
    :visible="value"
    :confirm-loading="loading"
    okText='创建'
    cancelText='取消'
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout" label="项目名称" has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                },
                {
                  validator: validateToNextPassword
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="项目说明"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="MySQL主机名"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="MySQL端口"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="MySQL账号"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="MySQL密码"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="Redis主机名"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="Redis端口"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
      <a-form-item
        v-bind="formItemLayout"
        label="Redis密码"
        has-feedback
      >
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]
            }
          ]"
          type="text"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  name: 'AddProjectDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      title: '',
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      }
    }
  },
  watch: {
    value (val) {
      if (val) {
        if (this.type === 'ADD') {
          this.title = '新建'
        }
        if (this.type === 'EDIT') {
          this.title = '编辑'
        }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    compareToFirstPassword (rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        // eslint-disable-next-line standard/no-callback-literal
        callback('Two passwords that you enter is inconsistent!')
      } else {
        callback()
      }
    },
    validateToNextPassword (rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleOk () {
      this.$emit('ok')
    },
    handleCancel () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style></style>
