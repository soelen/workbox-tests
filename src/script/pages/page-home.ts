import { css, html } from 'lit';
import { customElement, } from 'lit/decorators';
import { RootState } from '../store/store';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import { PageElement } from './page-element';

@customElement('page-home')
export class PageHome extends PageElement {

  static get styles() {
    return [
      ...super.styles,
      css`
      :host {
        display: block;
      }

    ` ] ;
  }

  constructor() {
    super();
  }

  stateChanged( state: RootState ) {

  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  render() {
    return html`
    Home
    <p>Blep</p>
    `;
  }
}
