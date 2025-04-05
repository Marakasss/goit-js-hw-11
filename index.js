import{a as h,S as y,i as u}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();async function p(i){return h.get("https://pixabay.com/api/",{params:{key:"49580099-ba49dcf3c416d0b66883e5025",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100}}).then(e=>e.data.hits).catch(e=>{throw console.error(e),e})}const l=document.querySelector(".gallery");function v(i){const o=i.map(({likes:n,views:t,downloads:s,comments:r,tags:d,largeImageURL:f="/goit-js-hw-11/img/image-not-found.jpg",webformatURL:m="/goit-js-hw-11/img/image-not-found.jpg"})=>`<li class="img-card">
                        <a class="gallery-link" href= "${f}">
                            <img
                            class="gallery-image"
                            src= "${m}"
                            alt= "${d.split(",")[0].trim()}"
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
                                <p>${t}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-dialog"></use>
                                </svg>
                                <p>${r}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-gallery-download"></use>
                                </svg>
                                <p>${s}</p>
                            </li>
                        </ul>
                    </li>`).join("");l.innerHTML=o,g(),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function w(){l.innerHTML=""}function b(i){const o=document.querySelector(".form");o.removeEventListener("input",e),o.addEventListener("input",e);function e(n){i.style.fill=n.target.value.trim()?"#1875FF":""}}function L(i){u.error({message:i,position:window.innerWidth<=768?"bottomCenter":"topCenter",transitionIn:"fadeInDown",backgroundColor:"rgb(231, 19, 36)",messageColor:"white",iconColor:"white",messageSize:"16px",class:"toast"})}function c(i){u.info({message:i,position:window.innerWidth<=768?"bottomLeft":"topLeft",transitionIn:"fadeInDown",messageSize:"16px"})}function S(){const i=document.querySelector(".loader");i.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),i.style.display="block"}function a(){const i=document.querySelector(".loader");i.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),i.style.display="none"}function g(){const i=document.querySelector(".gallery");if(!i){a();return}const o=i.querySelectorAll("img");let e=0;if(o.length===0){a();return}o.forEach(t=>{t.complete&&t.naturalHeight!==0?e++:(t.onload=()=>{e++,n()},t.onerror=()=>{t.src.includes("image-not-found.jpg")||(t.src="/goit-js-hw-11/img/image-not-found.jpg",t.alt="Image not found",t.onerror=null),e++,n()})}),n(),e===o.length&&n();function n(){e===o.length&&a()}}function j(){l.addEventListener("click",i=>{if(i.target.tagName==="use"){const o=i.target.closest("svg"),e=o.nextElementSibling;if(o.getAttribute("name")==="like"){let n=Number(e.textContent);o.style.fill!=="darkblue"?(o.style.fill="darkblue",o.style.transform="scale(1.1)",e.style.color="darkblue",n++):(o.removeAttribute("style"),e.removeAttribute("style"),n--),e.textContent=n}}})}const k=document.querySelector(".form"),I=document.querySelector(".icon-img");function q(){k.addEventListener("submit",i=>{i.preventDefault();let o=i.target["search-text"].value.trim();if(!o){c("Enter some value");return}S(),p(o).then(e=>{if(e.length===0)throw new Error(`Sorry, there are no images matching ${o}. Please try again!`);v(e)}).catch(e=>{e.message.includes("no images")?c(e.message):L("Something went wrong. Please try again later."),w()}).finally(()=>{g()})})}b(I);q();j();
//# sourceMappingURL=index.js.map
