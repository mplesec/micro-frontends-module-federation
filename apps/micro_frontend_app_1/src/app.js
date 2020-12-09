import '../styles/reset.css';
import '../styles/app.css';

class MicroFrontendApp1 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        let el = document.createElement('div');
        el.innerHTML = 'MFA Web Component in pure JS 😇';
        this.shadowRoot.append(el);
    }
}

window.customElements.define('app-1', MicroFrontendApp1);
