<template>
    <main class="main">
        <!-- Page Title -->
        <div class="page-title text-center">
            <h2 class="title"> Feul Transportation and Railway rules </h2>
            <p class="description light"> By <a> Eduardo Flores </a> on March 06 in Transportation. <a> 3 comments </a> </p>
        </div>
        <!-- Page Title -->
        <!-- Breadcrumbs -->
        <div class="breadcrumbs">
            <div class="container">
                <span class="parent"> <i class="fa fa-home"></i> <a href="#"> Home </a> </span>
                <i class="fa fa-chevron-right"></i>
                <span class="child"> <a href="#"> NEWS AND MEDIA </a> </span>
                <i class="fa fa-chevron-right"></i>
                <span class="child"> Blog </span>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-9 blog-info">
                    <section class="blog-single">
                        <div class="blog-slide">
                            <ul class="slides">
                                <li>
                                    <img src="../assets/images/blog-single-1.jpg" alt="blog-image 1" />
                                </li>
                                <li>
                                    <img src="../assets/images/blog-single-2.jpg" alt="blog-image 2" />
                                </li>
                                <li>
                                    <img src="../assets/images/blog-single-3.jpg" alt="blog-image 3" />
                                </li>
                            </ul>
                        </div>

                        <div class="single-post">
                            <h4 class="services-title-one subtitle">Uniquely transform premier infrastructures before
                                functional metrics. Completely mesh sustainable leadership for economically sound sources.
                            </h4>
                            <p>Distinctively fashion standardized communities vis-a-vis seamless applications.
                                Authoritatively recaptiualize efficient supply chains without vertical initiatives.
                                Progressively visualize strategic relationships with error-free processes. Credibly
                                strategize fully tested outsourcing with functional e-markets. Dynamically evisculate user
                                friendly architectures before cross-media experiences. Interactively disintermediate
                                empowered data whereas distinctive human capital. Compellingly utilize.</p>
                            <p>Dynamically utilize intermandated materials through customized process improvements.
                                Conveniently recaptiualize adaptive leadership before long-term high-impact functionalities.
                                Completely incubate customer directed meta-services after economically sound imperatives.
                                Distinctively evolve diverse applications for enterprise processes. Monotonectally
                                disintermediate functionalized solutions rather than progressive leadership.</p>

                            <div class="cta">
                                <h2>Wealth can only be accumulated by the earnings of industry and the savings of frugality.
                                </h2>
                            </div>

                            <h2 class="title-2">The Conclusion</h2>
                            <p>Continually myocardinate reliable channels with distributed networks. Monotonectally scale
                                end-to-end bandwidth for ethical e-markets. Enthusiastically disintermediate low-risk
                                high-yield ideas for robust outsourcing. Monotonectally provide access to corporate data
                                through diverse materials. Collaboratively empower resource maximizing experiences and
                                progressive meta-services. Energistically engage quality leadership for cooperative
                                services. Energistically leverage existing client-centered experiences via virtual
                                solutions. Compellingly conceptualize professional e-tailers through efficient action items.
                                Credibly seize pandemic ROI with client-centered applications.</p>
                            <p>Interactively mesh client-centered content whereas interdependent niche markets.
                                Appropriately iterate one-to-one web-readiness rather than impactful supply.</p>
                        </div>

                        <div class="social-share text-center">
                            <a class="fb-share"> <i class="fa fa-facebook" aria-hidden="true"></i>Share on Facebook </a>
                            <a class="tweet-share"> <i class="fa fa-twitter" aria-hidden="true"></i>Share on Twitter </a>
                        </div>

                        <div class="author-box">
                            <img src="../assets/images/post-author.png" alt="Taylor">
                            <div class="author-details">
                                <h4 class="subtitle">Taylor White</h4>
                                <p>Continually myocardinate reliable channels with distributed networks. Monotonectally
                                    scale end-to-end bandwidth for ethical e-markets. </p>
                                <div class="author-share">
                                    <a> <i class="fa fa-facebook" aria-hidden="true"></i> </a>
                                    <a> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
                                    <a> <i class="fa fa-linkedin" aria-hidden="true"></i> </a>
                                </div>
                            </div>
                        </div>

                        <div class="comments">

                            <h2 class="title-2 text-center"> 3 Comments</h2>

                            <div class="comments-single">
                                <img src="../assets/images/comenter-1.jpg" alt="comment image" />
                                <h3>Jeff Fashkin <span>3 days ago</span> </h3>
                                <p>Proactively underwhelm performance based products before functional expertise.
                                    Intrinsicly scale distinctive web services without client-centered benefits. Rapidiously
                                    mesh open-source customer service whereas process-centric opportunities. Professionally
                                    communicate enabled e-business with cooperative results. Seamlessly seize maintainable
                                    leadership after.</p>
                                <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>

                            </div>
                            <div class="comments-single reply">
                                <img src="../assets/images/comenter-2.jpg" alt="comment image" />
                                <h3>Daniel Wood <span>3 days ago</span> </h3>
                                <p>Professionally communicate enabled e-business with cooperative results. Seamlessly seize
                                    maintainable leadership after.</p>
                                <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>
                            </div>

                            <div class="comments-single">
                                <img src="../assets/images/comenter-3.jpg" alt="comment image" />
                                <h3>Brandon Cole <span>3 days ago</span> </h3>
                                <p>Rapidiously mesh open-source customer service whereas process-centric opportunities.
                                    Professionally communicate enabled e-business with cooperative results. Seamlessly seize
                                    maintainable leadership after.</p>
                                <a class="reply-link"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a>
                            </div>

                        </div>
                        <div v-for="item in list" class="comments">
                            <div class="comments-single">
                                <img src="../assets/images/comenter-1.jpg" alt="comment image" />
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

                    </section>
                </div>

                <div class="col-md-3 sidebar">

                    <div class="sidebar-search-form">
                        <input type="text" class="  search-query form-control" placeholder="Search" />
                        <button class="btn search-btn" type="button">
                            <span class="fa fa-search"></span>
                        </button>
                    </div>

                    <div class="sidebar-blog-categories">
                        <h3 class="sidebar-title">Categories</h3>

                        <ul>
                            <li> <a>The Company</a> </li>
                            <li> <a>Careers</a> </li>
                            <li> <a>Transportation</a> </li>
                            <li> <a>Environment</a> </li>
                            <li> <a>Refineries</a> </li>
                            <li> <a>Technology</a> </li>
                            <li> <a>Marketing &amp; Sales</a> </li>
                        </ul>

                    </div>

                    <div class="sidebar-download">
                        <div class="download-file color-bg">
                            <a><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF <span>1.5 MB</span>
                            </a>
                        </div>

                    </div>

                    <div class="sidebar-fact">

                        <h3 class="about-quick-fact">Quick Fact</h3>
                        <p>Distinctively fashion in the effect of standard products communities via seamless applications.
                            Authoritatively recaptiualize.</p>
                        <a class="btn btn-primary about-quick-fact-button" role="button">CALL TO ACTION</a>

                    </div>

                    <div class="sidebar-tags">
                        <h3 class="sidebar-title"> Tags </h3>
                        <a>OFFSHORE</a>
                        <a>DEVELOPMENT</a>
                        <a>TRANSPORTATION</a>
                        <a>OIL &amp; GAS</a>
                        <a>TRADING</a>
                        <a>SHELL</a>
                        <a>SUPPLY</a>
                        <a>ENVIRONMENT</a>
                        <a>CAREERS</a>

                    </div>

                </div>

            </div>
        </div>
    </main>
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
@import url(../assets/css/bootstrap.min.css);
@import url(../assets/fonts/font-awesome/css/font-awesome.min.css);
@import url(../assets/css/style.css);
.comform{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>