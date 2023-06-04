<template>
    <div>
        <AwHeader :class="index_header"></AwHeader>

        <div class='Futures-container'>
            <div class="futurestitle">期货走势图</div>
            <div class="content">
                <div class="left">
                    <div class="menu">
                        <ul>
                            <li class="active" data-img="image1.jpg">上证50</li>
                            <li data-img="image2.jpg">沪深300</li>
                            <li data-img="image3.jpg">中证500</li>
                            <li data-img="image2.jpg">中证1000</li>
                        </ul>

                    </div>
                    <div class="menu-image">
                        <img src="../assets/images/HSI.jpg" alt="">
                    </div>
                    <div class="menu-image">
                        <img src="../assets/images/Snipaste_2023-06-04_21-20-17.png" alt="">
                    </div>
                </div>
                <div class="right">

                    <div class="menu">
                        <ul>
                            <li class="active" data-img="image1.jpg">价量分析</li>
                            <li data-img="image2.jpg">买卖分析</li>
                        </ul>
                        
                    </div>
                    <div class="menu-image">
                            <img src="../assets/images/Snipaste_2023-06-04_21-30-58.png" alt="">
                        </div>
                </div>
            </div>
        </div>
        <AwFooter></AwFooter>

    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from 'vue'
import AwHeader from '@/components/public/Header.vue'
import mainStore from '@/store'
import AwFooter from '@/components/public/Footer.vue'

const index_header = ref('')

onMounted(() => {
    mainStore.commit('setHeaderLogo', {
        headerLogoShow: false
    })
    mainStore.commit('setShadowActive', {
        headerShadowActive: true
    })
    mainStore.commit('setNavDarkActive', {
        navDarkActive: true
    })
})

</script>

<style scoped lang="less">
.content {
    display: flex;

    .left {
        flex-grow: 1;
    }

    .right {
        flex-grow: 1;
    }
}

.Futures-container {
    margin: 0;
    padding: 0;
}

.futurestitle {
    font-weight: 700;
    font-size: 32px;
    color: #677078;
    text-align: center;
    line-height: 1.688;
    margin-bottom: 20px;
    padding-top: 70px;

}

.menu {
    display: flex;
    align-items: center;
    justify-content: center;
}

ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

li {
    margin: 0 10px;
    cursor: pointer;
    font-weight: bold;
}

li.active {
    color: #ff0000;
}

.menu-image {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
   
}

.menu-image img {
    max-width: 100%;
    height: auto;
}
</style>