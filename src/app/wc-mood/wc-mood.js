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

  _didRender(_props, _changedProps, _prevProps) {
    this._notifyPropsChanges(_props, _changedProps);
  }

  _notifyPropsChanges(_props, _changedProps) {
    for(let prop in _props) {
      this.dispatchEvent(new CustomEvent(prop + '-changed', {
        detail: {
          value: _changedProps[prop]
        }
      }));
    }
  }

}

customElements.define('wc-mood', WebComponentsMood);
