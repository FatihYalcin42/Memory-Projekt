(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const m=[{value:"code-vibes",label:"Code vibes theme"},{value:"gaming",label:"Gaming theme"},{value:"da-projects",label:"DA Projects theme"},{value:"foods",label:"Foods theme"}],d=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],p=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let i={boardSize:null,player:null,theme:null};function f(){return{...i}}function w(e){i={...i,theme:e}}function S(e){i={...i,player:e}}function L(e){i={...i,boardSize:e}}function g(){return!!(i.theme&&i.player&&i.boardSize)}function $(e){return m.some(t=>t.value===e)}function B(e){return d.some(t=>t.value===e)}function E(e){return p.some(t=>t.value===e)}const b="/projects/memory/assets/Code%20vibes%20theme_16-DnDZKwbK.svg",O="/projects/memory/assets/Code%20vibes%20theme_24-B6WV80WL.svg",k="/projects/memory/assets/Code%20vibes%20theme_36-DBGuI9rU.svg",T={16:b,24:O,36:k};function A(e){return`
    <main class="game-screen" aria-labelledby="game-title">
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${x(e.boardSize)}"
          alt="Memory board"
        />

        <header class="game-screen__overlay">
          <h1 id="game-title">Game</h1>
          <p>${H(e.theme,e.player,e.boardSize)}</p>
          <button id="game-back-button" type="button">Settings</button>
        </header>
      </div>
    </main>
  `}function x(e){return e?T[e]:b}function H(e,t,n){const o=e||"-",s=t||"-",a=n?`${n} cards`:"-";return`Theme: ${o} | Player: ${s} | Board: ${a}`}const I="#game-back-button";function M(e){e.innerHTML=A(f()),P(e)}function P(e){const t=e.querySelector(I);t&&t.addEventListener("click",()=>{window.location.hash="#settings"})}const R="/projects/memory/assets/stadia_controller-CcsXEKot.svg",G="/projects/memory/assets/play-button-CNXT5xaq.svg";function Z(){return`
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${j()}
        ${z()}
        ${D()}
      </div>
    </main>
  `}function j(){return`
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `}function z(){return`
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img src="${G}" alt="" aria-hidden="true" />
    </button>
  `}function D(){return`
    <img
      class="home-screen__controller"
      src="${R}"
      alt=""
      aria-hidden="true"
    />
  `}const U="#play-button";function N(e){e.innerHTML=Z(),V(e)}function V(e){const t=e.querySelector(U);t&&t.addEventListener("click",q)}function q(){window.location.hash="#settings"}const K="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",W="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",X="/projects/memory/assets/setting-picture-DdZ2_ims.svg",Y="/projects/memory/assets/small%20button-k70u0-se.svg",J="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e";function Q(e){return`
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${c("Game themes",J,e2(e.theme))}
          ${c("Choose player",W,t2(e.player))}
          ${c("Board size",K,n2(e.boardSize))}
        </section>

        <aside class="settings-preview">
          <img src="${X}" alt="Game preview" />
        </aside>

        <section class="settings-footer">
          ${a2(e)}
          ${i2()}
        </section>
      </div>
    </main>
  `}function c(e,t,n){return`
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${t}" alt="" aria-hidden="true" />
        <span>${e}</span>
      </h2>
      <ul class="settings-group__options">${n}</ul>
    </section>
  `}function e2(e){return m.map(t=>{const n=t.value!=="code-vibes";return h("theme",t.value,t.label,e===t.value,!0,n)}).join("")}function t2(e){return d.map(t=>h("player",t.value,t.label,e===t.value)).join("")}function n2(e){return p.map(t=>h("boardSize",t.value,t.label,e===t.value)).join("")}function h(e,t,n,o,s=!1,a=!1){const r=o?" is-selected":"",y=a?" is-disabled":"",_=s&&o?s2():"";return`
    <li class="settings-option-item">
      <button
        class="settings-option${r}${y}"
        type="button"
        data-group="${e}"
        data-value="${t}"
        ${a?"disabled":""}
      >
        <span class="settings-option__marker" aria-hidden="true"></span>
        <span class="settings-option__label">${n}</span>
        ${_}
      </button>
    </li>
  `}function s2(){return`
    <img
      class="settings-option__line"
      src="${F}"
      alt=""
      aria-hidden="true"
    />
  `}function a2(e){return`
    <div class="settings-summary">
      ${l("Game theme",u(m,e.theme))}
      ${l("Player",u(d,e.player))}
      ${l("Board size",u(p,e.boardSize))}
    </div>
  `}function l(e,t){return`
    <div class="settings-summary__item">
      <span class="settings-summary__label">${e}</span>
      <span class="settings-summary__value">${t}</span>
    </div>
  `}function i2(){const e=g();return`
    <button
      id="start-game-button"
      class="settings-start-button${e?" is-ready":" is-disabled"}"
      type="button"
      ${e?"":"disabled"}
    >
      <img src="${Y}" alt="Start game" />
    </button>
  `}function u(e,t){if(!t)return"-";const n=e.find(o=>o.value===t);return n?n.label:"-"}const o2=".settings-option",r2="#start-game-button";function c2(e){v(e)}function v(e){e.innerHTML=Q(f()),l2(e),d2(e)}function l2(e){e.querySelectorAll(o2).forEach(n=>{n.addEventListener("click",()=>{u2(e,n.dataset.group,n.dataset.value)})})}function u2(e,t,n){!t||!n||(m2(t,n),v(e))}function m2(e,t){if(e==="theme"&&$(t)){w(t);return}if(e==="player"&&B(t)){S(t);return}e==="boardSize"&&E(t)&&L(t)}function d2(e){const t=e.querySelector(r2);t&&t.addEventListener("click",()=>{g()&&(window.location.hash="#game")})}function p2(e){C(e),window.addEventListener("hashchange",()=>{C(e)})}function C(e){const t=h2();if(t==="home"){N(e);return}if(t==="settings"){c2(e);return}g2(e)}function g2(e){if(!g()){window.location.hash="#settings";return}M(e)}function h2(){const e=window.location.hash.toLowerCase();return e==="#settings"?"settings":e==="#game"?"game":"home"}function C2(){const e=document.getElementById("app");e&&p2(e)}C2();
