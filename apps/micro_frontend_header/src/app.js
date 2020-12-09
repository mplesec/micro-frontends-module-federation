import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import '../styles/reset.css';

const MicroFrontendHeaderVue = Vue.component(
    'a-header',
    {
        template: `
            <div>
                <div style="background: #39537A; color: #D5DCE3;">Web Component Header</div>
                &nbsp; <a href="" @click="routeTo($event, '/')">🏡 Home is where the code is</a>
                &nbsp; <a href="" @click="routeTo($event, '/app_1')">JS</a>
                &nbsp; <a href="" @click="routeTo($event, '/app_2')">Vue</a>
                &nbsp; <a href="" @click="routeTo($event, '/app_3')">React</a>
            </div>
        `,
        methods: {
            // Custom "router" because Vue's router is a global inject
            // and we only need this functionality
            routeTo: (event, to) => {
                event.preventDefault();

                // TODO: temp. Pass history state from MFO
                // The hackest hack, however this is what happens when no URL change event is available
                window.history.pushState({}, null, to);
                window.history.pushState({}, null, to);
                window.history.back();
            }
        },
    },
);

const customEl = wrap(Vue, MicroFrontendHeaderVue);
window.customElements.define('mf-header', customEl);
