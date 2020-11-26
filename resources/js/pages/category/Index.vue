<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-categories-center">
                        <h5 class="mb-0">Product Categories</h5>
                        <router-link  class="btn btn-primary" :to="{name:'create-page'}">Create Category</router-link>
                    </div>
                     
                    <div class="card-body">
                       <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">name</th> 
                            <th scope="col">slug</th> 
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in categories" :key="category.id">
                                <td>{{ category.id }}</td>
                                <td>{{ category.name }}</td>
                                <td>{{ category.slug }}</td>
                                <td>
                                    <router-link :to="{name:'edit-category',params:{id:category.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                    <a @click.prevent="deleteCategory(category)" class="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories:[],
            }
        },

        methods: {
          loadCategories(){
              axios.get('http://127.0.0.1:8000/api/category')
              .then(response => {
                 this.categories = response.data;
              });
          },
          deleteCategory(category){
              axios.delete(`/api/category/${category.id}`)
              .then(()=>{
                   this.$toast.success({
                            title:'success',
                            message:'Category delete Successfully.'
                        });
                 });
                 let index =this.categories.indexOf(category);
                 this.categories.splice(index, 1);
               
           
          }

        },
          mounted() {
            this.loadCategories();
        },       
    } 
</script>
