<template>
    <div>
    <AwHeader></AwHeader>
    <div class="body">
        <div id="g-body">
            <div id="j-column-info" class="m-column-info">
                <div class="column-info f-cb">
                    <div class="column-info_picture f-fl">
                        <img class="column-info_picture_img" src="@/assets/images/teacher.png" alt="">
                    </div>
                    <div class="column-info_main f-fl">
                        <!--Regular if4-->
                        <div class="column-info_main_name">
                            人人必会的思维导图
                        </div>
                        <div class="column-info_main_desc f-richEditorText edueditor_styleclass_0">帮你拥有学霸级脑力</div>
                        <div class="column-info_main_desc-small">
                            更新已完成
                        </div>
                        <div class="column-purchase-area">
                            <div class="column-purchase-area_priceArea">
                                <div class="f-cb">
                                    <div class="column-purchase-area-price f-fl">
                                        <span class="column-purchase-area-price_label">价格</span>
                                        <span class="column-purchase-area-price-primary"><span
                                                class="column-purchase-area-price-primary_label">¥</span>29</span>

                                    </div>
                                    <div class="f-fr join-num">
                                        3139人已参加
                                    </div>

                                </div>
                            </div>
                            <div class="column-purchase-area-actions ">

                                <div class="column-purchase-area-action-enroll">
                                    立即参加
                                </div>
                                <div class="column-purchase-area-action-free-preview ">
                                    免费体验
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="j-column-combination" class="m-column-combination"><!--Regular if6--></div>
            <div class="f-cb m-column-middle">
                <div id="j-column-main" class="m-column-main f-fl">
                    <div class="column-main-content">
                        <div class="column-main-content_tabs f-cb">
                            <!--Regular list-->
                            <li class="column-main-content_tabs_item f-fl " :class="{ active: isactive[0] }"
                                @click="solveclick(0)">介绍</li>

                            <li class="column-main-content_tabs_item f-fl " :class="{ active: isactive[1] }"
                                @click="solveclick(1)">大纲</li>

                            <li class="column-main-content_tabs_item f-fl " :class="{ active: isactive[2] }"
                                @click="solveclick(2)">评价</li>

                        </div>
                        <div class="column-main-content_content">

                            <div class="column-main-content-introduce" v-show="isactive[0]">
                                <!--Regular if37-->
                                <div class="column-main-content-introduce_title">
                                    专栏介绍
                                </div>
                                <div class="column-main-content-introduce_content f-richEditorText edueditor_styleclass_3">
                                    推荐购买上方组合优惠【脑力升级工具箱】，<br>
                                    一次性立减30元，让你学的更痛快！<br>
                                    （买过的课会自动扣掉，无需重复购买）</div>
                                <div class="column-main-content-introduce_pic">
                                    <!--Regular list-->
                                    <!--Regular if38-->
                                    <img class="column-main-content-introduce_pic_img" src="@/assets/images/classintro.png">

                                </div>
                                <!--Regular if43-->
                                <div class="column-main-content-introduce_title">
                                    老师介绍
                                </div>
                                <!--Regular if44-->
                                <!--Regular if45-->
                                <div class="column-main-content-introduce_pic">
                                    <!--Regular list-->
                                    <!--Regular if46-->
                                    <img class="column-main-content-introduce_pic_img"
                                        src="@/assets/images/teacherintro.jpg">


                                </div>



                            </div>

                            <div class="column-main-content-outline"  v-show="isactive[1]">
                                <div class="column-main-content-outline_header f-cb">
                                    <div class="column-main-content-outline_header_title f-fl">
                                        专栏大纲
                                    </div>
                                    <div class="column-main-content-outline_header_num f-fr">
                                        已更新：8
                                    </div>
                                </div>
                                <div class="column-main-content-outline_content">
                                    <!--Regular list-->
                                    <div class="column-main-content-outline_chapter f-cb">
                                        <div class="column-main-content-outline_chapter_title f-fl" @click="cshow[0]= !cshow[0]">认识思维导图</div>
                                        <div class="f-fr">
                                            <span class="ux-icon-caret-down"></span>
                                        </div>
                                    </div>
                                    <!--Regular if258-->
                                    <div class="column-main-content-outline_chapter_content" v-show="cshow[0]">
                                        <!--Regular if259-->
                                        <div class="column-main-content-outline_chapter_goals">直播时间：5月12日 20:00-21:00</div>

                                        <!--Regular list-->
                                        <div class="column-main-content-outline_chapter_unit">理解底层原理和核心功能</div>

                                    </div>


                                    <div class="column-main-content-outline_chapter f-cb" >
                                        <div class="column-main-content-outline_chapter_title f-fl" @click="cshow[1]= !cshow[1]">创作思维导图</div>
                                        <div class="f-fr">
                                            <span class="ux-icon-caret-down"></span>
                                        </div>
                                    </div>

                                    <div class="column-main-content-outline_chapter_content"  v-show="cshow[1]">
                                        <!--Regular if262-->
                                        <div class="column-main-content-outline_chapter_goals">直播时间：5月13日 20:00-21:00</div>

                                        <!--Regular list-->
                                        <div class="column-main-content-outline_chapter_unit">掌握绘制心法和实操模版</div>

                                    </div>
                                    <!--Regular if260-->

                                    <div class="column-main-content-outline_chapter f-cb">
                                        <div class="column-main-content-outline_chapter_title f-fl" @click="cshow[2]= !cshow[2]">应用思维导图</div>
                                        <div class="f-fr">
                                            <span class="ux-icon-caret-down"></span>
                                        </div>
                                    </div>

                                    <div class="column-main-content-outline_chapter_content"  v-show="cshow[2]">
                                        <!--Regular if263-->
                                        <div class="column-main-content-outline_chapter_goals">直播时间：5月14日 20:00-21:00
                                        </div>

                                        <!--Regular list-->
                                        <div class="column-main-content-outline_chapter_unit">灵活高效解决各类问题</div>

                                    </div>
                                    <!--Regular if261-->

                                </div>

                            </div>
                            <div class="ux-mooc-comment-course-comment"  v-show="isactive[2]">
                                <!--Regular if47-->
                                <div class="ux-mooc-comment-course-comment_no-comment">
                                    <div class="ux-mooc-comment-course-comment_no-comment_placeholder">
                                        <div class="ux-mooc-comment-course-comment_no-comment_placeholder_tip">还没有人评价</div>
                                        <!--Regular if48-->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-column-sidebar f-fl">
                    <div id="j-column-lecturer" class="m-column-lecturer">
                        <div class="column-lecturer">
                            <div class="column-lecturer_title">
                                授课老师
                            </div>
                            <div class="column-lecturer_content f-cb">
                                <div class="column-lecturer_content_pic f-fl">
                                    <img class="column-lecturer_content_pic_img" src="@/assets/images/roundteacher.jpg"
                                        alt="">
                                </div>
                                <div class="column-lecturer_content_text f-fl">
                                    <p class="column-lecturer_content_name">贺卫国</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="j-column-attention" class="m-column-attention"><!--Regular if20-->
                        <div class="column-subscribe-attention">
                            <div class="column-subscribe-attention_title">订阅须知</div>
                            <!--Regular if21-->
                            <!--Regular if22-->
                            <div class="column-subscribe-attention_content f-richEditorText edueditor_styleclass_2">1.
                                专栏更新时间：
                                本专栏已更新完毕，你可以随时学习，高效成长；
                                2. 本专栏需在中国大学MOOC APP内查看，请在购买后打开中国大学MOOC APP，登录购买时使用的账号，在“我的学习”中收听专栏内容。
                                3. 直播视频永久有效，可以反复观看。
                                4. 因版权原因，本专栏内视频不支持下载。
                                5. 本专栏为虚拟商品，一经订阅概不退款，望请理解。

                                如有疑问，可加入慕课用户反馈qq群（763633440）获得帮助！</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AwFooter></AwFooter> 

</div>
</template>
<script setup>
import { reactive } from 'vue';
import AwHeader from '@/components/public/Header.vue'
import AwFooter from '@/components/public/Footer.vue'

let isactive = reactive([
    true, false, false
])
let cshow = reactive([
    false, false, false
])
const solveclick = (i) => {
    isactive[0] = false
    isactive[1] = false
    isactive[2] = false
    isactive[i] = true
}
</script>
<style scoped>
.body {
    background-color: #f5f5f5;
    padding-top: 70px;
}

#g-body {
    padding-bottom: 300px;
}

.m-column-info {
    background-color: #fff;
}

.column-info {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
}

.column-info_picture {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 500px;
    padding-bottom: 26px;
}

.column-info_picture_img {
    width: 100%;
}

img {
    vertical-align: top;
}

.column-info_main {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 675px;
    margin-left: 25px;
}

.f-fl {
    float: left;
}

.column-info_main_name {
    margin: 5px auto;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    line-height: 33px;
}

.column-info_main_desc {
    font-size: 14px;
    color: #666;
    line-height: 20px;
    margin-bottom: 15px;
}

.f-richEditorText {
    margin: 0;
    padding: 0;
    border: 0;
    text-align: left;
    color: #666;
    line-height: 22px;
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.column-info_main_desc-small {
    font-size: 12px;
    line-height: 17px;
    color: #999;
}

.f-cb:after,
.g-container:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}

.m-column-combination {
    width: 1200px;
    margin: 30px auto 0;
    background-color: #fff;
}

.m-column-middle {
    width: 1200px;
    margin: 30px auto;
}

.m-column-main {
    width: 820px;
    margin-right: 20px;
    background-color: #fff;
}

.column-main-content {
    font-size: 14px;
}

.column-main-content_tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 25px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #E6E6E6;
}

.f-cb,
.g-container {
    zoom: 1;
}

.column-main-content_tabs_item {
    margin-right: 30px;
    padding: 0 34px;
    cursor: pointer;
}

.column-main-content_tabs_item.active {
    color: #00CC7E;
    -webkit-box-shadow: 0px 2px 0px 0px #00CC7E;
    box-shadow: 0px 2px 0px 0px #00CC7E;
}

.column-main-content_content {
    padding: 30px;
    line-height: 24px;
}

.column-main-content-introduce_title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
}

.f-richEditorText {
    margin: 0;
    padding: 0;
    border: 0;
    text-align: left;
    color: #666;
    line-height: 22px;
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.column-main-content-introduce_content {
    margin-bottom: 20px;
}

.column-main-content-introduce_pic {
    margin-bottom: 20px;
}

.column-main-content-introduce_pic_img {
    max-width: 100%;
}

.m-column-lecturer {
    margin-bottom: 20px;
}

.m-column-sidebar {
    width: 360px;
}

.m-column-lecturer {
    margin-bottom: 20px;
}

.column-lecturer {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    line-height: 22px;
    font-size: 14px;
    background-color: #fff;
}

.column-lecturer_title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
}

.column-lecturer_content {
    font-size: 14px;
    color: #333;
    line-height: 20px;
}

.column-lecturer_content_pic {
    height: 56px;
    width: 56px;
    border-radius: 100%;
    overflow: hidden;
    margin-right: 15px;
}

.column-lecturer_content_text {
    width: 186px;
    word-break: break-all;
}

.column-lecturer_content_name {
    padding-top: 7px;
}

.column-subscribe-attention {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    line-height: 22px;
    font-size: 14px;
    background-color: #fff;
}

.column-subscribe-attention_title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
}

.f-richEditorText {
    margin: 0;
    padding: 0;
    border: 0;
    text-align: left;
    color: #666;
    line-height: 22px;
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.column-main-content-introduce_content {
    margin-bottom: 20px;
}

.column-purchase-area {
    margin-top: 15px;
}

.column-purchase-area_priceArea {
    background-color: #F5F5F5;
    padding: 15px 10px;
    margin-bottom: 15px;
    color: #999;
    font-size: 12px;
}

.column-purchase-area-price {
    color: #999;
    font-size: 12px;
}

.column-purchase-area-price_label {
    padding-right: 10px;
}

*,
:after,
:before {
    box-sizing: initial;
    -webkit-box-sizing: initial;
}

.column-purchase-area-price-primary {
    color: #FF7333;
    font-size: 24px;
}

.column-purchase-area_priceArea .join-num {
    position: relative;
    top: 9px;
}

.f-fr {
    float: right;
}

.column-purchase-area-action-enroll {
    cursor: pointer;
    width: 220px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #FF7333;
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 12px;
    vertical-align: top;
    border-radius: 2px;
    position: relative;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.column-purchase-area-action-free-preview {
    cursor: pointer;
    height: 50px;
    width: 200px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #e6e6e6;
    font-size: 18px;
    color: #666;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    border-radius: 2px;
    position: relative;
}

.column-main-content-outline {
    color: #333;
}

.column-main-content-outline_header {
    margin: 0 auto 20px;
}

.column-main-content-outline_header_title {
    font-size: 18px;
    font-weight: bold;
}

.column-main-content-outline_header_num {
    text-align: right;
    color: #999;
}

.column-main-content-outline_chapter {
    cursor: pointer;
    background-color: #F7F7F7;
    font-size: 16px;
    line-height: 22px;
    padding: 14px 15px;
}

.column-main-content-outline_chapter_title {
    width: 705px;
}

.column-main-content-outline_chapter .ux-icon-caret-down,
.column-main-content-outline_chapter .ux-icon-caret-up {
    color: #999;
    position: relative;
    top: 5px;
}

.column-main-content-outline_chapter_content {
    padding: 5px 15px 20px;

}

.column-main-content-outline_chapter_goals {
    padding: 15px 0;
    border-bottom: 1px solid #e6e6e6;
    font-size: 12px;
    color: #80818B;
    line-height: 21px;
}

.column-main-content-outline_chapter_unit {
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
}
.column-main-content_content .ux-mooc-comment-course-comment {
    padding: 0 !important;
}
.ux-mooc-comment-course-comment_no-comment {
    text-align: center;
    margin-top: 90px;
}
.ux-mooc-comment-course-comment_no-comment_placeholder {
    display: inline-block;
}
.ux-mooc-comment-course-comment_no-comment_placeholder_tip {
    padding: 21px 0px 15px;
    font-size: 18px;
}

</style>