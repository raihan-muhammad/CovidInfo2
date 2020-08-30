class covidText extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a href="#" class="header__text-covid"> COVID - 19 </a>
        `;
    }
}

customElements.define("covid-text", covidText);