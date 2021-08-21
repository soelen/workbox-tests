import { css, html } from 'lit';
import { customElement } from 'lit/decorators';
import { PageElement } from './page-element';

@customElement('page-about')
export class PageAbout extends PageElement {
  static get styles() {
    return [
      ...super.styles,
      css``
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>About Page</h2>
      </div>
    `;
  }
}
