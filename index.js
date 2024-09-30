import{S as L,a as w,i as d}from"./assets/vendor-CRCB-GUD.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function f(){i.loader.classList.remove("is-hidden")}function u(){i.loader.classList.add("is-hidden")}function m(){i.loadMoreBtn.classList.remove("is-hidden")}function c(){i.loadMoreBtn.classList.add("is-hidden")}function g(r){return r.map(({webformatURL:n,largeImageURL:a,tags:s,likes:e,views:t,comments:l,downloads:b})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${n}" 
            alt="${s}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${t}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${l}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${b}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function M(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(r*2),left:Math.ceil(r*2),behavior:"smooth"})}const o={key:"46019224-0ece95bdc3a0496b8437567d7",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function p(){return(await w.get("https://pixabay.com/api/",{params:o})).data}u();c();i.searchForm.addEventListener("submit",v);async function v(r){r.preventDefault(),i.gallery.innerHTML="",o.page=1;const n=r.currentTarget;if(o.q=n.elements.searchtext.value.trim(),o.q===""){P(),c();return}f();try{const{totalHits:a,hits:s}=await p();u(),o.maxPage=Math.ceil(a/o.per_page),i.gallery.insertAdjacentHTML("beforeend",g(s)),h.refresh(),s.length>0&&s.length!==a?(m(),i.loadMoreBtn.addEventListener("click",y)):s.length===a?c():s.length===0&&(x(),c())}catch{}finally{i.searchForm.reset()}}async function y(){o.page+=1,c(),f();try{const{hits:r}=await p();m(),u(),i.gallery.insertAdjacentHTML("beforeend",g(r)),h.refresh(),M()}catch{}finally{o.page===o.maxPage&&(c(),q(),i.loadMoreBtn.removeEventListener("click",y))}}function x(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function P(){d.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function q(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}
//# sourceMappingURL=index.js.map
