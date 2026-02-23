(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const R=[{value:"code-vibes",label:"Code vibes theme"},{value:"foods",label:"Foods theme"}],F=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],H=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let c={boardSize:null,player:null,theme:null};function l(){return{...c}}function W(e){c={...c,theme:e}}function Y(e){c={...c,player:e}}function X(e){c={...c,boardSize:e}}function u(){return!!(c.theme&&c.player&&c.boardSize)}function P(e){return R.some(t=>t.value===e)}function K(e){return F.some(t=>t.value===e)}function J(e){return H.some(t=>t.value===e)}let d=null;function Q(e){d={...e}}function e2(){return d?{...d}:null}function t2(){return d!==null}function j(){d=null}const a2="code-vibes",r2={"code-vibes":{cssModifierClass:"game-screen--code-vibes"},foods:{cssModifierClass:"game-screen--foods"}};function y(e){return e??a2}function s2(e){return r2[y(e)].cssModifierClass}const D=`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02564 8C0.74359 8 0.502137 7.90208 0.301282 7.70625C0.100427 7.51042 0 7.275 0 7V1C0 0.725 0.100427 0.489583 0.301282 0.29375C0.502137 0.0979167 0.74359 0 1.02564 0H6.66667C6.82906 0 6.98291 0.0354167 7.12821 0.10625C7.27351 0.177083 7.39316 0.275 7.48718 0.4L9.79487 3.4C9.93162 3.575 10 3.775 10 4C10 4.225 9.93162 4.425 9.79487 4.6L7.48718 7.6C7.39316 7.725 7.27351 7.82292 7.12821 7.89375C6.98291 7.96458 6.82906 8 6.66667 8H1.02564Z" fill="#2BB1FF"/>
</svg>
`,b=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="4" fill="#097FC5"/>
<path d="M4.625 14C4.31563 14 4.05078 13.8825 3.83047 13.6475C3.61016 13.4125 3.5 13.13 3.5 12.8V11.615C3.5 11.415 3.54219 11.23 3.62656 11.06C3.71094 10.89 3.82344 10.745 3.96406 10.625C4.61094 10.065 5.09609 9.5 5.41953 8.93C5.74297 8.36 5.97031 7.85 6.10156 7.4H5.1875C5.02813 7.4 4.89453 7.3425 4.78672 7.2275C4.67891 7.1125 4.625 6.97 4.625 6.8C4.625 6.63 4.67891 6.4875 4.78672 6.3725C4.89453 6.2575 5.02813 6.2 5.1875 6.2H5.89062C5.75938 5.98 5.65625 5.745 5.58125 5.495C5.50625 5.245 5.46875 4.98 5.46875 4.7C5.46875 3.95 5.71484 3.3125 6.20703 2.7875C6.69922 2.2625 7.29688 2 8 2C8.70312 2 9.30078 2.2625 9.79297 2.7875C10.2852 3.3125 10.5312 3.95 10.5312 4.7C10.5312 4.98 10.4938 5.245 10.4188 5.495C10.3438 5.745 10.2406 5.98 10.1094 6.2H10.8125C10.9719 6.2 11.1055 6.2575 11.2133 6.3725C11.3211 6.4875 11.375 6.63 11.375 6.8C11.375 6.97 11.3211 7.1125 11.2133 7.2275C11.1055 7.3425 10.9719 7.4 10.8125 7.4H9.89844C10.0297 7.85 10.257 8.36 10.5805 8.93C10.9039 9.5 11.3891 10.065 12.0359 10.625C12.1766 10.745 12.2891 10.89 12.3734 11.06C12.4578 11.23 12.5 11.415 12.5 11.615V12.8C12.5 13.13 12.3898 13.4125 12.1695 13.6475C11.9492 13.8825 11.6844 14 11.375 14H4.625ZM4.625 12.8H11.375V11.6C10.5125 10.88 9.88906 10.1375 9.50469 9.3725C9.12031 8.6075 8.8625 7.95 8.73125 7.4H7.26875C7.1375 7.95 6.87969 8.6075 6.49531 9.3725C6.11094 10.1375 5.4875 10.88 4.625 11.6V12.8ZM8 6.2C8.39375 6.2 8.72656 6.055 8.99844 5.765C9.27031 5.475 9.40625 5.12 9.40625 4.7C9.40625 4.28 9.27031 3.925 8.99844 3.635C8.72656 3.345 8.39375 3.2 8 3.2C7.60625 3.2 7.27344 3.345 7.00156 3.635C6.72969 3.925 6.59375 4.28 6.59375 4.7C6.59375 5.12 6.72969 5.475 7.00156 5.765C7.27344 6.055 7.60625 6.2 8 6.2Z" fill="white"/>
</svg>
`,n2="/projects/memory/assets/exitgame1-BZslv4aI.svg",G="/projects/memory/assets/back-to-game-button-Dy28tT7r.svg",o2="/projects/memory/assets/exit-game-button-CSFmJePI.svg",c2="/projects/memory/assets/exit-game-button-DxiUlG8b.svg",i2="/projects/memory/assets/exit-game-button-hover-CWKYXIiz.svg",l2="/projects/memory/assets/back-to-game-button-BckwOnvC.svg",d2="/projects/memory/assets/back-to-game-button-hover-CltZJA0Z.svg",m2="/projects/memory/assets/exit-game-button-overlay-BmTcSkCT.svg",u2="/projects/memory/assets/exit-game-button-overlay-hover-CHeUaH3n.svg",g2="/projects/memory/assets/Cards%205-DZnpmrpx.svg",C2="/projects/memory/assets/angular-card-CMiTHiGh.svg",p2="/projects/memory/assets/bootstrap-card-Rq83vZTa.svg",f2="/projects/memory/assets/css-card-Yna33ZIc.svg",_2="/projects/memory/assets/database-card-DZJGMO6r.svg",h2="/projects/memory/assets/django-card-zdDnWkPj.svg",v2="/projects/memory/assets/firebase-card-BGJGDkPQ.svg",y2="/projects/memory/assets/guthub-card-C0OAhCwn.svg",b2="/projects/memory/assets/html5-card-CuL2MCMe.svg",S2="/projects/memory/assets/js-card-vn5hBh96.svg",w2="/projects/memory/assets/node-card-Dum8zyHj.svg",E2="/projects/memory/assets/python-card-xA_4epsW.svg",x2="/projects/memory/assets/react-card-CIELOEMr.svg",k2="/projects/memory/assets/sass-card-DwnRYj6b.svg",B2="/projects/memory/assets/terminal-card-B7_Z2NcV.svg",L2="/projects/memory/assets/ts-card-BKPozS6g.svg",I2="/projects/memory/assets/vscode-card-fF042ORC.svg",M2="/projects/memory/assets/vue-card-BoB3VO2b.svg",O2="/projects/memory/assets/back-card-D-qRVjX3.svg",T2="/projects/memory/assets/brezel-card-CXqqkZs-.svg",$2="/projects/memory/assets/cake-card-BXMN5G8t.svg",A2="/projects/memory/assets/chicken-card-V3orblRE.svg",R2="/projects/memory/assets/chocolate-card-QAzOvrHx.svg",F2="/projects/memory/assets/corndog-card-CwpjZjE3.svg",H2="/projects/memory/assets/donut-card-C0Ssqpoo.svg",P2="/projects/memory/assets/hamburger-card-CjV68Ggw.svg",j2="/projects/memory/assets/icecream-card-CoO_ylkx.svg",D2="/projects/memory/assets/macron-card-D9lMrSKW.svg",G2="/projects/memory/assets/muffin-card-DO8Rb5nk.svg",N2="/projects/memory/assets/pizza-card-CCl09bmZ.svg",Z2="/projects/memory/assets/pommes-card-KiUYGabn.svg",V2="/projects/memory/assets/pudding-card-Ct1M7kVT.svg",z2="/projects/memory/assets/salad-card-8HQ_A0VA.svg",q2="/projects/memory/assets/sandwich-card-Z1FA70DW.svg",U2="/projects/memory/assets/sushi-card-DUXi4ArE.svg",W2="/projects/memory/assets/tacco-card-D5AQdy9w.svg",Y2="/projects/memory/assets/wrao-card-CLUKRYIs.svg",X2=[C2,p2,f2,_2,h2,v2,y2,b2,S2,w2,E2,x2,k2,B2,L2,I2,M2],K2=[T2,$2,A2,R2,F2,H2,P2,j2,D2,G2,N2,Z2,V2,z2,q2,U2,W2,Y2],N={"code-vibes":{backCardSprite:g2,faceIcons:X2},foods:{backCardSprite:O2,faceIcons:K2}};function J2(e){const t=y(e.theme),a=s2(e.theme),r=e.boardSize??"16",s=de(r),n=ce(r,t),o=e.player==="orange"?" is-orange":" is-blue",i=t==="foods"?te(o):Q2(o);return`
    <main class="game-screen ${a} ${s}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <section class="game-screen__board-area" aria-label="Game board">
          <div
            class="game-screen__board-grid"
            id="game-board"
            data-board-size="${r}"
          >
            ${n}
          </div>
        </section>
        ${i}

        ${se(t)}
      </div>
    </main>
  `}function Q2(e){const t=ee();return`
    <div class="game-screen__hud">
      <div class="game-screen__scoreboard" aria-label="Scoreboard">
        <span class="game-screen__score game-screen__score--blue">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${t}
          </span>
          <span>Blue</span>
          <span class="game-screen__score-value" data-score-player="blue">0</span>
        </span>
        <span class="game-screen__score game-screen__score--orange">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${t}
          </span>
          <span>Orange</span>
          <span class="game-screen__score-value" data-score-player="orange">0</span>
        </span>
      </div>

      <div class="game-screen__current-player" aria-label="Current player">
        <span class="game-screen__current-player-text">Current player:</span>
        <span
          class="game-screen__current-player-marker${e}"
          data-current-player-marker
          aria-hidden="true"
        >
          ${t}
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
          src="${n2}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  `}function ee(){return D.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function te(e){const t=ae(),a=re();return`
    <div class="game-screen__hud game-screen__hud--foods">
      <div class="game-screen__foods-topbar">
        <div class="game-screen__scoreboard" aria-label="Scoreboard">
          <span class="game-screen__score game-screen__score--orange">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${t}
            </span>
            <span class="game-screen__score-value" data-score-player="orange">0</span>
          </span>
          <span class="game-screen__score game-screen__score--blue">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${t}
            </span>
            <span class="game-screen__score-value" data-score-player="blue">0</span>
          </span>
        </div>

        <div class="game-screen__current-player" aria-label="Current player">
          <span class="game-screen__current-player-text">Current player:</span>
          <span
            class="game-screen__current-player-marker${e}"
            data-current-player-marker
            aria-hidden="true"
          >
            ${a}
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
            src="${c2}"
            alt=""
            aria-hidden="true"
          />
          <img
            class="game-screen__exit-button-image game-screen__exit-button-image--foods game-screen__exit-button-image--foods-hover"
            src="${i2}"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  `}function ae(){return b.replace(/<rect[^>]*fill="#097FC5"[^>]*\/>\s*/gi,"").replace(/fill="white"/gi,'fill="currentColor"').trim()}function re(){return b.replace(/fill="#097FC5"/gi,'fill="currentColor"').trim()}function se(e){return e==="foods"?oe():ne()}function ne(){return`
    <div
      class="game-screen__exit-modal"
      data-exit-modal
      hidden
    >
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
              src="${G}"
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
              src="${o2}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `}function oe(){return`
    <div
      class="game-screen__exit-modal game-screen__exit-modal--foods"
      data-exit-modal
      hidden
    >
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
              src="${l2}"
              alt=""
              aria-hidden="true"
            />
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back game-screen__modal-button-image--foods-hover"
              src="${d2}"
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
              src="${m2}"
              alt=""
              aria-hidden="true"
            />
            <img
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit game-screen__modal-button-image--foods-hover"
              src="${u2}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `}function ce(e,t){const a=Number.parseInt(e,10),r=Number.isFinite(a)&&a>0?a:16,s=N[t],n=Math.floor(r/2),o=ie(n,t);return le([...o,...o]).map((m,C)=>`
      <button
        class="game-card"
        type="button"
        data-card-index="${C}"
        data-card-icon="${m}"
      >
        <span class="game-card__inner">
          <span
            class="game-card__face game-card__face--front"
            style="background-image: url('${s.backCardSprite}')"
            aria-hidden="true"
          ></span>
          <span
            class="game-card__face game-card__face--back"
            style="background-image: url('${m}')"
            aria-hidden="true"
          ></span>
        </span>
      </button>
    `).join("")}function ie(e,t){const a=N[t].faceIcons;return Array.from({length:e},(r,s)=>a[s%a.length])}function le(e){const t=[...e];for(let a=t.length-1;a>0;a-=1){const r=Math.floor(Math.random()*(a+1));[t[a],t[r]]=[t[r],t[a]]}return t}function de(e){return e==="24"?"game-screen--board-24":e==="36"?"game-screen--board-36":"game-screen--board-16"}const me="#game-exit-button",ue="[data-exit-modal]",ge="[data-exit-cancel]",Ce="[data-exit-confirm]",pe=".game-screen",fe="is-exit-modal-open",_e=".game-card",he="[data-current-player-marker]",S="flipped",w="is-matched",ve=700,ye=320;function be(e){const t=l();e.innerHTML=J2(t),Se(e),xe(e,t.player??"blue")}function Se(e){const t=we(e);t&&Ee(t)}function we(e){const t=e.querySelector(me),a=e.querySelector(ue),r=e.querySelector(ge),s=e.querySelector(Ce),n=e.querySelector(pe);return!t||!a||!r||!s||!n?null:{exitButton:t,exitModal:a,backToGameButton:r,confirmExitButton:s,gameScreen:n}}function Ee(e){e.exitButton.addEventListener("click",()=>{k(e,!0)}),e.backToGameButton.addEventListener("click",()=>{k(e,!1)}),e.confirmExitButton.addEventListener("click",()=>{window.location.hash="#settings"})}function k(e,t){e.exitModal.hidden=!t,e.gameScreen.classList.toggle(fe,t)}function xe(e,t){const a=ke(e);if(a.length===0)return;const r=Be(t);E(e,r),Le(e,a,r)}function ke(e){return Array.from(e.querySelectorAll(_e))}function Be(e){return{currentPlayer:e,firstFlippedCard:null,secondFlippedCard:null,isTurnLocked:!1,scores:{blue:0,orange:0}}}function Le(e,t,a){t.forEach(r=>{r.addEventListener("click",()=>{Ie(e,t.length,a,r)})})}function Ie(e,t,a,r){if(!Me(a,r)){if(Z(r),!a.firstFlippedCard){a.firstFlippedCard=r;return}Oe(a,r),Te(e,t,a)}}function Me(e,t){return e.isTurnLocked||t.classList.contains(S)||t.classList.contains(w)}function Oe(e,t){e.secondFlippedCard=t,e.isTurnLocked=!0}function Te(e,t,a){if($e(a)){He(e,t,a);return}Ae(e,a)}function $e(e){return!e.firstFlippedCard||!e.secondFlippedCard?!1:Fe(e.firstFlippedCard,e.secondFlippedCard)}function Ae(e,t){window.setTimeout(()=>{B(t.firstFlippedCard),B(t.secondFlippedCard),Re(t),v(t),E(e,t)},ve)}function B(e){e?.classList.contains(S)&&Z(e)}function Re(e){e.currentPlayer=e.currentPlayer==="blue"?"orange":"blue"}function Z(e){e.classList.toggle(S)}function Fe(e,t){const a=e.dataset.cardIcon,r=t.dataset.cardIcon;return!!(a&&r&&a===r)}function He(e,t,a){const r=Pe(a);if(!r){v(a);return}je(r),De(a),v(a),E(e,a),Ge(e,t,a)}function Pe(e){return!e.firstFlippedCard||!e.secondFlippedCard?null:[e.firstFlippedCard,e.secondFlippedCard]}function je(e){e.forEach(t=>{t.classList.add(w),t.disabled=!0})}function De(e){e.scores[e.currentPlayer]+=1}function Ge(e,t,a){e.querySelectorAll(`.${w}`).length===t&&Ne(a)}function Ne(e){window.setTimeout(()=>{Q(Ze(e)),window.location.hash="#game-over"},ye)}function Ze(e){return{blueScore:e.scores.blue,orangeScore:e.scores.orange}}function v(e){e.firstFlippedCard=null,e.secondFlippedCard=null,e.isTurnLocked=!1}function E(e,t){L(e,"blue",t.scores.blue),L(e,"orange",t.scores.orange);const a=e.querySelector(he);a&&a.classList.toggle("is-orange",t.currentPlayer==="orange")}function L(e,t,a){const r=e.querySelectorAll(`[data-score-player="${t}"]`);r.length!==0&&r.forEach(s=>{s.textContent=String(a)})}const Ve="/projects/memory/assets/Confetti-Ze9Uy3By.svg",ze="/projects/memory/assets/home-button-DH4JdF9e.svg",qe="data:image/svg+xml,%3csvg%20width='272'%20height='310'%20viewBox='0%200%20272%20310'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2258_3991)'%3e%3crect%20width='260'%20height='298'%20transform='translate(3%203)'%20fill='%23F7E6D5'/%3e%3cpath%20d='M58%20277C51.125%20277%2045.2396%20274.552%2040.3438%20269.656C35.4479%20264.76%2033%20258.875%2033%20252V227.312C33%20223.146%2033.9375%20219.292%2035.8125%20215.75C37.6875%20212.208%2040.1875%20209.188%2043.3125%20206.688C57.6875%20195.021%2068.4688%20183.25%2075.6562%20171.375C82.8438%20159.5%2087.8958%20148.875%2090.8125%20139.5H70.5C66.9583%20139.5%2063.9896%20138.302%2061.5938%20135.906C59.1979%20133.51%2058%20130.542%2058%20127C58%20123.458%2059.1979%20120.49%2061.5938%20118.094C63.9896%20115.698%2066.9583%20114.5%2070.5%20114.5H86.125C83.2083%20109.917%2080.9167%20105.021%2079.25%2099.8125C77.5833%2094.6042%2076.75%2089.0833%2076.75%2083.25C76.75%2067.625%2082.2188%2054.3438%2093.1562%2043.4062C104.094%2032.4688%20117.375%2027%20133%2027C148.625%2027%20161.906%2032.4688%20172.844%2043.4062C183.781%2054.3438%20189.25%2067.625%20189.25%2083.25C189.25%2089.0833%20188.417%2094.6042%20186.75%2099.8125C185.083%20105.021%20182.792%20109.917%20179.875%20114.5H195.5C199.042%20114.5%20202.01%20115.698%20204.406%20118.094C206.802%20120.49%20208%20123.458%20208%20127C208%20130.542%20206.802%20133.51%20204.406%20135.906C202.01%20138.302%20199.042%20139.5%20195.5%20139.5H175.188C178.104%20148.875%20183.156%20159.5%20190.344%20171.375C197.531%20183.25%20208.312%20195.021%20222.688%20206.688C225.812%20209.188%20228.312%20212.208%20230.188%20215.75C232.062%20219.292%20233%20223.146%20233%20227.312V252C233%20258.875%20230.552%20264.76%20225.656%20269.656C220.76%20274.552%20214.875%20277%20208%20277H58ZM58%20252H208V227C188.833%20212%20174.979%20196.531%20166.438%20180.594C157.896%20164.656%20152.167%20150.958%20149.25%20139.5H116.75C113.833%20150.958%20108.104%20164.656%2099.5625%20180.594C91.0208%20196.531%2077.1667%20212%2058%20227V252ZM133%20114.5C141.75%20114.5%20149.146%20111.479%20155.188%20105.438C161.229%2099.3958%20164.25%2092%20164.25%2083.25C164.25%2074.5%20161.229%2067.1042%20155.188%2061.0625C149.146%2055.0208%20141.75%2052%20133%2052C124.25%2052%20116.854%2055.0208%20110.812%2061.0625C104.771%2067.1042%20101.75%2074.5%20101.75%2083.25C101.75%2092%20104.771%2099.3958%20110.812%20105.438C116.854%20111.479%20124.25%20114.5%20133%20114.5Z'%20fill='%23097FC5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2258_3991'%20x='0'%20y='0'%20width='272'%20height='310'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='3'%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2258_3991'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2258_3991'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Ue="data:image/svg+xml,%3csvg%20width='272'%20height='310'%20viewBox='0%200%20272%20310'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_2258_3917)'%3e%3crect%20width='260'%20height='298'%20transform='translate(3%203)'%20fill='%23F7E6D5'/%3e%3cpath%20d='M58%20277C51.125%20277%2045.2396%20274.552%2040.3438%20269.656C35.4479%20264.76%2033%20258.875%2033%20252V227.312C33%20223.146%2033.9375%20219.292%2035.8125%20215.75C37.6875%20212.208%2040.1875%20209.188%2043.3125%20206.688C57.6875%20195.021%2068.4688%20183.25%2075.6562%20171.375C82.8438%20159.5%2087.8958%20148.875%2090.8125%20139.5H70.5C66.9583%20139.5%2063.9896%20138.302%2061.5938%20135.906C59.1979%20133.51%2058%20130.542%2058%20127C58%20123.458%2059.1979%20120.49%2061.5938%20118.094C63.9896%20115.698%2066.9583%20114.5%2070.5%20114.5H86.125C83.2083%20109.917%2080.9167%20105.021%2079.25%2099.8125C77.5833%2094.6042%2076.75%2089.0833%2076.75%2083.25C76.75%2067.625%2082.2188%2054.3438%2093.1562%2043.4062C104.094%2032.4688%20117.375%2027%20133%2027C148.625%2027%20161.906%2032.4688%20172.844%2043.4062C183.781%2054.3438%20189.25%2067.625%20189.25%2083.25C189.25%2089.0833%20188.417%2094.6042%20186.75%2099.8125C185.083%20105.021%20182.792%20109.917%20179.875%20114.5H195.5C199.042%20114.5%20202.01%20115.698%20204.406%20118.094C206.802%20120.49%20208%20123.458%20208%20127C208%20130.542%20206.802%20133.51%20204.406%20135.906C202.01%20138.302%20199.042%20139.5%20195.5%20139.5H175.188C178.104%20148.875%20183.156%20159.5%20190.344%20171.375C197.531%20183.25%20208.312%20195.021%20222.688%20206.688C225.812%20209.188%20228.312%20212.208%20230.188%20215.75C232.062%20219.292%20233%20223.146%20233%20227.312V252C233%20258.875%20230.552%20264.76%20225.656%20269.656C220.76%20274.552%20214.875%20277%20208%20277H58ZM58%20252H208V227C188.833%20212%20174.979%20196.531%20166.438%20180.594C157.896%20164.656%20152.167%20150.958%20149.25%20139.5H116.75C113.833%20150.958%20108.104%20164.656%2099.5625%20180.594C91.0208%20196.531%2077.1667%20212%2058%20227V252ZM133%20114.5C141.75%20114.5%20149.146%20111.479%20155.188%20105.438C161.229%2099.3958%20164.25%2092%20164.25%2083.25C164.25%2074.5%20161.229%2067.1042%20155.188%2061.0625C149.146%2055.0208%20141.75%2052%20133%2052C124.25%2052%20116.854%2055.0208%20110.812%2061.0625C104.771%2067.1042%20101.75%2074.5%20101.75%2083.25C101.75%2092%20104.771%2099.3958%20110.812%20105.438C116.854%20111.479%20124.25%20114.5%20133%20114.5Z'%20fill='%23F58E39'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_2258_3917'%20x='0'%20y='0'%20width='272'%20height='310'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='3'%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_2258_3917'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_2258_3917'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";function We(e,t){const a=y(t),r=a==="foods",s=r?"game-over-screen--foods":"game-over-screen--code-vibes",n=r?Qe():Je(),o=t0(e),i=e0(e,n,a),m=r?Xe(o):Ye(o,i),C=r?ze:G,q=r?"game-over-screen__back-home-button-image game-over-screen__back-home-button-image--foods":"game-over-screen__back-home-button-image",U=r?"":`
        <img
          class="game-over-screen__confetti"
          src="${Ve}"
          alt=""
          aria-hidden="true"
        />
      `;return`
    <main
      class="game-over-screen ${s}"
      data-game-over-screen
      aria-labelledby="game-over-title"
    >
      <section class="game-over-screen__intro">
        <div class="game-over-screen__banner">
          <h1 id="game-over-title" class="game-over-screen__title">Game Over</h1>
        </div>
        <h2 class="game-over-screen__subtitle">Final score</h2>
        ${i}
      </section>

      <section class="game-over-screen__winner-page" aria-live="polite">
        ${U}

        <div class="game-over-screen__winner-content">
          ${m}

          <button
            type="button"
            class="game-over-screen__back-home-button"
            data-back-home-button
            aria-label="Back to home"
          >
            <img
              class="${q}"
              src="${C}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
    </main>
  `}function Ye(e,t){return`
    ${e.isDraw?"":'<p class="game-over-screen__winner-prefix">the winner is</p>'}
    <p class="game-over-screen__winner-player ${e.className}">
      ${e.label}
    </p>

    <h2 class="game-over-screen__subtitle">Final score</h2>
    ${t}
  `}function Xe(e){const t=Ke(e);return`
    ${e.isDraw?"":'<p class="game-over-screen__winner-prefix">The winner is</p>'}
    <p class="game-over-screen__winner-player ${e.className}">
      ${e.label}
    </p>
    ${t}
  `}function Ke(e){if(e.isDraw)return"";const t=e.className==="game-over-screen__winner-player--orange"?Ue:qe,a=e.className==="game-over-screen__winner-player--orange"?"Orange player icon":"Blue player icon";return`
    <div class="game-over-screen__winner-icon">
      <img
        class="game-over-screen__winner-icon-image"
        src="${t}"
        alt="${a}"
      />
    </div>
  `}function Je(){return D.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function Qe(){return b.replace(/fill="#097FC5"/gi,'fill="currentColor"').trim()}function e0(e,t,a){return a==="foods"?`
      <div class="game-over-screen__summary game-over-screen__summary--foods" aria-label="Final score">
        <div class="game-over-screen__foods-score game-over-screen__foods-score--orange">
          <span class="game-over-screen__icon" aria-hidden="true">${t}</span>
          <span class="game-over-screen__value">${e.orangeScore}</span>
        </div>

        <div class="game-over-screen__foods-score game-over-screen__foods-score--blue">
          <span class="game-over-screen__icon" aria-hidden="true">${t}</span>
          <span class="game-over-screen__value">${e.blueScore}</span>
        </div>
      </div>
    `:`
    <div class="game-over-screen__summary" aria-label="Final score">
      <div class="game-over-screen__player game-over-screen__player--blue">
        <span class="game-over-screen__icon" aria-hidden="true">${t}</span>
        <span class="game-over-screen__name">Blue</span>
        <span class="game-over-screen__value">${e.blueScore}</span>
      </div>

      <div class="game-over-screen__player game-over-screen__player--orange">
        <span class="game-over-screen__icon" aria-hidden="true">${t}</span>
        <span class="game-over-screen__name">Orange</span>
        <span class="game-over-screen__value">${e.orangeScore}</span>
      </div>
    </div>
  `}function t0(e){return e.blueScore>e.orangeScore?{isDraw:!1,className:"game-over-screen__winner-player--blue",label:"BLUE PLAYER"}:e.orangeScore>e.blueScore?{isDraw:!1,className:"game-over-screen__winner-player--orange",label:"ORANGE PLAYER"}:{isDraw:!0,className:"game-over-screen__winner-player--draw",label:"DRAW"}}const a0=3500,r0="[data-game-over-screen]",s0="[data-back-home-button]",n0="is-winner-visible";function o0(e){const t=e2();if(!t){window.location.hash="#game";return}e.innerHTML=We(t,l().theme),c0(e),i0(e)}function c0(e){e.querySelector(s0)?.addEventListener("click",()=>{j(),window.location.hash="#home"})}function i0(e){const t=e.querySelector(r0);t&&window.setTimeout(()=>{l0(e,t)},a0)}function l0(e,t){!e.isConnected||window.location.hash!=="#game-over"||t.classList.add(n0)}const d0="/projects/memory/assets/stadia_controller-CcsXEKot.svg",I="/projects/memory/assets/play-button-CNXT5xaq.svg";function m0(){return`
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${u0()}
        ${g0()}
        ${C0()}
      </div>
    </main>
  `}function u0(){return`
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `}function g0(){return`
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img
        class="home-screen__play-button-base"
        src="${I}"
        alt=""
        aria-hidden="true"
      />
      <img
        class="home-screen__play-button-controller"
        src="${I}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}function C0(){return`
    <img
      class="home-screen__controller"
      src="${d0}"
      alt=""
      aria-hidden="true"
    />
  `}const p0="#play-button";function f0(e){e.innerHTML=m0(),_0(e)}function _0(e){const t=e.querySelector(p0);t&&t.addEventListener("click",h0)}function h0(){window.location.hash="#settings"}const v0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2757'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23303131'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2757)'%3e%3cpath%20d='M12%2015C12.8333%2015%2013.5417%2014.7083%2014.125%2014.125C14.7083%2013.5417%2015%2012.8333%2015%2012C15%2011.1667%2014.7083%2010.4583%2014.125%209.875C13.5417%209.29167%2012.8333%209%2012%209C11.1667%209%2010.4583%209.29167%209.875%209.875C9.29167%2010.4583%209%2011.1667%209%2012C9%2012.8333%209.29167%2013.5417%209.875%2014.125C10.4583%2014.7083%2011.1667%2015%2012%2015ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",y0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2741'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2741)'%3e%3cpath%20d='M15.9998%2029.3334C14.1776%2029.3334%2012.4554%2028.9834%2010.8332%2028.2834C9.21095%2027.5834%207.79428%2026.6278%206.58317%2025.4167C5.37206%2024.2056%204.4165%2022.7889%203.7165%2021.1667C3.0165%2019.5445%202.6665%2017.8222%202.6665%2016C2.6665%2014.1556%203.02761%2012.4222%203.74984%2010.8C4.47206%209.1778%205.44984%207.76669%206.68317%206.56669C7.9165%205.36669%209.35539%204.41669%2010.9998%203.71669C12.6443%203.01669%2014.3998%202.66669%2016.2665%202.66669C18.0443%202.66669%2019.7221%202.97224%2021.2998%203.58335C22.8776%204.19446%2024.2609%205.03891%2025.4498%206.11669C26.6387%207.19446%2027.5832%208.47224%2028.2832%209.95002C28.9832%2011.4278%2029.3332%2013.0222%2029.3332%2014.7334C29.3332%2017.2889%2028.5554%2019.25%2026.9998%2020.6167C25.4443%2021.9834%2023.5554%2022.6667%2021.3332%2022.6667H18.8665C18.6665%2022.6667%2018.5276%2022.7222%2018.4498%2022.8334C18.3721%2022.9445%2018.3332%2023.0667%2018.3332%2023.2C18.3332%2023.4667%2018.4998%2023.85%2018.8332%2024.35C19.1665%2024.85%2019.3332%2025.4222%2019.3332%2026.0667C19.3332%2027.1778%2019.0276%2028%2018.4165%2028.5334C17.8054%2029.0667%2016.9998%2029.3334%2015.9998%2029.3334ZM8.6665%2017.3334C9.24428%2017.3334%209.72206%2017.1445%2010.0998%2016.7667C10.4776%2016.3889%2010.6665%2015.9111%2010.6665%2015.3334C10.6665%2014.7556%2010.4776%2014.2778%2010.0998%2013.9C9.72206%2013.5222%209.24428%2013.3334%208.6665%2013.3334C8.08873%2013.3334%207.61095%2013.5222%207.23317%2013.9C6.85539%2014.2778%206.6665%2014.7556%206.6665%2015.3334C6.6665%2015.9111%206.85539%2016.3889%207.23317%2016.7667C7.61095%2017.1445%208.08873%2017.3334%208.6665%2017.3334ZM12.6665%2012C13.2443%2012%2013.7221%2011.8111%2014.0998%2011.4334C14.4776%2011.0556%2014.6665%2010.5778%2014.6665%2010C14.6665%209.42224%2014.4776%208.94446%2014.0998%208.56669C13.7221%208.18891%2013.2443%208.00002%2012.6665%208.00002C12.0887%208.00002%2011.6109%208.18891%2011.2332%208.56669C10.8554%208.94446%2010.6665%209.42224%2010.6665%2010C10.6665%2010.5778%2010.8554%2011.0556%2011.2332%2011.4334C11.6109%2011.8111%2012.0887%2012%2012.6665%2012ZM19.3332%2012C19.9109%2012%2020.3887%2011.8111%2020.7665%2011.4334C21.1443%2011.0556%2021.3332%2010.5778%2021.3332%2010C21.3332%209.42224%2021.1443%208.94446%2020.7665%208.56669C20.3887%208.18891%2019.9109%208.00002%2019.3332%208.00002C18.7554%208.00002%2018.2776%208.18891%2017.8998%208.56669C17.5221%208.94446%2017.3332%209.42224%2017.3332%2010C17.3332%2010.5778%2017.5221%2011.0556%2017.8998%2011.4334C18.2776%2011.8111%2018.7554%2012%2019.3332%2012ZM23.3332%2017.3334C23.9109%2017.3334%2024.3887%2017.1445%2024.7665%2016.7667C25.1443%2016.3889%2025.3332%2015.9111%2025.3332%2015.3334C25.3332%2014.7556%2025.1443%2014.2778%2024.7665%2013.9C24.3887%2013.5222%2023.9109%2013.3334%2023.3332%2013.3334C22.7554%2013.3334%2022.2776%2013.5222%2021.8998%2013.9C21.5221%2014.2778%2021.3332%2014.7556%2021.3332%2015.3334C21.3332%2015.9111%2021.5221%2016.3889%2021.8998%2016.7667C22.2776%2017.1445%2022.7554%2017.3334%2023.3332%2017.3334ZM15.9998%2026.6667C16.1998%2026.6667%2016.3609%2026.6111%2016.4832%2026.5C16.6054%2026.3889%2016.6665%2026.2445%2016.6665%2026.0667C16.6665%2025.7556%2016.4998%2025.3889%2016.1665%2024.9667C15.8332%2024.5445%2015.6665%2023.9111%2015.6665%2023.0667C15.6665%2022.1334%2015.9887%2021.3889%2016.6332%2020.8334C17.2776%2020.2778%2018.0665%2020%2018.9998%2020H21.3332C22.7998%2020%2024.0554%2019.5722%2025.0998%2018.7167C26.1443%2017.8611%2026.6665%2016.5334%2026.6665%2014.7334C26.6665%2012.0445%2025.6387%209.80558%2023.5832%208.01669C21.5276%206.2278%2019.0887%205.33335%2016.2665%205.33335C13.2443%205.33335%2010.6665%206.36669%208.53317%208.43335C6.39984%2010.5%205.33317%2013.0222%205.33317%2016C5.33317%2018.9556%206.37206%2021.4722%208.44984%2023.55C10.5276%2025.6278%2013.0443%2026.6667%2015.9998%2026.6667Z'%20fill='%23DA1EBA'/%3e%3c/g%3e%3c/svg%3e",b0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",S0="data:image/svg+xml,%3csvg%20width='36'%20height='60'%20viewBox='0%200%2036%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.164%2059.2224L20.656%2054.0584L15.492%2038.5664L0%2043.7304L5.164%2059.2224ZM34.328%200.8944L32.539%200L8.539%2048L10.328%2048.8944L12.117%2049.7888L36.117%201.7888L34.328%200.8944Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",T="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",w0="data:image/svg+xml,%3csvg%20width='50'%20height='18'%20viewBox='0%200%2050%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.6603%208.66028L41%202.28095e-05L32.3397%208.66028L41%2017.3205L49.6603%208.66028ZM0%208.66028L0%2010.1603L41%2010.1603V8.66028V7.16028L0%207.16028L0%208.66028Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",p="/projects/memory/assets/setting-picture-DdZ2_ims.svg",$="/projects/memory/assets/theme-visiual-food-C1H02x1B.svg",E0="/projects/memory/assets/small%20button-k70u0-se.svg";function x0(e){const t=e.theme!==null&&e.player!==null&&e.boardSize!==null,a=e.theme==="foods"?$:p;return`
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${f("Game themes",y0,k0(e.theme))}
          ${f("Choose player",b0,B0(e.player))}
          ${f("Board size",v0,L0(e.boardSize))}
        </section>

        <aside class="settings-preview">
          <img
            class="settings-preview__image"
            src="${a}"
            data-preview-default="${p}"
            data-preview-code-vibes="${p}"
            data-preview-foods="${$}"
            alt="Game preview"
          />
        </aside>

        <section class="settings-footer">
          ${I0(e,t)}
        </section>
      </div>
    </main>
  `}function f(e,t,a){return`
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${t}" alt="" aria-hidden="true" />
        <span>${e}</span>
      </h2>
      <ul class="settings-group__options">${a}</ul>
    </section>
  `}function k0(e){return R.map(t=>x("theme",t.value,t.label,e===t.value)).join("")}function B0(e){return F.map(t=>x("player",t.value,t.label,e===t.value)).join("")}function L0(e){return H.map(t=>x("boardSize",t.value,t.label,e===t.value)).join("")}function x(e,t,a,r){const s=r?" is-selected":"",n=r?" is-visible":"",o=r?O:M,i=e==="theme"?` data-preview-theme="${t}"`:"";return`
    <li class="settings-option-item">
      <button
        class="settings-option${s}"
        type="button"
        data-group="${e}"
        data-value="${t}"
        ${i}
      >
        <img
          class="settings-option__marker"
          src="${o}"
          data-active-icon="${O}"
          data-inactive-icon="${M}"
          alt=""
          aria-hidden="true"
        />
        <span class="settings-option__label">${a}</span>
        <img
          class="settings-option__line${n}"
          src="${w0}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  `}function I0(e,t){return`
    <div class="settings-footer__summary" aria-live="polite">
      <div class="settings-footer__fields">
        ${_("theme",M0(e.theme),e.theme!==null,!0)}
        ${_("player",O0(e.player),e.player!==null,!0)}
        ${_("boardSize",T0(e.boardSize),e.boardSize!==null,!1)}
      </div>
      ${$0(t)}
    </div>
  `}function _(e,t,a,r){const s=a?" is-selected":"",n=r?`<img
      class="settings-footer__separator"
      src="${T}"
      data-separator-inactive="${T}"
      data-separator-active="${S0}"
      alt=""
      aria-hidden="true"
    />`:"";return`
    <div class="settings-footer__item${s}" data-summary-group="${e}">
      <span class="settings-footer__text" data-summary-text="${e}">${t}</span>
      ${n}
    </div>
  `}function M0(e){return e?"Game theme":"Theme"}function O0(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function T0(e){return e?`Board-${e} Cards`:"Board size"}function $0(e){return`
    <button
      id="start-game-button"
      class="settings-start-button${e?" is-ready":""}"
      type="button"
      aria-label="Start game"
      ${e?"":"disabled"}
    >
      <img
        class="settings-start-button__image"
        src="${E0}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}const V=".settings-option",A0='.settings-option[data-group="theme"]',R0=".settings-option__line",F0=".settings-option__marker",H0=".settings-footer__separator",P0=".settings-preview__image",z="#start-game-button",h="is-refreshing";function j0(e){e.innerHTML=x0(l()),D0(e),W0(e),ft(e),g(e,l().theme)}function D0(e){e.querySelectorAll(V).forEach(a=>{a.addEventListener("click",()=>{G0(e,a.dataset.group,a.dataset.value)})})}function G0(e,t,a){!t||!a||(N0(t,a),U0(e,l()))}function N0(e,t){const a=Z0(e);a&&a(t)}function Z0(e){return e==="theme"?V0:e==="player"?z0:e==="boardSize"?q0:null}function V0(e){P(e)&&W(e)}function z0(e){K(e)&&Y(e)}function q0(e){J(e)&&X(e)}function U0(e,t){K0(e,t),rt(e,t),pt(e),g(e,t.theme)}function W0(e){e.querySelectorAll(A0).forEach(a=>{Y0(e,a)})}function Y0(e,t){const a=()=>X0(e,t.dataset.previewTheme),r=()=>g(e,l().theme);t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",r),t.addEventListener("focus",a),t.addEventListener("blur",r)}function X0(e,t){!t||!P(t)||g(e,t)}function g(e,t){const a=e.querySelector(P0);if(!a)return;const r=t==="foods"?a.dataset.previewFoods:a.dataset.previewCodeVibes||a.dataset.previewDefault;r&&(a.src=r)}function K0(e,t){e.querySelectorAll(V).forEach(r=>{J0(r,t)})}function J0(e,t){const a=tt(t,e.dataset.group,e.dataset.value);e.classList.toggle("is-selected",a),Q0(e,a),et(e,a)}function Q0(e,t){e.querySelector(R0)?.classList.toggle("is-visible",t)}function et(e,t){const a=e.querySelector(F0);if(!a)return;const r=t?a.dataset.activeIcon:a.dataset.inactiveIcon;r&&(a.src=r)}function tt(e,t,a){return!t||!a?!1:at(e,t)===a}function at(e,t){return t==="theme"?e.theme:t==="player"?e.player:t==="boardSize"?e.boardSize:null}function rt(e,t){st(t).forEach(([r,s,n])=>{nt(e,r,s,n)})}function st(e){return[["theme",e.theme!==null,ut(e.theme)],["player",e.player!==null,gt(e.player)],["boardSize",e.boardSize!==null,Ct(e.boardSize)]]}function nt(e,t,a,r){const s=e.querySelector(`[data-summary-group="${t}"]`);if(!s)return;const n=ot(s,a);ct(s,a);const o=lt(s,t,r);dt(a,n,o)&&mt(s)}function ot(e,t){const a=e.classList.contains("is-selected");return e.classList.toggle("is-selected",t),a}function ct(e,t){const a=e.querySelector(H0),r=it(a,t);a&&r&&(a.src=r)}function it(e,t){if(e)return t?e.dataset.separatorActive:e.dataset.separatorInactive}function lt(e,t,a){const r=e.querySelector(`[data-summary-text="${t}"]`);return!r||r.textContent===a?!1:(r.textContent=a,!0)}function dt(e,t,a){return e&&!t||a}function mt(e){e.classList.remove(h),window.requestAnimationFrame(()=>{e.classList.add(h),window.setTimeout(()=>{e.classList.remove(h)},240)})}function ut(e){return e?"Game theme":"Theme"}function gt(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function Ct(e){return e?`Board-${e} Cards`:"Board size"}function pt(e){const t=e.querySelector(z);if(!t)return;const a=u();t.classList.toggle("is-ready",a),t.disabled=!a}function ft(e){const t=e.querySelector(z);t&&t.addEventListener("click",_t)}function _t(){u()&&(j(),window.location.hash="#game")}function ht(e){A(e),window.addEventListener("hashchange",()=>{A(e)})}function A(e){const t=bt(),a=wt[t];a(e)}function vt(e){if(!u()){window.location.hash="#settings";return}be(e)}function yt(e){if(!u()){window.location.hash="#settings";return}if(!t2()){window.location.hash="#game";return}o0(e)}function bt(){const e=window.location.hash.toLowerCase();return St[e]??"home"}const St={"#game":"game","#game-over":"game-over","#home":"home","#settings":"settings"},wt={game:vt,"game-over":yt,home:f0,settings:j0};function Et(){const e=document.getElementById("app");e&&ht(e)}Et();
