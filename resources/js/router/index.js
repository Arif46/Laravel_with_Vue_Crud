import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import CategoryList from '../pages/category/Index.vue'
import CreatePage from '../pages/category/Create.vue'
import EditCategory from '../pages/category/Edit.vue'


const  routes = new VueRouter({
       mode: 'history',
       routes:[
           {
              path:'/',
              component:Home,
              name:'home',
           },
           {
            path:'/category',
            component:CategoryList,
            name:'category-list',
         },
         {
            path:'/category/create',
            component:CreatePage,
            name:'create-page',
         },
         {
            path: '/category/edit/:id',
            component: EditCategory,
            name: 'edit-category',
        },
        
       ]
    }); 
    
export default routes;