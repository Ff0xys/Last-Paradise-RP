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
                L'ÉCHO DU CHILIAD : LA FIN DU MIRAGE
            </h2>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Tout a commencé par un mirage doré au début des années 2000, quand des milliards de dollars issus de fonds fédéraux "évaporés" ont fait sortir de terre <strong>Last Paradise</strong>...
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
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 700px; margin: 0 auto;">
            <div class="list-item-row" style="border-color: #46a5e5;">
                <div class="text-info"><strong>RÈGLEMENT GÉNÉRAL</strong><span>Bases fondamentales du serveur</span></div>
                <a href="${rulesLinks.serveur}" target="_blank" class="action-btn" style="background: #46a5e5;">LIRE LE DOC</a>
            </div>
            <div class="list-item-row" style="border-color: #2980b9;">
                <div class="text-info"><strong>RÈGLEMENT SASP</strong><span>Code de conduite des forces de l'ordre</span></div>
                <a href="${rulesLinks.sasp}" target="_blank" class="action-btn" style="background: #2980b9;">LIRE LE DOC</a>
            </div>
            <div class="list-item-row" style="border-color: #e74c3c;">
                <div class="text-info"><strong>RÈGLEMENT SAMR</strong><span>Protocoles médicaux et secours</span></div>
                <a href="${rulesLinks.samr}" target="_blank" class="action-btn" style="background: #e74c3c;">LIRE LE DOC</a>
            </div>
            <div class="list-item-row" style="border-color: #9370DB;">
                <div class="text-info"><strong>RÈGLEMENT ILLÉGAL</strong><span>Activités et groupes criminels</span></div>
                <a href="${rulesLinks.illegal}" target="_blank" class="action-btn" style="background: #9370DB;">LIRE LE DOC</a>
            </div>
        </div>
    `,
    keys: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">TOUCHES DU SERVEUR</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; max-width: 900px; margin: 0 auto;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="key-item"><span>Se cacher</span><kbd>A</kbd></div>
                <div class="key-item"><span>Pointer / Ceinture</span><kbd>B</kbd></div>
                <div class="key-item"><span>Chat InGame</span><kbd>T</kbd></div>
                <div class="key-item"><span>Lever bras</span><kbd>X</kbd></div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="key-item"><span>Téléphone</span><kbd>F1</kbd></div>
                <div class="key-item"><span>Inventaire</span><kbd>TAB</kbd></div>
                <div class="key-item"><span>Interaction</span><kbd>ALT</kbd></div>
            </div>
        </div>
    `,
    discord: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">NOS DISCORDS</h2>
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 700px; margin: 0 auto;">
            <div class="list-item-row" style="border-color: #5865F2;">
                <div class="text-info"><strong>DISCORD GÉNÉRAL</strong><span>Le cœur de la communauté</span></div>
                <a href="${discordLinks.general}" target="_blank" class="action-btn" style="background: #5865F2;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #9370DB;">
                <div class="text-info"><strong>DISCORD ILLÉGAL</strong><span>L'ombre de la ville</span></div>
                <a href="${discordLinks.illegal}" target="_blank" class="action-btn" style="background: #9370DB;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #2980b9;">
                <div class="text-info"><strong>DISCORD SASP</strong><span>Forces de l'ordre</span></div>
                <a href="${discordLinks.sasp}" target="_blank" class="action-btn" style="background: #2980b9;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #f1c40f;">
                <div class="text-info"><strong>GOUVERNEMENT</strong><span>Lois et décrets officiels</span></div>
                <a href="${discordLinks.gouv}" target="_blank" class="action-btn" style="background: #f1c40f; color: #000;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #e74c3c;">
                <div class="text-info"><strong>DISCORD SAMR</strong><span>Santé et Secours</span></div>
                <a href="${discordLinks.samr}" target="_blank" class="action-btn" style="background: #e74c3c;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #2ecc71;">
                <div class="text-info"><strong>AGENCE IMMO</strong><span>Gestion immobilière</span></div>
                <a href="${discordLinks.immo}" target="_blank" class="action-btn" style="background: #2ecc71;">REJOINDRE</a>
            </div>
            <div class="list-item-row" style="border-color: #e67e22;">
                <div class="text-info"><strong>PDM MOTORSPORT</strong><span>Concessionnaire Auto</span></div>
                <a href="${discordLinks.pdm}" target="_blank" class="action-btn" style="background: #e67e22;">REJOINDRE</a>
            </div>
        </div>
    `,
    paradise: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">REJOINDRE LA CITÉ</h2>
        <div style="text-align: center; margin-top: 40px; padding: 40px; border: 1px dashed #46a5e5; border-radius: 10px; background: rgba(0,0,0,0.5); max-width: 600px; margin-left: auto; margin-right: auto;">
            <p style="font-size: 1.2em; margin-bottom: 20px;">Console <strong>F8</strong> :</p>
            <code style="background: #000; padding: 15px; color: #46a5e5; border-radius: 5px; font-size: 24px; border: 1px solid #46a5e5; display: block; margin-bottom: 20px;">connect lastparadise.fr</code>
        </div>
    `,
    staff: `<h2>L'ÉQUIPE ADMINISTRATIVE</h2><div id="roles-container"></div>`,
    streams: `<h2>DIFFUSIONS EN DIRECT</h2><div id="stream-list"></div>`,
    galerie: `<h2>GALERIE DE LA VILLE</h2><p style="text-align:center;">Bientôt disponible...</p>`,
    event: `<h2>ÉVÉNEMENTS À VENIR</h2><p style="text-align:center;">Aucun événement prévu pour le moment.</p>`
};

// --- CSS DYNAMIQUE ---
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
    .list-item-row { display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border-left: 5px solid; margin-bottom: 10px; font-family: 'Rajdhani'; }
    .text-info { display: flex; flex-direction: column; gap: 4px; }
    .text-info strong { color: white; font-size: 18px; text-transform: uppercase; }
    .text-info span { color: rgba(255,255,255,0.6); font-size: 14px; }
    .action-btn { color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s; font-size: 13px; text-align: center; min-width: 100px; cursor: pointer; }
    .action-btn:hover { filter: brightness(1.2); transform: scale(1.05); }
    .key-item { background: rgba(0,0,0,0.4); padding: 12px; border-radius: 6px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; font-family: 'Rajdhani'; }
    .key-item kbd { background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold; }
`;
document.head.appendChild(styleSheet);

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
        searchInput.style = "width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 5px; border: 1px solid #46a5e5; background: rgba(0,0,0,0.6); color: white;";
        const resContainer = document.createElement('div');
        list.appendChild(searchInput); list.appendChild(resContainer);

        const render = (f = "") => {
            resContainer.innerHTML = "";
            [...streamerData].sort((a,b)=>a.streamer.localeCompare(b.streamer)).forEach(s => {
                if (s.streamer.toLowerCase().includes(f.toLowerCase()) || s.character.toLowerCase().includes(f.toLowerCase())) {
                    resContainer.innerHTML += `<div class="list-item-row" style="border-color: #6441a5;"><div class="text-info"><strong>${s.streamer}</strong><span>Incarne : ${s.character}</span></div><a href="${s.url}" target="_blank" class="action-btn" style="background: #6441a5;">TWITCH</a></div>`;
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
