import {LitElement, html} from '@polymer/lit-element';

class WebComponentsMood extends LitElement {

  static get properties() {
    return {
      mood: String
    }
  }

  _render({mood}) {
    return html`
      <style>
        .mood {
          color: #1976d2;
        }
      </style>

      <h1>Web Components are <span class="mood">${mood}</span>!</h1>
    `;
  }

}

customElements.define('wc-mood', WebComponentsMood);
