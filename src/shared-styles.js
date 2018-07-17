import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    .container{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .container > div{
      flex:1;
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
    }
    .bottom-button{
      position: relative;
    }
    .bottom > div{
      flex:1;
    }
    .middle {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
    }
    .center {
      display: flex;
      flex-wrap: wrap;
    }
    .home-text {
      display: flex;
      flex-wrap: wrap;
    }
    .home-logo{
      width:100%;
      text-align:center;
      font-size: 1.5em;
    }
    .home-logo span{
      font-weight:100;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .tile{
      width: 33.33%;
      height: 33.3%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .top span {
      font-weight:100;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    ul {
        margin: 0;
      }
    li {
        display: inline;
        margin-left: 20px;
        cursor: pointer;
      }
    .top {
      display:flex;
      justify-content: space-between;
    }
    .mode-on {
      color:#2A9ECF;
    }
    .home-subtitle {
      width: 100%;
      text-align: center;
      font-size: 0.4em;
      font-weight:200;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      padding-top:40px;
      letter-spacing: 3.4px;
    }
    .home-subtitle a{
      color: white;
      text-decoration:none;
    }
    .button-center, .button-center-shadow {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .button-center{
      background: #2A9ECF;
      border-radius: 8px;
      line-height: 80px;
      font-size: 0.7em;
      color: #FFFFFF;
      text-align: center;
      text-transform: uppercase;
      width:100%;
      overflow: visable;
      display: block;
      z-index:1000;
      cursor: pointer;
    }
    .button-center-shadow{
      background: #343850;
      border-radius: 8px;
      line-height: 80px;
      text-transform: uppercase;
      transform: rotate(0) skew(-40deg);
      width: 100%;
      bottom: -70px;
      left: -58px;
      height: 140px;
    }
    .button-center-shadowtwo{
      position: absolute;
      background-color: #343850;
      z-index: 999999;
      width: 100%;
      height: 200px;
      transform: rotate(0) skew(-40deg);
      bottom: -200px;
      left: -88px;
    }
    input {
      width:100%;
      background: #FFFFFF;
      border: 1px solid #979797;
      border-radius: 8px;
      height: 50px;
      margin-bottom: 20px;
      font-size: 20px;
      outline:none;
      text-indent: 20px;
    }
    label {
      font-size: 16px;
      line-height: 40px;
    }

    @media (max-width: 320px) {
      :host {
        background-position: center; 
        background-size: 2000px 2000px;
        font-size: 13px;
      }
      .middle {
        padding: 15px;
      }
      .bottom {
        min-height: 15px;
        max-height: 45px;
        padding: 15px;
      }
      .button-center{
        line-height: 50px;
      }
      .button-center-shadow{
        bottom: -95px;
      }
      .button-center-shadowtwo{
        bottom: -200px;
      }
      .top {
        min-height: 15px;
        max-height: 15px;
        padding: 15px;
      }
      .top span {
        display: none;
      }
      .center {
        min-width: 285px;
        min-height: 285px;
      }
    }

    @media (min-width: 321px) and (max-width: 640px) {
      :host {
        background-position: center; 
        background-size: 2000px 2000px;
        font-size: 20px;
      }
      .middle {
        padding: 30px;
      }
      .bottom {
        min-height: 15px;
        max-height: 55px;
        padding: 30px;
      }
      .button-center{
        line-height: 60px;
      }
      .button-center-shadow{
        bottom: -85px;
      }
      .button-center-shadowtwo{
        bottom: -200px;
      }
      .top {
        min-height: 15px;
        max-height: 15px;
        padding: 22px;
      }
      .top span {
        display: none;
      }
      .center {
        width: 285px;
        height: 285px;
        background-size: 285px 285px;
      }
    }

    @media (min-width: 641px) {
      :host {
        background-position: center; 
        background-size: 4200px 4200px;
        font-size: 32px;
      }
      .middle {
        padding: 60px;
      }
      .bottom {
        min-height: 15px;
        max-height: 75px;
        padding: 60px;
      }
      .top {
        min-height: 15px;
        max-height: 15px;
        padding: 60px;
      }
      .top:first-child {
        cursor: pointer;
      }
      .center {
        width: 600px;
        height: 600px;
        background-size: 600px 600px;
      }
    }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
