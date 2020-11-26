<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
             <div class="card">
                 <div class="card-header d-flex justify-content-between align-items-center">
                     <h5 class="mb-0">Create Category</h5>
                       <router-link  class="btn btn-primary" :to="{name:'create-page'}">Category list</router-link>
                 </div>
                 <div class="card-body">
                     <div class="row">
                       <div class="col-lg-6 offset-3">
                                <form @submit.prevent="createcategory">
                            <div class="form-group">
                                <label for="">Category Name</label>
                               <input
                                v-model="categoryForm.name"
                                type="text" name="name"
                                placeholder=" Category name"
                                class="form-control"
                                :class="{ 'is-invalid': categoryForm.errors.has('name') }"
                               >
                             <has-error :form="categoryForm" field="name"></has-error>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                       </div>
                     </div>
              
                 </div>
             </div>
          </div>
      </div>
  </div>
</template>
<script>
import { Form } from 'vform'
 export default {
        data() {
            return {
                categoryForm: new Form({
                            name: '', 
                    }),
              }
           },
           methods:{
              createcategory(){
            //   axios.post('/api/category',{name:this.name})
            //   .then(response=>{
            //     console.log(response);
            //   });
              //validation
               this.categoryForm.post('/api/category')
               .then(({ data }) => { 
                    this.categoryForm.name = '';

                    this.$toast.success({
                            title:'success',
                            message:'Category Created Successfully.'
                        })
                 })
            }
        }
 }
</script>
<style>


</style>