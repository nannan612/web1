<template>
    <main class="main">
        <!-- Page Title -->
        <div class="page-title text-center">
            <h2 class="title"> 知识文库 </h2>
            <p class="description light"> 在网站知识文库上，你可以找到与自己感兴趣的领域相关的各种文章，从而丰富自己的知识和技能。
                <br> 我们致力于为用户提供高质量的内容，以帮助其更好地理解和应用所学知识，并且不断更新和扩大知识库的内容。
            </p>
        </div>
        <!-- Page Title -->
        <!-- Breadcrumbs -->
        <div class="breadcrumbs">
            <div class="container">
                <span class="parent"> <i class="fa fa-home"></i> <router-link to="/index">首页</router-link> </span>
                <i class="fa fa-chevron-right"></i>
                <span class="child"> 论文 </span>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-md-9 blog-grid">
                    <section class="blog-services">
                        <div class="row news">
                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">MAR </span> <span class="date"> 06</span>
                                    </div>
                                    <a class="hover-effect">
                                        <img src="../../assets/img/news1.jpg" alt="Fuel" />
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <!-- 论文1 -->
                                    <h3><a>燃料运输和铁路规定 </a></h3>
                                    <p>By <a>Eduardo Flores</a> in Transportation</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">Feb </span> <span class="date"> 24</span>
                                    </div>
                                    <a class="hover-effect">
                                        <router-link to="/singlepaper">

                                            <img src="../../assets/img/news1.jpg" alt="Field Training" />
                                        </router-link>
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <h3><a> 燃料运输和铁路规定 </a> </h3>
                                    <p>By <a>Clinton Chavez</a> in TCareers</p>
                                </div>
                            </div>

                            <div class="clearfix spacer-60"> </div>

                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">Jan </span> <span class="date"> 17</span>
                                    </div>
                                    <a class="hover-effect">
                                        <router-link to="/singlepaper">

                                            <img src="../../assets/img/news1.jpg" alt="Field Training" />
                                        </router-link>
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <h3><a> 一项关于可持续性的研究 &amp; 环境因素 </a> </h3>
                                    <p>By <a>Gertrude Rose</a> in Environment</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">Feb </span> <span class="date"> 24</span>
                                    </div>
                                    <a class="hover-effect">
                                        <router-link to="/singlepaper">

                                            <img src="../../assets/img/news1.jpg" alt="Field Training" />
                                        </router-link>
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <h3> <a> 针对新员工的现场培训课程。 </a> </h3>
                                    <p>By <a>Clinton Chavez</a> in TCareers</p>
                                </div>
                            </div>

                            <div class="clearfix spacer-60"> </div>

                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">MAR </span> <span class="date"> 06</span>
                                    </div>
                                    <a class="hover-effect">
                                        <router-link to="/singlepaper">
                                            <img src="../../assets/img/news1.jpg" alt="Fuel" />
                                        </router-link>
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <h3> <a> FUEL TRANSPORTATION AND RAILWAY RULES </a> </h3>
                                    <p>By <a>Eduardo Flores</a> in Transportation</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="blog-img-box">
                                    <div class="blog-date"> <span class="month">Feb </span> <span class="date"> 24</span>
                                    </div>
                                    <a class="hover-effect">
                                        <router-link to="/singlepaper">

                                            <img src="../../assets/img/news1.jpg" alt="Field Training" />
                                        </router-link>

                                    </a>
                                </div>
                                <div class="blog-content">
                                    <h3><a> FIELD TRAINING SESSIONS FOR NEW EMPLOYEES </a> </h3>
                                    <p>By <a>Clinton Chavez</a> in TCareers</p>
                                </div>
                            </div>
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
                        <h3 class="sidebar-title">分类</h3>

                        <ul>
                            <li> <a>我们的网站</a> </li>
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

                        <h3 class="about-quick-fact">时讯</h3>
                        <p>Distinctively fashion in the effect of standard products communities via seamless applications.
                            Authoritatively recaptiualize.</p>
                        <a class="btn btn-primary about-quick-fact-button" role="button">CALL TO ACTION</a>

                    </div>

                    <div class="sidebar-tags">
                        <h3 class="sidebar-title"> 标签 </h3>
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

<style scoped>@import url(../../assets/css/bootstrap.min.css);
@import url(../../assets/fonts/font-awesome/css/font-awesome.min.css);
@import url(../../assets/css/style.css);</style>