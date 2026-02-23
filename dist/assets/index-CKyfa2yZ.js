(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const R=[{value:"code-vibes",label:"Code vibes theme"},{value:"foods",label:"Foods theme"}],P=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],F=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let i={boardSize:null,player:null,theme:null};function l(){return{...i}}function G(e){i={...i,theme:e}}function N(e){i={...i,player:e}}function z(e){i={...i,boardSize:e}}function C(){return!!(i.theme&&i.player&&i.boardSize)}function j(e){return R.some(t=>t.value===e)}function q(e){return P.some(t=>t.value===e)}function U(e){return F.some(t=>t.value===e)}let d=null;function V(e){d={...e}}function W(){return d?{...d}:null}function Y(){return d!==null}function K(){d=null}const X="/projects/memory/assets/Code%20vibes%20theme_16-DnDZKwbK.svg",J="/projects/memory/assets/Code%20vibes%20theme_24-B6WV80WL.svg",Q="/projects/memory/assets/Code%20vibes%20theme_36-DBGuI9rU.svg",e2="/projects/memory/assets/Food_theme_16-C22FWGub.svg",t2="/projects/memory/assets/Food_theme_24-CMaMg8km.svg",s2="/projects/memory/assets/Food_theme_36-DpVdfDWc.svg",a2="code-vibes",r2={"code-vibes":{boardImages:{16:X,24:J,36:Q},cssModifierClass:"game-screen--code-vibes"},foods:{boardImages:{16:e2,24:t2,36:s2},cssModifierClass:"game-screen--foods"}};function n2(e){return e??a2}function o2(e){return r2[n2(e)].cssModifierClass}const H=`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.02564 8C0.74359 8 0.502137 7.90208 0.301282 7.70625C0.100427 7.51042 0 7.275 0 7V1C0 0.725 0.100427 0.489583 0.301282 0.29375C0.502137 0.0979167 0.74359 0 1.02564 0H6.66667C6.82906 0 6.98291 0.0354167 7.12821 0.10625C7.27351 0.177083 7.39316 0.275 7.48718 0.4L9.79487 3.4C9.93162 3.575 10 3.775 10 4C10 4.225 9.93162 4.425 9.79487 4.6L7.48718 7.6C7.39316 7.725 7.27351 7.82292 7.12821 7.89375C6.98291 7.96458 6.82906 8 6.66667 8H1.02564Z" fill="#2BB1FF"/>
</svg>
`,c2="/projects/memory/assets/exitgame1-BZslv4aI.svg",i2="/projects/memory/assets/Cards%205-DZnpmrpx.svg",l2="/projects/memory/assets/angular-card-CMiTHiGh.svg",d2="/projects/memory/assets/bootstrap-card-Rq83vZTa.svg",m2="/projects/memory/assets/css-card-Yna33ZIc.svg",u2="/projects/memory/assets/database-card-DZJGMO6r.svg",p2="/projects/memory/assets/django-card-zdDnWkPj.svg",C2="/projects/memory/assets/firebase-card-BGJGDkPQ.svg",g2="/projects/memory/assets/guthub-card-C0OAhCwn.svg",f2="/projects/memory/assets/html5-card-CuL2MCMe.svg",h2="/projects/memory/assets/js-card-vn5hBh96.svg",v2="/projects/memory/assets/node-card-Dum8zyHj.svg",_2="/projects/memory/assets/python-card-xA_4epsW.svg",y2="/projects/memory/assets/react-card-CIELOEMr.svg",b2="/projects/memory/assets/sass-card-DwnRYj6b.svg",w2="/projects/memory/assets/terminal-card-B7_Z2NcV.svg",S2="/projects/memory/assets/ts-card-BKPozS6g.svg",L2="/projects/memory/assets/vscode-card-fF042ORC.svg",E2="/projects/memory/assets/vue-card-BoB3VO2b.svg",B=[l2,d2,m2,u2,p2,C2,g2,f2,h2,v2,_2,y2,b2,w2,S2,L2,E2];function B2(e){const t=o2(e.theme),s=e.boardSize??"16",a=x2(s),r=T2(s),n=e.theme!=="foods",o=e.player==="orange"?" is-orange":" is-blue";return`
    <main class="game-screen ${t} ${a}" aria-labelledby="game-title">
      <h1 id="game-title" class="game-screen__sr-only">Game</h1>
      <div class="game-screen__canvas">
        <section class="game-screen__board-area" aria-label="Game board">
          <div
            class="game-screen__board-grid"
            id="game-board"
            data-board-size="${s}"
          >
            ${r}
          </div>
        </section>
        ${n?I2(o):$2()}
      </div>
    </main>
  `}function I2(e){const t=O2();return`
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

      <span
        class="game-screen__current-player-marker${e}"
        data-current-player-marker
        aria-hidden="true"
      >
        ${t}
      </span>

      <button
        id="game-exit-button"
        class="game-screen__exit-button"
        type="button"
        aria-label="Exit game"
      >
        <img
          class="game-screen__exit-button-image"
          src="${c2}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  `}function O2(){return H.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function $2(){return`
    <div class="game-screen__hud">
      <button
        id="game-exit-button"
        class="game-screen__exit-fallback"
        type="button"
      >
        Exit game
      </button>
    </div>
  `}function T2(e){const t=Number.parseInt(e,10),s=Number.isFinite(t)&&t>0?t:16,a=Math.floor(s/2),r=k2(a);return M2([...r,...r]).map((o,c)=>`
      <button
        class="game-card"
        type="button"
        data-card-index="${c}"
        data-card-icon="${o}"
      >
        <span class="game-card__inner">
          <span
            class="game-card__face game-card__face--front"
            style="background-image: url('${i2}')"
            aria-hidden="true"
          ></span>
          <span
            class="game-card__face game-card__face--back"
            style="background-image: url('${o}')"
            aria-hidden="true"
          ></span>
        </span>
      </button>
    `).join("")}function k2(e){return Array.from({length:e},(t,s)=>B[s%B.length])}function M2(e){const t=[...e];for(let s=t.length-1;s>0;s-=1){const a=Math.floor(Math.random()*(s+1));[t[s],t[a]]=[t[a],t[s]]}return t}function x2(e){return e==="24"?"game-screen--board-24":e==="36"?"game-screen--board-36":"game-screen--board-16"}const A2="#game-exit-button",R2=".game-card",P2="[data-current-player-marker]",u="flipped",p="is-matched",F2=700,j2=320;function H2(e){const t=l();e.innerHTML=B2(t),Z2(e),D2(e,t.player??"blue")}function Z2(e){const t=e.querySelector(A2);t&&t.addEventListener("click",()=>{window.location.hash="#settings"})}function D2(e,t){const s=Array.from(e.querySelectorAll(R2));if(s.length===0)return;const a={currentPlayer:t,firstFlippedCard:null,secondFlippedCard:null,isTurnLocked:!1,scores:{blue:0,orange:0}};w(e,a),s.forEach(r=>{r.addEventListener("click",()=>{G2(e,s.length,a,r)})})}function G2(e,t,s,a){if(s.isTurnLocked||a.classList.contains(u)||a.classList.contains(p))return;if(g(a),!s.firstFlippedCard){s.firstFlippedCard=a;return}if(s.secondFlippedCard=a,s.isTurnLocked=!0,N2(s.firstFlippedCard,s.secondFlippedCard)){z2(e,t,s);return}window.setTimeout(()=>{s.firstFlippedCard&&s.firstFlippedCard.classList.contains(u)&&g(s.firstFlippedCard),s.secondFlippedCard&&s.secondFlippedCard.classList.contains(u)&&g(s.secondFlippedCard),s.currentPlayer=s.currentPlayer==="blue"?"orange":"blue",b(s),w(e,s)},F2)}function g(e){e.classList.toggle(u)}function N2(e,t){const s=e.dataset.cardIcon,a=t.dataset.cardIcon;return!!(s&&a&&s===a)}function z2(e,t,s){const a=s.firstFlippedCard,r=s.secondFlippedCard;if(!a||!r){b(s);return}a.classList.add(p),r.classList.add(p),a.disabled=!0,r.disabled=!0,s.scores[s.currentPlayer]+=1,b(s),w(e,s),e.querySelectorAll(`.${p}`).length===t&&window.setTimeout(()=>{V({blueScore:s.scores.blue,orangeScore:s.scores.orange}),window.location.hash="#game-over"},j2)}function b(e){e.firstFlippedCard=null,e.secondFlippedCard=null,e.isTurnLocked=!1}function w(e,t){I(e,"blue",t.scores.blue),I(e,"orange",t.scores.orange);const s=e.querySelector(P2);s&&s.classList.toggle("is-orange",t.currentPlayer==="orange")}function I(e,t,s){const a=e.querySelectorAll(`[data-score-player="${t}"]`);a.length!==0&&a.forEach(r=>{r.textContent=String(s)})}const q2="/projects/memory/assets/Confetti-Ze9Uy3By.svg";function U2(e){const t=V2(),s=W2(e);return`
    <main class="game-over-screen" aria-labelledby="game-over-title">
      <img
        class="game-over-screen__confetti"
        src="${q2}"
        alt=""
        aria-hidden="true"
      />

      <div class="game-over-screen__content">
        <h1 id="game-over-title" class="game-over-screen__sr-only">Game over</h1>

        <div class="game-over-screen__winner" aria-live="polite">
          <p class="game-over-screen__winner-prefix">the winner is</p>
          <p class="game-over-screen__winner-player ${s.className}">
            ${s.label}
          </p>
        </div>

        <h2 class="game-over-screen__subtitle">Final score</h2>

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
      </div>
    </main>
  `}function V2(){return H.replace(/fill="#2BB1FF"/gi,'fill="currentColor"').trim()}function W2(e){return e.blueScore>e.orangeScore?{className:"game-over-screen__winner-player--blue",label:"BLUE PLAYER"}:e.orangeScore>e.blueScore?{className:"game-over-screen__winner-player--orange",label:"ORANGE PLAYER"}:{className:"game-over-screen__winner-player--draw",label:"DRAW"}}function Y2(e){const t=W();if(!t){window.location.hash="#game";return}e.innerHTML=U2(t)}const K2="/projects/memory/assets/stadia_controller-CcsXEKot.svg",O="/projects/memory/assets/play-button-CNXT5xaq.svg";function X2(){return`
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${J2()}
        ${Q2()}
        ${e0()}
      </div>
    </main>
  `}function J2(){return`
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `}function Q2(){return`
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img
        class="home-screen__play-button-base"
        src="${O}"
        alt=""
        aria-hidden="true"
      />
      <img
        class="home-screen__play-button-controller"
        src="${O}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}function e0(){return`
    <img
      class="home-screen__controller"
      src="${K2}"
      alt=""
      aria-hidden="true"
    />
  `}const t0="#play-button";function s0(e){e.innerHTML=X2(),a0(e)}function a0(e){const t=e.querySelector(t0);t&&t.addEventListener("click",r0)}function r0(){window.location.hash="#settings"}const n0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",$="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",T="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2757'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23303131'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2757)'%3e%3cpath%20d='M12%2015C12.8333%2015%2013.5417%2014.7083%2014.125%2014.125C14.7083%2013.5417%2015%2012.8333%2015%2012C15%2011.1667%2014.7083%2010.4583%2014.125%209.875C13.5417%209.29167%2012.8333%209%2012%209C11.1667%209%2010.4583%209.29167%209.875%209.875C9.29167%2010.4583%209%2011.1667%209%2012C9%2012.8333%209.29167%2013.5417%209.875%2014.125C10.4583%2014.7083%2011.1667%2015%2012%2015ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",o0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2741'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2741)'%3e%3cpath%20d='M15.9998%2029.3334C14.1776%2029.3334%2012.4554%2028.9834%2010.8332%2028.2834C9.21095%2027.5834%207.79428%2026.6278%206.58317%2025.4167C5.37206%2024.2056%204.4165%2022.7889%203.7165%2021.1667C3.0165%2019.5445%202.6665%2017.8222%202.6665%2016C2.6665%2014.1556%203.02761%2012.4222%203.74984%2010.8C4.47206%209.1778%205.44984%207.76669%206.68317%206.56669C7.9165%205.36669%209.35539%204.41669%2010.9998%203.71669C12.6443%203.01669%2014.3998%202.66669%2016.2665%202.66669C18.0443%202.66669%2019.7221%202.97224%2021.2998%203.58335C22.8776%204.19446%2024.2609%205.03891%2025.4498%206.11669C26.6387%207.19446%2027.5832%208.47224%2028.2832%209.95002C28.9832%2011.4278%2029.3332%2013.0222%2029.3332%2014.7334C29.3332%2017.2889%2028.5554%2019.25%2026.9998%2020.6167C25.4443%2021.9834%2023.5554%2022.6667%2021.3332%2022.6667H18.8665C18.6665%2022.6667%2018.5276%2022.7222%2018.4498%2022.8334C18.3721%2022.9445%2018.3332%2023.0667%2018.3332%2023.2C18.3332%2023.4667%2018.4998%2023.85%2018.8332%2024.35C19.1665%2024.85%2019.3332%2025.4222%2019.3332%2026.0667C19.3332%2027.1778%2019.0276%2028%2018.4165%2028.5334C17.8054%2029.0667%2016.9998%2029.3334%2015.9998%2029.3334ZM8.6665%2017.3334C9.24428%2017.3334%209.72206%2017.1445%2010.0998%2016.7667C10.4776%2016.3889%2010.6665%2015.9111%2010.6665%2015.3334C10.6665%2014.7556%2010.4776%2014.2778%2010.0998%2013.9C9.72206%2013.5222%209.24428%2013.3334%208.6665%2013.3334C8.08873%2013.3334%207.61095%2013.5222%207.23317%2013.9C6.85539%2014.2778%206.6665%2014.7556%206.6665%2015.3334C6.6665%2015.9111%206.85539%2016.3889%207.23317%2016.7667C7.61095%2017.1445%208.08873%2017.3334%208.6665%2017.3334ZM12.6665%2012C13.2443%2012%2013.7221%2011.8111%2014.0998%2011.4334C14.4776%2011.0556%2014.6665%2010.5778%2014.6665%2010C14.6665%209.42224%2014.4776%208.94446%2014.0998%208.56669C13.7221%208.18891%2013.2443%208.00002%2012.6665%208.00002C12.0887%208.00002%2011.6109%208.18891%2011.2332%208.56669C10.8554%208.94446%2010.6665%209.42224%2010.6665%2010C10.6665%2010.5778%2010.8554%2011.0556%2011.2332%2011.4334C11.6109%2011.8111%2012.0887%2012%2012.6665%2012ZM19.3332%2012C19.9109%2012%2020.3887%2011.8111%2020.7665%2011.4334C21.1443%2011.0556%2021.3332%2010.5778%2021.3332%2010C21.3332%209.42224%2021.1443%208.94446%2020.7665%208.56669C20.3887%208.18891%2019.9109%208.00002%2019.3332%208.00002C18.7554%208.00002%2018.2776%208.18891%2017.8998%208.56669C17.5221%208.94446%2017.3332%209.42224%2017.3332%2010C17.3332%2010.5778%2017.5221%2011.0556%2017.8998%2011.4334C18.2776%2011.8111%2018.7554%2012%2019.3332%2012ZM23.3332%2017.3334C23.9109%2017.3334%2024.3887%2017.1445%2024.7665%2016.7667C25.1443%2016.3889%2025.3332%2015.9111%2025.3332%2015.3334C25.3332%2014.7556%2025.1443%2014.2778%2024.7665%2013.9C24.3887%2013.5222%2023.9109%2013.3334%2023.3332%2013.3334C22.7554%2013.3334%2022.2776%2013.5222%2021.8998%2013.9C21.5221%2014.2778%2021.3332%2014.7556%2021.3332%2015.3334C21.3332%2015.9111%2021.5221%2016.3889%2021.8998%2016.7667C22.2776%2017.1445%2022.7554%2017.3334%2023.3332%2017.3334ZM15.9998%2026.6667C16.1998%2026.6667%2016.3609%2026.6111%2016.4832%2026.5C16.6054%2026.3889%2016.6665%2026.2445%2016.6665%2026.0667C16.6665%2025.7556%2016.4998%2025.3889%2016.1665%2024.9667C15.8332%2024.5445%2015.6665%2023.9111%2015.6665%2023.0667C15.6665%2022.1334%2015.9887%2021.3889%2016.6332%2020.8334C17.2776%2020.2778%2018.0665%2020%2018.9998%2020H21.3332C22.7998%2020%2024.0554%2019.5722%2025.0998%2018.7167C26.1443%2017.8611%2026.6665%2016.5334%2026.6665%2014.7334C26.6665%2012.0445%2025.6387%209.80558%2023.5832%208.01669C21.5276%206.2278%2019.0887%205.33335%2016.2665%205.33335C13.2443%205.33335%2010.6665%206.36669%208.53317%208.43335C6.39984%2010.5%205.33317%2013.0222%205.33317%2016C5.33317%2018.9556%206.37206%2021.4722%208.44984%2023.55C10.5276%2025.6278%2013.0443%2026.6667%2015.9998%2026.6667Z'%20fill='%23DA1EBA'/%3e%3c/g%3e%3c/svg%3e",c0="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",i0="data:image/svg+xml,%3csvg%20width='36'%20height='60'%20viewBox='0%200%2036%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.164%2059.2224L20.656%2054.0584L15.492%2038.5664L0%2043.7304L5.164%2059.2224ZM34.328%200.8944L32.539%200L8.539%2048L10.328%2048.8944L12.117%2049.7888L36.117%201.7888L34.328%200.8944Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",k="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",l0="data:image/svg+xml,%3csvg%20width='50'%20height='18'%20viewBox='0%200%2050%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.6603%208.66028L41%202.28095e-05L32.3397%208.66028L41%2017.3205L49.6603%208.66028ZM0%208.66028L0%2010.1603L41%2010.1603V8.66028V7.16028L0%207.16028L0%208.66028Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",f="/projects/memory/assets/setting-picture-DdZ2_ims.svg",M="/projects/memory/assets/theme-visiual-food-C1H02x1B.svg",d0="/projects/memory/assets/small%20button-k70u0-se.svg";function m0(e){const t=e.theme!==null&&e.player!==null&&e.boardSize!==null,s=e.theme==="foods"?M:f;return`
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${h("Game themes",o0,u0(e.theme))}
          ${h("Choose player",c0,p0(e.player))}
          ${h("Board size",n0,C0(e.boardSize))}
        </section>

        <aside class="settings-preview">
          <img
            class="settings-preview__image"
            src="${s}"
            data-preview-default="${f}"
            data-preview-code-vibes="${f}"
            data-preview-foods="${M}"
            alt="Game preview"
          />
        </aside>

        <section class="settings-footer">
          ${g0(e,t)}
        </section>
      </div>
    </main>
  `}function h(e,t,s){return`
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${t}" alt="" aria-hidden="true" />
        <span>${e}</span>
      </h2>
      <ul class="settings-group__options">${s}</ul>
    </section>
  `}function u0(e){return R.map(t=>S("theme",t.value,t.label,e===t.value)).join("")}function p0(e){return P.map(t=>S("player",t.value,t.label,e===t.value)).join("")}function C0(e){return F.map(t=>S("boardSize",t.value,t.label,e===t.value)).join("")}function S(e,t,s,a){const r=a?" is-selected":"",n=a?" is-visible":"",o=a?T:$,c=e==="theme"?` data-preview-theme="${t}"`:"";return`
    <li class="settings-option-item">
      <button
        class="settings-option${r}"
        type="button"
        data-group="${e}"
        data-value="${t}"
        ${c}
      >
        <img
          class="settings-option__marker"
          src="${o}"
          data-active-icon="${T}"
          data-inactive-icon="${$}"
          alt=""
          aria-hidden="true"
        />
        <span class="settings-option__label">${s}</span>
        <img
          class="settings-option__line${n}"
          src="${l0}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  `}function g0(e,t){return`
    <div class="settings-footer__summary" aria-live="polite">
      <div class="settings-footer__fields">
        ${v("theme",f0(e.theme),e.theme!==null,!0)}
        ${v("player",h0(e.player),e.player!==null,!0)}
        ${v("boardSize",v0(e.boardSize),e.boardSize!==null,!1)}
      </div>
      ${_0(t)}
    </div>
  `}function v(e,t,s,a){const r=s?" is-selected":"",n=a?`<img
      class="settings-footer__separator"
      src="${k}"
      data-separator-inactive="${k}"
      data-separator-active="${i0}"
      alt=""
      aria-hidden="true"
    />`:"";return`
    <div class="settings-footer__item${r}" data-summary-group="${e}">
      <span class="settings-footer__text" data-summary-text="${e}">${t}</span>
      ${n}
    </div>
  `}function f0(e){return e?"Game theme":"Theme"}function h0(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function v0(e){return e?`Board-${e} Cards`:"Board size"}function _0(e){return`
    <button
      id="start-game-button"
      class="settings-start-button${e?" is-ready":""}"
      type="button"
      aria-label="Start game"
      ${e?"":"disabled"}
    >
      <img
        class="settings-start-button__image"
        src="${d0}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}const Z=".settings-option",y0='.settings-option[data-group="theme"]',b0=".settings-option__line",w0=".settings-option__marker",S0=".settings-footer__separator",L0=".settings-preview__image",D="#start-game-button",_="is-refreshing";function E0(e){e.innerHTML=m0(l()),B0(e),T0(e),H0(e),m(e,l().theme)}function B0(e){e.querySelectorAll(Z).forEach(s=>{s.addEventListener("click",()=>{I0(e,s.dataset.group,s.dataset.value)})})}function I0(e,t,s){!t||!s||(O0(t,s),$0(e,l()))}function O0(e,t){if(e==="theme"&&j(t)){G(t);return}if(e==="player"&&q(t)){N(t);return}e==="boardSize"&&U(t)&&z(t)}function $0(e,t){k0(e,t),x0(e,t),j0(e),m(e,t.theme)}function T0(e){e.querySelectorAll(y0).forEach(s=>{s.addEventListener("mouseenter",()=>{x(e,s.dataset.previewTheme)}),s.addEventListener("mouseleave",()=>{m(e,l().theme)}),s.addEventListener("focus",()=>{x(e,s.dataset.previewTheme)}),s.addEventListener("blur",()=>{m(e,l().theme)})})}function x(e,t){!t||!j(t)||m(e,t)}function m(e,t){const s=e.querySelector(L0);if(!s)return;const a=t==="foods"?s.dataset.previewFoods:s.dataset.previewCodeVibes||s.dataset.previewDefault;a&&(s.src=a)}function k0(e,t){e.querySelectorAll(Z).forEach(a=>{const r=M0(t,a.dataset.group,a.dataset.value);a.classList.toggle("is-selected",r),a.querySelector(b0)?.classList.toggle("is-visible",r);const o=a.querySelector(w0);if(!o)return;const c=r?o.dataset.activeIcon:o.dataset.inactiveIcon;c&&(o.src=c)})}function M0(e,t,s){return!t||!s?!1:t==="theme"?e.theme===s:t==="player"?e.player===s:t==="boardSize"?e.boardSize===s:!1}function x0(e,t){y(e,"theme",t.theme!==null,R0(t.theme)),y(e,"player",t.player!==null,P0(t.player)),y(e,"boardSize",t.boardSize!==null,F0(t.boardSize))}function y(e,t,s,a){const r=e.querySelector(`[data-summary-group="${t}"]`);if(!r)return;const n=r.classList.contains("is-selected");r.classList.toggle("is-selected",s);const o=r.querySelector(S0);if(o){const E=s?o.dataset.separatorActive:o.dataset.separatorInactive;E&&(o.src=E)}const c=r.querySelector(`[data-summary-text="${t}"]`);let L=!1;c&&c.textContent!==a&&(c.textContent=a,L=!0),(s&&!n||L)&&A0(r)}function A0(e){e.classList.remove(_),window.requestAnimationFrame(()=>{e.classList.add(_),window.setTimeout(()=>{e.classList.remove(_)},240)})}function R0(e){return e?"Game theme":"Theme"}function P0(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function F0(e){return e?`Board-${e} Cards`:"Board size"}function j0(e){const t=e.querySelector(D);if(!t)return;const s=C();t.classList.toggle("is-ready",s),t.disabled=!s}function H0(e){const t=e.querySelector(D);t&&t.addEventListener("click",()=>{C()&&(K(),window.location.hash="#game")})}function Z0(e){A(e),window.addEventListener("hashchange",()=>{A(e)})}function A(e){const t=N0();if(t==="home"){s0(e);return}if(t==="settings"){E0(e);return}if(t==="game-over"){G0(e);return}D0(e)}function D0(e){if(!C()){window.location.hash="#settings";return}H2(e)}function G0(e){if(!C()){window.location.hash="#settings";return}if(!Y()){window.location.hash="#game";return}Y2(e)}function N0(){const e=window.location.hash.toLowerCase();return e==="#settings"?"settings":e==="#game"?"game":e==="#game-over"?"game-over":"home"}function z0(){const e=document.getElementById("app");e&&Z0(e)}z0();
