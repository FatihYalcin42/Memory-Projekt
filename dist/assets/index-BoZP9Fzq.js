(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const R=[{value:"code-vibes",label:"Code vibes theme"},{value:"foods",label:"Foods theme"}],j=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],F=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let i={boardSize:null,player:null,theme:null};function l(){return{...i}}function V(e){i={...i,theme:e}}function U(e){i={...i,player:e}}function Y(e){i={...i,boardSize:e}}function _(){return!!(i.theme&&i.player&&i.boardSize)}function P(e){return R.some(a=>a.value===e)}function X(e){return j.some(a=>a.value===e)}function K(e){return F.some(a=>a.value===e)}let m=null;function W(e){m={...e}}function Q(){return m?{...m}:null}function J(){return m!==null}function H(){m=null}const e2="code-vibes",a2={"code-vibes":{cssModifierClass:"game-screen--code-vibes"},foods:{cssModifierClass:"game-screen--foods"}};function D(e){return e??e2}function t2(e){return a2[D(e)].cssModifierClass}const N=`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02564 8C0.74359 8 0.502137 7.90208 0.301282 7.70625C0.100427 7.51042 0 7.275 0 7V1C0 0.725 0.100427 0.489583 0.301282 0.29375C0.502137 0.0979167 0.74359 0 1.02564 0H6.66667C6.82906 0 6.98291 0.0354167 7.12821 0.10625C7.27351 0.177083 7.39316 0.275 7.48718 0.4L9.79487 3.4C9.93162 3.575 10 3.775 10 4C10 4.225 9.93162 4.425 9.79487 4.6L7.48718 7.6C7.39316 7.725 7.27351 7.82292 7.12821 7.89375C6.98291 7.96458 6.82906 8 6.66667 8H1.02564Z" fill="#2BB1FF"/>
</svg>
`,s2=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="4" fill="#097FC5"/>
<path d="M4.625 14C4.31563 14 4.05078 13.8825 3.83047 13.6475C3.61016 13.4125 3.5 13.13 3.5 12.8V11.615C3.5 11.415 3.54219 11.23 3.62656 11.06C3.71094 10.89 3.82344 10.745 3.96406 10.625C4.61094 10.065 5.09609 9.5 5.41953 8.93C5.74297 8.36 5.97031 7.85 6.10156 7.4H5.1875C5.02813 7.4 4.89453 7.3425 4.78672 7.2275C4.67891 7.1125 4.625 6.97 4.625 6.8C4.625 6.63 4.67891 6.4875 4.78672 6.3725C4.89453 6.2575 5.02813 6.2 5.1875 6.2H5.89062C5.75938 5.98 5.65625 5.745 5.58125 5.495C5.50625 5.245 5.46875 4.98 5.46875 4.7C5.46875 3.95 5.71484 3.3125 6.20703 2.7875C6.69922 2.2625 7.29688 2 8 2C8.70312 2 9.30078 2.2625 9.79297 2.7875C10.2852 3.3125 10.5312 3.95 10.5312 4.7C10.5312 4.98 10.4938 5.245 10.4188 5.495C10.3438 5.745 10.2406 5.98 10.1094 6.2H10.8125C10.9719 6.2 11.1055 6.2575 11.2133 6.3725C11.3211 6.4875 11.375 6.63 11.375 6.8C11.375 6.97 11.3211 7.1125 11.2133 7.2275C11.1055 7.3425 10.9719 7.4 10.8125 7.4H9.89844C10.0297 7.85 10.257 8.36 10.5805 8.93C10.9039 9.5 11.3891 10.065 12.0359 10.625C12.1766 10.745 12.2891 10.89 12.3734 11.06C12.4578 11.23 12.5 11.415 12.5 11.615V12.8C12.5 13.13 12.3898 13.4125 12.1695 13.6475C11.9492 13.8825 11.6844 14 11.375 14H4.625ZM4.625 12.8H11.375V11.6C10.5125 10.88 9.88906 10.1375 9.50469 9.3725C9.12031 8.6075 8.8625 7.95 8.73125 7.4H7.26875C7.1375 7.95 6.87969 8.6075 6.49531 9.3725C6.11094 10.1375 5.4875 10.88 4.625 11.6V12.8ZM8 6.2C8.39375 6.2 8.72656 6.055 8.99844 5.765C9.27031 5.475 9.40625 5.12 9.40625 4.7C9.40625 4.28 9.27031 3.925 8.99844 3.635C8.72656 3.345 8.39375 3.2 8 3.2C7.60625 3.2 7.27344 3.345 7.00156 3.635C6.72969 3.925 6.59375 4.28 6.59375 4.7C6.59375 5.12 6.72969 5.475 7.00156 5.765C7.27344 6.055 7.60625 6.2 8 6.2Z" fill="white"/>
</svg>
`,r2="/projects/memory/assets/exitgame1-BZslv4aI.svg",Z="/projects/memory/assets/back-to-game-button-Dy28tT7r.svg",n2="/projects/memory/assets/exit-game-button-CSFmJePI.svg",o2="/projects/memory/assets/exit-game-button-DxiUlG8b.svg",c2="/projects/memory/assets/back-to-game-button-BckwOnvC.svg",i2="/projects/memory/assets/exit-game-button-overlay-BmTcSkCT.svg",l2="/projects/memory/assets/Cards%205-DZnpmrpx.svg",d2="/projects/memory/assets/angular-card-CMiTHiGh.svg",m2="/projects/memory/assets/bootstrap-card-Rq83vZTa.svg",u2="/projects/memory/assets/css-card-Yna33ZIc.svg",g2="/projects/memory/assets/database-card-DZJGMO6r.svg",C2="/projects/memory/assets/django-card-zdDnWkPj.svg",p2="/projects/memory/assets/firebase-card-BGJGDkPQ.svg",_2="/projects/memory/assets/guthub-card-C0OAhCwn.svg",f2="/projects/memory/assets/html5-card-CuL2MCMe.svg",h2="/projects/memory/assets/js-card-vn5hBh96.svg",v2="/projects/memory/assets/node-card-Dum8zyHj.svg",y2="/projects/memory/assets/python-card-xA_4epsW.svg",b2="/projects/memory/assets/react-card-CIELOEMr.svg",w2="/projects/memory/assets/sass-card-DwnRYj6b.svg",S2="/projects/memory/assets/terminal-card-B7_Z2NcV.svg",E2="/projects/memory/assets/ts-card-BKPozS6g.svg",L2="/projects/memory/assets/vscode-card-fF042ORC.svg",x2="/projects/memory/assets/vue-card-BoB3VO2b.svg",I2="/projects/memory/assets/back-card-D-qRVjX3.svg",k2="/projects/memory/assets/brezel-card-CXqqkZs-.svg",O2="/projects/memory/assets/cake-card-BXMN5G8t.svg",T2="/projects/memory/assets/chicken-card-V3orblRE.svg",B2="/projects/memory/assets/chocolate-card-QAzOvrHx.svg",M2="/projects/memory/assets/corndog-card-CwpjZjE3.svg",$2="/projects/memory/assets/donut-card-C0Ssqpoo.svg",A2="/projects/memory/assets/hamburger-card-CjV68Ggw.svg",R2="/projects/memory/assets/icecream-card-CoO_ylkx.svg",j2="/projects/memory/assets/macron-card-D9lMrSKW.svg",F2="/projects/memory/assets/muffin-card-DO8Rb5nk.svg",P2="/projects/memory/assets/pizza-card-CCl09bmZ.svg",H2="/projects/memory/assets/pommes-card-KiUYGabn.svg",D2="/projects/memory/assets/pudding-card-Ct1M7kVT.svg",N2="/projects/memory/assets/salad-card-8HQ_A0VA.svg",Z2="/projects/memory/assets/sandwich-card-Z1FA70DW.svg",G2="/projects/memory/assets/sushi-card-DUXi4ArE.svg",q2="/projects/memory/assets/tacco-card-D5AQdy9w.svg",z2="/projects/memory/assets/wrao-card-CLUKRYIs.svg",V2=[d2,m2,u2,g2,C2,p2,_2,f2,h2,v2,y2,b2,w2,S2,E2,L2,x2],U2=[k2,O2,T2,B2,M2,$2,A2,R2,j2,F2,P2,H2,D2,N2,Z2,G2,q2,z2],G={"code-vibes":{backCardSprite:l2,faceIcons:V2},foods:{backCardSprite:I2,faceIcons:U2}};function Y2(e){const a=D(e.theme),t=t2(e.theme),s=e.boardSize??"16",r=ne(s),n=te(s,a),o=e.player==="orange"?" is-orange":" is-blue",c=a==="foods"?W2(o):X2(o);return`
    <main class="game-screen ${t} ${r}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <section class="game-screen__board-area" aria-label="Game board">
          <div
            class="game-screen__board-grid"
            id="game-board"
            data-board-size="${s}"
          >
            ${n}
          </div>
        </section>
        ${c}

        ${J2(a)}
      </div>
    </main>
  `}function X2(e){const a=K2();return`
    <div class="game-screen__hud">
      <div class="game-screen__scoreboard" aria-label="Scoreboard">
        <span class="game-screen__score game-screen__score--blue">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${a}
          </span>
          <span>Blue</span>
          <span class="game-screen__score-value" data-score-player="blue">0</span>
        </span>
        <span class="game-screen__score game-screen__score--orange">
          <span class="game-screen__score-icon" aria-hidden="true">
            ${a}
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
          ${a}
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
          src="${r2}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  `}function K2(){return N.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function W2(e){const a=Q2();return`
    <div class="game-screen__hud game-screen__hud--foods">
      <div class="game-screen__foods-topbar">
        <div class="game-screen__scoreboard" aria-label="Scoreboard">
          <span class="game-screen__score game-screen__score--orange">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${a}
            </span>
            <span class="game-screen__score-value" data-score-player="orange">0</span>
          </span>
          <span class="game-screen__score game-screen__score--blue">
            <span class="game-screen__score-icon" aria-hidden="true">
              ${a}
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
            class="game-screen__exit-button-image game-screen__exit-button-image--foods"
            src="${o2}"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  `}function Q2(){return s2.replace(/fill="#097FC5"/gi,'fill="currentColor"').trim()}function J2(e){return e==="foods"?ae():ee()}function ee(){return`
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
              src="${Z}"
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
              src="${n2}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `}function ae(){return`
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
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-back"
              src="${c2}"
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
              class="game-screen__modal-button-image game-screen__modal-button-image--foods game-screen__modal-button-image--foods-exit"
              src="${i2}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  `}function te(e,a){const t=Number.parseInt(e,10),s=Number.isFinite(t)&&t>0?t:16,r=G[a],n=Math.floor(s/2),o=se(n,a);return re([...o,...o]).map((d,g)=>`
      <button
        class="game-card"
        type="button"
        data-card-index="${g}"
        data-card-icon="${d}"
      >
        <span class="game-card__inner">
          <span
            class="game-card__face game-card__face--front"
            style="background-image: url('${r.backCardSprite}')"
            aria-hidden="true"
          ></span>
          <span
            class="game-card__face game-card__face--back"
            style="background-image: url('${d}')"
            aria-hidden="true"
          ></span>
        </span>
      </button>
    `).join("")}function se(e,a){const t=G[a].faceIcons;return Array.from({length:e},(s,r)=>t[r%t.length])}function re(e){const a=[...e];for(let t=a.length-1;t>0;t-=1){const s=Math.floor(Math.random()*(t+1));[a[t],a[s]]=[a[s],a[t]]}return a}function ne(e){return e==="24"?"game-screen--board-24":e==="36"?"game-screen--board-36":"game-screen--board-16"}const oe="#game-exit-button",ce="[data-exit-modal]",ie="[data-exit-cancel]",le="[data-exit-confirm]",de=".game-screen",x="is-exit-modal-open",me=".game-card",ue="[data-current-player-marker]",C="flipped",p="is-matched",ge=700,Ce=320;function pe(e){const a=l();e.innerHTML=Y2(a),_e(e),fe(e,a.player??"blue")}function _e(e){const a=e.querySelector(oe),t=e.querySelector(ce),s=e.querySelector(ie),r=e.querySelector(le),n=e.querySelector(de);if(!a||!t||!s||!r||!n)return;const o=()=>{t.hidden=!1,n.classList.add(x)},c=()=>{t.hidden=!0,n.classList.remove(x)};a.addEventListener("click",()=>{o()}),s.addEventListener("click",()=>{c()}),r.addEventListener("click",()=>{window.location.hash="#settings"})}function fe(e,a){const t=Array.from(e.querySelectorAll(me));if(t.length===0)return;const s={currentPlayer:a,firstFlippedCard:null,secondFlippedCard:null,isTurnLocked:!1,scores:{blue:0,orange:0}};E(e,s),t.forEach(r=>{r.addEventListener("click",()=>{he(e,t.length,s,r)})})}function he(e,a,t,s){if(t.isTurnLocked||s.classList.contains(C)||s.classList.contains(p))return;if(f(s),!t.firstFlippedCard){t.firstFlippedCard=s;return}if(t.secondFlippedCard=s,t.isTurnLocked=!0,ve(t.firstFlippedCard,t.secondFlippedCard)){ye(e,a,t);return}window.setTimeout(()=>{t.firstFlippedCard&&t.firstFlippedCard.classList.contains(C)&&f(t.firstFlippedCard),t.secondFlippedCard&&t.secondFlippedCard.classList.contains(C)&&f(t.secondFlippedCard),t.currentPlayer=t.currentPlayer==="blue"?"orange":"blue",S(t),E(e,t)},ge)}function f(e){e.classList.toggle(C)}function ve(e,a){const t=e.dataset.cardIcon,s=a.dataset.cardIcon;return!!(t&&s&&t===s)}function ye(e,a,t){const s=t.firstFlippedCard,r=t.secondFlippedCard;if(!s||!r){S(t);return}s.classList.add(p),r.classList.add(p),s.disabled=!0,r.disabled=!0,t.scores[t.currentPlayer]+=1,S(t),E(e,t),e.querySelectorAll(`.${p}`).length===a&&window.setTimeout(()=>{W({blueScore:t.scores.blue,orangeScore:t.scores.orange}),window.location.hash="#game-over"},Ce)}function S(e){e.firstFlippedCard=null,e.secondFlippedCard=null,e.isTurnLocked=!1}function E(e,a){I(e,"blue",a.scores.blue),I(e,"orange",a.scores.orange);const t=e.querySelector(ue);t&&t.classList.toggle("is-orange",a.currentPlayer==="orange")}function I(e,a,t){const s=e.querySelectorAll(`[data-score-player="${a}"]`);s.length!==0&&s.forEach(r=>{r.textContent=String(t)})}const be="/projects/memory/assets/Confetti-Ze9Uy3By.svg";function we(e){const a=Se(),t=Le(e),s=Ee(e,a);return`
    <main
      class="game-over-screen"
      data-game-over-screen
      aria-labelledby="game-over-title"
    >
      <section class="game-over-screen__intro">
        <div class="game-over-screen__banner">
          <h1 id="game-over-title" class="game-over-screen__title">Game over</h1>
        </div>
        <h2 class="game-over-screen__subtitle">Final score</h2>
        ${s}
      </section>

      <section class="game-over-screen__winner-page" aria-live="polite">
        <img
          class="game-over-screen__confetti"
          src="${be}"
          alt=""
          aria-hidden="true"
        />

        <div class="game-over-screen__winner-content">
          ${t.isDraw?"":'<p class="game-over-screen__winner-prefix">the winner is</p>'}
          <p class="game-over-screen__winner-player ${t.className}">
            ${t.label}
          </p>

          <h2 class="game-over-screen__subtitle">Final score</h2>
          ${s}

          <button
            type="button"
            class="game-over-screen__back-home-button"
            data-back-home-button
            aria-label="Back to home"
          >
            <img
              class="game-over-screen__back-home-button-image"
              src="${Z}"
              alt=""
              aria-hidden="true"
            />
          </button>
        </div>
      </section>
    </main>
  `}function Se(){return N.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function Ee(e,a){return`
    <div class="game-over-screen__summary" aria-label="Final score">
      <div class="game-over-screen__player game-over-screen__player--blue">
        <span class="game-over-screen__icon" aria-hidden="true">${a}</span>
        <span class="game-over-screen__name">Blue</span>
        <span class="game-over-screen__value">${e.blueScore}</span>
      </div>

      <div class="game-over-screen__player game-over-screen__player--orange">
        <span class="game-over-screen__icon" aria-hidden="true">${a}</span>
        <span class="game-over-screen__name">Orange</span>
        <span class="game-over-screen__value">${e.orangeScore}</span>
      </div>
    </div>
  `}function Le(e){return e.blueScore>e.orangeScore?{isDraw:!1,className:"game-over-screen__winner-player--blue",label:"BLUE PLAYER"}:e.orangeScore>e.blueScore?{isDraw:!1,className:"game-over-screen__winner-player--orange",label:"ORANGE PLAYER"}:{isDraw:!0,className:"game-over-screen__winner-player--draw",label:"DRAW"}}const xe=2200,Ie="[data-game-over-screen]",ke="[data-back-home-button]",Oe="is-winner-visible";function Te(e){const a=Q();if(!a){window.location.hash="#game";return}e.innerHTML=we(a),e.querySelector(ke)?.addEventListener("click",()=>{H(),window.location.hash="#home"});const s=e.querySelector(Ie);s&&window.setTimeout(()=>{!e.isConnected||window.location.hash!=="#game-over"||s.classList.add(Oe)},xe)}const Be="/projects/memory/assets/stadia_controller-CcsXEKot.svg",k="/projects/memory/assets/play-button-CNXT5xaq.svg";function Me(){return`
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${$e()}
        ${Ae()}
        ${Re()}
      </div>
    </main>
  `}function $e(){return`
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `}function Ae(){return`
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img
        class="home-screen__play-button-base"
        src="${k}"
        alt=""
        aria-hidden="true"
      />
      <img
        class="home-screen__play-button-controller"
        src="${k}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}function Re(){return`
    <img
      class="home-screen__controller"
      src="${Be}"
      alt=""
      aria-hidden="true"
    />
  `}const je="#play-button";function Fe(e){e.innerHTML=Me(),Pe(e)}function Pe(e){const a=e.querySelector(je);a&&a.addEventListener("click",He)}function He(){window.location.hash="#settings"}const De="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",T="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2757'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23303131'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2757)'%3e%3cpath%20d='M12%2015C12.8333%2015%2013.5417%2014.7083%2014.125%2014.125C14.7083%2013.5417%2015%2012.8333%2015%2012C15%2011.1667%2014.7083%2010.4583%2014.125%209.875C13.5417%209.29167%2012.8333%209%2012%209C11.1667%209%2010.4583%209.29167%209.875%209.875C9.29167%2010.4583%209%2011.1667%209%2012C9%2012.8333%209.29167%2013.5417%209.875%2014.125C10.4583%2014.7083%2011.1667%2015%2012%2015ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",Ne="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2741'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2741)'%3e%3cpath%20d='M15.9998%2029.3334C14.1776%2029.3334%2012.4554%2028.9834%2010.8332%2028.2834C9.21095%2027.5834%207.79428%2026.6278%206.58317%2025.4167C5.37206%2024.2056%204.4165%2022.7889%203.7165%2021.1667C3.0165%2019.5445%202.6665%2017.8222%202.6665%2016C2.6665%2014.1556%203.02761%2012.4222%203.74984%2010.8C4.47206%209.1778%205.44984%207.76669%206.68317%206.56669C7.9165%205.36669%209.35539%204.41669%2010.9998%203.71669C12.6443%203.01669%2014.3998%202.66669%2016.2665%202.66669C18.0443%202.66669%2019.7221%202.97224%2021.2998%203.58335C22.8776%204.19446%2024.2609%205.03891%2025.4498%206.11669C26.6387%207.19446%2027.5832%208.47224%2028.2832%209.95002C28.9832%2011.4278%2029.3332%2013.0222%2029.3332%2014.7334C29.3332%2017.2889%2028.5554%2019.25%2026.9998%2020.6167C25.4443%2021.9834%2023.5554%2022.6667%2021.3332%2022.6667H18.8665C18.6665%2022.6667%2018.5276%2022.7222%2018.4498%2022.8334C18.3721%2022.9445%2018.3332%2023.0667%2018.3332%2023.2C18.3332%2023.4667%2018.4998%2023.85%2018.8332%2024.35C19.1665%2024.85%2019.3332%2025.4222%2019.3332%2026.0667C19.3332%2027.1778%2019.0276%2028%2018.4165%2028.5334C17.8054%2029.0667%2016.9998%2029.3334%2015.9998%2029.3334ZM8.6665%2017.3334C9.24428%2017.3334%209.72206%2017.1445%2010.0998%2016.7667C10.4776%2016.3889%2010.6665%2015.9111%2010.6665%2015.3334C10.6665%2014.7556%2010.4776%2014.2778%2010.0998%2013.9C9.72206%2013.5222%209.24428%2013.3334%208.6665%2013.3334C8.08873%2013.3334%207.61095%2013.5222%207.23317%2013.9C6.85539%2014.2778%206.6665%2014.7556%206.6665%2015.3334C6.6665%2015.9111%206.85539%2016.3889%207.23317%2016.7667C7.61095%2017.1445%208.08873%2017.3334%208.6665%2017.3334ZM12.6665%2012C13.2443%2012%2013.7221%2011.8111%2014.0998%2011.4334C14.4776%2011.0556%2014.6665%2010.5778%2014.6665%2010C14.6665%209.42224%2014.4776%208.94446%2014.0998%208.56669C13.7221%208.18891%2013.2443%208.00002%2012.6665%208.00002C12.0887%208.00002%2011.6109%208.18891%2011.2332%208.56669C10.8554%208.94446%2010.6665%209.42224%2010.6665%2010C10.6665%2010.5778%2010.8554%2011.0556%2011.2332%2011.4334C11.6109%2011.8111%2012.0887%2012%2012.6665%2012ZM19.3332%2012C19.9109%2012%2020.3887%2011.8111%2020.7665%2011.4334C21.1443%2011.0556%2021.3332%2010.5778%2021.3332%2010C21.3332%209.42224%2021.1443%208.94446%2020.7665%208.56669C20.3887%208.18891%2019.9109%208.00002%2019.3332%208.00002C18.7554%208.00002%2018.2776%208.18891%2017.8998%208.56669C17.5221%208.94446%2017.3332%209.42224%2017.3332%2010C17.3332%2010.5778%2017.5221%2011.0556%2017.8998%2011.4334C18.2776%2011.8111%2018.7554%2012%2019.3332%2012ZM23.3332%2017.3334C23.9109%2017.3334%2024.3887%2017.1445%2024.7665%2016.7667C25.1443%2016.3889%2025.3332%2015.9111%2025.3332%2015.3334C25.3332%2014.7556%2025.1443%2014.2778%2024.7665%2013.9C24.3887%2013.5222%2023.9109%2013.3334%2023.3332%2013.3334C22.7554%2013.3334%2022.2776%2013.5222%2021.8998%2013.9C21.5221%2014.2778%2021.3332%2014.7556%2021.3332%2015.3334C21.3332%2015.9111%2021.5221%2016.3889%2021.8998%2016.7667C22.2776%2017.1445%2022.7554%2017.3334%2023.3332%2017.3334ZM15.9998%2026.6667C16.1998%2026.6667%2016.3609%2026.6111%2016.4832%2026.5C16.6054%2026.3889%2016.6665%2026.2445%2016.6665%2026.0667C16.6665%2025.7556%2016.4998%2025.3889%2016.1665%2024.9667C15.8332%2024.5445%2015.6665%2023.9111%2015.6665%2023.0667C15.6665%2022.1334%2015.9887%2021.3889%2016.6332%2020.8334C17.2776%2020.2778%2018.0665%2020%2018.9998%2020H21.3332C22.7998%2020%2024.0554%2019.5722%2025.0998%2018.7167C26.1443%2017.8611%2026.6665%2016.5334%2026.6665%2014.7334C26.6665%2012.0445%2025.6387%209.80558%2023.5832%208.01669C21.5276%206.2278%2019.0887%205.33335%2016.2665%205.33335C13.2443%205.33335%2010.6665%206.36669%208.53317%208.43335C6.39984%2010.5%205.33317%2013.0222%205.33317%2016C5.33317%2018.9556%206.37206%2021.4722%208.44984%2023.55C10.5276%2025.6278%2013.0443%2026.6667%2015.9998%2026.6667Z'%20fill='%23DA1EBA'/%3e%3c/g%3e%3c/svg%3e",Ze="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",Ge="data:image/svg+xml,%3csvg%20width='36'%20height='60'%20viewBox='0%200%2036%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.164%2059.2224L20.656%2054.0584L15.492%2038.5664L0%2043.7304L5.164%2059.2224ZM34.328%200.8944L32.539%200L8.539%2048L10.328%2048.8944L12.117%2049.7888L36.117%201.7888L34.328%200.8944Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",qe="data:image/svg+xml,%3csvg%20width='50'%20height='18'%20viewBox='0%200%2050%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.6603%208.66028L41%202.28095e-05L32.3397%208.66028L41%2017.3205L49.6603%208.66028ZM0%208.66028L0%2010.1603L41%2010.1603V8.66028V7.16028L0%207.16028L0%208.66028Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",h="/projects/memory/assets/setting-picture-DdZ2_ims.svg",M="/projects/memory/assets/theme-visiual-food-C1H02x1B.svg",ze="/projects/memory/assets/small%20button-k70u0-se.svg";function Ve(e){const a=e.theme!==null&&e.player!==null&&e.boardSize!==null,t=e.theme==="foods"?M:h;return`
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${v("Game themes",Ne,Ue(e.theme))}
          ${v("Choose player",Ze,Ye(e.player))}
          ${v("Board size",De,Xe(e.boardSize))}
        </section>

        <aside class="settings-preview">
          <img
            class="settings-preview__image"
            src="${t}"
            data-preview-default="${h}"
            data-preview-code-vibes="${h}"
            data-preview-foods="${M}"
            alt="Game preview"
          />
        </aside>

        <section class="settings-footer">
          ${Ke(e,a)}
        </section>
      </div>
    </main>
  `}function v(e,a,t){return`
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${a}" alt="" aria-hidden="true" />
        <span>${e}</span>
      </h2>
      <ul class="settings-group__options">${t}</ul>
    </section>
  `}function Ue(e){return R.map(a=>L("theme",a.value,a.label,e===a.value)).join("")}function Ye(e){return j.map(a=>L("player",a.value,a.label,e===a.value)).join("")}function Xe(e){return F.map(a=>L("boardSize",a.value,a.label,e===a.value)).join("")}function L(e,a,t,s){const r=s?" is-selected":"",n=s?" is-visible":"",o=s?T:O,c=e==="theme"?` data-preview-theme="${a}"`:"";return`
    <li class="settings-option-item">
      <button
        class="settings-option${r}"
        type="button"
        data-group="${e}"
        data-value="${a}"
        ${c}
      >
        <img
          class="settings-option__marker"
          src="${o}"
          data-active-icon="${T}"
          data-inactive-icon="${O}"
          alt=""
          aria-hidden="true"
        />
        <span class="settings-option__label">${t}</span>
        <img
          class="settings-option__line${n}"
          src="${qe}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  `}function Ke(e,a){return`
    <div class="settings-footer__summary" aria-live="polite">
      <div class="settings-footer__fields">
        ${y("theme",We(e.theme),e.theme!==null,!0)}
        ${y("player",Qe(e.player),e.player!==null,!0)}
        ${y("boardSize",Je(e.boardSize),e.boardSize!==null,!1)}
      </div>
      ${e0(a)}
    </div>
  `}function y(e,a,t,s){const r=t?" is-selected":"",n=s?`<img
      class="settings-footer__separator"
      src="${B}"
      data-separator-inactive="${B}"
      data-separator-active="${Ge}"
      alt=""
      aria-hidden="true"
    />`:"";return`
    <div class="settings-footer__item${r}" data-summary-group="${e}">
      <span class="settings-footer__text" data-summary-text="${e}">${a}</span>
      ${n}
    </div>
  `}function We(e){return e?"Game theme":"Theme"}function Qe(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function Je(e){return e?`Board-${e} Cards`:"Board size"}function e0(e){return`
    <button
      id="start-game-button"
      class="settings-start-button${e?" is-ready":""}"
      type="button"
      aria-label="Start game"
      ${e?"":"disabled"}
    >
      <img
        class="settings-start-button__image"
        src="${ze}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}const q=".settings-option",a0='.settings-option[data-group="theme"]',t0=".settings-option__line",s0=".settings-option__marker",r0=".settings-footer__separator",n0=".settings-preview__image",z="#start-game-button",b="is-refreshing";function o0(e){e.innerHTML=Ve(l()),c0(e),m0(e),y0(e),u(e,l().theme)}function c0(e){e.querySelectorAll(q).forEach(t=>{t.addEventListener("click",()=>{i0(e,t.dataset.group,t.dataset.value)})})}function i0(e,a,t){!a||!t||(l0(a,t),d0(e,l()))}function l0(e,a){if(e==="theme"&&P(a)){V(a);return}if(e==="player"&&X(a)){U(a);return}e==="boardSize"&&K(a)&&Y(a)}function d0(e,a){u0(e,a),C0(e,a),v0(e),u(e,a.theme)}function m0(e){e.querySelectorAll(a0).forEach(t=>{t.addEventListener("mouseenter",()=>{$(e,t.dataset.previewTheme)}),t.addEventListener("mouseleave",()=>{u(e,l().theme)}),t.addEventListener("focus",()=>{$(e,t.dataset.previewTheme)}),t.addEventListener("blur",()=>{u(e,l().theme)})})}function $(e,a){!a||!P(a)||u(e,a)}function u(e,a){const t=e.querySelector(n0);if(!t)return;const s=a==="foods"?t.dataset.previewFoods:t.dataset.previewCodeVibes||t.dataset.previewDefault;s&&(t.src=s)}function u0(e,a){e.querySelectorAll(q).forEach(s=>{const r=g0(a,s.dataset.group,s.dataset.value);s.classList.toggle("is-selected",r),s.querySelector(t0)?.classList.toggle("is-visible",r);const o=s.querySelector(s0);if(!o)return;const c=r?o.dataset.activeIcon:o.dataset.inactiveIcon;c&&(o.src=c)})}function g0(e,a,t){return!a||!t?!1:a==="theme"?e.theme===t:a==="player"?e.player===t:a==="boardSize"?e.boardSize===t:!1}function C0(e,a){w(e,"theme",a.theme!==null,_0(a.theme)),w(e,"player",a.player!==null,f0(a.player)),w(e,"boardSize",a.boardSize!==null,h0(a.boardSize))}function w(e,a,t,s){const r=e.querySelector(`[data-summary-group="${a}"]`);if(!r)return;const n=r.classList.contains("is-selected");r.classList.toggle("is-selected",t);const o=r.querySelector(r0);if(o){const g=t?o.dataset.separatorActive:o.dataset.separatorInactive;g&&(o.src=g)}const c=r.querySelector(`[data-summary-text="${a}"]`);let d=!1;c&&c.textContent!==s&&(c.textContent=s,d=!0),(t&&!n||d)&&p0(r)}function p0(e){e.classList.remove(b),window.requestAnimationFrame(()=>{e.classList.add(b),window.setTimeout(()=>{e.classList.remove(b)},240)})}function _0(e){return e?"Game theme":"Theme"}function f0(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function h0(e){return e?`Board-${e} Cards`:"Board size"}function v0(e){const a=e.querySelector(z);if(!a)return;const t=_();a.classList.toggle("is-ready",t),a.disabled=!t}function y0(e){const a=e.querySelector(z);a&&a.addEventListener("click",()=>{_()&&(H(),window.location.hash="#game")})}function b0(e){A(e),window.addEventListener("hashchange",()=>{A(e)})}function A(e){const a=E0();if(a==="home"){Fe(e);return}if(a==="settings"){o0(e);return}if(a==="game-over"){S0(e);return}w0(e)}function w0(e){if(!_()){window.location.hash="#settings";return}pe(e)}function S0(e){if(!_()){window.location.hash="#settings";return}if(!J()){window.location.hash="#game";return}Te(e)}function E0(){const e=window.location.hash.toLowerCase();return e==="#settings"?"settings":e==="#game"?"game":e==="#game-over"?"game-over":"home"}function L0(){const e=document.getElementById("app");e&&b0(e)}L0();
