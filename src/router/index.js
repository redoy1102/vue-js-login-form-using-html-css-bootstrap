import Vue from 'vue'
import VueRouter from "vue-router";
import Register_Form from "@/components/Register_Form";
import SignIn_Form from "@/components/SignIn_Form";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn_Form',
    component: SignIn_Form
  },
  {
    path: '/register',
    name: 'Register_Form',
    component: Register_Form
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
