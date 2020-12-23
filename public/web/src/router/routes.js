import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/router',
    children: [
      {
        path: '/router',
        name: 'router',
        component: () => import(/* webpackChunkName: "router" */ '../views/Router/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue')
  }
]
export default routes
