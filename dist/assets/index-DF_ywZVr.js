(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="/projects/memory/assets/stadia_controller-CcsXEKot.svg",a="/projects/memory/assets/play-button-CNXT5xaq.svg",c=document.getElementById("app");function u(){c&&(c.innerHTML=d(),m())}function d(){return`
    <main class="home-screen" aria-labelledby="home-title">
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
          <img src="${a}" alt="" aria-hidden="true" />
        </button>

        <img
          class="home-screen__controller"
          src="${l}"
          alt=""
          aria-hidden="true"
        />
      </div>
    </main>
  `}function m(){const n=document.getElementById("play-button");n&&n.addEventListener("click",f)}function f(){window.location.hash="#settings"}u();
