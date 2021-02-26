export default class HierarchicalBrowser extends HTMLElement {

    connectedCallback() {
        const template = document.getElementById('hierarchical-template');
        const instance = document.importNode(template.content, true);
        this.appendChild(instance);
    }
}

if (!customElements.get('hierarchical-browser')) {
    customElements.define('hierarchical-browser', HierarchicalBrowser);
}
