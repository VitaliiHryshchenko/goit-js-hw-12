import{S as w,a as M,i as d}from"./assets/vendor-CRCB-GUD.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),s={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function f(){s.loader.classList.remove("is-hidden")}function u(){s.loader.classList.add("is-hidden")}function g(){s.loadMoreBtn.classList.remove("is-hidden")}function c(){s.loadMoreBtn.classList.add("is-hidden")}function m(r){return r.map(({webformatURL:a,largeImageURL:n,tags:i,likes:e,views:t,comments:l,downloads:L})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}" 
            alt="${i}" 
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
              <p class="discribe-text">${L}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function v(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(r*2),left:Math.ceil(r*2),behavior:"smooth"})}const o={key:"46019224-0ece95bdc3a0496b8437567d7",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function p(){return(await M.get("https://pixabay.com/api/",{params:o})).data}u();c();s.searchForm.addEventListener("submit",x);async function x(r){r.preventDefault(),s.gallery.innerHTML="",o.page=1;const a=r.currentTarget;if(o.q=a.elements.searchtext.value.trim(),o.q===""){q(),c();return}f();try{const{totalHits:n,hits:i}=await p();u(),o.maxPage=Math.ceil(n/o.per_page),s.gallery.insertAdjacentHTML("beforeend",m(i)),h.refresh(),i.length>0&&i.length!==n?(g(),s.loadMoreBtn.addEventListener("click",y)):i.length<=o.per_page&&i.length>0?(b(),c()):i.length===0&&(P(),c())}catch{}finally{s.searchForm.reset()}}async function y(){o.page+=1,c(),f();try{const{hits:r}=await p();g(),u(),s.gallery.insertAdjacentHTML("beforeend",m(r)),h.refresh(),v()}catch{}finally{o.page===o.maxPage&&(c(),b(),s.loadMoreBtn.removeEventListener("click",y))}}function P(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function q(){d.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function b(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=index.js.map
