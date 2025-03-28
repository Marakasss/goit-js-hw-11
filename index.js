import{a as p,i as d,S as h}from"./assets/vendor-sgmfR4h7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function m(r){p.get("https://pixabay.com/api/",{params:{key:"49580099-ba49dcf3c416d0b66883e5025",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200}}).then(t=>{if(t.data.hits.length===0){n(`Sorry, there are no images matching ${r}. Please try again!`);return}y(t.data.hits)}).catch(t=>{console.error(t),n("Something went wrong. Please try again later.")})}function y(r){const s=document.querySelector(".gallery"),t=r.map(e=>{const{likes:i,views:a,downloads:l,comments:c,tags:g,largeImageURL:u,webformatURL:f}=e;return`<li class="img-card">
                        <a class="gallery-link" href= ${u}>
                            <img
                            class="gallery-image"
                            src= ${f}
                            alt= ${g}
                            />
                        </a>
                        <ul class="img-info">
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-like"></use>
                                </svg>
                                <p>${i}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-eye"></use>
                                </svg>
                                <p>${a}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-dialog"></use>
                                </svg>
                                <p>${c}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-gallery-download"></use>
                                </svg>
                                <p>${l}</p>
                            </li>
                        </ul>
                    </li>`}).join("");s.innerHTML="",s.insertAdjacentHTML("afterbegin",t),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){const r=document.querySelector(".form"),s=document.querySelector(".icon-img");r.addEventListener("input",t=>{t.target.value.trim()?s.style.fill="#1875FF":s.style.fill=""}),r.addEventListener("submit",t=>{t.preventDefault();let o=t.target["search-text"].value.trim();if(t.target.name==="search"&&!o){n("Sorry");return}m(o)})}function n(r){d.error({message:r,position:window.innerWidth<=768?"bottomCenter":"topCenter",transitionIn:"fadeInDown",backgroundColor:"rgb(231, 19, 36)",messageColor:"white",iconColor:"white",messageSize:"16px",class:"toast"})}b();
//# sourceMappingURL=index.js.map
