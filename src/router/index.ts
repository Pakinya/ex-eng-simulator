import { createRouter, createWebHistory } from 'vue-router'

import { languageSupportGuard } from './guards/languageSupportGuard'

import { profileRoutes } from '@mprofile'

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: { name: 'Profile' },
    children: [
      {
        path: '/main-page',
        name: 'MainPage',
        component: () => import( '@/views/MainPage.vue' ),
        props: {
          msg: 'router msg',
        },
      },
      ...profileRoutes,
    ],
  },
]

const router = createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes,
} )

router.beforeEach( languageSupportGuard )

export { router }
