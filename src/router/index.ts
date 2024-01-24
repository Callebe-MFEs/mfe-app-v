import { createRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

let router: Router | undefined = undefined

function getRouter(basePath = '/') {
  console.log('vue app base path', basePath)
  if (!router) {
    router = createRouter({
      history: createWebHistory(basePath),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    })
  }

  return router
}

export default getRouter
