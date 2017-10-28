import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import('../../node_modules/vuetify/dist/vuetify.css');

if (!process.env.IS_WEB) {
    Vue.use(require('vue-electron'));
}

// Internationalization
import VueI18n from 'vue-i18n';

import LngLoader from './modules/lngLoader';

const lng      = new LngLoader();
const messages = lng.get();

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale        : 'en',
    fallbackLocale: 'en',
    messages
});

// ----

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
const VueApp = new Vue({
    components: {App},
    router,
    store,
    template  : '<App/>',
    i18n
}).$mount('#app');

// Hot updates
if (module.hot) {
    //TODO fix language hot reload
    /*module.hot.accept([ './locales/en.json' ], () => {
        app.$i18n.setLocaleMessage('en', require('locales/en.json').default);
    });*/
}
