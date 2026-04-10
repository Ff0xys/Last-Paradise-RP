// --- CONFIGURATION ---
const streamerData = [
    { streamer: "Lyx_tv", character: "Salvatore Morales", url: "https://twitch.tv/tv_lyx" }
];

const studioData = {
    name: "LAST LEGACY STUDIO",
    roles: [{ name: "Propriétaire", color: "#3498db" }]
};

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

// --- PLAYLIST CONFIGURATION ---
const playlist = [
    "https://files.catbox.moe/ze2akz.mp3", // Nouveau morceau - Lancé en 1er
    "https://files.catbox.moe/cndtub.mp3", // Ancien morceau 1
    "https://files.catbox.moe/u1gdus.mp3" // Ancien morceau 2
];
let currentTrackIndex = 0;

const pageData = {
    lore: `
        <div style="max-width: 800px; margin: 0 auto; line-height: 1.7; text-align: justify; font-family: 'Rajdhani', sans-serif;">
            <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; letter-spacing: 3px; text-align: center; margin-bottom: 40px; text-shadow: 0 0 15px rgba(70, 165, 229, 0.4);">
                L'ÉCHO DU CHILIAD : LA FIN DU MIRAGE
            </h2>
            <p style="font-size: 19px; color: rgba(255,255,255,0.9); margin-bottom: 25px;">
                Tout a commencé par un mirage doré...
            </p>
            </div>
    `,
    staff: `<h2>Le Staff</h2><div id="roles-container"></div>`,
    streams: `<h2>STREAMERS</h2><div id="stream-list"></div>`,
    paradise: `<h2>CONNEXION</h2><code>connect lastparadise.fr</code>`
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
        serverRoles.forEach(roleName => {
            const roleId = roleName.replace(/\s/g, '');
            const member = staffMembers.find(m => m.highestRole === roleName);
            let memberHtml = '';
            if (member) {
                memberHtml = `
                    <div id="pseudo-${roleId}" class="pseudo-reveal" onclick="toggleSubRoles('${roleId}')" style="display:none; cursor:pointer; margin-top:10px;">
                        └ ${member.pseudo}
                    </div>
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
        streamerData.forEach(s => {
            list.innerHTML += `<a href="${s.url}" target="_blank" class="tile"><div><span>${s.streamer}</span><span>${s.character}</span></div><div class="live-badge">LIVE</div></a>`;
        });
    }
}

function togglePseudo(id) { const el = document.getElementById('pseudo-' + id); if (el) el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none'; }
function toggleSubRoles(id) { const el = document.getElementById('subroles-' + id); if (el) el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'flex' : 'none'; }
function closeView() { document.getElementById('viewer').style.display = 'none'; }

// --- LOGIQUE MUSIQUE ---
const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('music-icon');
const slider = document.getElementById('volumeSlider');

function loadTrack(index) {
    if (!music) return;
    music.src = playlist[index];
    music.load(); // Force le chargement du nouveau fichier
}

function toggleMusic() {
    if (!music) return;
    
    // Correction : s'assurer qu'une source est bien présente avant de lire
    if (!music.getAttribute('src') || music.getAttribute('src') === "") {
        loadTrack(currentTrackIndex);
    }

    if (music.paused) {
        music.volume = slider ? slider.value : 0.3;
        // Le play() est asynchrone
        const playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicIcon.innerText = '⏸';
            }).catch(error => {
                console.error("Erreur de lecture : ", error);
            });
        }
    } else {
        music.pause();
        musicIcon.innerText = '▶';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    music.play().then(() => { musicIcon.innerText = '⏸'; });
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    music.play().then(() => { musicIcon.innerText = '⏸'; });
}

function changeVolume(amount) {
    if (music) music.volume = amount;
}

if (music) {
    music.onended = () => { nextTrack(); };
}

// Initialisation au chargement de la page
window.addEventListener('load', () => {
    loadTrack(currentTrackIndex);
    if (music && slider) music.volume = slider.value;
});