import { LitElement, css, CSSResultGroup } from 'lit';

export class PageElement extends LitElement {

  static get styles(): CSSResultGroup[] {
    return [ css`
      ::selection {
        background-color: var( --blume-action );
      }
      :host *, :host *::before, :host *::after {
        box-sizing: border-box;
      }
      :host {
        display: block;
        padding-top: var( --blume-header-height );
      }
    `];
  }

  constructor() {
    super();
  }
}
