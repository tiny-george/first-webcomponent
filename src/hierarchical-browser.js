export default class HierarchicalBrowser extends HTMLElement {

    connectedCallback() {
        this.innerHTML = "<p>Loading browser...</p>"
    }
}

if (!customElements.get('hierarchical-browser')) {
    customElements.define('hierarchical-browser', HierarchicalBrowser);
}
