import { createRouter, createWebHistory } from 'vue-router'

//import layoutes
import FrontendLayout from '@/layouts/Frontend.vue'

//import view 
//frontend
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'


import backend from '@/views/backend/Main.vue'

import Notfound404 from '@/views/error/Notfound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: Home
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: About
      }
    ],
    meta: {
      title: 'About',
      description: 'about'
    }
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: Portfolio
      }
    ],
    meta: {
      title: 'Portfolio',
      description: 'Portfolio'
    }
  },
  {
    path: '/Service',
    name: 'Service',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: Service
      }
    ],
    meta: {
      title: 'service',
      description: 'service'
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: Contact
      }
    ],
    meta: {
      title: 'contact',
      description: 'contact'
    }
  },

  {
    path: '/Register',
    name: 'Register',
    component: FrontendLayout,
    children:[
      {
        path :'',
        component: Register
      }
    ],
    meta: {
      title: 'Register',
      description: 'Register'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    // children:[
    //   {
    //     path :'',
    //     component: Login
    //   }
    // ]
    meta: {
      title: 'login',
      description: 'login'
    }
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    // children:[
    //   {
    //     path :'',
    //     component: ForgotPassword
    //   }
    // ]
    meta: {
      title: 'ลืมรหัส',
      description: 'ลืมรหัส'
    }
  },
    //backend
    {
      path: "/backend",
      name: backend,
      component: backend,
      meta: {
        title: 'backend',
        description: 'backend '
      }
    },


  //error 404
  {
    path: "/:catchAll(.*)",
    component: Notfound404,
    meta: {
      title: 'error',
      description: 'error 404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
