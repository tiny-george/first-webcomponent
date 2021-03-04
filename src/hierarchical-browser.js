export default class HierarchicalBrowser extends HTMLElement {
    constructor() {
        super();
        this.state = 'loading';
        this.attachShadow({mode: 'open'});
    }

    get state() {
        return this.getAttribute('state');
    }

    set state(value) {
        this.setAttribute('state', value);
    }

    static get observedAttributes() { return ['state']; }

    attributeChangedCallback(name, oldValue, newValue) {
       this.render();
   }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = '';
        if (this.getAttribute('state') == "loading") {
            this.shadowRoot.appendChild(this.loading());
            setTimeout(() => this.state = 'error' , 200);
        }
        if (this.getAttribute('state') == "error") {
            this.shadowRoot.innerHTML = '<p>Error<p>';
        }
    }

    loading() {
        const template = document.getElementById('hierarchical-template');
        const instance = document.importNode(template.content, true);
        instance.querySelector('.workspace-name').innerHTML = 'my-workspace';
        return instance;
    }
}

if (!customElements.get('hierarchical-browser')) {
    customElements.define('hierarchical-browser', HierarchicalBrowser);
}
