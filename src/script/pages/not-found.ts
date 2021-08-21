import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('not-found')
export class NotFound extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Error 404</h2>
        Page not found!
      </div>
    `;
  }
}
