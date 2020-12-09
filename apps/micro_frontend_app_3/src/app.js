import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/reset.css';
import '../styles/app.css';

class MicroFrontendAppOneReact extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(mountPoint);
        ReactDOM.render('MFA Web Component in React 👋', mountPoint);
    }
}

window.customElements.define('app-3', MicroFrontendAppOneReact)
