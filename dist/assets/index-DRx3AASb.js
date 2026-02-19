(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const O=[{value:"code-vibes",label:"Code vibes theme"},{value:"foods",label:"Foods theme"}],B=[{value:"blue",label:"Blue"},{value:"orange",label:"Orange"}],$=[{value:"16",label:"16 cards"},{value:"24",label:"24 cards"},{value:"36",label:"36 cards"}];let i={boardSize:null,player:null,theme:null};function l(){return{...i}}function M(e){i={...i,theme:e}}function I(e){i={...i,player:e}}function P(e){i={...i,boardSize:e}}function f(){return!!(i.theme&&i.player&&i.boardSize)}function T(e){return O.some(t=>t.value===e)}function A(e){return B.some(t=>t.value===e)}function R(e){return $.some(t=>t.value===e)}const Z="/projects/memory/assets/Code%20vibes%20theme_16-DnDZKwbK.svg",H="/projects/memory/assets/Code%20vibes%20theme_24-B6WV80WL.svg",z="/projects/memory/assets/Code%20vibes%20theme_36-DBGuI9rU.svg",F="/projects/memory/assets/Food_theme_16-C22FWGub.svg",q="/projects/memory/assets/Food_theme_24-CMaMg8km.svg",D="/projects/memory/assets/Food_theme_36-DpVdfDWc.svg",G={"code-vibes":{16:Z,24:H,36:z},foods:{16:F,24:q,36:D}};function N(e){return`
    <main class="game-screen" aria-labelledby="game-title">
      <div class="game-screen__canvas">
        <img
          class="game-screen__board"
          src="${U(e.theme,e.boardSize)}"
          alt="Memory board"
        />

        <header class="game-screen__overlay">
          <h1 id="game-title">Game</h1>
          <p>${j(e.theme,e.player,e.boardSize)}</p>
          <button id="game-back-button" type="button">Settings</button>
        </header>
      </div>
    </main>
  `}function U(e,t){const s=e??"code-vibes",a=t??"16";return G[s][a]}function j(e,t,s){const a=e||"-",n=t||"-",o=s?`${s} cards`:"-";return`Theme: ${a} | Player: ${n} | Board: ${o}`}const V="#game-back-button";function K(e){e.innerHTML=N(l()),W(e)}function W(e){const t=e.querySelector(V);t&&t.addEventListener("click",()=>{window.location.hash="#settings"})}const X="/projects/memory/assets/stadia_controller-CcsXEKot.svg",Y="/projects/memory/assets/play-button-CNXT5xaq.svg";function J(){return`
    <main class="home-screen" aria-labelledby="home-title">
      <div class="home-screen__canvas">
        ${Q()}
        ${e2()}
        ${t2()}
      </div>
    </main>
  `}function Q(){return`
    <section class="home-screen__content">
      <p class="home-screen__eyebrow">It's play time.</p>
      <h1 id="home-title" class="home-screen__title">Ready to play?</h1>
    </section>
  `}function e2(){return`
    <button
      id="play-button"
      class="home-screen__play-button"
      type="button"
      aria-label="Open settings"
    >
      <img src="${Y}" alt="" aria-hidden="true" />
    </button>
  `}function t2(){return`
    <img
      class="home-screen__controller"
      src="${X}"
      alt=""
      aria-hidden="true"
    />
  `}const s2="#play-button";function n2(e){e.innerHTML=J(),a2(e)}function a2(e){const t=e.querySelector(s2);t&&t.addEventListener("click",o2)}function o2(){window.location.hash="#settings"}const r2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4600'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%230635C9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4600)'%3e%3cpath%20d='M5.29997%2026.4L4.16663%2025.9333C3.47775%2025.6444%203.01663%2025.1444%202.7833%2024.4333C2.54997%2023.7222%202.58886%2023.0222%202.89997%2022.3333L5.29997%2017.1333V26.4ZM10.6333%2029.3333C9.89997%2029.3333%209.27219%2029.0722%208.74997%2028.5499C8.22775%2028.0277%207.96663%2027.4%207.96663%2026.6666V18.6666L11.5%2028.4666C11.5666%2028.6222%2011.6333%2028.7722%2011.7%2028.9166C11.7666%2029.0611%2011.8555%2029.1999%2011.9666%2029.3333H10.6333ZM17.5%2029.1999C16.7889%2029.4666%2016.1%2029.4333%2015.4333%2029.1C14.7666%2028.7666%2014.3%2028.2444%2014.0333%2027.5333L8.09997%2011.2666C7.8333%2010.5555%207.85552%209.86106%208.16663%209.18328C8.47775%208.50551%208.98886%208.04439%209.69997%207.79995L19.7666%204.13328C20.4777%203.86662%2021.1666%203.89995%2021.8333%204.23328C22.5%204.56662%2022.9666%205.08884%2023.2333%205.79995L29.1666%2022.0666C29.4333%2022.7777%2029.4111%2023.4722%2029.1%2024.15C28.7889%2024.8277%2028.2777%2025.2888%2027.5666%2025.5333L17.5%2029.1999ZM14.6333%2013.3333C15.0111%2013.3333%2015.3277%2013.2055%2015.5833%2012.95C15.8389%2012.6944%2015.9666%2012.3777%2015.9666%2012C15.9666%2011.6222%2015.8389%2011.3055%2015.5833%2011.0499C15.3277%2010.7944%2015.0111%2010.6666%2014.6333%2010.6666C14.2555%2010.6666%2013.9389%2010.7944%2013.6833%2011.0499C13.4277%2011.3055%2013.3%2011.6222%2013.3%2012C13.3%2012.3777%2013.4277%2012.6944%2013.6833%2012.95C13.9389%2013.2055%2014.2555%2013.3333%2014.6333%2013.3333ZM16.5666%2026.6666L26.6333%2023L20.7%206.66662L10.6333%2010.3333L16.5666%2026.6666Z'%20fill='%230635C9'/%3e%3c/g%3e%3c/svg%3e",_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2769'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2769)'%3e%3cpath%20d='M12%2022C9.2381%2022%206.88095%2021.0238%204.92857%2019.0714C2.97619%2017.119%202%2014.7619%202%2012C2%209.2381%202.97619%206.88095%204.92857%204.92857C6.88095%202.97619%209.2381%202%2012%202C14.7619%202%2017.119%202.97619%2019.0714%204.92857C21.0238%206.88095%2022%209.2381%2022%2012C22%2014.7619%2021.0238%2017.119%2019.0714%2019.0714C17.119%2021.0238%2014.7619%2022%2012%2022ZM12%2019.1429C13.9762%2019.1429%2015.6607%2018.4464%2017.0536%2017.0536C18.4464%2015.6607%2019.1429%2013.9762%2019.1429%2012C19.1429%2010.0238%2018.4464%208.33929%2017.0536%206.94643C15.6607%205.55357%2013.9762%204.85714%2012%204.85714C10.0238%204.85714%208.33929%205.55357%206.94643%206.94643C5.55357%208.33929%204.85714%2010.0238%204.85714%2012C4.85714%2013.9762%205.55357%2015.6607%206.94643%2017.0536C8.33929%2018.4464%2010.0238%2019.1429%2012%2019.1429Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2757'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23303131'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2757)'%3e%3cpath%20d='M12%2015C12.8333%2015%2013.5417%2014.7083%2014.125%2014.125C14.7083%2013.5417%2015%2012.8333%2015%2012C15%2011.1667%2014.7083%2010.4583%2014.125%209.875C13.5417%209.29167%2012.8333%209%2012%209C11.1667%209%2010.4583%209.29167%209.875%209.875C9.29167%2010.4583%209%2011.1667%209%2012C9%2012.8333%209.29167%2013.5417%209.875%2014.125C10.4583%2014.7083%2011.1667%2015%2012%2015ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z'%20fill='%23303131'/%3e%3c/g%3e%3c/svg%3e",i2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2714_2741'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2714_2741)'%3e%3cpath%20d='M15.9998%2029.3334C14.1776%2029.3334%2012.4554%2028.9834%2010.8332%2028.2834C9.21095%2027.5834%207.79428%2026.6278%206.58317%2025.4167C5.37206%2024.2056%204.4165%2022.7889%203.7165%2021.1667C3.0165%2019.5445%202.6665%2017.8222%202.6665%2016C2.6665%2014.1556%203.02761%2012.4222%203.74984%2010.8C4.47206%209.1778%205.44984%207.76669%206.68317%206.56669C7.9165%205.36669%209.35539%204.41669%2010.9998%203.71669C12.6443%203.01669%2014.3998%202.66669%2016.2665%202.66669C18.0443%202.66669%2019.7221%202.97224%2021.2998%203.58335C22.8776%204.19446%2024.2609%205.03891%2025.4498%206.11669C26.6387%207.19446%2027.5832%208.47224%2028.2832%209.95002C28.9832%2011.4278%2029.3332%2013.0222%2029.3332%2014.7334C29.3332%2017.2889%2028.5554%2019.25%2026.9998%2020.6167C25.4443%2021.9834%2023.5554%2022.6667%2021.3332%2022.6667H18.8665C18.6665%2022.6667%2018.5276%2022.7222%2018.4498%2022.8334C18.3721%2022.9445%2018.3332%2023.0667%2018.3332%2023.2C18.3332%2023.4667%2018.4998%2023.85%2018.8332%2024.35C19.1665%2024.85%2019.3332%2025.4222%2019.3332%2026.0667C19.3332%2027.1778%2019.0276%2028%2018.4165%2028.5334C17.8054%2029.0667%2016.9998%2029.3334%2015.9998%2029.3334ZM8.6665%2017.3334C9.24428%2017.3334%209.72206%2017.1445%2010.0998%2016.7667C10.4776%2016.3889%2010.6665%2015.9111%2010.6665%2015.3334C10.6665%2014.7556%2010.4776%2014.2778%2010.0998%2013.9C9.72206%2013.5222%209.24428%2013.3334%208.6665%2013.3334C8.08873%2013.3334%207.61095%2013.5222%207.23317%2013.9C6.85539%2014.2778%206.6665%2014.7556%206.6665%2015.3334C6.6665%2015.9111%206.85539%2016.3889%207.23317%2016.7667C7.61095%2017.1445%208.08873%2017.3334%208.6665%2017.3334ZM12.6665%2012C13.2443%2012%2013.7221%2011.8111%2014.0998%2011.4334C14.4776%2011.0556%2014.6665%2010.5778%2014.6665%2010C14.6665%209.42224%2014.4776%208.94446%2014.0998%208.56669C13.7221%208.18891%2013.2443%208.00002%2012.6665%208.00002C12.0887%208.00002%2011.6109%208.18891%2011.2332%208.56669C10.8554%208.94446%2010.6665%209.42224%2010.6665%2010C10.6665%2010.5778%2010.8554%2011.0556%2011.2332%2011.4334C11.6109%2011.8111%2012.0887%2012%2012.6665%2012ZM19.3332%2012C19.9109%2012%2020.3887%2011.8111%2020.7665%2011.4334C21.1443%2011.0556%2021.3332%2010.5778%2021.3332%2010C21.3332%209.42224%2021.1443%208.94446%2020.7665%208.56669C20.3887%208.18891%2019.9109%208.00002%2019.3332%208.00002C18.7554%208.00002%2018.2776%208.18891%2017.8998%208.56669C17.5221%208.94446%2017.3332%209.42224%2017.3332%2010C17.3332%2010.5778%2017.5221%2011.0556%2017.8998%2011.4334C18.2776%2011.8111%2018.7554%2012%2019.3332%2012ZM23.3332%2017.3334C23.9109%2017.3334%2024.3887%2017.1445%2024.7665%2016.7667C25.1443%2016.3889%2025.3332%2015.9111%2025.3332%2015.3334C25.3332%2014.7556%2025.1443%2014.2778%2024.7665%2013.9C24.3887%2013.5222%2023.9109%2013.3334%2023.3332%2013.3334C22.7554%2013.3334%2022.2776%2013.5222%2021.8998%2013.9C21.5221%2014.2778%2021.3332%2014.7556%2021.3332%2015.3334C21.3332%2015.9111%2021.5221%2016.3889%2021.8998%2016.7667C22.2776%2017.1445%2022.7554%2017.3334%2023.3332%2017.3334ZM15.9998%2026.6667C16.1998%2026.6667%2016.3609%2026.6111%2016.4832%2026.5C16.6054%2026.3889%2016.6665%2026.2445%2016.6665%2026.0667C16.6665%2025.7556%2016.4998%2025.3889%2016.1665%2024.9667C15.8332%2024.5445%2015.6665%2023.9111%2015.6665%2023.0667C15.6665%2022.1334%2015.9887%2021.3889%2016.6332%2020.8334C17.2776%2020.2778%2018.0665%2020%2018.9998%2020H21.3332C22.7998%2020%2024.0554%2019.5722%2025.0998%2018.7167C26.1443%2017.8611%2026.6665%2016.5334%2026.6665%2014.7334C26.6665%2012.0445%2025.6387%209.80558%2023.5832%208.01669C21.5276%206.2278%2019.0887%205.33335%2016.2665%205.33335C13.2443%205.33335%2010.6665%206.36669%208.53317%208.43335C6.39984%2010.5%205.33317%2013.0222%205.33317%2016C5.33317%2018.9556%206.37206%2021.4722%208.44984%2023.55C10.5276%2025.6278%2013.0443%2026.6667%2015.9998%2026.6667Z'%20fill='%23DA1EBA'/%3e%3c/g%3e%3c/svg%3e",c2="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_2290_4591'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='32'%20height='32'%3e%3crect%20width='32'%20height='32'%20fill='%231AE5BE'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2290_4591)'%3e%3cpath%20d='M8.00016%2029.3334C7.26683%2029.3334%206.63905%2029.0722%206.11683%2028.55C5.59461%2028.0278%205.3335%2027.4%205.3335%2026.6667V24.0334C5.3335%2023.5889%205.4335%2023.1778%205.6335%2022.8C5.8335%2022.4222%206.10016%2022.1%206.4335%2021.8334C7.96683%2020.5889%209.11683%2019.3334%209.8835%2018.0667C10.6502%2016.8%2011.1891%2015.6667%2011.5002%2014.6667H9.3335C8.95572%2014.6667%208.63905%2014.5389%208.3835%2014.2834C8.12794%2014.0278%208.00016%2013.7111%208.00016%2013.3334C8.00016%2012.9556%208.12794%2012.6389%208.3835%2012.3834C8.63905%2012.1278%208.95572%2012%209.3335%2012H11.0002C10.6891%2011.5111%2010.4446%2010.9889%2010.2668%2010.4334C10.0891%209.8778%2010.0002%209.28891%2010.0002%208.66669C10.0002%207.00002%2010.5835%205.58335%2011.7502%204.41669C12.9168%203.25002%2014.3335%202.66669%2016.0002%202.66669C17.6668%202.66669%2019.0835%203.25002%2020.2502%204.41669C21.4168%205.58335%2022.0002%207.00002%2022.0002%208.66669C22.0002%209.28891%2021.9113%209.8778%2021.7335%2010.4334C21.5557%2010.9889%2021.3113%2011.5111%2021.0002%2012H22.6668C23.0446%2012%2023.3613%2012.1278%2023.6168%2012.3834C23.8724%2012.6389%2024.0002%2012.9556%2024.0002%2013.3334C24.0002%2013.7111%2023.8724%2014.0278%2023.6168%2014.2834C23.3613%2014.5389%2023.0446%2014.6667%2022.6668%2014.6667H20.5002C20.8113%2015.6667%2021.3502%2016.8%2022.1168%2018.0667C22.8835%2019.3334%2024.0335%2020.5889%2025.5668%2021.8334C25.9002%2022.1%2026.1668%2022.4222%2026.3668%2022.8C26.5668%2023.1778%2026.6668%2023.5889%2026.6668%2024.0334V26.6667C26.6668%2027.4%2026.4057%2028.0278%2025.8835%2028.55C25.3613%2029.0722%2024.7335%2029.3334%2024.0002%2029.3334H8.00016ZM8.00016%2026.6667H24.0002V24C21.9557%2022.4%2020.4779%2020.75%2019.5668%2019.05C18.6557%2017.35%2018.0446%2015.8889%2017.7335%2014.6667H14.2668C13.9557%2015.8889%2013.3446%2017.35%2012.4335%2019.05C11.5224%2020.75%2010.0446%2022.4%208.00016%2024V26.6667ZM16.0002%2012C16.9335%2012%2017.7224%2011.6778%2018.3668%2011.0334C19.0113%2010.3889%2019.3335%209.60002%2019.3335%208.66669C19.3335%207.73335%2019.0113%206.94446%2018.3668%206.30002C17.7224%205.65558%2016.9335%205.33335%2016.0002%205.33335C15.0668%205.33335%2014.2779%205.65558%2013.6335%206.30002C12.9891%206.94446%2012.6668%207.73335%2012.6668%208.66669C12.6668%209.60002%2012.9891%2010.3889%2013.6335%2011.0334C14.2779%2011.6778%2015.0668%2012%2016.0002%2012Z'%20fill='%231AE5BE'/%3e%3c/g%3e%3c/svg%3e",l2="data:image/svg+xml,%3csvg%20width='36'%20height='60'%20viewBox='0%200%2036%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.164%2059.2224L20.656%2054.0584L15.492%2038.5664L0%2043.7304L5.164%2059.2224ZM34.328%200.8944L32.539%200L8.539%2048L10.328%2048.8944L12.117%2049.7888L36.117%201.7888L34.328%200.8944Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='27'%20height='56'%20viewBox='0%200%2027%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='22.3154'%20y1='1.32435'%20x2='3.7745'%20y2='54.166'%20stroke='%23F0EA6E'%20stroke-width='8'/%3e%3c/svg%3e",m2="data:image/svg+xml,%3csvg%20width='50'%20height='18'%20viewBox='0%200%2050%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.6603%208.66028L41%202.28095e-05L32.3397%208.66028L41%2017.3205L49.6603%208.66028ZM0%208.66028L0%2010.1603L41%2010.1603V8.66028V7.16028L0%207.16028L0%208.66028Z'%20fill='%23F0EA6E'/%3e%3c/svg%3e",u="/projects/memory/assets/setting-picture-DdZ2_ims.svg",S="/projects/memory/assets/theme-visiual-food-C1H02x1B.svg",u2="/projects/memory/assets/small%20button-k70u0-se.svg";function d2(e){const t=e.theme!==null&&e.player!==null&&e.boardSize!==null,s=e.theme==="foods"?S:u;return`
    <main class="settings-screen" aria-labelledby="settings-title">
      <div class="settings-screen__canvas">
        <section class="settings-panel">
          <h1 id="settings-title" class="settings-panel__title">Settings</h1>
          ${d("Game themes",i2,C2(e.theme))}
          ${d("Choose player",c2,h2(e.player))}
          ${d("Board size",r2,p2(e.boardSize))}
        </section>

        <aside class="settings-preview">
          <img
            class="settings-preview__image"
            src="${s}"
            data-preview-default="${u}"
            data-preview-code-vibes="${u}"
            data-preview-foods="${S}"
            alt="Game preview"
          />
        </aside>

        <section class="settings-footer">
          ${f2(e,t)}
        </section>
      </div>
    </main>
  `}function d(e,t,s){return`
    <section class="settings-group">
      <h2 class="settings-group__title">
        <img src="${t}" alt="" aria-hidden="true" />
        <span>${e}</span>
      </h2>
      <ul class="settings-group__options">${s}</ul>
    </section>
  `}function C2(e){return O.map(t=>g("theme",t.value,t.label,e===t.value)).join("")}function h2(e){return B.map(t=>g("player",t.value,t.label,e===t.value)).join("")}function p2(e){return $.map(t=>g("boardSize",t.value,t.label,e===t.value)).join("")}function g(e,t,s,a){const n=a?" is-selected":"",o=a?" is-visible":"",r=a?w:_,c=e==="theme"?` data-preview-theme="${t}"`:"";return`
    <li class="settings-option-item">
      <button
        class="settings-option${n}"
        type="button"
        data-group="${e}"
        data-value="${t}"
        ${c}
      >
        <img
          class="settings-option__marker"
          src="${r}"
          data-active-icon="${w}"
          data-inactive-icon="${_}"
          alt=""
          aria-hidden="true"
        />
        <span class="settings-option__label">${s}</span>
        <img
          class="settings-option__line${o}"
          src="${m2}"
          alt=""
          aria-hidden="true"
        />
      </button>
    </li>
  `}function f2(e,t){return`
    <div class="settings-footer__summary" aria-live="polite">
      <div class="settings-footer__fields">
        ${C("theme",g2(e.theme),e.theme!==null,!0)}
        ${C("player",v2(e.player),e.player!==null,!0)}
        ${C("boardSize",y2(e.boardSize),e.boardSize!==null,!1)}
      </div>
      ${_2(t)}
    </div>
  `}function C(e,t,s,a){const n=s?" is-selected":"",o=a?`<img
      class="settings-footer__separator"
      src="${b}"
      data-separator-inactive="${b}"
      data-separator-active="${l2}"
      alt=""
      aria-hidden="true"
    />`:"";return`
    <div class="settings-footer__item${n}" data-summary-group="${e}">
      <span class="settings-footer__text" data-summary-text="${e}">${t}</span>
      ${o}
    </div>
  `}function g2(e){return e?"Game theme":"Theme"}function v2(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function y2(e){return e?`Board-${e} Cards`:"Board size"}function _2(e){return`
    <button
      id="start-game-button"
      class="settings-start-button${e?" is-ready":""}"
      type="button"
      aria-label="Start game"
      ${e?"":"disabled"}
    >
      <img
        class="settings-start-button__image"
        src="${u2}"
        alt=""
        aria-hidden="true"
      />
    </button>
  `}const k=".settings-option",w2='.settings-option[data-group="theme"]',b2=".settings-option__line",S2=".settings-option__marker",L2=".settings-footer__separator",E2=".settings-preview__image",x="#start-game-button",h="is-refreshing";function O2(e){e.innerHTML=d2(l()),B2(e),x2(e),F2(e),m(e,l().theme)}function B2(e){e.querySelectorAll(k).forEach(s=>{s.addEventListener("click",()=>{$2(e,s.dataset.group,s.dataset.value)})})}function $2(e,t,s){!t||!s||(T2(t,s),k2(e,l()))}function T2(e,t){if(e==="theme"&&T(t)){M(t);return}if(e==="player"&&A(t)){I(t);return}e==="boardSize"&&R(t)&&P(t)}function k2(e,t){M2(e,t),P2(e,t),z2(e),m(e,t.theme)}function x2(e){e.querySelectorAll(w2).forEach(s=>{s.addEventListener("mouseenter",()=>{L(e,s.dataset.previewTheme)}),s.addEventListener("mouseleave",()=>{m(e,l().theme)}),s.addEventListener("focus",()=>{L(e,s.dataset.previewTheme)}),s.addEventListener("blur",()=>{m(e,l().theme)})})}function L(e,t){!t||!T(t)||m(e,t)}function m(e,t){const s=e.querySelector(E2);if(!s)return;const a=t==="foods"?s.dataset.previewFoods:s.dataset.previewCodeVibes||s.dataset.previewDefault;a&&(s.src=a)}function M2(e,t){e.querySelectorAll(k).forEach(a=>{const n=I2(t,a.dataset.group,a.dataset.value);a.classList.toggle("is-selected",n),a.querySelector(b2)?.classList.toggle("is-visible",n);const r=a.querySelector(S2);if(!r)return;const c=n?r.dataset.activeIcon:r.dataset.inactiveIcon;c&&(r.src=c)})}function I2(e,t,s){return!t||!s?!1:t==="theme"?e.theme===s:t==="player"?e.player===s:t==="boardSize"?e.boardSize===s:!1}function P2(e,t){p(e,"theme",t.theme!==null,R2(t.theme)),p(e,"player",t.player!==null,Z2(t.player)),p(e,"boardSize",t.boardSize!==null,H2(t.boardSize))}function p(e,t,s,a){const n=e.querySelector(`[data-summary-group="${t}"]`);if(!n)return;const o=n.classList.contains("is-selected");n.classList.toggle("is-selected",s);const r=n.querySelector(L2);if(r){const y=s?r.dataset.separatorActive:r.dataset.separatorInactive;y&&(r.src=y)}const c=n.querySelector(`[data-summary-text="${t}"]`);let v=!1;c&&c.textContent!==a&&(c.textContent=a,v=!0),(s&&!o||v)&&A2(n)}function A2(e){e.classList.remove(h),window.requestAnimationFrame(()=>{e.classList.add(h),window.setTimeout(()=>{e.classList.remove(h)},240)})}function R2(e){return e?"Game theme":"Theme"}function Z2(e){return e?e==="orange"?"Orange Player":"Blue Player":"Player"}function H2(e){return e?`Board-${e} Cards`:"Board size"}function z2(e){const t=e.querySelector(x);if(!t)return;const s=f();t.classList.toggle("is-ready",s),t.disabled=!s}function F2(e){const t=e.querySelector(x);t&&t.addEventListener("click",()=>{f()&&(window.location.hash="#game")})}function q2(e){E(e),window.addEventListener("hashchange",()=>{E(e)})}function E(e){const t=G2();if(t==="home"){n2(e);return}if(t==="settings"){O2(e);return}D2(e)}function D2(e){if(!f()){window.location.hash="#settings";return}K(e)}function G2(){const e=window.location.hash.toLowerCase();return e==="#settings"?"settings":e==="#game"?"game":"home"}function N2(){const e=document.getElementById("app");e&&q2(e)}N2();
