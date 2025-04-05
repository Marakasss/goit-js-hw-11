import{a as y,S as p,i as g}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function v(t){return y.get("https://pixabay.com/api/",{params:{key:"49580099-ba49dcf3c416d0b66883e5025",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100}}).then(i=>i.data.hits).catch(i=>{throw console.error(i),i})}const l=document.querySelector(".gallery");function w(t){const o=t.map(({likes:n,views:e,downloads:r,comments:s,tags:f,largeImageURL:m="/goit-js-hw-11/img/image-not-found.jpg",webformatURL:h="/goit-js-hw-11/img/image-not-found.jpg"})=>`<li class="img-card">
                        <a class="gallery-link" href= "${m}">
                            <img
                            class="gallery-image"
                            src= "${h}"
                            alt= "${f.split(",")[0].trim()}"
                            />
                        </a>
                        <ul class="img-info">
                            <li class="info">
                                <svg class="icon-info" name="like" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-like"></use>
                                </svg>
                                <p>${n}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-eye"></use>
                                </svg>
                                <p>${e}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-dialog"></use>
                                </svg>
                                <p>${s}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-gallery-download"></use>
                                </svg>
                                <p>${r}</p>
                            </li>
                        </ul>
                    </li>`).join("");l.innerHTML=o,d(),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function c(){l.innerHTML=""}function b(t){const o=document.querySelector(".form");o.removeEventListener("input",i),o.addEventListener("input",i);function i(n){t.style.fill=n.target.value.trim()?"#1875FF":""}}function L(t){g.error({message:t,position:window.innerWidth<=768?"bottomCenter":"topCenter",transitionIn:"fadeInDown",backgroundColor:"rgb(231, 19, 36)",messageColor:"white",iconColor:"white",messageSize:"16px",class:"toast"})}function u(t){g.info({message:t,position:window.innerWidth<=768?"bottomLeft":"topLeft",transitionIn:"fadeInDown",messageSize:"16px"})}function S(){const t=document.querySelector(".loader");t.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),t.style.display="block"}function a(){const t=document.querySelector(".loader");t.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),t.style.display="none"}function d(){const t=document.querySelector(".gallery");if(!t){a();return}const o=t.querySelectorAll("img");let i=0;if(o.length===0){a();return}o.forEach(e=>{e.complete&&e.naturalHeight!==0?i++:(e.onload=()=>{i++,n()},e.onerror=()=>{e.src.includes("image-not-found.jpg")||(e.src="/goit-js-hw-11/img/image-not-found.jpg",e.alt="Image not found",e.onerror=null),i++,n()})}),n(),i===o.length&&n();function n(){i===o.length&&a()}}function j(){l.addEventListener("click",t=>{if(t.target.tagName==="use"){const o=t.target.closest("svg"),i=o.nextElementSibling;if(o.getAttribute("name")==="like"){let n=Number(i.textContent);o.style.fill!=="darkblue"?(o.style.fill="darkblue",o.style.transform="scale(1.1)",i.style.color="darkblue",n++):(o.removeAttribute("style"),i.removeAttribute("style"),n--),i.textContent=n}}})}const k=document.querySelector(".form"),I=document.querySelector(".icon-img");function q(){k.addEventListener("submit",t=>{t.preventDefault();let o=t.target["search-text"].value.trim();if(!o){u("Enter some value");return}S(),v(o).then(i=>{if(i.length===0){u(`Sorry, there are no images matching ${o}. Please try again!`),c();return}w(i)}).catch(i=>{L("Something went wrong. Please try again later."),c()}).finally(()=>{d()})})}b(I);q();j();
//# sourceMappingURL=index.js.map
