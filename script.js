// --- CONFIGURATION ---
const streamerData = [
    { streamer: "tv_lyx", character: "Salvatore Morales", url: "https://twitch.tv/tv_lyx" }
];

// Ton lien direct Postimg
const myPP = "https://i.postimg.cc/rp7zcCtD/lyx-pp-twitch.jpg";

const staffMembers = [
    { 
        pseudo: "LYX_TV", 
        roles: [
            { name: "Fondateur", color: "#e74c3c" },
            { name: "Développeur", color: "#2ecc71" },
            { name: "Streamer", color: "#9370DB" },
            { name: "Citoyen", color: "#ecf0f1" }
        ] 
    }
];

const playlist = ["https://files.catbox.moe/ze2akz.mp3", "https://files.catbox.moe/cndtub.mp3", "https://files.catbox.moe/u1gdus.mp3"];
const photosV1 = ["https://files.catbox.moe/whueq5.png", "https://files.catbox.moe/su6qae.png", "https://files.catbox.moe/h8edtb.png", "https://files.catbox.moe/n5w76z.png", "https://files.catbox.moe/8ttd47.png", "https://files.catbox.moe/kvfyy2.png"];

let currentTrackIndex = 0;
const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('music-icon');
const slider = document.getElementById('volumeSlider');

// --- LOGIQUE MUSIQUE ---
function loadTrack(index) { if (music) { music.src = playlist[index]; music.load(); } }
window.toggleMusic = function() {
    if (!music) return;
    if (!music.getAttribute('src')) loadTrack(currentTrackIndex);
    if (music.paused) { music.volume = slider ? slider.value : 0.3; music.play().catch(e => console.log("Lecture bloquée")); if(musicIcon) musicIcon.innerText = '⏸'; }
    else { music.pause(); if(musicIcon) musicIcon.innerText = '▶'; }
};
window.nextTrack = function() { currentTrackIndex = (currentTrackIndex + 1) % playlist.length; loadTrack(currentTrackIndex); music.play(); };
window.prevTrack = function() { currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length; loadTrack(currentTrackIndex); music.play(); };
window.changeVolume = function(v) { if (music) music.volume = v; };

// --- LIENS ---
const rulesLinks = { serveur: "https://docs.google.com/document/d/1VKb4eJfoqYuEnPFZy3VIKV6PoWm3KQioFci5E1cw3Xw/edit?usp=sharing", sasp: "https://docs.google.com/document/d/1crPjZrpPJnh5xr65boi8iLPaJLq72QiKrjugdM4gBss/edit?usp=sharing", samr: "https://docs.google.com/document/d/1NX0qZMNN1z72jVv1H4CBPrSq-J1vq3TbG86GYse2ROM/edit?usp=sharing", illegal: "https://docs.google.com/document/d/14vTxocrhfBv-ysWS7h1hYzh0L5YHVKH1nb5oeo1sj_Y/edit?usp=sharing" };
const discordLinks = { general: "https://discord.gg/WcenP4vcjY", illegal: "https://discord.gg/YHCWdwgvk7", sasp: "https://discord.gg/bWyGBhChUX", gouv: "https://discord.gg/wxnurk5ZG7", samr: "https://discord.gg/XHQrEpKBTH", immo: "https://discord.gg/cbtWQpqXVj", pdm: "https://discord.gg/2BXxf5fjTy" };

// --- CONTENU DES PAGES ---
const pageData = {
    lore: `
        <div style="max-width: 850px; margin: 0 auto; line-height: 1.8; text-align: justify; font-family: 'Rajdhani', sans-serif; color: #ececec; padding: 20px;">
            <h2 style="font-family: 'Bebas Neue'; font-size: 60px; color: #46a5e5; letter-spacing: 4px; text-align: center; margin-bottom: 30px; text-shadow: 0 0 15px rgba(70,165,229,0.3);">L'ÉCHO DU MONT CHILIAD</h2>
            <p>Tout a commencé par un mirage doré au début des années 2000, quand des milliards de dollars issus de fonds fédéraux "évaporés" ont fait sortir de terre <strong>Last Paradise</strong>, une enclave de luxe qui n'était en réalité qu'un laboratoire social à ciel ouvert pour une cellule grise d'agents renégats du FIB et de l'IAA. Sous le nom de code <strong>"The Styx"</strong>, ces hommes de l'ombre n'étaient pas de simples investisseurs, mais des architectes du chaos qui ont bâti un empire criminel intouchable, avant d'être officiellement traqués par Washington en 2021.</p>
            <p>Mais alors que les communiqués annonçaient leur fuite, la réalité de 2026 est devenue un cauchemar éveillé : le Gouverneur actuel a instauré un plan de "Renaissance" d'une violence inouïe, asphyxiant les citoyens sous des taxes et une surveillance paranoïaque pour reconstruire une façade de gloire sur le dos d'une population qui lutte pour sa survie.</p>
            <div style="margin: 40px 0; text-align: center; border-top: 1px solid rgba(70,165,229,0.3); border-bottom: 1px solid rgba(70,165,229,0.3); padding: 20px 0;">
                <h3 style="font-family: 'Bebas Neue'; font-size: 35px; color: #e74c3c; margin: 0; letter-spacing: 2px;">"ILS NE SONT JAMAIS PARTIS."</h3>
            </div>
            <p>Pourtant, dans les bas-fonds, cette phrase revient comme un murmure terrifiant que personne n'ose crier. Au nord, autour d'un <strong>Mont Chiliad</strong> bouclé par des restrictions discrètes, l'inquiétude grandit.</p>
            <p>Des convois anonymes s'engouffrent régulièrement dans les entrailles de la montagne sans laisser de trace, laissant planer l'ombre d'un complot qui dépasse l'entendement. Quelque chose s'est réveillé sous leurs pieds, et personne ne sait encore quel rôle il est censé jouer.</p>
            <p style="text-align: center; font-family: 'Bebas Neue'; font-size: 32px; color: #46a5e5; margin-top: 40px; letter-spacing: 1px;">MAINTENANT C'EST À VOUS D'ÉCRIRE VOTRE PROPRE HISTOIRE</p>
        </div>
    `,
    rules: `<h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">RÈGLEMENTS</h2><div style="display: flex; flex-direction: column; gap: 15px; max-width: 800px; margin: 0 auto;"><div style="display:flex; justify-content:space-between; align-items:center; background:rgba(70,165,229,0.1); padding:20px; border-radius:10px; border-left:5px solid #46a5e5;"><span>RÈGLEMENT GÉNÉRAL</span><a href="${rulesLinks.serveur}" target="_blank" style="background:#46a5e5; color:#000; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">CONSULTER</a></div><div style="display:flex; justify-content:space-between; align-items:center; background:rgba(41,128,185,0.1); padding:20px; border-radius:10px; border-left:5px solid #2980b9;"><span>RÈGLEMENT SASP</span><a href="${rulesLinks.sasp}" target="_blank" style="background:#2980b9; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">CONSULTER</a></div><div style="display:flex; justify-content:space-between; align-items:center; background:rgba(231,76,60,0.1); padding:20px; border-radius:10px; border-left:5px solid #e74c3c;"><span>RÈGLEMENT SAMR</span><a href="${rulesLinks.samr}" target="_blank" style="background:#e74c3c; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">CONSULTER</a></div><div style="display:flex; justify-content:space-between; align-items:center; background:rgba(147,112,219,0.1); padding:20px; border-radius:10px; border-left:5px solid #9370DB;"><span>RÈGLEMENT ILLÉGAL</span><a href="${rulesLinks.illegal}" target="_blank" style="background:#9370DB; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">CONSULTER</a></div></div>`,
    keys: `
        <style>
            .keys-container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 80px; max-width: 900px; margin: 0 auto; }
            .key-row { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .key-label { color: #eee; font-size: 18px; font-family: 'Rajdhani'; }
            .key-box { border: 2px solid #46a5e5; color: #46a5e5; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 5px; font-weight: bold; min-width: 25px; text-align: center; }
        </style>
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 40px;">TOUCHES DU SERVEUR</h2>
        <div class="keys-container">
            <div>
                <div class="key-row"><span class="key-label">Se cacher</span> <span class="key-box">A</span></div>
                <div class="key-row"><span class="key-label">Pointer du doigt / Ceinture</span> <span class="key-box">B</span></div>
                <div class="key-row"><span class="key-label">Champs de vision</span> <span class="key-box">C</span></div>
                <div class="key-row"><span class="key-label">S'asseoir</span> <span class="key-box">E</span></div>
                <div class="key-row"><span class="key-label">Croiser les bras</span> <span class="key-box">H</span></div>
                <div class="key-row"><span class="key-label">Tête / Boîte à gants</span> <span class="key-box">K</span></div>
                <div class="key-row"><span class="key-label">Menu ESC</span> <span class="key-box">P</span></div>
                <div class="key-row"><span class="key-label">Chat InGame</span> <span class="key-box">T</span></div>
                <div class="key-row"><span class="key-label">Véhicule / Tomber</span> <span class="key-box">U</span></div>
                <div class="key-row"><span class="key-label">1ère / 3ème personne</span> <span class="key-box">V</span></div>
                <div class="key-row"><span class="key-label">Lever bras / Stop Anim</span> <span class="key-box">X</span></div>
                <div class="key-row"><span class="key-label">Tomber / Se relever</span> <span class="key-box">Y</span></div>
            </div>
            <div>
                <div class="key-row"><span class="key-label">Téléphone</span> <span class="key-box">F1</span></div>
                <div class="key-row"><span class="key-label">Menu animations</span> <span class="key-box">F3</span></div>
                <div class="key-row"><span class="key-label">Menu personnel</span> <span class="key-box">F5</span></div>
                <div class="key-row"><span class="key-label">Menu Job</span> <span class="key-box">F6</span></div>
                <div class="key-row"><span class="key-label">Menu vêtements</span> <span class="key-box">F7</span></div>
                <div class="key-row"><span class="key-label">Portée de la voix</span> <span class="key-box">F11</span></div>
                <div class="key-row"><span class="key-label">Capture Steam</span> <span class="key-box">F12</span></div>
                <div class="key-row"><span class="key-label">Raccourcis inventaire</span> <span class="key-box">1-5</span></div>
                <div class="key-row"><span class="key-label">Interaction</span> <span class="key-box">ALT</span></div>
                <div class="key-row"><span class="key-label">S'accroupir</span> <span class="key-box">CTRL G</span></div>
                <div class="key-row"><span class="key-label">Inventaire</span> <span class="key-box">TAB</span></div>
            </div>
        </div>
    `,
    discord: `<h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">NOS DISCORDS</h2><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; max-width: 1000px; margin: 0 auto;"><a href="${discordLinks.general}" target="_blank" style="text-decoration:none; color:white; background:rgba(88,101,242,0.1); padding:15px; border-radius:10px; border-left:5px solid #5865f2; text-align:center; font-weight:bold;">DISCORD GÉNÉRAL</a><a href="${discordLinks.illegal}" target="_blank" style="text-decoration:none; color:white; background:rgba(147,112,219,0.1); padding:15px; border-radius:10px; border-left:5px solid #9370DB; text-align:center; font-weight:bold;">DISCORD ILLÉGAL</a><a href="${discordLinks.sasp}" target="_blank" style="text-decoration:none; color:white; background:rgba(41,128,185,0.1); padding:15px; border-radius:10px; border-left:5px solid #2980b9; text-align:center; font-weight:bold;">DISCORD SASP</a><a href="${discordLinks.gouv}" target="_blank" style="text-decoration:none; color:white; background:rgba(241,196,15,0.1); padding:15px; border-radius:10px; border-left:5px solid #f1c40f; text-align:center; font-weight:bold;">DISCORD GOUVERNEMENT</a><a href="${discordLinks.samr}" target="_blank" style="text-decoration:none; color:white; background:rgba(231,76,60,0.1); padding:15px; border-radius:10px; border-left:5px solid #e74c3c; text-align:center; font-weight:bold;">DISCORD SAMR</a><a href="${discordLinks.immo}" target="_blank" style="text-decoration:none; color:white; background:rgba(46,204,113,0.1); padding:15px; border-radius:10px; border-left:5px solid #2ecc71; text-align:center; font-weight:bold;">DISCORD IMMOBILIER</a><a href="${discordLinks.pdm}" target="_blank" style="text-decoration:none; color:white; background:rgba(52,152,219,0.1); padding:15px; border-radius:10px; border-left:5px solid #3498db; text-align:center; font-weight:bold;">DISCORD PDM</a></div>`,
    galerie: `<h2>GALERIE</h2><div id="galerie-container" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:15px;"></div>`,

    staff: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 50px;">ADMINISTRATION</h2>
        <div style="display: flex; justify-content: center;">
            ${staffMembers.map(m => `
                <div style="text-align: center; padding: 40px; border-radius: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(70,165,229,0.1); width: 100%; max-width: 500px;">
                    <img src="${myPP}" style="width: 120px; height: 120px; border-radius: 50%; border: 3px solid #46a5e5; margin-bottom: 20px; object-fit: cover; box-shadow: 0 0 20px rgba(70,165,229,0.4);">
                    <div style="font-family: 'Bebas Neue'; font-size: 80px; color: #fff; text-shadow: 0 0 20px rgba(70,165,229,0.6); margin-bottom: 20px;">${m.pseudo}</div>
                    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                        ${m.roles.map(r => `<span style="border: 1px solid ${r.color}; color: ${r.color}; padding: 8px 15px; border-radius: 5px; font-size: 13px; font-weight: bold; text-transform: uppercase; background: ${r.color}11;">${r.name}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `,

    streams: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">NOS STREAMERS</h2>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding-top: 20px;">
            <div style="width: 100%; max-width: 600px; background: rgba(255,255,255,0.03); border: 1px solid rgba(70,165,229,0.1); padding: 30px; border-radius: 15px; display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Rajdhani'; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <img src="${myPP}" style="width: 150px; height: 150px; border-radius: 50%; border: 4px solid #46a5e5; object-fit: cover; margin-bottom: 20px; box-shadow: 0 0 20px rgba(70,165,229,0.3);">
                <div style="margin-bottom: 25px;">
                    <span style="font-family: 'Bebas Neue'; font-size: 45px; color: #fff; letter-spacing: 2px; display: block;">${staffMembers[0].pseudo}</span>
                    <span style="font-size: 20px; color: rgba(255,255,255,0.7);">Incarne <strong style="color: #46a5e5;">Salvatore Morales</strong></span>
                </div>
                <a href="https://twitch.tv/tv_lyx" target="_blank" style="background: #9146FF; color: white; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: bold; font-family: 'Rajdhani'; font-size: 18px; text-transform: uppercase; transition: 0.3s; box-shadow: 0 5px 20px rgba(145, 70, 255, 0.4); letter-spacing: 1px;">Rejoindre le live</a>
            </div>
        </div>
    `,
};

// --- FONCTIONS D'AFFICHAGE ---
window.openView = function(id) {
    const viewer = document.getElementById('viewer');
    const content = document.getElementById('viewer-content');
    if (viewer && content) {
        content.innerHTML = pageData[id] || "Contenu non disponible";
        viewer.classList.add('active');
        if(id === 'galerie') {
            const container = document.getElementById('galerie-container');
            if(container) container.innerHTML = photosV1.map(p => `<img src="${p}" style="width:100%; border-radius:10px;">`).join('');
        }
    }
};

window.closeView = function() {
    const v = document.getElementById('viewer');
    if (v) v.classList.remove('active');
};
