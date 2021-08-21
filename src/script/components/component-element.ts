import { LitElement, css, CSSResultGroup } from 'lit';

export abstract class ComponentElement extends LitElement {

  static get styles(): CSSResultGroup[] {
    return [ css`
      :host::selection,
      ::selection {
        background-color: var( --blume-action );
      }
      :host *, :host *::before, :host *::after {
        box-sizing: border-box;
      }
      :host::-webkit-scrollbar,
      ::-webkit-scrollbar {
        width: var( --blume-spacer-sm );
        height: var( --blume-spacer-sm );
      }
      :host::-webkit-scrollbar-track,
      ::-webkit-scrollbar-track {
        background: transparent;
      }

      :host::-webkit-scrollbar-thumb,
      ::-webkit-scrollbar-thumb {
        border-radius: var( --blume-radius-pill );
        background-color: var( --blume-primary );
      }

      :host::-webkit-scrollbar-thumb:hover,
      ::-webkit-scrollbar-thumb:hover {
        background-color: var( --blume-primary-dark ); }
    `];
  }
}
