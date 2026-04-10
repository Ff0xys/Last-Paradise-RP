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
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">CHARTE DE LA CITÉ</h2>
        <div style="max-width: 800px; margin: 0 auto; color: white; font-family: 'Rajdhani'; line-height: 1.6;">
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 3px solid #46a5e5;">
                <h3 style="color: #46a5e5; margin-bottom: 10px;">1. CONCEPT FAIR-PLAY</h3>
                <p>Le RP est un jeu collaboratif. La défaite fait partie de l'histoire et doit être acceptée avec dignité pour le plaisir de tous.</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin-bottom: 15px; border-left: 3px solid #46a5e5;">
                <h3 style="color: #46a5e5; margin-bottom: 10px;">2. INTERDICTIONS STRICTES</h3>
                <p>Le PowerGaming, MetaGaming, No-Fear et le Stream-Sniping sont lourdement sanctionnés par un bannissement immédiat.</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; border-left: 3px solid #46a5e5;">
                <h3 style="color: #46a5e5; margin-bottom: 10px;">3. COHÉRENCE DU PERSONNAGE</h3>
                <p>Votre personnage doit avoir des motivations logiques. Chaque action doit avoir une conséquence directe sur votre évolution en ville.</p>
            </div>
        </div>
    `,
    keys: `
        <h2 style="font-family: 'Bebas Neue'; font-size: 50px; color: #46a5e5; text-align: center; margin-bottom: 30px;">MAPPAGE CLAVIER</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; max-width: 800px; margin: 0 auto;">
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Téléphone</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">F1</kbd>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Inventaire</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">F2</kbd>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Animations</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">F3</kbd>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Menu Personnel</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">F5</kbd>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Interaction</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">E</kbd>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; border: 1px solid rgba(70,165,229,0.2); display: flex; justify-content: space-between; align-items: center;">
                <span>Parler / Radio</span> <kbd style="background: #46a5e5; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">N</kbd>
            </div>
        </div>
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
    music.load();
}

function toggleMusic() {
    if (!music) return;
    if (!music.getAttribute('src')) loadTrack(currentTrackIndex);

    if (music.paused) {
        music.volume = slider ? slider.value : 0.3;
        music.play().then(() => { musicIcon.innerText = '⏸'; });
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
    currentTrackIndex = (currentTrack
