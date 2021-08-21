import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators';

import { ComponentElement } from './component-element';

@customElement('blume-header')
export class BlumeHeader extends ComponentElement {

  @property({ type: String }) title = '';
  @property({ type: Boolean, reflect: true, } ) public open: boolean = false;

  static get styles() {
    return [
      ...super.styles,
      css`
      :host {
        display: block;
      }
    ` ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </header>
    `;
  }
}
