import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators';
// import { Workbox } from 'workbox-window';

import './page-home';

import { Router } from '@vaadin/router';

import '../components/blume-header';

export const lockScrollbar = ( lock: boolean ) => {

  const style = document.body.style;
  lock ? style.overflow = 'hidden' : style.overflow = 'overlay';

}

export const go = ( pathname: string, search: string = '', hash: string = '', ) => {
  let path = search ? `${ pathname }?${ new URLSearchParams( search ).toString() }` : pathname;
  path = hash ? `${ path }${ hash }` : path;
  history.pushState( null, '', path )
  window.dispatchEvent( new CustomEvent( 'vaadin-router-go', { detail: {pathname, search, hash } } ) );
}

@customElement('app-index')
export class AppIndex extends LitElement {

  @state() title:string = 'Jasmin Flaig';
  // @state() private _update: boolean = false;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      main {
        flex-grow: 1;
      }

      #routerOutlet > .leaving {
        animation: 200ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 200ms fadeIn linear;
      }
      @keyframes fadeOut {
        from {opacity: 1;}
        to {opacity: 0;}
      }
      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

      // const workbox = new Workbox( '/pwabuilder-sw.js' );
      // workbox.addEventListener( 'installed', ( event ) => {
      //   if (event.isUpdate) {
      //     this._update = true;
      //   } else {
      //     console.log( 'First-installed code goes here...' );
      //   }
      // } );

      // workbox.register()
      // .catch( ( error ) => {
      //   console.error( error );
      // });

    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));

    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          {
            path: '/',
            component: 'page-home',
          }, {
            path: '/about',
            component: 'page-about',
            action: async () => {
              await import('./page-about.js');
            },
          }, {
            path: '(.*)',
            component: 'not-found',
            action: async () => {
              await import('./not-found.js');
            },
          }
        ],
      } as any,
    ]);

  }

  render() {
    return html`
      <blume-header .title="${ this.title }"></blume-header>
      <main>
        <div id="routerOutlet"></div>
      </main>
    `;
  }
}
