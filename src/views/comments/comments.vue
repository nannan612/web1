<template>
    <div class="comments">

<h2 class="title-2 text-center"> 3 Comments</h2>

<div class="comments-single">
    <img src="../../assets/images/comenter-1.jpg" alt="comment image" />
    <h3>Jeff Fashkin <span>3 days ago</span> </h3>
    <p>Proactively underwhelm performance based products before functional expertise.
        Intrinsicly scale distinctive web services without client-centered benefits. Rapidiously
        mesh open-source customer service whereas process-centric opportunities. Professionally
        communicate enabled e-business with cooperative results. Seamlessly seize maintainable
        leadership after.</p>
    <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>

</div>
<div class="comments-single reply">
    <img src="../../assets/images/comenter-2.jpg" alt="comment image" />
    <h3>Daniel Wood <span>3 days ago</span> </h3>
    <p>Professionally communicate enabled e-business with cooperative results. Seamlessly seize
        maintainable leadership after.</p>
    <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>
</div>

<div class="comments-single">
    <img src="../../assets/images/comenter-3.jpg" alt="comment image" />
    <h3>Brandon Cole <span>3 days ago</span> </h3>
    <p>Rapidiously mesh open-source customer service whereas process-centric opportunities.
        Professionally communicate enabled e-business with cooperative results. Seamlessly seize
        maintainable leadership after.</p>
    <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>
</div>

</div>
<div v-for="item in list" class="comments">
<div class="comments-single">
    <img src="../../assets/images/comenter-1.jpg" alt="comment image" />
    <h3>{{item.name}} <span>3 days ago</span> </h3>
    <p>{{item.desc}}</p>
    <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>
</div>
</div>
<div class="comment-box">
<h2 class="title-2 text-center"> Add Comment </h2>
<el-form :model="form" class="comform">
    <div class='row'>
        <el-form-item >
            <el-input v-model="form.name" 
                placeholder="Name" />
        </el-form-item>
        <el-form-item  >
            <el-input v-model="form.email" 
                placeholder="Email" />
        </el-form-item>
        <el-form-item >
            <el-input v-model="form.url" 
                placeholder="Website (optional)" />
        </el-form-item>
        <el-form-item label="评论">
            <el-input v-model="form.desc" type="textarea"  class="comment"/>
        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="onSubmit">发表评论</el-button>
            </el-form-item>
    </div>
</el-form>
</div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
    name: '',
    email: '',
    url: '',
    desc: '',
})
const list = reactive([])
const onSubmit= ()=>{
    console.log(form);
    list.push(form);
    console.log(list);
}
</script>
<style>
@import url(../../assets/css/bootstrap.min.css);
@import url(../../assets/fonts/font-awesome/css/font-awesome.min.css);
@import url(../../assets/css/style.css);
.comform{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>