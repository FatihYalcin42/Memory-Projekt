(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const k=[{value:"code-vibes",label:"Code vibes theme"},{value:"foods",label:"Foods theme"}],F=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],G=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let l={boardSize:null,player:null,theme:null};function d(){return{...l}}function $(e){l={...l,theme:e}}function J(e){l={...l,player:e}}function Q(e){l={...l,boardSize:e}}function g(){return!!(l.theme&&l.player&&l.boardSize)}function H(e){return k.some(n=>n.value===e)}function e2(e){return F.some(n=>n.value===e)}function n2(e){return G.some(n=>n.value===e)}let m=null;function t2(e){m={...e}}function a2(){return m?{...m}:null}function r2(){return m!==null}function V(){m=null}function o(e,n){let t=e;return Object.entries(n).forEach(([a,r])=>{t=t.replaceAll(`{{${a}}}`,r)}),t}function c(e,n){const t=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`<template\\s+id="${t}"[^>]*>([\\s\\S]*?)<\\/template>`),r=e.match(a);return r?r[1].trim():""}const s2="code-vibes",o2={"code-vibes":{cssModifierClass:"game-screen--code-vibes"},foods:{cssModifierClass:"game-screen--foods"}};function A(e){return e??s2}function c2(e){return o2[A(e)].cssModifierClass}const Y=`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02564 8C0.74359 8 0.502137 7.90208 0.301282 7.70625C0.100427 7.51042 0 7.275 0 7V1C0 0.725 0.100427 0.489583 0.301282 0.29375C0.502137 0.0979167 0.74359 0 1.02564 0H6.66667C6.82906 0 6.98291 0.0354167 7.12821 0.10625C7.27351 0.177083 7.39316 0.275 7.48718 0.4L9.79487 3.4C9.93162 3.575 10 3.775 10 4C10 4.225 9.93162 4.425 9.79487 4.6L7.48718 7.6C7.39316 7.725 7.27351 7.82292 7.12821 7.89375C6.98291 7.96458 6.82906 8 6.66667 8H1.02564Z" fill="#2BB1FF"/>
</svg>
`,v=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="4" fill="#097FC5"/>
<path d="M4.625 14C4.31563 14 4.05078 13.8825 3.83047 13.6475C3.61016 13.4125 3.5 13.13 3.5 12.8V11.615C3.5 11.415 3.54219 11.23 3.62656 11.06C3.71094 10.89 3.82344 10.745 3.96406 10.625C4.61094 10.065 5.09609 9.5 5.41953 8.93C5.74297 8.36 5.97031 7.85 6.10156 7.4H5.1875C5.02813 7.4 4.89453 7.3425 4.78672 7.2275C4.67891 7.1125 4.625 6.97 4.625 6.8C4.625 6.63 4.67891 6.4875 4.78672 6.3725C4.89453 6.2575 5.02813 6.2 5.1875 6.2H5.89062C5.75938 5.98 5.65625 5.745 5.58125 5.495C5.50625 5.245 5.46875 4.98 5.46875 4.7C5.46875 3.95 5.71484 3.3125 6.20703 2.7875C6.69922 2.2625 7.29688 2 8 2C8.70312 2 9.30078 2.2625 9.79297 2.7875C10.2852 3.3125 10.5312 3.95 10.5312 4.7C10.5312 4.98 10.4938 5.245 10.4188 5.495C10.3438 5.745 10.2406 5.98 10.1094 6.2H10.8125C10.9719 6.2 11.1055 6.2575 11.2133 6.3725C11.3211 6.4875 11.375 6.63 11.375 6.8C11.375 6.97 11.3211 7.1125 11.2133 7.2275C11.1055 7.3425 10.9719 7.4 10.8125 7.4H9.89844C10.0297 7.85 10.257 8.36 10.5805 8.93C10.9039 9.5 11.3891 10.065 12.0359 10.625C12.1766 10.745 12.2891 10.89 12.3734 11.06C12.4578 11.23 12.5 11.415 12.5 11.615V12.8C12.5 13.13 12.3898 13.4125 12.1695 13.6475C11.9492 13.8825 11.6844 14 11.375 14H4.625ZM4.625 12.8H11.375V11.6C10.5125 10.88 9.88906 10.1375 9.50469 9.3725C9.12031 8.6075 8.8625 7.95 8.73125 7.4H7.26875C7.1375 7.95 6.87969 8.6075 6.49531 9.3725C6.11094 10.1375 5.4875 10.88 4.625 11.6V12.8ZM8 6.2C8.39375 6.2 8.72656 6.055 8.99844 5.765C9.27031 5.475 9.40625 5.12 9.40625 4.7C9.40625 4.28 9.27031 3.925 8.99844 3.635C8.72656 3.345 8.39375 3.2 8 3.2C7.60625 3.2 7.27344 3.345 7.00156 3.635C6.72969 3.925 6.59375 4.28 6.59375 4.7C6.59375 5.12 6.72969 5.475 7.00156 5.765C7.27344 6.055 7.60625 6.2 8 6.2Z" fill="white"/>
</svg>
`,i2="/assets/exitgame1-BZslv4aI.svg",K="/assets/back-to-game-button-Dy28tT7r.svg",l2="/assets/exit-game-button-CSFmJePI.svg",_2="/assets/exit-game-button-DxiUlG8b.svg",d2="/assets/exit-game-button-hover-CWKYXIiz.svg",u2="/assets/back-to-game-button-BckwOnvC.svg",m2="/assets/back-to-game-button-hover-CltZJA0Z.svg",C2="/assets/exit-game-button-overlay-BmTcSkCT.svg",g2="/assets/exit-game-button-overlay-hover-CHeUaH3n.svg",E2="/assets/Cards%205-DZnpmrpx.svg",f2="/assets/angular-card-CMiTHiGh.svg",p2="/assets/bootstrap-card-Rq83vZTa.svg",S2="/assets/css-card-Yna33ZIc.svg",R2="/assets/database-card-DZJGMO6r.svg",O2="/assets/django-card-zdDnWkPj.svg",A2="/assets/firebase-card-BGJGDkPQ.svg",v2="/assets/guthub-card-C0OAhCwn.svg",h2="/assets/html5-card-CuL2MCMe.svg",T2="/assets/js-card-vn5hBh96.svg",b2="/assets/node-card-Dum8zyHj.svg",I2="/assets/python-card-xA_4epsW.svg",L2="/assets/react-card-CIELOEMr.svg",M2="/assets/sass-card-DwnRYj6b.svg",y2="/assets/terminal-card-B7_Z2NcV.svg",B2="/assets/ts-card-BKPozS6g.svg",P2="/assets/vscode-card-fF042ORC.svg",N2="/assets/vue-card-BoB3VO2b.svg",w2="/assets/back-card-D-qRVjX3.svg",x2="/assets/brezel-card-CXqqkZs-.svg",D2="/assets/cake-card-BXMN5G8t.svg",U2="/assets/chicken-card-V3orblRE.svg",k2="/assets/chocolate-card-QAzOvrHx.svg",F2="/assets/corndog-card-CwpjZjE3.svg",G2="/assets/donut-card-C0Ssqpoo.svg",H2="/assets/hamburger-card-CjV68Ggw.svg",V2="/assets/icecream-card-CoO_ylkx.svg",Y2="/assets/macron-card-D9lMrSKW.svg",K2="/assets/muffin-card-DO8Rb5nk.svg",W2="/assets/pizza-card-CCl09bmZ.svg",Z2="/assets/pommes-card-KiUYGabn.svg",X2="/assets/pudding-card-Ct1M7kVT.svg",z2="/assets/salad-card-8HQ_A0VA.svg",q2="/assets/sandwich-card-Z1FA70DW.svg",j2="/assets/sushi-card-DUXi4ArE.svg",$2="/assets/tacco-card-D5AQdy9w.svg",J2="/assets/wrao-card-CLUKRYIs.svg",Q2=`<main class="game-screen {{GAME_THEME_CLASS_NAME}} {{BOARD_SIZE_CLASS_NAME}}" aria-labelledby="game-title">
  <h1 id="game-title" class="game-screen__sr-only">Game</h1>
  <div class="game-screen__canvas">
    <section class="game-screen__board-area" aria-label="Game board">
      <div
        class="game-screen__board-grid"
        id="game-board"
        data-board-size="{{BOARD_SIZE}}"
      >
        {{BOARD_CARDS}}
      </div>
    </section>
    {{HUD_MARKUP}}
    {{EXIT_MODAL_MARKUP}}
  </div>
</main>
`,C=`<!-- Reusable game fragments -->
<template id="game-hud-code-vibes">
  <div class="game-screen__hud">
    <div class="game-screen__scoreboard" aria-label="Scoreboard">
      <span class="game-screen__score game-screen__score--blue">
        <span class="game-screen__score-icon" aria-hidden="true">{{PLAYER_LABEL_ICON}}</span>
        <span>Blue</span>
        <span class="game-screen__score-value" data-score-player="blue">0</span>
      </span>
      <span class="game-screen__score game-screen__score--orange">
        <span class="game-screen__score-icon" aria-hidden="true">{{PLAYER_LABEL_ICON}}</span>
        <span>Orange</span>
        <span class="game-screen__score-value" data-score-player="orange">0</span>
      </span>
    </div>

    <div class="game-screen__current-player" aria-label="Current player">
      <span class="game-screen__current-player-text">Current player:</span>
      <span
        class="game-screen__current-player-marker{{PLAYER_MARKER_CLASS_NAME}}"
        data-current-player-marker
        aria-hidden="true"
      >
        {{PLAYER_LABEL_ICON}}
      </span>
    </div>

    <button
      id="game-exit-button"
      class="game-screen__exit-button"
      type="button"
      aria-label="Exit game"
    >
      <img
        class="game-screen__exit-button-image"
        src="{{EXIT_BUTTON_SRC}}"
        alt=""
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<template id="game-hud-foods">
  <div class="game-screen__hud game-screen__hud--foods">
    <div class="game-screen__foods-topbar">
      <div class="game-screen__scoreboard" aria-label="Scoreboard">
        <span class="game-screen__score game-screen__score--orange">
          <span class="game-screen__score-icon" aria-hidden="true">{{FOODS_SCORE_ICON}}</span>
          <span class="game-screen__score-value" data-score-player="orange">0</span>
        </span>
        <span class="game-screen__score game-screen__score--blue">
          <span class="game-screen__score-icon" aria-hidden="true">{{FOODS_SCORE_ICON}}</span>
          <span class="game-screen__score-value" data-score-player="blue">0</span>
        </span>
      </div>

      <div class="game-screen__current-player" aria-label="Current player">
        <span class="game-screen__current-player-text">Current player:</span>
        <span
          class="game-screen__current-player-marker{{PLAYER_MARKER_CLASS_NAME}}"
          data-current-player-marker
          aria-hidden="true"
        >
          {{FOODS_PLAYER_MARKER_ICON}}
        </span>
      </div>

      <button
        id="game-exit-button"
        class="game-screen__exit-button game-screen__exit-button--foods"
        type="button"
        aria-label="Exit game"
      >
        <img
          class="game-screen__exit-button-image game-screen__exit-button-image--foods game-screen__exit-button-image--foods-default"
          src="{{FOODS_EXIT_HEADER_BUTTON_SRC}}"
          alt=""
          aria-hidden="true"
        />
        <img
          class="game-screen__exit-button-image game-screen__exit-button-image--foods game-screen__exit-button-image--foods-hover"
          src="{{FOODS_EXIT_HEADER_BUTTON_HOVER_SRC}}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<template id="game-exit-modal-code-vibes">
  <div class="game-screen__exit-modal" data-exit-modal hidden>
    <div class="game-screen__exit-modal-panel" role="dialog" aria-modal="true" aria-labelledby="exit-modal-title">
      <h2 id="exit-modal-title" class="game-screen__exit-modal-title">
        Are you sure you want to quit the game?
      </h2>

      <div class="game-screen__exit-modal-actions">
        <button
          type="button"
          class="game-screen__modal-button game-screen__modal-button--back"
          data-exit-cancel
          aria-label="Back to game"
        >
          <img
            class="game-screen__modal-button-image"
            src="{{BACK_TO_GAME_BUTTON_SRC}}"
            alt=""
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          class="game-screen__modal-button game-screen__modal-button--exit"
          data-exit-confirm
          aria-label="Exit game"
        >
          <img
            class="game-screen__modal-button-image"
            src="{{EXIT_GAME_BUTTON_SRC}}"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<template id="game-exit-modal-foods">
  <div class="game-screen__exit-modal game-screen__exit-modal--foods" data-exit-modal hidden>
    <div
      class="game-screen__exit-modal-panel game-screen__exit-modal-panel--foods"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <h2 id="exit-modal-title" class="game-screen__exit-modal-title game-screen__exit-modal-title--foods">
        Are you sure you want to quit the game?
      </h2>

      <div class="game-screen__exit-modal-actions game-screen__exit-modal-actions--foods">
        <button
          type="button"
          class="game-screen__modal-button game-screen__modal-button--foods game-screen__modal-button--back"
          data-exit-cancel
          aria-label="Back to game"
        >
          <img
            class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back game-screen__modal-button-image--foods-default"
            src="{{FOODS_BACK_TO_GAME_BUTTON_SRC}}"
            alt=""
            aria-hidden="true"
          />
          <img
            class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back game-screen__modal-button-image--foods-hover"
            src="{{FOODS_BACK_TO_GAME_BUTTON_HOVER_SRC}}"
            alt=""
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          class="game-screen__modal-button game-screen__modal-button--foods game-screen__modal-button--exit"
          data-exit-confirm
          aria-label="Exit game"
        >
          <img
            class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit game-screen__modal-button-image--foods-default"
            src="{{FOODS_EXIT_OVERLAY_BUTTON_SRC}}"
            alt=""
            aria-hidden="true"
          />
          <img
            class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit game-screen__modal-button-image--foods-hover"
            src="{{FOODS_EXIT_OVERLAY_BUTTON_HOVER_SRC}}"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<template id="game-card">
  <button
    class="game-card"
    type="button"
    data-card-index="{{CARD_INDEX}}"
    data-card-icon="{{CARD_ICON}}"
  >
    <span class="game-card__inner">
      <span
        class="game-card__face game-card__face--front"
        style="background-image: url('{{BACK_CARD_SPRITE}}')"
        aria-hidden="true"
      ></span>
      <span
        class="game-card__face game-card__face--back"
        style="background-image: url('{{CARD_ICON}}')"
        aria-hidden="true"
      ></span>
    </span>
  </button>
</template>
`,ee=[f2,p2,S2,R2,O2,A2,v2,h2,T2,b2,I2,L2,M2,y2,B2,P2,N2],ne=[x2,D2,U2,k2,F2,G2,H2,V2,Y2,K2,W2,Z2,X2,z2,q2,j2,$2,J2],W={"code-vibes":{backCardSprite:E2,faceIcons:ee},foods:{backCardSprite:w2,faceIcons:ne}},te=c(C,"game-hud-code-vibes"),ae=c(C,"game-hud-foods"),re=c(C,"game-exit-modal-code-vibes"),se=c(C,"game-exit-modal-foods"),oe=c(C,"game-card");function ce(e){const n=A(e.theme),t=c2(e.theme),a=e.boardSize??"16",r=Se(a),s=Ee(a,n),i=e.player==="orange"?" is-orange":" is-blue",L=n==="foods"?_e(i):ie(i);return o(Q2,{BOARD_CARDS:s,BOARD_SIZE:a,BOARD_SIZE_CLASS_NAME:r,EXIT_MODAL_MARKUP:me(n),GAME_THEME_CLASS_NAME:t,HUD_MARKUP:L})}function ie(e){const n=le();return o(te,{EXIT_BUTTON_SRC:i2,PLAYER_LABEL_ICON:n,PLAYER_MARKER_CLASS_NAME:e})}function le(){return Y.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function _e(e){const n=de(),t=ue();return o(ae,{FOODS_EXIT_HEADER_BUTTON_HOVER_SRC:d2,FOODS_EXIT_HEADER_BUTTON_SRC:_2,FOODS_PLAYER_MARKER_ICON:t,FOODS_SCORE_ICON:n,PLAYER_MARKER_CLASS_NAME:e})}function de(){return v.replace(/<rect[^>]*fill="#097FC5"[^>]*\/>\s*/gi,"").replace(/fill="white"/gi,'fill="currentColor"').trim()}function ue(){return v.replace(/fill="#097FC5"/gi,'fill="currentColor"').trim()}function me(e){return e==="foods"?ge():Ce()}function Ce(){return o(re,{BACK_TO_GAME_BUTTON_SRC:K,EXIT_GAME_BUTTON_SRC:l2})}function ge(){return o(se,{FOODS_BACK_TO_GAME_BUTTON_HOVER_SRC:m2,FOODS_BACK_TO_GAME_BUTTON_SRC:u2,FOODS_EXIT_OVERLAY_BUTTON_HOVER_SRC:g2,FOODS_EXIT_OVERLAY_BUTTON_SRC:C2})}function Ee(e,n){const t=Number.parseInt(e,10),a=Number.isFinite(t)&&t>0?t:16,r=W[n],s=Math.floor(a/2),i=fe(s,n);return pe([...i,...i]).map((q,j)=>o(oe,{BACK_CARD_SPRITE:r.backCardSprite,CARD_ICON:q,CARD_INDEX:String(j)})).join("")}function fe(e,n){const t=W[n].faceIcons;return Array.from({length:e},(a,r)=>t[r%t.length])}function pe(e){const n=[...e];for(let t=n.length-1;t>0;t-=1){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function Se(e){return e==="24"?"game-screen--board-24":e==="36"?"game-screen--board-36":"game-screen--board-16"}const Re="#game-exit-button",Oe="[data-exit-modal]",Ae="[data-exit-cancel]",ve="[data-exit-confirm]",he=".game-screen",Te="is-exit-modal-open",be=".game-card",Ie="[data-current-player-marker]",h="flipped",T="is-matched",Le=700,Me=320;function ye(e){const n=d();e.innerHTML=ce(n),Be(e),we(e,n.player??"blue")}function Be(e){const n=Pe(e);n&&Ne(n)}function Pe(e){const n=e.querySelector(Re),t=e.querySelector(Oe),a=e.querySelector(Ae),r=e.querySelector(ve),s=e.querySelector(he);return!n||!t||!a||!r||!s?null:{exitButton:n,exitModal:t,backToGameButton:a,confirmExitButton:r,gameScreen:s}}function Ne(e){e.exitButton.addEventListener("click",()=>{M(e,!0)}),e.backToGameButton.addEventListener("click",()=>{M(e,!1)}),e.confirmExitButton.addEventListener("click",()=>{window.location.hash="#settings"})}function M(e,n){e.exitModal.hidden=!n,e.gameScreen.classList.toggle(Te,n)}function we(e,n){const t=xe(e);if(t.length===0)return;const a=De(n);b(e,a),Ue(e,t,a)}function xe(e){return Array.from(e.querySelectorAll(be))}function De(e){return{currentPlayer:e,firstFlippedCard:null,secondFlippedCard:null,isTurnLocked:!1,scores:{blue:0,orange:0}}}function Ue(e,n,t){n.forEach(a=>{a.addEventListener("click",()=>{ke(e,n.length,t,a)})})}function ke(e,n,t,a){if(!Fe(t,a)){if(Z(a),!t.firstFlippedCard){t.firstFlippedCard=a;return}Ge(t,a),He(e,n,t)}}function Fe(e,n){return e.isTurnLocked||n.classList.contains(h)||n.classList.contains(T)}function Ge(e,n){e.secondFlippedCard=n,e.isTurnLocked=!0}function He(e,n,t){if(Ve(t)){Ze(e,n,t);return}Ye(e,t)}function Ve(e){return!e.firstFlippedCard||!e.secondFlippedCard?!1:We(e.firstFlippedCard,e.secondFlippedCard)}function Ye(e,n){window.setTimeout(()=>{y(n.firstFlippedCard),y(n.secondFlippedCard),Ke(n),O(n),b(e,n)},Le)}function y(e){e?.classList.contains(h)&&Z(e)}function Ke(e){e.currentPlayer=e.currentPlayer==="blue"?"orange":"blue"}function Z(e){e.classList.toggle(h)}function We(e,n){const t=e.dataset.cardIcon,a=n.dataset.cardIcon;return!!(t&&a&&t===a)}function Ze(e,n,t){const a=Xe(t);if(!a){O(t);return}ze(a),qe(t),O(t),b(e,t),je(e,n,t)}function Xe(e){return!e.firstFlippedCard||!e.secondFlippedCard?null:[e.firstFlippedCard,e.secondFlippedCard]}function ze(e){e.forEach(n=>{n.classList.add(T),n.disabled=!0})}function qe(e){e.scores[e.currentPlayer]+=1}function je(e,n,t){e.querySelectorAll(`.${T}`).length===n&&$e(t)}function $e(e){window.setTimeout(()=>{t2(Je(e)),window.location.hash="#game-over"},Me)}function Je(e){return{blueScore:e.scores.blue,orangeScore:e.scores.orange}}function O(e){e.firstFlippedCard=null,e.secondFlippedCard=null,e.isTurnLocked=!1}function b(e,n){B(e,"blue",n.scores.blue),B(e,"orange",n.scores.orange);const t=e.querySelector(Ie);t&&t.classList.toggle("is-orange",n.currentPlayer==="orange")}function B(e,n,t){const a=e.querySelectorAll(`[data-score-player="${n}"]`);a.length!==0&&a.forEach(r=>{r.textContent=String(t)})}const Qe="/assets/Confetti-Ze9Uy3By.svg",e0="/assets/home-button-DH4JdF9e.svg",n0="data:image/svg+xml,%3csvg%20width='272'%20height='310'%20viewBox='0%200%20272%20310'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2258_3991)'%3e%3crect%20width='260'%20height='298'%20transform='translate(3%203)'%20fill='%23F7E6D5'/%3e%3cpath%20d='M58%20277C51.125%20277%2045.2396%20274.552%2040.3438%20269.656C35.4479%20264.76%2033%20258.875%2033%20252V227.312C33%20223.146%2033.9375%20219.292%2035.8125%20215.75C37.6875%20212.208%2040.1875%20209.188%2043.3125%20206.688C57.6875%20195.021%2068.4688%20183.25%2075.6562%20171.375C82.8438%20159.5%2087.8958%20148.875%2090.8125%20139.5H70.5C66.9583%20139.5%2063.9896%20138.302%2061.5938%20135.906C59.1979%20133.51%2058%20130.542%2058%20127C58%20123.458%2059.1979%20120.49%2061.5938%20118.094C63.9896%20115.698%2066.9583%20114.5%2070.5%20114.5H86.125C83.2083%20109.917%2080.9167%20105.021%2079.25%2099.8125C77.5833%2094.6042%2076.75%2089.0833%2076.75%2083.25C76.75%2067.625%2082.2188%2054.3438%2093.1562%2043.4062C104.094%2032.4688%20117.375%2027%20133%2027C148.625%2027%20161.906%2032.4688%20172.844%2043.4062C183.781%2054.3438%20189.25%2067.625%20189.25%2083.25C189.25%2089.0833%20188.417%2094.6042%20186.75%2099.8125C185.083%20105.021%20182.792%20109.917%20179.875%20114.5H195.5C199.042%20114.5%20202.01%20115.698%20204.406%20118.094C206.802%20120.49%20208%20123.458%20208%20127C208%20130.542%20206.802%20133.51%20204.406%20135.906C202.01%20138.302%20199.042%20139.5%20195.5%20139.5H175.188C178.104%20148.875%20183.156%20159.5%20190.344%20171.375C197.531%20183.25%20208.312%20195.021%20222.688%20206.688C225.812%20209.188%20228.312%20212.208%20230.188%20215.75C232.062%20219.292%20233%20223.146%20233%20227.312V252C233%20258.875%20230.552%20264.76%20225.656%20269.656C220.76%20274.552%20214.875%20277%20208%20277H58ZM58%20252H208V227C188.833%20212%20174.979%20196.531%20166.438%20180.594C157.896%20164.656%20152.167%20150.958%20149.25%20139.5H116.75C113.833%20150.958%20108.104%20164.656%2099.5625%20180.594C91.0208%20196.531%2077.1667%20212%2058%20227V252ZM133%20114.5C141.75%20114.5%20149.146%20111.479%20155.188%20105.438C161.229%2099.3958%20164.25%2092%20164.25%2083.25C164.25%2074.5%20161.229%2067.1042%20155.188%2061.0625C149.146%2055.0208%20141.75%2052%20133%2052C124.25%2052%20116.854%2055.0208%20110.812%2061.0625C104.771%2067.1042%20101.75%2074.5%20101.75%2083.25C101.75%2092%20104.771%2099.3958%20110.812%20105.438C116.854%20111.479%20124.25%20114.5%20133%20114.5Z'%20fill='%23097FC5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2258_3991'%20x='0'%20y='0'%20width='272'%20height='310'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='3'%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2258_3991'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2258_3991'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",t0="data:image/svg+xml,%3csvg%20width='272'%20height='310'%20viewBox='0%200%20272%20310'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2258_3917)'%3e%3crect%20width='260'%20height='298'%20transform='translate(3%203)'%20fill='%23F7E6D5'/%3e%3cpath%20d='M58%20277C51.125%20277%2045.2396%20274.552%2040.3438%20269.656C35.4479%20264.76%2033%20258.875%2033%20252V227.312C33%20223.146%2033.9375%20219.292%2035.8125%20215.75C37.6875%20212.208%2040.1875%20209.188%2043.3125%20206.688C57.6875%20195.021%2068.4688%20183.25%2075.6562%20171.375C82.8438%20159.5%2087.8958%20148.875%2090.8125%20139.5H70.5C66.9583%20139.5%2063.9896%20138.302%2061.5938%20135.906C59.1979%20133.51%2058%20130.542%2058%20127C58%20123.458%2059.1979%20120.49%2061.5938%20118.094C63.9896%20115.698%2066.9583%20114.5%2070.5%20114.5H86.125C83.2083%20109.917%2080.9167%20105.021%2079.25%2099.8125C77.5833%2094.6042%2076.75%2089.0833%2076.75%2083.25C76.75%2067.625%2082.2188%2054.3438%2093.1562%2043.4062C104.094%2032.4688%20117.375%2027%20133%2027C148.625%2027%20161.906%2032.4688%20172.844%2043.4062C183.781%2054.3438%20189.25%2067.625%20189.25%2083.25C189.25%2089.0833%20188.417%2094.6042%20186.75%2099.8125C185.083%20105.021%20182.792%20109.917%20179.875%20114.5H195.5C199.042%20114.5%20202.01%20115.698%20204.406%20118.094C206.802%20120.49%20208%20123.458%20208%20127C208%20130.542%20206.802%20133.51%20204.406%20135.906C202.01%20138.302%20199.042%20139.5%20195.5%20139.5H175.188C178.104%20148.875%20183.156%20159.5%20190.344%20171.375C197.531%20183.25%20208.312%20195.021%20222.688%20206.688C225.812%20209.188%20228.312%20212.208%20230.188%20215.75C232.062%20219.292%20233%20223.146%20233%20227.312V252C233%20258.875%20230.552%20264.76%20225.656%20269.656C220.76%20274.552%20214.875%20277%20208%20277H58ZM58%20252H208V227C188.833%20212%20174.979%20196.531%20166.438%20180.594C157.896%20164.656%20152.167%20150.958%20149.25%20139.5H116.75C113.833%20150.958%20108.104%20164.656%2099.5625%20180.594C91.0208%20196.531%2077.1667%20212%2058%20227V252ZM133%20114.5C141.75%20114.5%20149.146%20111.479%20155.188%20105.438C161.229%2099.3958%20164.25%2092%20164.25%2083.25C164.25%2074.5%20161.229%2067.1042%20155.188%2061.0625C149.146%2055.0208%20141.75%2052%20133%2052C124.25%2052%20116.854%2055.0208%20110.812%2061.0625C104.771%2067.1042%20101.75%2074.5%20101.75%2083.25C101.75%2092%20104.771%2099.3958%20110.812%20105.438C116.854%20111.479%20124.25%20114.5%20133%20114.5Z'%20fill='%23F58E39'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2258_3917'%20x='0'%20y='0'%20width='272'%20height='310'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='3'%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2258_3917'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2258_3917'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",a0=`<main
  class="game-over-screen {{THEME_CLASS_NAME}}"
  data-game-over-screen
  aria-labelledby="game-over-title"
>
  <section class="game-over-screen__intro">
    <div class="game-over-screen__banner">
      <h1 id="game-over-title" class="game-over-screen__title">Game Over</h1>
    </div>
    <h2 class="game-over-screen__subtitle">Final score</h2>
    {{SCORE_SUMMARY_MARKUP}}
  </section>

  <section class="game-over-screen__winner-page" aria-live="polite">
    {{CONFETTI_MARKUP}}

    <div class="game-over-screen__winner-content">
      {{WINNER_CONTENT_MARKUP}}

      <button
        type="button"
        class="game-over-screen__back-home-button"
        data-back-home-button
        aria-label="Back to home"
      >
        <img
          class="{{BACK_HOME_BUTTON_IMAGE_CLASS_NAME}}"
          src="{{BACK_HOME_BUTTON_SRC}}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  </section>
</main>
`,_=`<!-- Reusable game-over fragments -->
<template id="game-over-confetti">
  <img
    class="game-over-screen__confetti"
    src="{{CONFETTI_SRC}}"
    alt=""
    aria-hidden="true"
  />
</template>

<template id="game-over-winner-code-vibes">
  {{WINNER_PREFIX_MARKUP}}
  <p class="game-over-screen__winner-player {{WINNER_PLAYER_CLASS_NAME}}">
    {{WINNER_LABEL}}
  </p>

  <h2 class="game-over-screen__subtitle">Final score</h2>
  {{SCORE_SUMMARY_MARKUP}}
</template>

<template id="game-over-winner-foods">
  {{WINNER_PREFIX_MARKUP}}
  <p class="game-over-screen__winner-player {{WINNER_PLAYER_CLASS_NAME}}">
    {{WINNER_LABEL}}
  </p>
  {{PLAYER_ICON_MARKUP}}
</template>

<template id="game-over-winner-player-icon-foods">
  <div class="game-over-screen__winner-icon">
    <img
      class="game-over-screen__winner-icon-image"
      src="{{WINNER_ICON_SRC}}"
      alt="{{WINNER_ICON_ALT}}"
    />
  </div>
</template>

<template id="game-over-summary-foods">
  <div class="game-over-screen__summary game-over-screen__summary--foods" aria-label="Final score">
    {{FOODS_ORANGE_SCORE_ROW}}
    {{FOODS_BLUE_SCORE_ROW}}
  </div>
</template>

<template id="game-over-summary-code-vibes">
  <div class="game-over-screen__summary" aria-label="Final score">
    {{CODE_VIBES_BLUE_SCORE_ROW}}
    {{CODE_VIBES_ORANGE_SCORE_ROW}}
  </div>
</template>

<template id="game-over-summary-foods-row">
  <div class="game-over-screen__foods-score game-over-screen__foods-score--{{PLAYER_COLOR}}">
    <span class="game-over-screen__icon" aria-hidden="true">{{PLAYER_LABEL_ICON}}</span>
    <span class="game-over-screen__value">{{PLAYER_SCORE}}</span>
  </div>
</template>

<template id="game-over-summary-code-vibes-row">
  <div class="game-over-screen__player game-over-screen__player--{{PLAYER_COLOR}}">
    <span class="game-over-screen__icon" aria-hidden="true">{{PLAYER_LABEL_ICON}}</span>
    <span class="game-over-screen__name">{{PLAYER_NAME}}</span>
    <span class="game-over-screen__value">{{PLAYER_SCORE}}</span>
  </div>
</template>
`,r0=c(_,"game-over-confetti"),s0=c(_,"game-over-winner-code-vibes"),o0=c(_,"game-over-winner-foods"),c0=c(_,"game-over-winner-player-icon-foods"),i0=c(_,"game-over-summary-foods"),l0=c(_,"game-over-summary-code-vibes"),_0=c(_,"game-over-summary-foods-row"),d0=c(_,"game-over-summary-code-vibes-row");function u0(e,n){const t=A(n),a=t==="foods",r=T0(e),s=R0(e,t);return o(a0,{BACK_HOME_BUTTON_IMAGE_CLASS_NAME:h0(a),BACK_HOME_BUTTON_SRC:v0(a),CONFETTI_MARKUP:a?"":C0(),SCORE_SUMMARY_MARKUP:s,THEME_CLASS_NAME:a?"game-over-screen--foods":"game-over-screen--code-vibes",WINNER_CONTENT_MARKUP:m0(r,a,s)})}function m0(e,n,t){return n?E0(e):g0(e,t)}function C0(){return o(r0,{CONFETTI_SRC:Qe})}function g0(e,n){return o(s0,{SCORE_SUMMARY_MARKUP:n,WINNER_LABEL:e.label,WINNER_PLAYER_CLASS_NAME:e.className,WINNER_PREFIX_MARKUP:e.isDraw?"":'<p class="game-over-screen__winner-prefix">the winner is</p>'})}function E0(e){return o(o0,{PLAYER_ICON_MARKUP:f0(e),WINNER_LABEL:e.label,WINNER_PLAYER_CLASS_NAME:e.className,WINNER_PREFIX_MARKUP:e.isDraw?"":'<p class="game-over-screen__winner-prefix">The winner is</p>'})}function f0(e){if(e.isDraw)return"";const n=e.className==="game-over-screen__winner-player--orange";return o(c0,{WINNER_ICON_ALT:n?"Orange player icon":"Blue player icon",WINNER_ICON_SRC:n?t0:n0})}function p0(){return Y.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function S0(){return v.replace(/fill="#097FC5"/gi,'fill="currentColor"').trim()}function R0(e,n){return n==="foods"?O0(e):A0(e)}function O0(e){const n=S0();return o(i0,{FOODS_BLUE_SCORE_ROW:P("blue",e.blueScore,n),FOODS_ORANGE_SCORE_ROW:P("orange",e.orangeScore,n)})}function P(e,n,t){return o(_0,{PLAYER_COLOR:e,PLAYER_LABEL_ICON:t,PLAYER_SCORE:String(n)})}function A0(e){const n=p0();return o(l0,{CODE_VIBES_BLUE_SCORE_ROW:N("blue","Blue",e.blueScore,n),CODE_VIBES_ORANGE_SCORE_ROW:N("orange","Orange",e.orangeScore,n)})}function N(e,n,t,a){return o(d0,{PLAYER_COLOR:e,PLAYER_LABEL_ICON:a,PLAYER_NAME:n,PLAYER_SCORE:String(t)})}function v0(e){return e?e0:K}function h0(e){return e?"game-over-screen__back-home-button-image game-over-screen__back-home-button-image--foods":"game-over-screen__back-home-button-image"}function T0(e){return e.blueScore>e.orangeScore?{isDraw:!1,className:"game-over-screen__winner-player--blue",label:"BLUE PLAYER"}:e.orangeScore>e.blueScore?{isDraw:!1,className:"game-over-screen__winner-player--orange",label:"ORANGE PLAYER"}:{isDraw:!0,className:"game-over-screen__winner-player--draw",label:"DRAW"}}const b0=3500,I0="[data-game-over-screen]",L0="[data-back-home-button]",M0="is-winner-visible";function y0(e){const n=a2();if(!n){window.location.hash="#game";return}e.innerHTML=u0(n,d().theme),B0(e),P0(e)}function B0(e){e.querySelector(L0)?.addEventListener("click",()=>{V(),window.location.hash="#home"})}function P0(e){const n=e.querySelector(I0);n&&window.setTimeout(()=>{N0(e,n)},b0)}function N0(e,n){!e.isConnected||window.location.hash!=="#game-over"||n.classList.add(M0)}const w0="/assets/stadia_controller-CcsXEKot.svg",x0="/assets/play-button-CNXT5xaq.svg",D0=`<main class="home-screen" aria-labelledby="home-title">
  <div class="home-screen__canvas">
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>

    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img
        class="home-screen__play-button-base"
        src="{{PLAY_BUTTON_SRC}}"
        alt=""
        aria-hidden="true"
      />
      <img
        class="home-screen__play-button-controller"
        src="{{PLAY_BUTTON_SRC}}"
        alt=""
        aria-hidden="true"
      />
    </button>

    <img
      class="home-screen__controller"
      src="{{CONTROLLER_ICON_SRC}}"
      alt=""
      aria-hidden="true"
    />
  </div>
</main>
`;function U0(){return o(D0,{CONTROLLER_ICON_SRC:w0,PLAY_BUTTON_SRC:x0})}const k0="#play-button";function F0(e){e.innerHTML=U0(),G0(e)}function G0(e){const n=e.querySelector(k0);n&&n.addEventListener("click",H0)}function H0(){window.location.hash="#settings"}const V0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2757'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23303131'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2757)'%3e%3cpath%20d='M12%2015C12.8333%2015%2013.5417%2014.7083%2014.125%2014.125C14.7083%2013.5417%2015%2012.8333%2015%2012C15%2011.1667%2014.7083%2010.4583%2014.125%209.875C13.5417%209.29167%2012.8333%209%2012%209C11.1667%209%2010.4583%209.29167%209.875%209.875C9.29167%2010.4583%209%2011.1667%209%2012C9%2012.8333%209.29167%2013.5417%209.875%2014.125C10.4583%2014.7083%2011.1667%2015%2012%2015ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",Y0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2741'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2741)'%3e%3cpath%20d='M15.9998%2029.3334C14.1776%2029.3334%2012.4554%2028.9834%2010.8332%2028.2834C9.21095%2027.5834%207.79428%2026.6278%206.58317%2025.4167C5.37206%2024.2056%204.4165%2022.7889%203.7165%2021.1667C3.0165%2019.5445%202.6665%2017.8222%202.6665%2016C2.6665%2014.1556%203.02761%2012.4222%203.74984%2010.8C4.47206%209.1778%205.44984%207.76669%206.68317%206.56669C7.9165%205.36669%209.35539%204.41669%2010.9998%203.71669C12.6443%203.01669%2014.3998%202.66669%2016.2665%202.66669C18.0443%202.66669%2019.7221%202.97224%2021.2998%203.58335C22.8776%204.19446%2024.2609%205.03891%2025.4498%206.11669C26.6387%207.19446%2027.5832%208.47224%2028.2832%209.95002C28.9832%2011.4278%2029.3332%2013.0222%2029.3332%2014.7334C29.3332%2017.2889%2028.5554%2019.25%2026.9998%2020.6167C25.4443%2021.9834%2023.5554%2022.6667%2021.3332%2022.6667H18.8665C18.6665%2022.6667%2018.5276%2022.7222%2018.4498%2022.8334C18.3721%2022.9445%2018.3332%2023.0667%2018.3332%2023.2C18.3332%2023.4667%2018.4998%2023.85%2018.8332%2024.35C19.1665%2024.85%2019.3332%2025.4222%2019.3332%2026.0667C19.3332%2027.1778%2019.0276%2028%2018.4165%2028.5334C17.8054%2029.0667%2016.9998%2029.3334%2015.9998%2029.3334ZM8.6665%2017.3334C9.24428%2017.3334%209.72206%2017.1445%2010.0998%2016.7667C10.4776%2016.3889%2010.6665%2015.9111%2010.6665%2015.3334C10.6665%2014.7556%2010.4776%2014.2778%2010.0998%2013.9C9.72206%2013.5222%209.24428%2013.3334%208.6665%2013.3334C8.08873%2013.3334%207.61095%2013.5222%207.23317%2013.9C6.85539%2014.2778%206.6665%2014.7556%206.6665%2015.3334C6.6665%2015.9111%206.85539%2016.3889%207.23317%2016.7667C7.61095%2017.1445%208.08873%2017.3334%208.6665%2017.3334ZM12.6665%2012C13.2443%2012%2013.7221%2011.8111%2014.0998%2011.4334C14.4776%2011.0556%2014.6665%2010.5778%2014.6665%2010C14.6665%209.42224%2014.4776%208.94446%2014.0998%208.56669C13.7221%208.18891%2013.2443%208.00002%2012.6665%208.00002C12.0887%208.00002%2011.6109%208.18891%2011.2332%208.56669C10.8554%208.94446%2010.6665%209.42224%2010.6665%2010C10.6665%2010.5778%2010.8554%2011.0556%2011.2332%2011.4334C11.6109%2011.8111%2012.0887%2012%2012.6665%2012ZM19.3332%2012C19.9109%2012%2020.3887%2011.8111%2020.7665%2011.4334C21.1443%2011.0556%2021.3332%2010.5778%2021.3332%2010C21.3332%209.42224%2021.1443%208.94446%2020.7665%208.56669C20.3887%208.18891%2019.9109%208.00002%2019.3332%208.00002C18.7554%208.00002%2018.2776%208.18891%2017.8998%208.56669C17.5221%208.94446%2017.3332%209.42224%2017.3332%2010C17.3332%2010.5778%2017.5221%2011.0556%2017.8998%2011.4334C18.2776%2011.8111%2018.7554%2012%2019.3332%2012ZM23.3332%2017.3334C23.9109%2017.3334%2024.3887%2017.1445%2024.7665%2016.7667C25.1443%2016.3889%2025.3332%2015.9111%2025.3332%2015.3334C25.3332%2014.7556%2025.1443%2014.2778%2024.7665%2013.9C24.3887%2013.5222%2023.9109%2013.3334%2023.3332%2013.3334C22.7554%2013.3334%2022.2776%2013.5222%2021.8998%2013.9C21.5221%2014.2778%2021.3332%2014.7556%2021.3332%2015.3334C21.3332%2015.9111%2021.5221%2016.3889%2021.8998%2016.7667C22.2776%2017.1445%2022.7554%2017.3334%2023.3332%2017.3334ZM15.9998%2026.6667C16.1998%2026.6667%2016.3609%2026.6111%2016.4832%2026.5C16.6054%2026.3889%2016.6665%2026.2445%2016.6665%2026.0667C16.6665%2025.7556%2016.4998%2025.3889%2016.1665%2024.9667C15.8332%2024.5445%2015.6665%2023.9111%2015.6665%2023.0667C15.6665%2022.1334%2015.9887%2021.3889%2016.6332%2020.8334C17.2776%2020.2778%2018.0665%2020%2018.9998%2020H21.3332C22.7998%2020%2024.0554%2019.5722%2025.0998%2018.7167C26.1443%2017.8611%2026.6665%2016.5334%2026.6665%2014.7334C26.6665%2012.0445%2025.6387%209.80558%2023.5832%208.01669C21.5276%206.2278%2019.0887%205.33335%2016.2665%205.33335C13.2443%205.33335%2010.6665%206.36669%208.53317%208.43335C6.39984%2010.5%205.33317%2013.0222%205.33317%2016C5.33317%2018.9556%206.37206%2021.4722%208.44984%2023.55C10.5276%2025.6278%2013.0443%2026.6667%2015.9998%2026.6667Z'%20fill='%23DA1EBA'/%3e%3c/g%3e%3c/svg%3e",K0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",W0="data:image/svg+xml,%3csvg%20width='36'%20height='60'%20viewBox='0%200%2036%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.164%2059.2224L20.656%2054.0584L15.492%2038.5664L0%2043.7304L5.164%2059.2224ZM34.328%200.8944L32.539%200L8.539%2048L10.328%2048.8944L12.117%2049.7888L36.117%201.7888L34.328%200.8944Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",Z0="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",X0="data:image/svg+xml,%3csvg%20width='50'%20height='18'%20viewBox='0%200%2050%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.6603%208.66028L41%202.28095e-05L32.3397%208.66028L41%2017.3205L49.6603%208.66028ZM0%208.66028L0%2010.1603L41%2010.1603V8.66028V7.16028L0%207.16028L0%208.66028Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",f="/assets/setting-picture-DdZ2_ims.svg",D="/assets/theme-visiual-food-C1H02x1B.svg",z0="/assets/small%20button-k70u0-se.svg",q0=`<main class="settings-screen" aria-labelledby="settings-title">
  <div class="settings-screen__canvas">
    <section class="settings-panel">
      <h1 id="settings-title" class="settings-panel__title">Settings</h1>
      {{THEME_GROUP_MARKUP}}
      {{PLAYER_GROUP_MARKUP}}
      {{BOARD_SIZE_GROUP_MARKUP}}
    </section>

    <aside class="settings-preview">
      <img
        class="settings-preview__image"
        src="{{PREVIEW_IMAGE_SRC}}"
        data-preview-default="{{PREVIEW_DEFAULT_SRC}}"
        data-preview-code-vibes="{{PREVIEW_CODE_VIBES_SRC}}"
        data-preview-foods="{{PREVIEW_FOODS_SRC}}"
        alt="Game preview"
      />
    </aside>

    <section class="settings-footer">
      {{FOOTER_SUMMARY_MARKUP}}
    </section>
  </div>
</main>
`,u=`<!-- Reusable settings fragments -->
<template id="settings-group">
  <section class="settings-group">
    <h2 class="settings-group__title">
      <img src="{{GROUP_ICON_SRC}}" alt="" aria-hidden="true" />
      <span>{{GROUP_TITLE}}</span>
    </h2>
    <ul class="settings-group__options">{{OPTIONS_MARKUP}}</ul>
  </section>
</template>

<template id="settings-option-button">
  <li class="settings-option-item">
    <button
      class="settings-option{{SELECTED_CLASS}}"
      type="button"
      data-group="{{OPTION_GROUP}}"
      data-value="{{OPTION_VALUE}}"{{PREVIEW_THEME_ATTRIBUTE}}
    >
      <img
        class="settings-option__marker"
        src="{{MARKER_ICON_SRC}}"
        data-active-icon="{{MARKER_ACTIVE_ICON_SRC}}"
        data-inactive-icon="{{MARKER_INACTIVE_ICON_SRC}}"
        alt=""
        aria-hidden="true"
      />
      <span class="settings-option__label">{{OPTION_LABEL}}</span>
      <img
        class="settings-option__line{{VISIBLE_LINE_CLASS}}"
        src="{{SELECTED_LINE_ICON_SRC}}"
        alt=""
        aria-hidden="true"
      />
    </button>
  </li>
</template>

<template id="settings-footer-summary">
  <div class="settings-footer__summary" aria-live="polite">
    <div class="settings-footer__fields">
      {{FOOTER_FIELDS_MARKUP}}
    </div>
    {{START_BUTTON_MARKUP}}
  </div>
</template>

<template id="settings-footer-item">
  <div class="settings-footer__item{{SELECTED_CLASS}}" data-summary-group="{{SUMMARY_GROUP}}">
    <span class="settings-footer__text" data-summary-text="{{SUMMARY_GROUP}}">{{SUMMARY_TEXT}}</span>
    {{SEPARATOR_MARKUP}}
  </div>
</template>

<template id="settings-footer-separator">
  <img
    class="settings-footer__separator"
    src="{{SEPARATOR_LINE_SRC}}"
    data-separator-inactive="{{SEPARATOR_LINE_SRC}}"
    data-separator-active="{{SEPARATOR_ACTIVE_SRC}}"
    alt=""
    aria-hidden="true"
  />
</template>

<template id="settings-start-button">
  <button
    id="start-game-button"
    class="settings-start-button{{READY_CLASS}}"
    type="button"
    aria-label="Start game"{{DISABLED_ATTRIBUTE}}
  >
    <img
      class="settings-start-button__image"
      src="{{START_BUTTON_IMAGE_SRC}}"
      alt=""
      aria-hidden="true"
    />
  </button>
</template>
`,j0=c(u,"settings-group"),$0=c(u,"settings-option-button"),J0=c(u,"settings-footer-summary"),Q0=c(u,"settings-footer-item"),en=c(u,"settings-footer-separator"),nn=c(u,"settings-start-button");function tn(e){const n=e.theme!==null&&e.player!==null&&e.boardSize!==null,t=e.theme==="foods"?D:f;return o(q0,{BOARD_SIZE_GROUP_MARKUP:p("Board size",V0,sn(e.boardSize)),FOOTER_SUMMARY_MARKUP:on(e,n),PLAYER_GROUP_MARKUP:p("Choose player",K0,rn(e.player)),PREVIEW_CODE_VIBES_SRC:f,PREVIEW_DEFAULT_SRC:f,PREVIEW_FOODS_SRC:D,PREVIEW_IMAGE_SRC:t,THEME_GROUP_MARKUP:p("Game themes",Y0,an(e.theme))})}function p(e,n,t){return o(j0,{GROUP_ICON_SRC:n,GROUP_TITLE:e,OPTIONS_MARKUP:t})}function an(e){return k.map(n=>I("theme",n.value,n.label,e===n.value)).join("")}function rn(e){return F.map(n=>I("player",n.value,n.label,e===n.value)).join("")}function sn(e){return G.map(n=>I("boardSize",n.value,n.label,e===n.value)).join("")}function I(e,n,t,a){const r=e==="theme"?` data-preview-theme="${n}"`:"";return o($0,{MARKER_ACTIVE_ICON_SRC:x,MARKER_ICON_SRC:a?x:w,MARKER_INACTIVE_ICON_SRC:w,OPTION_GROUP:e,OPTION_LABEL:t,OPTION_VALUE:n,PREVIEW_THEME_ATTRIBUTE:r,SELECTED_CLASS:a?" is-selected":"",SELECTED_LINE_ICON_SRC:X0,VISIBLE_LINE_CLASS:a?" is-visible":""})}function on(e,n){return o(J0,{FOOTER_FIELDS_MARKUP:cn(e),START_BUTTON_MARKUP:mn(n)})}function cn(e){return[S("theme",_n(e.theme),e.theme!==null,!0),S("player",dn(e.player),e.player!==null,!0),S("boardSize",un(e.boardSize),e.boardSize!==null,!1)].join("")}function S(e,n,t,a){return o(Q0,{SELECTED_CLASS:t?" is-selected":"",SEPARATOR_MARKUP:a?ln():"",SUMMARY_GROUP:e,SUMMARY_TEXT:n})}function ln(){return o(en,{SEPARATOR_ACTIVE_SRC:W0,SEPARATOR_LINE_SRC:Z0})}function _n(e){return e?"Game theme":"Theme"}function dn(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function un(e){return e?`Board-${e} Cards`:"Board size"}function mn(e){return o(nn,{DISABLED_ATTRIBUTE:e?"":" disabled",READY_CLASS:e?" is-ready":"",START_BUTTON_IMAGE_SRC:z0})}const X=".settings-option",Cn='.settings-option[data-group="theme"]',gn=".settings-option__line",En=".settings-option__marker",fn=".settings-footer__separator",pn=".settings-preview__image",z="#start-game-button",R="is-refreshing";function Sn(e){e.innerHTML=tn(d()),Rn(e),Ln(e),jn(e),E(e,d().theme)}function Rn(e){e.querySelectorAll(X).forEach(t=>{t.addEventListener("click",()=>{On(e,t.dataset.group,t.dataset.value)})})}function On(e,n,t){!n||!t||(An(n,t),In(e,d()))}function An(e,n){const t=vn(e);t&&t(n)}function vn(e){return e==="theme"?hn:e==="player"?Tn:e==="boardSize"?bn:null}function hn(e){H(e)&&$(e)}function Tn(e){e2(e)&&J(e)}function bn(e){n2(e)&&Q(e)}function In(e,n){Bn(e,n),Un(e,n),qn(e),E(e,n.theme)}function Ln(e){e.querySelectorAll(Cn).forEach(t=>{Mn(e,t)})}function Mn(e,n){const t=()=>yn(e,n.dataset.previewTheme),a=()=>E(e,d().theme);n.addEventListener("mouseenter",t),n.addEventListener("mouseleave",a),n.addEventListener("focus",t),n.addEventListener("blur",a)}function yn(e,n){!n||!H(n)||E(e,n)}function E(e,n){const t=e.querySelector(pn);if(!t)return;const a=n==="foods"?t.dataset.previewFoods:t.dataset.previewCodeVibes||t.dataset.previewDefault;a&&(t.src=a)}function Bn(e,n){e.querySelectorAll(X).forEach(a=>{Pn(a,n)})}function Pn(e,n){const t=xn(n,e.dataset.group,e.dataset.value);e.classList.toggle("is-selected",t),Nn(e,t),wn(e,t)}function Nn(e,n){e.querySelector(gn)?.classList.toggle("is-visible",n)}function wn(e,n){const t=e.querySelector(En);if(!t)return;const a=n?t.dataset.activeIcon:t.dataset.inactiveIcon;a&&(t.src=a)}function xn(e,n,t){return!n||!t?!1:Dn(e,n)===t}function Dn(e,n){return n==="theme"?e.theme:n==="player"?e.player:n==="boardSize"?e.boardSize:null}function Un(e,n){kn(n).forEach(([a,r,s])=>{Fn(e,a,r,s)})}function kn(e){return[["theme",e.theme!==null,Zn(e.theme)],["player",e.player!==null,Xn(e.player)],["boardSize",e.boardSize!==null,zn(e.boardSize)]]}function Fn(e,n,t,a){const r=e.querySelector(`[data-summary-group="${n}"]`);if(!r)return;const s=Gn(r,t);Hn(r,t);const i=Yn(r,n,a);Kn(t,s,i)&&Wn(r)}function Gn(e,n){const t=e.classList.contains("is-selected");return e.classList.toggle("is-selected",n),t}function Hn(e,n){const t=e.querySelector(fn),a=Vn(t,n);t&&a&&(t.src=a)}function Vn(e,n){if(e)return n?e.dataset.separatorActive:e.dataset.separatorInactive}function Yn(e,n,t){const a=e.querySelector(`[data-summary-text="${n}"]`);return!a||a.textContent===t?!1:(a.textContent=t,!0)}function Kn(e,n,t){return e&&!n||t}function Wn(e){e.classList.remove(R),window.requestAnimationFrame(()=>{e.classList.add(R),window.setTimeout(()=>{e.classList.remove(R)},240)})}function Zn(e){return e?"Game theme":"Theme"}function Xn(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function zn(e){return e?`Board-${e} Cards`:"Board size"}function qn(e){const n=e.querySelector(z);if(!n)return;const t=g();n.classList.toggle("is-ready",t),n.disabled=!t}function jn(e){const n=e.querySelector(z);n&&n.addEventListener("click",$n)}function $n(){g()&&(V(),window.location.hash="#game")}function Jn(e){U(e),window.addEventListener("hashchange",()=>{U(e)})}function U(e){const n=nt(),t=at[n];t(e)}function Qn(e){if(!g()){window.location.hash="#settings";return}ye(e)}function et(e){if(!g()){window.location.hash="#settings";return}if(!r2()){window.location.hash="#game";return}y0(e)}function nt(){const e=window.location.hash.toLowerCase();return tt[e]??"home"}const tt={"#game":"game","#game-over":"game-over","#home":"home","#settings":"settings"},at={game:Qn,"game-over":et,home:F0,settings:Sn};function rt(){const e=document.getElementById("app");e&&Jn(e)}rt();
