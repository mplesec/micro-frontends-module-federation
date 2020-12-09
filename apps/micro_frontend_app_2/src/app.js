import Vue from 'vue';
import wrap from '@vue/web-component-wrapper'

import '../styles/reset.css';
import '../styles/app.css';

const MicroFrontendAppOneVue = Vue.component(
    'app-2',
    {
        template: '<div style="background: #F5F5F5;">MFA Web Component in Vue 😎</div>',
    },
);

const customEl = wrap(Vue, MicroFrontendAppOneVue);

window.customElements.define('app-2', customEl)
