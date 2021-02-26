export default class HierarchicalBrowser extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        const { shadowRoot } = this;
        const template = document.getElementById('hierarchical-template');
        const instance = document.importNode(template.content, true);
        instance.querySelector('.workspace-name').innerHTML = 'my-workspace';
        shadowRoot.appendChild(instance);
    }
}

if (!customElements.get('hierarchical-browser')) {
    customElements.define('hierarchical-browser', HierarchicalBrowser);
}
