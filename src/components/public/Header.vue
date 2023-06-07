<template>
    <div class="header" :class="{ header_show: headerShow, shadow: headerShowActive }">
        <div class="header_container">
            <div class="header_content">
                <div class="logo">
                    <router-link to="/">
                        <img :src="logo_img[0].path" alt="logo" v-if="headerLogoShow" />
                        <img :src="logo_img[1].path" alt="logo" v-else />
                    </router-link>
                </div>
                <div class="menu-wrapper">
                    <div class="menu-item">
                        <h2 class="menu-item-link">
                            <span class="el-dropdown-link">
                                <router-link to="/index">
                                    <span :class="{ a_text_dark: navDarkActive }">
                                        首页
                                    </span>

                                </router-link>
                            </span>
                        </h2>
                    </div>
                    <div class="menu-item">
                        <h2 class="menu-item-link">
                            <span>
                                <el-dropdown class="el-dropdown">
                                    <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                        <span :class="{ a_text_dark: navDarkActive }">
                                            合研智析
                                        </span>


                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>

                                            <el-dropdown-item>
                                                <router-link to="/heyan">
                                                    合研
                                                </router-link>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <router-link to="/zhixi">
                                                    智析
                                                </router-link>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </span>
                        </h2>
                    </div>
                    <div class="menu-item">
                        <h2 class="menu-item-link">
                            <span>
                                <el-dropdown class="el-dropdown">
                                    <span class="el-dropdown-link">
                                        <span :class="{ a_text_dark: navDarkActive }">
                                            金工计算
                                        </span>


                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>

                                            <el-dropdown-item>
                                                <router-link to="/stock">
                                                    股票
                                                </router-link>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <span>
                                                    <router-link to="/futures">期货</router-link>
                                                </span>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <span>
                                                    <router-link to="/qiquan">期权</router-link>
                                                </span>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </span>
                        </h2>
                    </div>

                    <div class="menu-item">
                        <h2 class="menu-item-link">
                            <span>
                                <el-dropdown class="el-dropdown">
                                    <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                        <router-link to="/tool">
                                            <span :class="{ a_text_dark: navDarkActive }">
                                                科研中心</span>
                                        </router-link>

                                    </span>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>
                                                <router-link to="/paper">
                                                    热门论文
                                                </router-link>

                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <span>
                                                    <router-link to="/data">数据中心</router-link>
                                                </span>
                                            </el-dropdown-item>
                                            <el-dropdown-item>
                                                <router-link to="/laboratory">实验室</router-link>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </span>
                        </h2>
                    </div>
                    <div class="menu-item">
                        <h2 class="menu-item-link">

                            <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                <span :class="{ a_text_dark: navDarkActive }">
                                    <router-link to="/cloud">
                                        <span :class="{ a_text_dark: navDarkActive }">
                                            云上金融
                                        </span>
                                    </router-link>
                                </span>


                            </span>

                        </h2>
                    </div>
                    <div class="menu-item">
                        <h2 class="menu-item-link">

                            <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                <span :class="{ a_text_dark: navDarkActive }">
                                    <router-link to="/class"><span :class="{ a_text_dark: navDarkActive }">
                                            产教园地</span></router-link>
                                </span>
                            </span>

                        </h2>
                    </div>
                    <div class="menu-item">
                        <h2 class="menu-item-link">

                            <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                <router-link to="/comments">
                                    <span :class="{ a_text_dark: navDarkActive }">
                                        讨论中心</span>

                                </router-link>
                            </span>

                        </h2>
                    </div>
                    <div class="menu-item" v-show=!ifshowimg>
                        <h2 class="menu-item-link">
                            <span class="el-dropdown-link" :class="{ a_text_dark: navDarkActive }">
                                <router-link to="/login">
                                    <span :class="{ a_text_dark: navDarkActive }">
                                        登录</span>

                                </router-link>
                            </span>
                        </h2>
                    </div>

                </div>
                <div class="avatar-container" v-show=ifshowimg>
                    <el-dropdown @command="handleCommand" class="right-menu-item hover-effect" trigger="click">
                        <div class="avatar-wrapper">
                            <el-avatar :size="50" src="" />
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <router-link to="/user/profile">
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                </router-link>
                                <el-dropdown-item divided command="logout">
                                    <span>退出登录</span>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup name="AwHeader">
import { computed, onBeforeMount, ref, toRefs } from 'vue'
import { mapState, useStore } from 'vuex'


const logo_img = ref([])
const store = useStore()

const ifshowimg = computed(() => store.state.ifshowimg)
const headerShowActive = computed(() => store.state.headerShadowActive)
const headerShow = computed(() => store.state.headerShow)
const headerLogoShow = computed(() => store.state.headerLogoShow)
const navDarkActive = computed(() => store.state.navDarkActive)
logo_img.value = [{
    path: require('../../assets/img/index/logo.png')
},
{
    path: require('../../assets/img/index/logoColor.png')
}
]
function handleCommand(command) {
    switch (command) {
        case "logout":
            logout();
            break;
        default:
            break;
    }
}
function logout() {
    store.commit('setifshowimg', {
        ifshowimg: false
    })

}
</script>
<style lang="less" scoped>
@nav_active_color: #3370ff;

h2 {
    margin: 0;
}

.header_show {
    transform: translateY(-62px);
}

.a_text_dark {
    color: rgba(0, 0, 0, .8);
}

.header {
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0);
    //backdrop-filter: blur(0);
    box-shadow: none;

    position: fixed;
    z-index: 999;
    transition: transform .2s ease;

    //color: rgba(255, 255, 255, 1) !important;
    //transition: all 0.3s ease;
    .header_container {
        height: 100%;
    }
}

.shadow {
    background-color: rgba(255, 255, 255, .7);
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
}
.avatar-wrappe{
    margin: 0;
    padding: 0;
}
.header_content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
    align-items: center;
    padding: 0 96px;
    margin: 0 auto;

    .logo {
        flex: 0 0 auto;

        img {
            height: 35px;
        }
    }
}

.menu-wrapper {
    display: flex;
    flex-direction: row;
    list-style: none;
    -ms-flex-align: center;
    align-items: center;
    padding: 0;
    margin: 0 0 0 20px;
    position: relative;

    .menu-item {
        flex-shrink: 0;
    }

    .menu-item:last-child:before {
        content: "";
        display: block;
        height: 12px;
        border-right: 1px solid #bbbfc4;
        //border-right: 1px solid #fff;
        position: absolute;
        bottom: 24px;
        right: 48px;
    }

    >.menu-item+.menu-item {
        margin-left: 40px;
    }

    .menu-item-link {
        //color: #646a73;

        .el-dropdown-link {
            font-weight: 400;
            font-size: 14px;
            line-height: 60px;
            cursor: pointer;
            position: relative;
            display: inline-block;
            color: rgba(0, 0, 0, .8);
            transition: color .3s;

            :hover {
                color: @nav_active_color;
            }
        }

        a {
            display: inline-block;
            color: rgba(255, 255, 255, 1);
            transition: color .3s;

            :hover {
                color: @nav_active_color;
            }
        }

        .router-link-exact-active {
            color: @nav_active_color;
            font-weight: 600;

            span:after {
                content: "";
                display: block;
                height: 2px;
                position: absolute;
                width: 26px;
                left: calc(50% - 13px);
                bottom: 14px;
                background-color: @nav_active_color;
            }
        }
    }
}

.nav_text_white {
    color: rgba(255, 255, 255, 1);
}

.nav_text_dark {
    color: rgba(0, 0, 0, .8);
}

.avatar-container {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
}

@media only screen and (max-width: 991px) {
    .header_content {
        padding: 0 32px;
    }
}
</style>
