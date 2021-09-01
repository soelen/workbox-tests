import { LitElement, css, CSSResultGroup } from 'lit';
import store, { RootState } from '../store/store';

export abstract class PageElement extends LitElement {

  private _storeUnsubscribe: Function | null = null;

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


  abstract stateChanged ( state:RootState ): void;

  connectedCallback() {

    super.connectedCallback()
    this._storeUnsubscribe = store.subscribe( () => this.stateChanged( store.getState() ) );
  }

  disconnectedCallback() {

    super.disconnectedCallback();
    if( this._storeUnsubscribe ) this._storeUnsubscribe();
  }

  constructor() {
    super();
  }
}
