<template>
    <div class="maincontainer">
        <el-row>
            <el-col :span="4">

                <div class="grid-content left">


                    <div class="crouse">
                        <p class="title">最新课程</p>
                        <div class="newclass">
                            <div class="single-crouse">

                                <a class="hover-effect">
                                    <img src="../assets/img/news1.jpg" />
                                </a>
                                <el-link>
                                    第一行....<br>
                                    第二行.........
                                </el-link>


                            </div>
                            <div class="single-crouse">
                                <a class="hover-effect">
                                    <img src="../assets/images/news3.jpg" alt="">
                                </a>

                                <el-link>
                                    第一行......<br>
                                    第二行............
                                </el-link>

                            </div>
                            <div class="single-crouse">
                                <a class="hover-effect">
                                    <img src="../assets/images/news3.jpg" alt="">
                                </a>
                                <el-link>
                                    第一行..........<br>
                                    第二行...........
                                </el-link>

                            </div>
                        </div>

                    </div>
                    <div class="yan">
                        <p class="title">衍生品科普</p>
                        <div class="yan-content">
                            1.xxxxxxxxxxxxxxxxx
                        </div>
                        <div class="yan-content">
                            2.xxxxxxxxxxxxxxxxx
                        </div>
                        <div class="yan-content">
                            3.xxxxxxxxxxxxxxxxx
                        </div>
                        <div class="yan-content">
                            期权：
                            合约知识
                        </div>
                        <div class="yan-content">
                            期货：
                            合约知识
                        </div>



                    </div>
                    <div class="crouseplus">
                        <p>金工计算进阶课堂</p>
                        <div class="crouseplus-content">
                            <span>
                                期货
                            </span>
                            <span>
                                期权
                            </span>
                        </div>
                        <div class="crouseplus-content-text">
                            <span class="first">
                                上证50<br>
                                沪深300<br>
                                中证500<br>
                                中证1000<br>
                            </span>
                            <span>
                                上证50<br>
                                沪深300<br>
                                中证500 ETF<br>
                                中证1000 ETF<br>
                            </span>
                        </div>
                        <div>
                            <div class="title">精选策略</div>
                            <div class="celue-content">
                                <el-link>
                                    1.xxxxxxxxxxxxxxxxx
                                </el-link>
                            </div>
                            <div class="celue-content">
                                <el-link>
                                    2.xxxxxxxxxxxxxxxxx
                                </el-link>
                            </div>
                            <div class="celue-content">
                                <el-link>
                                    3.xxxxxxxxxxxxxxxxx
                                </el-link>
                            </div>
                        </div>

                    </div>



                </div>
            </el-col>
            <el-col :span="15">
                <div class="grid-content middle">
                    <div class="moneynews">
                        <div class="block-line"></div>

                        <p>财经要闻</p>
                        <div>
                            <div class="textBox">
                                <transition name="slide">
                                    <p class="text" :key="text.id">
                                        <el-tag type="warning">{{ text.val.tag }}</el-tag>
                                        <el-link>

                                            {{ text.val.title }}
                                        </el-link>
                                    </p>
                                </transition>
                            </div>
                        </div>
                    </div>

                    <div class="logo">
                        <div class="block-line"></div>

                        <div class="heyan title">合研</div>

                        <div class="gupiao">
                            热门股票
                            <el-table :data="tableData" stripe style="width: 40%">
                                <el-table-column prop="代码" label="代码" width="100" />
                                <el-table-column prop="名称" label="名称" width="100" />
                                <el-table-column prop="最新价" label="最新价" width="100" style="color: red" />
                                <el-table-column prop="涨跌幅" label="涨跌幅" style="color: red" />

                            </el-table>
                        </div>
                        <div class="content">
                            <div class="avatar">
                                <img src="http://sucai.suoluomei.cn/sucai_zs/images/20191126150939-avatar.jpg">
                            </div>
                        </div>
                        <div class="fenxi">
                            <el-card class="box-card">
                                <template #header>
                                    <div class="card-header">
                                        <span>最新分析</span>
                                    </div>
                                </template>
                                <div v-for="o in 4" :key="o" class="text1 item">
                                    <el-link>
                                        {{ '分析 ' + o }}
                                    </el-link>
                                </div>
                            </el-card>
                        </div>

                        <div class="zhixi title">智析</div>
                    </div>
                    <div class="jieshao">
                        <div class="block-line"></div>
                        <div class="title">真实回测</div>
                        <div class="block">
                            <img src="../assets/images/news2.jpg" alt="">
                            <div class="jishaotext">介绍：xxxxxxxxxxxxxxxxxxx</div>
                        </div>
                        <div class="rukou">
                            平台入口
                        </div>



                    </div>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content right">
                    <div style="width:300px;height:430px;overflow-y: auto;overflow-x: hidden;margin:20px;">
                        <div>
                            <div class="rank-title">今日点击排行榜</div>
                            <div>
                                <div v-show="Cumulative_Rank.length > 0" style="width: 382px;height:386px;">
                                    <div v-for="(item, index) in Cumulative_Rank" :key="index"
                                        style="width:350px;padding-left:10px;">
                                        <el-row style="font-size:14px;color:#606266;">{{ index + 1 + " " + item.name
                                        }}</el-row>
                                        <el-row style="height:18px;">
                                            <el-col :span="14">
                                                <el-progress :percentage="item.percent" :stroke-width="10"
                                                    color="#50c097"></el-progress>
                                            </el-col>
                                            <el-col :span="10">
                                                <span style="color:#50c097;">{{ item.value ? item.value : '' }}</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                                <div v-show="Cumulative_Rank == null || Cumulative_Rank.length == 0"
                                    style="width: 382px;height:260px;line-height:260px;text-align:center;color:#909399;">
                                    暂无数据
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hot-posts">
                        <h2 class="hot-posts__title">热帖排行榜</h2>
                        <ul class="hot-posts__list">
                            <li class="hot-post__item">
                                <div class="hot-post__rank">1</div>
                                <div class="hot-post__info">
                                    <h3 class="hot-post__title">热帖1</h3>
                                    <span class="hot-post__views">阅读量：1234</span>
                                </div>
                            </li>
                            <li class="hot-post__item">
                                <div class="hot-post__rank">2</div>
                                <div class="hot-post__info">
                                    <h3 class="hot-post__title">热帖2</h3>
                                    <span class="hot-post__views">阅读量：5678</span>
                                </div>
                            </li>
                            <li class="hot-post__item">
                                <div class="hot-post__rank">3</div>
                                <div class="hot-post__info">
                                    <h3 class="hot-post__title">热帖3</h3>
                                    <span class="hot-post__views">阅读量：9012</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style="width:300px;height:430px;overflow-y: auto;overflow-x: hidden;margin:20px;">
                        <div>
                            <div class="rank-title">论文热度</div>
                            <div>
                                <div v-show="Cumulative_Rank.length > 0" style="width: 382px;height:386px;">
                                    <div v-for="(item, index) in redu_Rank" :key="index"
                                        style="width:350px;padding-left:10px;">
                                        <el-row style="font-size:14px;color:#606266;">{{ index + 1 + " " + item.name
                                        }}</el-row>
                                        <el-row style="height:18px;">
                                            <el-col :span="14">
                                                <el-progress :percentage="item.percent" :stroke-width="10"
                                                    color="#e5390a"></el-progress>
                                            </el-col>
                                            <el-col :span="10">
                                                <span style="color:#606266;">{{ item.value ? item.value : '' }}</span>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                                <div v-show="Cumulative_Rank == null || Cumulative_Rank.length == 0"
                                    style="width: 382px;height:260px;line-height:260px;text-align:center;color:#909399;">
                                    暂无数据
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                         <div class="rank-title">上新数据</div>
                         <div class="rank-title"><a href="#">数据1</a></div>
                         <div class="rank-title"><a href="#">数据2</a></div>
                         <div class="rank-title"><a href="#">数据3</a></div>
                         <div class="rank-title"><a href="#">数据4</a></div>


                    </div>
                   

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
let Cumulative_Rank = reactive([
    { name: '名称1', value: 6600, percent: 100 },
    { name: '名称2', value: 5940, percent: 90 },
    { name: '名称3', value: 5280, percent: 80 },
    { name: '名称4', value: 4620, percent: 70 },
    { name: '名称5', value: 3960, percent: 60 },
    { name: '名称6', value: 3300, percent: 50 },
    { name: '名称7', value: 2640, percent: 40 },
    { name: '名称8', value: 1980, percent: 30 },
]
)
let redu_Rank = reactive([
    { name: '论文1', value: 660, percent: 100 },
    { name: '论文2', value: 594, percent: 90 },
    { name: '论文3', value: 528, percent: 80 },
    { name: '论文4', value: 462, percent: 70 },
]
)
const tableData = [
    {
        代码: 'BK0475',
        名称: '银行',
        最新价: '2848.89',
        涨跌幅: '0.93%'
    },
    {
        代码: '603757',
        名称: '大元泵业',
        最新价: '28.30',
        涨跌幅: '1.62%'
    },
]
let textArr = [
    { tag: '时事新闻', title: ' 第一条新闻111111111111111' },
    { tag: '时事新闻', title: '第23条新闻嘎嘎嘎嘎嘎嘎灌灌灌灌灌' },
    { tag: '时事新闻', title: ' 第3条新闻嘎嘎嘎嘎嘎嘎灌灌灌灌灌' },
    { tag: '时事新闻', title: ' 第2条新闻嘎嘎嘎嘎嘎嘎灌灌灌灌灌' },
    { tag: '时事新闻', title: ' 第2333条新闻嘎嘎嘎嘎嘎嘎灌灌灌灌灌' },
]
let number = ref(0)
const text = computed(() => {
    return {
        id: number.value,
        val: textArr[number.value]
    }
})
onMounted(() => {
    startMove()
})


function startMove() {
    // eslint-disable-next-line
    let timer = setTimeout(() => {
        if (number.value == textArr.length) {
            number.value = 0;
        } else {
            number.value += 1;
        }
        startMove();
    }, 2500); // 滚动不需要停顿则将2000改成动画持续时间
}

</script>
<style lang="less" scoped>
p {
    margin: 0;
    padding: 0;
    height: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.maincontainer {
    height: 100%;
    width: 100%;
    color: black;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    // height: 814px;
}

.left {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

.jieshao .rukou {
    width: 10%;
    height: 20px;
    margin: 30px auto;
    border-radius: 5px;
    border: #375ae7 solid 1px;
    text-align: center;
    color: #375ae7;
    cursor: pointer;
}

.crouse {
    flex-grow: 8;
}

.newclass {
    display: flex;
    flex-direction: column;
    height: 100%;

    .single-crouse {
        flex-grow: 1;
        height: 60%;
        width: 80%;
        margin: 20px auto;
        border-radius: 5px;

    }
}

.middle {
    margin-bottom: 20px;
}

.yan {
    flex-grow: 6;
    margin-top: 20px;

    .yan-content {
        padding: 10px;
    }
}

.crouseplus {
    flex-grow: 10;

    .crouseplus-content {
        background-color: #F5F5F5;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        span {
            margin: 10px auto;
            font-size: large;
            color: black;
        }
    }

    .celue-content {
        line-height: 30px;
        color: #375ae7;
        font-size: medium;
        margin-left: 20px;
    }

    .crouseplus-content-text {
        background-color: #F5F5F5;
        color: #375ae7;
        display: flex;
        justify-content: center;

        span {
            width: 50%;
            text-align: center;
            line-height: 30px;
            font-size: small;
        }

        .first {
            border-right: 1px solid #8c8e96;

        }
    }
}


@import url(../assets/css/style.css);

.textBox {
    width: 80%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
    border: 2px solid #677078;
    border-radius: 5px;
}

.title {
    font-weight: 700;
    font-size: 32px;
    color: #677078;
    text-align: center;
    margin-top: 20px;
    line-height: 1.688;
    margin-bottom: 20px;
}

.text {
    width: 100%;
    position: absolute;
    bottom: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s linear;
}

.slide-enter {
    transform: translateY(20px) scale(1);
    opacity: 1;
}

.slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
}

.block-line {
    margin: 0 auto 12px;
    width: 24px;
    height: 4px;
    background-color: #3370ff;
    border-radius: 100px;
}

.logo {
    background-color: #F5F5F5;

    .heyan {
        text-align: left;
        margin-top: 10px;
        margin-left: 10px;
        color: black;
    }

    .zhixi {
        text-align: right;
        margin-bottom: 10px;
        margin-right: 10px;
        color: black;

    }

    .gupiao {
        margin-top: 40px;
        margin-left: 80px;
        font-size: larger;
        color: blue;

        .box-card {
            width: 300px;
        }
    }

    .content {
        width: 100%;
        height: 350px;
    }

    .avatar {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #f0f0f0;
        float: left;
        shape-outside: circle();
        top: 107px;
        left: 412px;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .text {
        background: #f0f0f0;
    }

    .fenxi {
        width: 300px;
        margin-left: 650px;
    }
}

.text1 {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.block {
    margin-left: 30px;
}

.block img {
    display: inline-block;
    margin-right: 50px;
    width: 60%;
    height: 300px;
}

.block .jishaotext {
    display: inline-block;
    width: 30%;
    height: 300px;
    line-height: 20px;
    overflow: hidden;
}

.rank-title {
    font-size: 18px;
    color: #2D8CF0;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
}
.hot-posts {
  margin: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.hot-posts__title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.5;
  font-weight: bold;
  text-align: center;
}

.hot-posts__list {
  list-style: none;
  padding-left: 0;
}

.hot-post__item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.hot-post__rank {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  margin-right: 10px;
}

.hot-post__info {
  flex: 1;
}

.hot-post__title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

.hot-post__views {
  font-size: 16px;
  color: #666;
}

</style>

