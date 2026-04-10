// --- CONFIGURATION ---
const streamerData = [
    { streamer: "Lyx_tv", character: "Salvatore Morales", url: "https://twitch.tv/tv_lyx" }
];

const staffMembers = [
    { 
        pseudo: "LYX_TV", 
        highestRole: "Fondateur", 
        allRoles: [
            { name: "Fondateur", color: "#e74c3c" },
            { name: "Développeur", color: "#2980b9" },
            { name: "Streamer", color: "#9370DB" }, 
            { name: "Citoyen", color: "#ecf0f1" }
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
let currentTrackIndex = 0;

// Liens Google Docs
const rulesLinks = {
    serveur: "https://docs.google.com/document/d/1VKb4eJfoqYuEnPFZy3VIKV6PoWm3KQioFci5E1cw3Xw/edit?usp=sharing",
    sasp: "https://docs.google.com/document/d/1crPjZrpPJnh5xr65boi8iLPaJLq72QiKrjugdM4gBss/edit?usp=sharing",
    samr: "https://docs.google.com/document/d/1NX0qZMNN1z72jVv1H4CBPrSq-J1vq3TbG86GYse2ROM/edit?usp=sharing",
    illegal: "https://docs.google.com/document/d/14vTxocrhfBv-ysWS7h1hYzh0L5YHVKH1nb5oeo1sj_Y/edit?usp=sharing"
};

const pageData = {
    lore: `
        <div style="max-width: 800px; margin: 0 auto; line-height: 1.7; text-align: justify; font-family: 'Rajdhani', sans-serif;">
            <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; letter-spacing: 3px; text-align: center; margin-bottom: 40px; text-shadow: 0 0 15px rgba(70, 165, 229, 0.4);">
                L'ÉCHO DU CHILIAD : LA FIN DU MIRAGE
            </h2>
            
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Tout a commencé par un mirage doré au début des années 2000, quand des milliards de dollars issus de fonds fédéraux "évaporés" ont fait sortir de terre <strong>Last Paradise</strong>, une enclave de luxe qui n'était en réalité qu'un laboratoire social à ciel ouvert pour une cellule grise d'agents renégats du FIB et de l'IAA. Sous le nom de code <strong>"The Styx"</strong>, ces hommes de l'ombre n'étaient pas de simples investisseurs, mais des architectes du chaos qui ont bâti un empire criminel intouchable, avant d'être officiellement traqués par Washington en 2021.
            </p>

            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Mais alors que les communiqués annonçaient leur fuite, la réalité de 2026 est devenue un cauchemar éveillé : le Gouverneur actuel a instauré un plan de "Renaissance" d'une violence inouïe, asphyxiant les citoyens sous des taxes et une surveillance paranoïaque pour reconstruire une façade de gloire sur le dos d'une population qui lutte pour sa survie.
            </p>

            <div style="border-left: 4px solid #46a5e5; padding: 15px 25px; background: rgba(70, 165, 229, 0.05); margin: 35px 0;">
                <span style="font-style: italic; color: #46a5e5; font-size: 24px; font-weight: 700; display: block; text-align: center;">
                    "Ils ne sont jamais partis."
                </span>
            </div>

            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Pourtant, dans les bas-fonds, cette phrase revient comme un murmure terrifiant que personne n'ose crier. Au nord, autour d'un <strong>Mont Chiliad</strong> bouclé par des restrictions discrètes, l'inquiétude grandit. Des témoins racontent avoir aperçu, dans la pénombre des sentiers escarpés, des silhouettes de miliciens lourdement armés et dépourvus de tout insigne officiel. 
            </p>

            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Des convois anonymes s'engouffrent régulièrement dans les entrailles de la montagne sans laisser de trace, laissant planer l'ombre d'un complot qui dépasse l'entendement. Les services publics tentent de rester proches des citoyens, mais en interne, le doute s'installe. Entre manque d'informations et pression constante, les agents eux-mêmes peinent à comprendre l'ampleur réelle de la situation ou l'identité de ceux qu'ils servent véritablement.
            </p>

            <p style="font-size: 20px; color: #fff; font-weight: 500; margin-top: 40px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px dashed rgba(70, 165, 229, 0.3);">
                Aujourd'hui, <strong>Los Santos</strong> vit dans un équilibre fragile : au sud, la méfiance envers le système et l'asphyxie économique ; au nord, la peur d'un danger mal identifié nourri par les rumeurs d'un Consortium qui aurait simplement changé de stratégie. Coincés entre ces deux réalités, les habitants avancent avec une seule certitude : <strong>quelque chose s'est réveillé sous leurs pieds, et personne ne sait encore quel rôle il est censé jouer dans ce qui arrive.</strong>
            </p>

            <div style="text-align: center; margin-top: 60px;">
                <span style="font-family: 'Bebas Neue'; font-size: 32px; color: #46a5e5; border: 2px solid #46a5e5; padding: 12px 35px; border-radius: 4px; text-transform: uppercase; letter-spacing: 2px;">
                    Écrivez votre propre histoire
                </span>
            </div>
        </div>
    `,
    rules: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">RÈGLEMENTS DE LA CITÉ</h2>
        <div style="display: flex; flex-direction: column; gap: 15px; max-width: 700px; margin: 0 auto;">
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid #46a5e5;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="color: #46a5e5; font-weight: bold; font-size: 18px; text-transform: uppercase;">RÈGLEMENT GÉNÉRAL</span>
                    <span style="color: rgba(255,255,255,0.7); font-size: 14px;">Bases fondamentales du serveur</span>
                </div>
                <a href="${rulesLinks.serveur}" target="_blank" style="background: #46a5e5; color: black; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s; text-transform: uppercase;">Lire le doc</a>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid #2980b9;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="color: #2980b9; font-weight: bold; font-size: 18px; text-transform: uppercase;">RÈGLEMENT SASP</span>
                    <span style="color: rgba(255,255,255,0.7); font-size: 14px;">Code de conduite des forces de l'ordre</span>
                </div>
                <a href="${rulesLinks.sasp}" target="_blank" style="background: #2980b9; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s; text-transform: uppercase;">Lire le doc</a>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid #e74c3c;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="color: #e74c3c; font-weight: bold; font-size: 18px; text-transform: uppercase;">RÈGLEMENT SAMR</span>
                    <span style="color: rgba(255,255,255,0.7); font-size: 14px;">Protocoles médicaux et secours</span>
                </div>
                <a href="${rulesLinks.samr}" target="_blank" style="background: #e74c3c; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s; text-transform: uppercase;">Lire le doc</a>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid #9370DB;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                    <span style="color: #9370DB; font-weight: bold; font-size: 18px; text-transform: uppercase;">RÈGLEMENT ILLÉGAL</span>
                    <span style="color: rgba(255,255,255,0.7); font-size: 14px;">Activités et groupes criminels</span>
                </div>
                <a href="${rulesLinks.illegal}" target="_blank" style="background: #9370DB; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s; text-transform: uppercase;">Lire le doc</a>
            </div>
        </div>
    `,
    keys: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">TOUCHES DU SERVEUR</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; max-width: 900px; margin: 0 auto; font-family: 'Rajdhani';">
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="key-item"><span>Se cacher</span><kbd>A</kbd></div>
                <div class="key-item"><span>Pointer / Ceinture</span><kbd>B</kbd></div>
                <div class="key-item"><span>Champs de vision</span><kbd>C</kbd></div>
                <div class="key-item"><span>S'asseoir</span><kbd>E</kbd></div>
                <div class="key-item"><span>Croiser les bras</span><kbd>H</kbd></div>
                <div class="key-item"><span>Tête / Boîte à gants</span><kbd>K</kbd></div>
                <div class="key-item"><span>Menu ESC</span><kbd>P</kbd></div>
                <div class="key-item"><span>Chat InGame</span><kbd>T</kbd></div>
                <div class="key-item"><span>Véhicule / Tomber</span><kbd>U</kbd></div>
                <div class="key-item"><span>Vue (1ère/3ème)</span><kbd>V</kbd></div>
                <div class="key-item"><span>Lever bras / Stop Anim</span><kbd>X</kbd></div>
                <div class="key-item"><span>Tomber / Se relever</span><kbd>Y</kbd></div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="key-item"><span>Téléphone</span><kbd>F1</kbd></div>
                <div class="key-item"><span>Menu Animations</span><kbd>F3</kbd></div>
                <div class="key-item"><span>Menu Personnel</span><kbd>F5</kbd></div>
                <div class="key-item"><span>Menu Job</span><kbd>F6</kbd></div>
                <div class="key-item"><span>Menu Vêtements</span><kbd>F7</kbd></div>
                <div class="key-item"><span>Portée de la voix</span><kbd>F11</kbd></div>
                <div class="key-item"><span>Capture Steam</span><kbd>F12</kbd></div>
                <div class="key-item"><span>Inventaire</span><kbd>TAB</kbd></div>
                <div class="key-item"><span>Interaction</span><kbd>ALT</kbd></div>
                <div class="key-item"><span>S'accroupir</span><kbd>CTRL G</kbd></div>
                <div class="key-item"><span>Raccourcis Inventaire</span><kbd>1-5</kbd></div>
            </div>
        </div>
        <style>
            .key-item { background: rgba(0,0,0,0.4); padding: 12px; border-radius: 6px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center; }
            .key-item kbd { background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold; min-width: 30px; text-align: center; }
        </style>
    `,
    staff: `<h2>L'ÉQUIPE ADMINISTRATIVE</h2><div id="roles-container"></div>`,
    streams: `<h2>DIFFUSIONS EN DIRECT</h2><div id="stream-list"></div>`,
    paradise: `<h2>REJOINDRE LA CITÉ</h2><div style="text-align: center;"><p>Appuyez sur F8 et collez :</p><br><code style="background: #000; padding: 15px; color: #46a5e5; border-radius: 5px; font-size: 20px; border: 1px solid #46a5e5;">connect lastparadise.fr</code></div>`,
    galerie: `<h2>GALERIE DE LA VILLE</h2><p style="text-align:center;">Bientôt disponible...</p>`,
    event: `<h2>ÉVÉNEMENTS À VENIR</h2><p style="text-align:center;">Aucun événement prévu pour le moment.</p>`
};

// --- LOGIQUE D'AFFICHAGE ---
function openView(id) {
    const viewer = document.getElementById('viewer');
    const content = document.getElementById('viewer-content');
    if (!pageData[id]) return;
    content.innerHTML = pageData[id];
    viewer.style.display = 'block';

    if (id === 'staff') {
        const container = document.getElementById('roles-container');
        container.innerHTML = "";
        serverRoles.forEach(roleName => {
            const roleId = roleName.replace(/\s/g, '');
            const member = staffMembers.find(m => m.highestRole === roleName);
            let memberHtml = '';
            if (member) {
                memberHtml = `
                    <div id="pseudo-${roleId}" class="pseudo-reveal" onclick="toggleSubRoles('${roleId}')" style="display:none; cursor:pointer; margin-top:10px;">└ ${member.pseudo}</div>
                    <div id="subroles-${roleId}" class="subroles-list" style="display:none; flex-direction: column; gap: 8px; margin-left: 40px; margin-top: 10px;">
                        ${member.allRoles.map(r => `<div class="subrole-badge"><span style="background:${r.color}"></span>${r.name.toUpperCase()}</div>`).join('')}
                    </div>`;
            }
            const roleDiv = document.createElement('div');
            roleDiv.className = "role-item";
            roleDiv.innerHTML = `<div class="role-header" onclick="togglePseudo('${roleId}')"><span>${roleName.toUpperCase()}</span><span class="indicator">${member ? '▼' : '○'}</span></div>${memberHtml}`;
            container.appendChild(roleDiv);
        });
    }

    if (id === 'streams') {
        const list = document.getElementById('stream-list');
        list.innerHTML = ""; 
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Rechercher un streamer...';
        searchInput.style = "width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 5px; border: 1px solid #46a5e5; background: rgba(0,0,0,0.6); color: white; font-family: 'Rajdhani';";
        const resContainer = document.createElement('div');
        list.appendChild(searchInput); list.appendChild(resContainer);

        const render = (f = "") => {
            resContainer.innerHTML = "";
            [...streamerData].sort((a,b)=>a.streamer.localeCompare(b.streamer)).forEach(s => {
                if (s.streamer.toLowerCase().includes(f.toLowerCase()) || s.character.toLowerCase().includes(f.toLowerCase())) {
                    resContainer.innerHTML += `
                        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin-bottom: 10px; border: 1px solid rgba(70, 165, 229, 0.2);">
                            <div style="display: flex; flex-direction: column; gap: 4px;">
                                <span style="color: #46a5e5; font-weight: bold; font-size: 18px; text-transform: uppercase;">${s.streamer}</span>
                                <span style="color: rgba(255,255,255,0.7); font-size: 14px;">Incarne : ${s.character}</span>
                            </div>
                            <a href="${s.url}" target="_blank" style="background: #6441a5; color: white; padding: 8px 15px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s;">TWITCH</a>
                        </div>`;
                }
            });
        };
        searchInput.addEventListener('input', (e) => render(e.target.value));
        render();
    }
}

function togglePseudo(id) { const el = document.getElementById('pseudo-' + id); if (el) el.style.display = (el.style.display === 'none') ? 'block' : 'none'; }
function toggleSubRoles(id) { const el = document.getElementById('subroles-' + id); if (el) el.style.display = (el.style.display === 'none') ? 'flex' : 'none'; }
function closeView() { document.getElementById('viewer').style.display = 'none'; }

// --- LOGIQUE MUSIQUE ---
const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('music-icon');
const slider = document.getElementById('volumeSlider');

function loadTrack(index) { if (music) { music.src = playlist[index]; music.load(); } }
function toggleMusic() {
    if (!music) return;
    if (!music.getAttribute('src')) loadTrack(currentTrackIndex);
    if (music.paused) { music.volume = slider ? slider.value : 0.3; music.play(); musicIcon.innerText = '⏸'; }
    else { music.pause(); musicIcon.innerText = '▶'; }
}
function nextTrack() { currentTrackIndex = (currentTrackIndex + 1) % playlist.length; loadTrack(currentTrackIndex); music.play(); }
function prevTrack() { currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length; loadTrack(currentTrackIndex); music.play(); }
function changeVolume(v) { if (music) music.volume = v; }
