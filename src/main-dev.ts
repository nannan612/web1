import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// scrollto from vue3 please see https://github.com/rigor789/vue-scrollto/issues/380
import VueScrollTo from 'vue-scrollto'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// mavon-editor for vue3 please see
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/assets/style/common.css'
import '@/assets/font/iconfont'
import dataV from '@jiaminghi/data-view'
// import '../src/assets/css/bootstrap.min.css'
// import '@/assets/fonts/font-awesome/css/font-awesome.min.css'
// import '@/assets/css/style.css'
// 网站统计
/* eslint-disable */
//@ts-ignore
var _hmt = _hmt || [];
//@ts-ignore
window._hmt = _hmt; // 将_hmt挂载到window下
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a1c0040f374f384b2d4a876ecdc1cf5d";
  var s: HTMLElement = document.getElementsByTagName("script")[0];
  s.parentNode?.insertBefore(hm, s);
})();
/* eslint-enable */
const app = createApp(App)
app.directive('scroll-to', VueScrollTo)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).use(mavonEditor).use(dataV).use(store).use(router).mount('#app')
