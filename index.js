import{S as m,i as u,a as h}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const l=document.querySelector(".gallery");function y(e){const t=e.map(({likes:r,views:o,downloads:n,comments:s,tags:g,largeImageURL:d,webformatURL:f})=>`<li class="img-card">
                        <a class="gallery-link" href= "${d}">
                            <img
                            class="gallery-image"
                            src= "${f}"
                            alt= "${g}"
                            />
                        </a>
                        <ul class="img-info">
                            <li class="info">
                                <svg class="icon-info" name="like" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-like"></use>
                                </svg>
                                <p>${r}</p>
                            </li>
                            <li class="info">
                                <svg class="icon-info" width="18" height="18">
                                    <use href="/goit-js-hw-11/img/sprite.svg#icon-eye"></use>
                                </svg>
                                <p>${o}</p>
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
                                <p>${n}</p>
                            </li>
                        </ul>
                    </li>`).join("");l.innerHTML=t,w(),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){l.innerHTML=""}function v(e){const t=document.querySelector(".form");t.removeEventListener("input",i),t.addEventListener("input",i);function i(r){e.style.fill=r.target.value.trim()?"#1875FF":""}}function b(e){u.error({message:e,position:window.innerWidth<=768?"bottomCenter":"topCenter",transitionIn:"fadeInDown",backgroundColor:"rgb(231, 19, 36)",messageColor:"white",iconColor:"white",messageSize:"16px",class:"toast"})}function c(e){u.info({message:e,position:window.innerWidth<=768?"bottomLeft":"topLeft",transitionIn:"fadeInDown",messageSize:"16px"})}function L(){const e=document.querySelector(".loader");e.classList.remove("visually-hidden"),l.classList.add("visually-hidden"),e.style.display="block"}function a(){const e=document.querySelector(".loader");e.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),e.style.display="none"}function w(){const e=document.querySelector(".gallery");if(!e){a();return}const t=e.querySelectorAll("img");let i=0;if(t.length===0){a();return}t.forEach(o=>{o.complete&&o.naturalHeight!==0?i++:(o.onload=()=>{i++,r()},o.onerror=()=>{i++,r()})}),r(),i===t.length&&r();function r(){i===t.length&&a()}}function S(){l.addEventListener("click",e=>{if(e.target.tagName==="use"){const t=e.target.closest("svg"),i=t.nextElementSibling;if(t.getAttribute("name")==="like"){let r=Number(i.textContent);t.style.fill!=="darkblue"?(t.style.fill="darkblue",i.style.color="darkblue",r++):(t.removeAttribute("style"),i.removeAttribute("style"),r--),i.textContent=r}}})}async function k(e){return h.get("https://pixabay.com/api/",{params:{key:"49580099-ba49dcf3c416d0b66883e5025",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:100}}).then(i=>i.data.hits).catch(i=>(console.error(i),removeLoading(),b("Something went wrong. Please try again later."),[]))}const q=document.querySelector(".form"),x=document.querySelector(".icon-img");function I(){q.addEventListener("submit",e=>{e.preventDefault();let t=e.target["search-text"].value.trim();if(!t){c("Enter some value");return}L(),k(t).then(i=>{if(i.length===0){c(`Sorry, there are no images matching ${t}. Please try again!`),p(),a();return}y(i)})})}v(x);I();S();
//# sourceMappingURL=index.js.map
