export default class HierarchicalBrowser extends HTMLElement {

    connectedCallback() {
        const template = document.getElementById('hierarchical-template');
        const instance = document.importNode(template.content, true);
        instance.querySelector('.workspace-name').innerHTML = 'my-workspace';
        this.appendChild(instance);
    }
}

if (!customElements.get('hierarchical-browser')) {
    customElements.define('hierarchical-browser', HierarchicalBrowser);
}
