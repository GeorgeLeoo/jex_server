<template>
  <div>
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        class="layout-sider"
        :trigger="null"
        collapsible
      >
        <div class="sider-title">
          <span v-if="!collapsed">所有项目</span>
          <a-button
            type="primary"
            shape="round"
            icon="plus"
            @click="handlerShowAddDialog"
          />
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <div>
              <span>CowPen</span>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  <a-icon type="more" class="more-icon" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item
                    v-for="(item, index) in projectMoreList"
                    :key="index"
                  >
                    <a href="javascript:;" class="project-more-item">{{ item.label }}</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </div>
          </a-menu-item>
          <a-menu-item key="2">
            <div>
              <span>微信小程序记账</span>
              <a-icon
                type="more"
                class="more-icon"
                @click="handlerProjectMore()"
              />
            </div>
          </a-menu-item>
          <a-menu-item key="3">
            <div>
              <span>车务系统</span>
              <a-icon
                type="more"
                class="more-icon"
                @click="handlerProjectMore()"
              />
            </div>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
    <add-project-dialog v-model="showAddProjectDialog" :type="type" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddProjectDialog from "./components/AddProjectDialog";

export default {
  name: "Home",
  components: {
    AddProjectDialog
  },
  data() {
    return {
      collapsed: false,
      showAddProjectDialog: false,
      type: "",
      projectMoreList: [
        {
          type: "OPEN",
          label: "打开"
        },
        {
          type: "CLOSE",
          label: "关闭"
        },
        {
          type: "EDIT",
          label: "编辑"
        },
        {
          type: "DELETE",
          label: "删除"
        },
        {
          type: "EXPORT",
          label: "导出"
        }
      ]
    };
  },
  methods: {
    handlerShowAddDialog() {
      this.type = "ADD";
      this.showAddProjectDialog = true;
    },
    handlerProjectMore() {
      console.log("more");
    }
  }
};
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.layout-sider {
  height: calc(100vh);
  background: #001529;
  .more-icon {
    float: right;
    height: 40px;
    line-height: 40px;
  }
}
  .project-more-item {
    width: 120px;
    text-align: center;
  }
.sider-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  padding-left: 24px;
  padding-right: 16px;
  span {
    color: #fff;
  }
}
</style>
