<template>
  <div>
    <a-layout>
      <a-layout-sider class="layout-sider">
        <ul class="parent-router">
          <li class="parent-router-item router-header">
            <a-input v-model="search" placeholder="父级名称">
              <a-icon slot="prefix" type="search"/>
            </a-input>
            <a-button
              style="margin-left: 6px"
              type="primary"
              icon="plus"
              size="small"
            />
          </li>
          <li v-for="item in 100" :key="item" class="parent-router-item">
            <div class="left">
              <p class="parent-router-item-title">/users</p>
              <p class="parent-router-item-desc">用户相关</p>
            </div>
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-icon type="more" class="more-icon"/>
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;" class="project-more-item">新建子路由</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;" class="project-more-item">修改</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;" class="project-more-item">删除</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
        </ul>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="container">
          <ul class="children-router">
            <li class="children-router-item router-header">
              <a-input v-model="search" placeholder="名称">
                <a-icon slot="prefix" type="search"/>
              </a-input>
            </li>
            <li v-for="item in 100" :key="item" class="children-router-item">
              <div class="left">
                <p class="children-router-item-title"><span class="method post">POST</span> /${uid}</p>
                <p class="children-router-item-desc">用户相关</p>
              </div>
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  <a-icon type="more" class="more-icon"/>
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;" class="project-more-item">修改</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;" class="project-more-item">删除</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
          </ul>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  name: 'Router',
  data () {
    return {
      search: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.router-header {
  position: sticky;
  top: 0;
  background: #fff;
}

.layout-sider {
  height: calc(100vh - 110px);
  background: #ffff;

  .parent-router {
    height: calc(100vh - 110px);
    overflow: auto;

    .parent-router-item {
      padding: 12px 20px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #e6f7ff;
      }

      .left {
        flex: 1;
      }

      .parent-router-item-title {
        font-size: 18px;
      }

      .parent-router-item-desc {
        font-size: 12px;
        color: #536371;
        margin-top: 6px;
      }
    }
  }
}

.container {
  padding: 0 20px;

  .children-router {
    background: #fff;
    height: calc(100vh - 110px);
    overflow: auto;

    .children-router-item {
      padding: 12px 20px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #e6f7ff;
      }
      .method {
        display: inline-block;
        padding: 0 6px;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-right: 6px;
      }

      .post {
        background: #951cec;
      }

      .get {
        background: #15a215;
      }

      .delete {
        background: #f11535;
      }

      .patch {
        background: #ee8f1b;
      }

      .put {
        background: #0f73ee;
      }

      .left {
        flex: 1;
      }

      .children-router-item-title {
        font-size: 18px;
      }

      .children-router-item-desc {
        font-size: 12px;
        color: #536371;
        margin-top: 6px;
      }
    }
  }
}
</style>
