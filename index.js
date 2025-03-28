import{a as d,i as a,S as h}from"./assets/vendor-sgmfR4h7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function m(s){d.get("https://pixabay.com/api/",{params:{key:"49580099-ba49dcf3c416d0b66883e5025",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200}}).then(t=>{if(t.data.hits.length===0){l(`Sorry, there are no images matching ${s}. Please try again!`);return}y(t.data.hits)}).catch(t=>{console.error(t),v("Something went wrong. Please try again later.")})}function y(s){const r=document.querySelector(".gallery"),t=s.map(e=>{const{likes:i,views:n,downloads:c,comments:g,tags:u,largeImageURL:f,webformatURL:p}=e;return`<li class="img-card">
                        <a class="gallery-link" href= ${f}>
                            <img
                            class="gallery-image"
                            src= ${p}
                            alt= ${u}
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
                                <p>${n}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-dialog"></use>
                                </svg>
                                <p>${g}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="./public/sprite.svg#icon-gallery-download"></use>
                                </svg>
                                <p>${c}</p>
                            </li>
                        </ul>
                    </li>`}).join("");r.innerHTML="",r.insertAdjacentHTML("afterbegin",t),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){const s=document.querySelector(".form"),r=document.querySelector(".icon-img");s.addEventListener("input",t=>{t.target.value.trim()?r.style.fill="#1875FF":r.style.fill=""}),s.addEventListener("submit",t=>{t.preventDefault();let o=t.target["search-text"].value.trim();if(!o){l("Enter some value");return}m(o)})}function v(s){a.error({message:s,position:window.innerWidth<=768?"bottomCenter":"topCenter",transitionIn:"fadeInDown",backgroundColor:"rgb(231, 19, 36)",messageColor:"white",iconColor:"white",messageSize:"16px",class:"toast"})}function l(s){a.info({message:s,position:window.innerWidth<=768?"bottomLeft":"topLeft",transitionIn:"fadeInDown",messageSize:"16px"})}b();
//# sourceMappingURL=index.js.map
