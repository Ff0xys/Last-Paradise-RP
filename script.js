// --- CONFIGURATION ---
const streamerData = [
    { streamer: "Lyx_tv", character: "Salvatore Morales", url: "https://twitch.tv/tv_lyx" }
];

const staffMembers = [
    { 
        pseudo: "LYX_TV", 
        highestRole: "Fondateur", 
        allRoles: [
            { name: "Fondateur", color: "#FF0000" }, // Rouge Vif
            { name: "Développeur", color: "#2ecc71" }, // Vert Dev
            { name: "Streamer", color: "#9b59b6" },    // Violet Streamer
            { name: "Citoyen", color: "#ecf0f1" }      // Blanc Citoyen
        ] 
    }
];

const serverRoles = [
    "Fondateur", "Responsable Staff", "Responsable Légal", 
    "Responsable Illégal", "Gérant Légal", "Gérant Illégal", 
    "Administrateurs", "Modérateurs", "Supports","Supports Test"
];

const playlist = [
    "https://files.catbox.moe/ze2akz.mp3",
    "https://files.catbox.moe/cndtub.mp3",
    "https://files.catbox.moe/u1gdus.mp3"
];

const photosV1 = [
    "https://files.catbox.moe/whueq5.png",
    "https://files.catbox.moe/su6qae.png",
    "https://files.catbox.moe/h8edtb.png",
    "https://files.catbox.moe/n5w76z.png",
    "https://files.catbox.moe/8ttd47.png",
    "https://files.catbox.moe/kvfyy2.png"
];

let currentTrackIndex = 0;

// --- LOGIQUE MUSIQUE CORRIGÉE ---
const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('music-icon');
const slider = document.getElementById('volumeSlider');

function loadTrack(index) { 
    if (music) { 
        music.src = playlist[index]; 
        music.load(); 
    } 
}

if (music && slider) music.volume = slider.value;

window.toggleMusic = function() {
    if (!music) return;
    if (!music.src || music.src === "") loadTrack(currentTrackIndex);
    if (music.paused) { 
        music.volume = slider ? slider.value : 0.3; 
        music.play()
            .then(() => { if(musicIcon) musicIcon.innerText = '⏸'; })
            .catch(e => {
                console.log("Lecture bloquée");
            }); 
    }
    else { 
        music.pause(); 
        if(musicIcon) musicIcon.innerText = '▶'; 
    }
};

window.nextTrack = function() { 
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length; 
    loadTrack(currentTrackIndex); 
    music.play().then(() => { if(musicIcon) musicIcon.innerText = '⏸'; }); 
};

window.prevTrack = function() { 
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length; 
    loadTrack(currentTrackIndex); 
    music.play().then(() => { if(musicIcon) musicIcon.innerText = '⏸'; }); 
};

window.changeVolume = function(v) { 
    if (music) music.volume = v; 
};

// Liens Externes
const rulesLinks = {
    serveur: "https://docs.google.com/document/d/1VKb4eJfoqYuEnPFZy3VIKV6PoWm3KQioFci5E1cw3Xw/edit?usp=sharing",
    sasp: "https://docs.google.com/document/d/1crPjZrpPJnh5xr65boi8iLPaJLq72QiKrjugdM4gBss/edit?usp=sharing",
    samr: "https://docs.google.com/document/d/1NX0qZMNN1z72jVv1H4CBPrSq-J1vq3TbG86GYse2ROM/edit?usp=sharing",
    illegal: "https://docs.google.com/document/d/14vTxocrhfBv-ysWS7h1hYzh0L5YHVKH1nb5oeo1sj_Y/edit?usp=sharing"
};

const discordLinks = {
    general: "https://discord.gg/WcenP4vcjY",
    illegal: "https://discord.gg/YHCWdwgvk7",
    sasp: "https://discord.gg/bWyGBhChUX",
    gouv: "https://discord.gg/wxnurk5ZG7",
    samr: "https://discord.gg/XHQrEpKBTH",
    immo: "https://discord.gg/cbtWQpqXVj",
    pdm: "https://discord.gg/2BXxf5fjTy"
};

const pageData = {
    lore: `
        <div style="max-width: 800px; margin: 0 auto; line-height: 1.7; text-align: justify; font-family: 'Rajdhani', sans-serif;">
            <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; letter-spacing: 3px; text-align: center; margin-bottom: 40px; text-shadow: 0 0 15px rgba(70, 165, 229, 0.4);">
                L'ÉCHO DU MONT CHILIAD
            </h2>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Tout a commencé par un mirage doré au début des années 2000, quand des milliards de dollars issus de fonds fédéraux "évaporés" ont fait sortir de terre <strong>Last Paradise</strong>, une enclave de luxe qui n'était en réalité qu'un laboratoire social à ciel ouvert pour une cellule grise d'agents renégats du FIB et de l'IAA. Sous le nom de code <strong>"The Styx"</strong>, ces hommes de l'ombre n'étaient pas de simples investisseurs, mais des architectes du chaos qui ont bâti un empire criminel intouchable, avant d'être officiellement traqués par Washington en 2021.
            </p>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Mais alors que les communiqués annonçaient leur fuite, la réalité de 2026 est devenue un cauchemar éveillé : le Gouverneur actuel a instauré un plan de "Renaissance" d'une violence inouïe, asphyxiant les citoyens sous des taxes et une surveillance paranoïaque pour reconstruire une façade de gloire sur le dos d'une population qui lutte pour sa survie.
            </p>
            <p style="font-size: 26px; color: #46a5e5; text-align: center; font-family: 'Bebas Neue'; letter-spacing: 2px; margin-bottom: 25px;">"ILS NE SONT JAMAIS PARTIS."</p>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Pourtant, dans les bas-fonds, cette phrase revient comme un murmure terrifiant que personne n'ose crier. Au nord, autour d'un <strong>Mont Chiliad</strong> bouclé par des restrictions discrètes, l'inquiétude grandit.
            </p>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Des convois anonymes s'engouffrent régulièrement dans les entrailles de la montagne sans laisser de trace, laissant planer l'ombre d'un complot qui dépasse l'entendement. Quelque chose s'est réveillé sous leurs pieds, et personne ne sait encore quel rôle il est censé jouer.
            </p>
            <h3 style="font-family: 'Bebas Neue'; font-size: 35px; color: #f1c40f; text-align: center; letter-spacing: 2px;">MAINTENANT C'EST À VOUS D'ÉCRIRE VOTRE PROPRE HISTOIRE</h3>
        </div>
    `,
    rules: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">RÈGLEMENTS DU TERRITOIRE</h2>
        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 750px; margin: 0 auto;">
            <div class="list-item-row" style="border-left: 4px solid #46a5e5; display: flex; justify-content: space-between; align-items: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">
                <div class="text-info">
                    <strong style="color: #46a5e5; font-size: 18px; letter-spacing: 1px;">RÈGLEMENT GÉNÉRAL</strong><br>
                    <span style="color: rgba(255,255,255,0.7);">Bases fondamentales et vie en communauté.</span>
                </div>
                <a href="${rulesLinks.serveur}" target="_blank" class="action-btn" style="background: #46a5e5; padding: 12px 25px; border-radius: 5px; color: #000; font-weight: 800; text-decoration: none;">CONSULTER</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #2980b9; display: flex; justify-content: space-between; align-items: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">
                <div class="text-info">
                    <strong style="color: #2980b9; font-size: 18px; letter-spacing: 1px;">RÈGLEMENT SASP</strong><br>
                    <span style="color: rgba(255,255,255,0.7);">Code de déontologie des forces de l'ordre.</span>
                </div>
                <a href="${rulesLinks.sasp}" target="_blank" class="action-btn" style="background: #2980b9; padding: 12px 25px; border-radius: 5px; color: #fff; font-weight: 800; text-decoration: none;">CONSULTER</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #e74c3c; display: flex; justify-content: space-between; align-items: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">
                <div class="text-info">
                    <strong style="color: #e74c3c; font-size: 18px; letter-spacing: 1px;">RÈGLEMENT SAMR</strong><br>
                    <span style="color: rgba(255,255,255,0.7);">Protocoles d'urgence et éthique médicale.</span>
                </div>
                <a href="${rulesLinks.samr}" target="_blank" class="action-btn" style="background: #e74c3c; padding: 12px 25px; border-radius: 5px; color: #fff; font-weight: 800; text-decoration: none;">CONSULTER</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #9370DB; display: flex; justify-content: space-between; align-items: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">
                <div class="text-info">
                    <strong style="color: #9370DB; font-size: 18px; letter-spacing: 1px;">RÈGLEMENT ILLÉGAL</strong><br>
                    <span style="color: rgba(255,255,255,0.7);">Règles concernant les activités criminelles.</span>
                </div>
                <a href="${rulesLinks.illegal}" target="_blank" class="action-btn" style="background: #9370DB; padding: 12px 25px; border-radius: 5px; color: #fff; font-weight: 800; text-decoration: none;">CONSULTER</a>
            </div>
        </div>
    `,
    keys: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px; letter-spacing: 2px;">TOUCHES DU SERVEUR</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto;">
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <div class="key-item"><span>Se cacher</span><kbd>A</kbd></div>
                <div class="key-item"><span>Pointer du doigt / Ceinture</span><kbd>B</kbd></div>
                <div class="key-item"><span>Champs de vision</span><kbd>C</kbd></div>
                <div class="key-item"><span>S'asseoir</span><kbd>E</kbd></div>
                <div class="key-item"><span>Croiser les bras</span><kbd>H</kbd></div>
                <div class="key-item"><span>Tête / Boîte à gants</span><kbd>K</kbd></div>
                <div class="key-item"><span>Menu ESC</span><kbd>P</kbd></div>
                <div class="key-item"><span>Chat InGame</span><kbd>T</kbd></div>
                <div class="key-item"><span>Véhicule / Tomber</span><kbd>U</kbd></div>
                <div class="key-item"><span>1ère / 3ème personne</span><kbd>V</kbd></div>
                <div class="key-item"><span>Lever bras / Stop Anim</span><kbd>X</kbd></div>
                <div class="key-item"><span>Tomber / Se relever</span><kbd>Y</kbd></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <div class="key-item"><span>Téléphone</span><kbd>F1</kbd></div>
                <div class="key-item"><span>Menu animations</span><kbd>F3</kbd></div>
                <div class="key-item"><span>Menu personnel (Licences...)</span><kbd>F5</kbd></div>
                <div class="key-item"><span>Menu Job</span><kbd>F6</kbd></div>
                <div class="key-item"><span>Menu vêtements</span><kbd>F7</kbd></div>
                <div class="key-item"><span>Portée de la voix</span><kbd>F11</kbd></div>
                <div class="key-item"><span>Capture Steam</span><kbd>F12</kbd></div>
                <div class="key-item"><span>Raccourcis inventaire</span><kbd>1 - 5</kbd></div>
                <div class="key-item"><span>Interaction</span><kbd>ALT</kbd></div>
                <div class="key-item"><span>S'accroupir</span><kbd>CTRL G</kbd></div>
                <div class="key-item"><span>Inventaire</span><kbd>TAB</kbd></div>
            </div>
        </div>
    `,
    discord: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px; letter-spacing: 2px;">NOS DISCORDS</h2>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 800px; margin: 0 auto;">
            <div class="list-item-row" style="border-left: 4px solid #5865F2; background: rgba(88,101,242,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD GÉNÉRAL</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Le cœur de la communauté et les annonces.</span>
                </div>
                <a href="${discordLinks.general}" target="_blank" class="action-btn" style="background: #5865F2; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #2980b9; background: rgba(41,128,185,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD SASP</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Recrutements et informations forces de l'ordre.</span>
                </div>
                <a href="${discordLinks.sasp}" target="_blank" class="action-btn" style="background: #2980b9; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #e74c3c; background: rgba(231,76,60,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD SAMR</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Protocoles et recrutements médicaux.</span>
                </div>
                <a href="${discordLinks.samr}" target="_blank" class="action-btn" style="background: #e74c3c; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #9370DB; background: rgba(147,112,219,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD ILLÉGAL</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Gestion des dossiers et activités criminelles.</span>
                </div>
                <a href="${discordLinks.illegal}" target="_blank" class="action-btn" style="background: #9370DB; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #f1c40f; background: rgba(241,196,15,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD GOUVERNEMENT</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Justice et services publics de l'État.</span>
                </div>
                <a href="${discordLinks.gouv}" target="_blank" class="action-btn" style="background: #f1c40f; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: #000; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #27ae60; background: rgba(39,174,96,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD IMMOBILIER</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Gestion des propriétés (Dynasty 8).</span>
                </div>
                <a href="${discordLinks.immo}" target="_blank" class="action-btn" style="background: #27ae60; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-left: 4px solid #e67e22; background: rgba(230,126,34,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; border-radius: 5px;">
                <div class="text-info">
                    <strong style="font-size: 20px; color: #fff;">DISCORD PDM</strong><br>
                    <span style="color: rgba(255,255,255,0.6); font-size: 14px;">Vente de véhicules et catalogues.</span>
                </div>
                <a href="${discordLinks.pdm}" target="_blank" class="action-btn" style="background: #e67e22; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px;">REJOINDRE</a>
            </div>
        </div>
    `,
    paradise: `<h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">REJOINDRE LAST PARADISE</h2><div style="display: flex; flex-direction: column; gap: 15px; max-width: 800px; margin: 0 auto;"><div onclick="navigator.clipboard.writeText('connect lastparadise.fr'); alert('Adresse copiée !');" style="background: #000; padding: 20px; border-radius: 8px; border: 2px solid #46a5e5; text-align: center; cursor: pointer;"><code style="color: #46a5e5; font-size: 24px; font-weight: bold;">connect lastparadise.fr</code><p style="color: white; font-size: 12px; margin-top: 5px;">CLIQUEZ POUR COPIER (F8 ensuite)</p></div></div>`,
    staff: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px; letter-spacing: 2px;">L'ÉQUIPE ADMINISTRATIVE</h2>
        <div id="roles-container" style="display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto;"></div>
    `,
    streams: `<h2>DIFFUSIONS EN DIRECT</h2><div id="stream-list"></div>`,
    galerie: `<h2>ARCHIVES LAST PARADISE V1</h2><div id="galerie-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; padding: 20px 0;"></div>`,
    event: `<h2>ÉVÉNEMENTS À VENIR</h2><p style="text-align:center;">Aucun événement prévu pour le moment.</p>`
};

// --- LOGIQUE D'AFFICHAGE ---
window.openView = function(id) {
    const viewer = document.getElementById('viewer');
    const content = document.getElementById('viewer-content');
    if (!viewer || !content || !pageData[id]) return;
    
    content.innerHTML = pageData[id];
    viewer.style.display = 'block';

    if (id === 'galerie') {
        const container = document.getElementById('galerie-container');
        photosV1.forEach((url, index) => {
            container.innerHTML += `<div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);"><img src="${url}" style="width: 100%; height: 180px; object-fit: cover; display: block;"><div style="background: rgba(0,0,0,0.5); padding: 5px; text-align: center; font-size: 12px; color: #46a5e5;">SOUVENIR V1 #${index + 1}</div></div>`;
        });
    }

    if (id === 'staff') {
        const container = document.getElementById('roles-container');
        const colors = {
            "Fondateur": "#FF0000",
            "Responsable Staff": "#e67e22",
            "Responsable Légal": "#e67e22",
            "Responsable Illégal": "#e67e22",
            "Gérant Légal": "#3498db",
            "Gérant Illégal": "#3498db",
            "Administrateurs": "#2ecc71",
            "Modérateurs": "#2ecc71",
            "Supports": "#95a5a6",
            "Supports Test": "#95a5a6"
        };

        serverRoles.forEach(roleName => {
            const roleId = roleName.replace(/\s/g, '');
            const member = staffMembers.find(m => m.highestRole === roleName);
            const roleColor = colors[roleName] || "#46a5e5";
            
            let memberHtml = '';
            if (member) {
                memberHtml = `
                    <div id="pseudo-${roleId}" class="pseudo-reveal" onclick="toggleSubRoles('${roleId}')" style="display:none; cursor:pointer; margin-top:10px; font-family: 'Bebas Neue'; font-size: 24px; color: #fff; padding-left: 20px;">
                        └ ${member.pseudo}
                    </div>
                    <div id="subroles-${roleId}" class="subroles-list" style="display:none; flex-wrap: wrap; gap: 8px; margin-left: 40px; margin-top: 10px;">
                        ${member.allRoles.map(r => `
                            <div style="background: rgba(0,0,0,0.3); border: 1px solid ${r.color}; color: ${r.color}; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                                ${r.name}
                            </div>
                        `).join('')}
                    </div>`;
            }

            const roleDiv = document.createElement('div');
            roleDiv.className = "role-item";
            roleDiv.style = "margin-bottom: 5px; background: rgba(255,255,255,0.02); border-radius: 5px; padding: 10px;";
            roleDiv.innerHTML = `
                <div class="role-header" onclick="togglePseudo('${roleId}')" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; border-left: 4px solid ${roleColor}; padding-left: 15px;">
                    <span style="font-family: 'Bebas Neue'; font-size: 22px; color: ${roleColor}; letter-spacing: 1px;">${roleName.toUpperCase()}</span>
                    <span class="indicator" style="color: ${roleColor};">${member ? '▼' : '○'}</span>
                </div>
                ${memberHtml}`;
            container.appendChild(roleDiv);
        });
    }

    if (id === 'streams') {
        const list = document.getElementById('stream-list');
        const searchInput = document.createElement('input');
        searchInput.type = 'text'; searchInput.placeholder = 'Rechercher un streamer...';
        searchInput.style = "width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 5px; border: 1px solid #46a5e5; background: rgba(0,0,0,0.6); color: white;";
        const resContainer = document.createElement('div');
        list.appendChild(searchInput); list.appendChild(resContainer);

        const render = (f = "") => {
            resContainer.innerHTML = "";
            [...streamerData].sort((a,b)=>a.streamer.localeCompare(b.streamer)).forEach(s => {
                if (s.streamer.toLowerCase().includes(f.toLowerCase()) || s.character.toLowerCase().includes(f.toLowerCase())) {
                    resContainer.innerHTML += `
                    <div class="list-item-row" style="border-left: 4px solid #6441a5; background: rgba(100,65,165,0.05); display: flex; justify-content: space-between; align-items: center; padding: 20px; margin-bottom: 10px; border-radius: 5px;">
                        <div class="text-info">
                            <strong style="font-size: 22px; color: #fff;">${s.streamer}</strong><br>
                            <span style="color: rgba(255,255,255,0.6); font-size: 16px;">Incarne &nbsp;&nbsp; : &nbsp;&nbsp; <b style="color: #46a5e5;">${s.character}</b></span>
                        </div>
                        <a href="${s.url}" target="_blank" class="action-btn" style="background: #6441a5; padding: 12px 30px; border-radius: 4px; text-decoration: none; color: white; font-weight: 900; letter-spacing: 1px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">TWITCH</a>
                    </div>`;
                }
            });
        };
        searchInput.addEventListener('input', (e) => render(e.target.value));
        render();
    }
}

window.togglePseudo = function(id) { const el = document.getElementById('pseudo-' + id); if (el) el.style.display = (el.style.display === 'none') ? 'block' : 'none'; }
window.toggleSubRoles = function(id) { const el = document.getElementById('subroles-' + id); if (el) el.style.display = (el.style.display === 'none') ? 'flex' : 'none'; }
window.closeView = function() { document.getElementById('viewer').style.display = 'none'; }
