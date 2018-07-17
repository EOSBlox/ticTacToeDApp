import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';

class EosPlay extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          height: 100vh;
          display: block;
          color: #FFFFFF;
          background-image: url("./images/board-bg.svg");
        }

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="container">
        <div class="top">
        <div id="home" on-click="_home"><span>EOS</span>TICTACTOE</div>

        </div>
        <div class="middle">
        <div class="center">
                <div class="tile po1">1</div>
                <div class="tile pos2">2</div>
                <div class="tile pos3">3</div>
                <div class="tile pos4">4</div>
                <div class="tile pos5">5</div>
                <div class="tile pos6">6</div>
                <div class="tile pos7">7</div>
                <div class="tile pos8">8</div>
                <div class="tile pos9">9</div>
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

} window.customElements.define('eos-play', EosPlay);
