<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
             <div class="card">
                 <div class="card-header d-flex justify-content-between align-items-center">
                     <h5 class="mb-0">Edit Category-{{categoryForm.name}}</h5>
                       <router-link  class="btn btn-primary" :to="{name:'create-page'}">Category list</router-link>
                 </div>
                 <div class="card-body">
                     <div class="row">
                       <div class="col-lg-6 offset-3">
                                <form @submit.prevent="updateCategory">
                            <div class="form-group">
                                <label for="">Category Name</label>

                               <input
                                v-model="categoryForm.name"
                                type="text" name="name"
                                placeholder=" Category name"
                                class="form-control"
                                :class="{ 'is-invalid':categoryForm.errors.has('name') }"
                               >

                             <has-error :form="categoryForm" field="name"></has-error>
                            </div>
                            <button type="submit" class="btn btn-primary">Update Category</button>
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
    data(){
        return {
            categoryForm: new Form({
                name: '',
            }),
        }
    },
    methods: {
        updateCategory(){
            let id = this.$route.params.id;

            this.categoryForm.put(`/api/category/${id}`).then(() => {
                this.$toast.success({
                    title:'Success!',
                    message:'Category updated successfully.'
                });
            })
        },

        loadCategory(){
            let id = this.$route.params.id;
            
            axios.get(`/api/category/${id}/edit`).then(response => {
                this.categoryForm.name = response.data.name;
            });
        }
    },
    mounted(){
        this.loadCategory();
    }
}
</script>

<style>

</style>