import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';

class EosLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          height: 100vh;
          display: block;
          color: #FFFFFF;
          /* background-image: url("./images/board-bg.svg"); */
        }

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="container">
        <div class="top">
        <div id="home" on-click="_home"><span>EOS</span>TICTACTOE</div>
          <div>
            <ul>
              <li id="mode1p" on-click="_mode" class="mode-on">1P</li>
              <li id="mode2p" on-click="_mode" class="mode-off">2P</li>
              <li id="mode2pp" on-click="_mode" class="mode-off">2P+</li>
            </ul>
          </div>
        </div>
        <div class="middle">
          <div>
            <label for="accoutName">Account Name</label>
            <input type="text" name="AccountName" id="accoutName">
            <label for="keyProvider">Key Provider</label>
            <input type="text" name="keyProvider" id="keyProvider">
            <label for="network">Network</label>
            <input type="text" name="nwtwork" id="network">
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-button">
            <div class="button-center" on-click="_start">Start Game</div>
            <div class="button-center-shadow"></div>
            <div class="button-center-shadowtwo"></div>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      mode: {
        type: String,
        value: '1p'
      },
      screen: {
        type: String,
        value: 'home'
      },
      bottom: {
        type: Boolean,
        value: true
      }
    };
  }


  _mode(event){
    this.shadowRoot.querySelector('#mode1p').classList.remove('mode-on');
    this.shadowRoot.querySelector('#mode2p').classList.remove('mode-on');
    this.shadowRoot.querySelector('#mode2pp').classList.remove('mode-on');

    this.mode = event.path[0].id;
    if (this.mode === 'mode1p') {
      this.shadowRoot.querySelector('#mode1p').classList.add('mode-on');
      this._modeChanged();
    }
    if (this.mode === 'mode2p') {
      this.shadowRoot.querySelector('#mode2p').classList.add('mode-on');
      this._modeChanged();
    }
    if (this.mode === 'mode2pp') {
      this.shadowRoot.querySelector('#mode2pp').classList.add('mode-on');
      this._modeChanged();
    }
  }

  _modeChanged(){
    var audio = new Audio('../sounds/mode-changed.mp3');
    audio.play();
  }

  _start(){
    this.set('route.path', 'play');
  }

  _home(){
    this.set('route.path', '/');
  }

} window.customElements.define('eos-login', EosLogin);
