(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();const c=[{store:"台北中山旗艦店",phone:"電話：(02)000-1234",hours:"營業時間：10:00-21:00",address:"地址：台北市中山區南京東路25巷2-1號",photo:"../assets/image/store-1.png",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4636138459286!2d121.53300454855906!3d25.0522709805177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdf92494d29%3A0xd908a8a881f73476!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuInmrrUyNeiZnw!5e0!3m2!1szh-TW!2stw!4v1689689324255!5m2!1szh-TW!2stw"},{store:"台北綠園店",phone:"電話：(02)000-2345",hours:"營業時間：10:00-21:00",address:"地址：台北市中正區復興南路 132-1 號",photo:"../assets/image/store-2.png",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.615088930526!2d121.54113651123167!3d25.047133437669444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abdbf61946df%3A0x3c99fa1b2467da21!2z5b6p6IiI5Y2X6Lev!5e0!3m2!1szh-TW!2stw!4v1689738423666!5m2!1szh-TW!2stw"},{store:"台中清水旗艦店",phone:"電話：(02)000-1234",hours:"營業時間：10:00-21:00",address:"地址：台中市清水區經南一路 23 號 8 樓",photo:"../assets/image/store-3.png",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2078.585536393451!2d120.70044460975465!3d24.21803310729417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917660c1fff99%3A0xd921b3953d98ae27!2zNDI35Y-w5Lit5biC5r2t5a2Q5Y2A5Y2X5LiA6Lev!5e0!3m2!1szh-TW!2stw!4v1689738558821!5m2!1szh-TW!2stw"},{store:"高雄中正形象店",phone:"電話：(07)000-2345",hours:"營業時間：10:00-21:00",address:"地址：高雄市苓雅區中正路 38 號 12 樓",photo:"../assets/image/store-4.png",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7639136856073!2d120.338210411173!3d22.62528963095086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04b492b36c93%3A0xde28107e320c1921!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A5Lit5q2j5LiA6LevMzjomZ8!5e0!3m2!1szh-TW!2stw!4v1689751386260!5m2!1szh-TW!2stw"},{store:"高雄夢時代店",phone:"電話：(07)000-1234",hours:"營業時間：10:00-21:00",address:"地址：高雄市前鎮區中華一路 63 號 6 樓",photo:"../assets/image/store-5.png",map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.641781355878!2d120.287666411174!3d22.667140829412258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05aebd7519bb%3A0x53dcd3769d59162d!2zODA06auY6ZuE5biC6byT5bGx5Y2A5Lit6I-v5LiA6LevNjPomZ8!5e0!3m2!1szh-TW!2stw!4v1689738723761!5m2!1szh-TW!2stw"}],n=document.querySelectorAll("#locationDropdown");let r=document.getElementById("locationContent");n.forEach(a=>{a.addEventListener("change",o=>{const l=o.target.value;let e="";l===""?e=d():c.forEach(s=>{s.address.slice(3,6)===l&&(e+=p(s))}),r.innerHTML=e})});function d(){return`<div id="locationContent" class="location-content d-flex f-wrap gap-24">
    <div class="location-card">
        <img class="location-photo" src="C:/Users/yuanc/Documents/00_Code/六角_切版班2023/01_主線/week04/Glass-Web/assets/image/store-1.png" alt="台北中山旗艦店">
        <p class="location-title fz-24">台北中山旗艦店</p>
        <ul class="location-detail fz-20">
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    phone
                </span>
                <p>電話：(02)000-1234</p>
            </li>
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    schedule
                </span>
                <p>營業時間：10:00-21:00</p>
            </li>
            <li class="d-flex f-aib"><span class="material-icons-outlined">
                    place
                </span>
                <p>地址：台北市中山區南京東路25巷2-1號</p>
            </li>
        </ul>
        <a href="store-台北中山旗艦店.html" class="btn-store ta-center d-block bg-black fc-white"
            type="button">詳細資訊</a>
    </div>
    <div class="location-card">
        <img class="location-photo" src="../assets/image/store-2.png" alt="台北綠園店">
        <p class="location-title fz-24">台北綠園店</p>
        <ul class="location-detail fz-20">
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    phone
                </span>
                <p>電話：(02)000-2345</p>
            </li>
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    schedule
                </span>
                <p>營業時間：10:00-21:00</p>
            </li>
            <li class="d-flex f-aib"><span class="material-icons-outlined">
                    place
                </span>
                <p>地址：台北市中正區復興南路 132-1 號</p>
            </li>
        </ul>
        <a href="#" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
    </div>
    <div class="location-card">
        <img class="location-photo" src="../assets/image/store-3.png" alt="台中清水旗艦店">
        <p class="location-title fz-24">台中清水旗艦店</p>
        <ul class="location-detail fz-20">
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    phone
                </span>
                <p>電話：(02)000-1234</p>
            </li>
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    schedule
                </span>
                <p>營業時間：10:00-21:00</p>
            </li>
            <li class="d-flex f-aib"><span class="material-icons-outlined">
                    place
                </span>
                <p>地址：台中市清水區經南一路 23 號 8 樓</p>
            </li>
        </ul>
        <a href="#" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
    </div>
    <div class="location-card">
        <img class="location-photo" src="../assets/image/store-4.png" alt="高雄中正形象店">
        <p class="location-title fz-24">高雄中正形象店</p>
        <ul class="location-detail fz-20">
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    phone
                </span>
                <p>電話：(07)000-2345</p>
            </li>
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    schedule
                </span>
                <p>營業時間：10:00-21:00</p>
            </li>
            <li class="d-flex f-aib"><span class="material-icons-outlined">
                    place
                </span>
                <p>地址：高雄市苓雅區中正路 38 號 12 樓</p>
            </li>
        </ul>
        <a href="#" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
    </div>
    <div class="location-card">
        <img class="location-photo" src="../assets/image/store-5.png" alt="高雄夢時代店">
        <p class="location-title fz-24">高雄夢時代店</p>
        <ul class="location-detail fz-20">
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    phone
                </span>
                <p>電話：(07)000-1234</p>
            </li>
            <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                    schedule
                </span>
                <p>營業時間：10:00-21:00</p>
            </li>
            <li class="d-flex f-aib"><span class="material-icons-outlined">
                    place
                </span>
                <p>地址：高雄市前鎮區中華一路 63 號 6 樓</p>
            </li>
        </ul>
        <a href="#" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
    </div>
  </div>`}function p(a){return`<div class="location-card">
    <img class="location-photo" src="${a.photo}" alt="${a.store}">
    <p class="location-title fz-24">${a.store}</p>
    <ul class="location-detail fz-20">
        <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                phone
            </span>
            <p>${a.phone}</p>
        </li>
        <li class="mb-8 d-flex f-aib"><span class="material-icons-outlined">
                schedule
            </span>
            <p>${a.hours}</p>
        </li>
        <li class="d-flex f-aib"><span class="material-icons-outlined">
                place
            </span>
            <p>${a.address}</p>
        </li>
    </ul>
    <a href="store-台北中山旗艦店.html" class="btn-store ta-center d-block bg-black fc-white" type="button">詳細資訊</a>
  </div>`}const m=document.querySelectorAll("#storeDropdown"),f=document.getElementById("storePhoto"),u=document.getElementById("storeTitle"),b=document.getElementById("storePhone"),h=document.getElementById("storeHours"),g=document.getElementById("storeAddress"),w=document.querySelector("iframe");m.forEach(a=>{a.addEventListener("change",o=>{const l=o.target.value;c.forEach(e=>{l===e.store&&(f.style.backgroundImage=`url(${e.photo})`,u.textContent=e.store,b.textContent=e.phone,h.textContent=e.hours,g.textContent=e.address,w.setAttribute("src",`${e.map}`))})})});
