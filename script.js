@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap');

:root { 
    --accent: #46a5e5; 
    --bg-overlay: rgba(0, 0, 0, 0.7); 
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.12);
    --modal-bg: rgba(10, 5, 20, 0.55);
}

/* --- RESET & BASE --- */
* { box-sizing: border-box; margin: 0; padding: 0; }

body { 
    background: url('https://i.postimg.cc/Y0sxrY20/Gemini-Generated-Image-d75xq0d75xq0d75x-(1).png') no-repeat;
    background-position: center 30%; 
    background-size: cover;
    background-attachment: fixed;
    color: #fff; 
    font-family: 'Rajdhani', sans-serif; 
    overflow: hidden;
}

.home {
    background: var(--bg-overlay);
    height: 100vh;
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
}

.grid { 
    flex: 1;
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    gap: 15px; 
    padding: 20px;
}

/* --- TUILES --- */
.tile { 
    position: relative; 
    display: flex; 
    align-items: flex-end; 
    background: var(--glass);
    border: 1px solid var(--glass-border); 
    text-decoration: none; 
    overflow: hidden; 
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); 
    border-radius: 15px;
}

.tile:hover { 
    border-color: var(--accent);
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.5), 0 0 15px rgba(70, 165, 229, 0.2);
}

.tile__bg { 
    position: absolute; 
    inset: 0; 
    background-size: cover; 
    background-position: center; 
    filter: brightness(0.4) saturate(0.8); 
    transition: 0.6s; 
}

.tile:hover .tile__bg { filter: brightness(0.6) saturate(1.1); }

.tile__content { 
    padding: 35px; 
    position: relative; 
    z-index: 2; 
    width: 100%; 
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
}

.tile__label { 
    display: block; 
    font-family: 'Bebas Neue'; 
    font-size: 50px; 
    color: var(--accent); 
    text-shadow: 0 0 20px rgba(70, 165, 229, 0.5);
    letter-spacing: 3px; 
    line-height: 0.9;
    margin-bottom: 5px;
}

.tile__sub { 
    font-size: 14px; 
    color: rgba(255,255,255,0.7); 
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-weight: 500;
}

/* --- STATUT --- */
.tile__status { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 12px;
}

.tile__dot.online { 
    width: 10px; 
    height: 10px; 
    background: #00ff88; 
    border-radius: 50%; 
    box-shadow: 0 0 10px #00ff88;
    animation: blink 1.5s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 10px #00ff88; }
    50% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 0px #00ff88; }
}

/* --- VIEWER & SCROLLBAR --- */
.viewer { 
    display: none; 
    position: fixed; 
    inset: 0; 
    background: rgba(0,0,0,0.8); 
    z-index: 1000; 
    padding: 40px; 
    animation: fadeIn 0.4s ease;
}

.viewer__body { 
    max-width: 1200px; 
    width: 75%; 
    margin: 2vh auto; 
    background: var(--modal-bg);
    backdrop-filter: blur(20px) saturate(160%);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    padding: 45px;
    color: #f0f0f0;
    overflow-y: auto;
    max-height: 90vh;
    position: relative;
}

/* Scrollbar Stylisée */
.viewer__body::-webkit-scrollbar { width: 6px; }
.viewer__body::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
.viewer__body::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }

/* --- TOUCHES DU SERVEUR (KBD) --- */
kbd {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--accent);
    border-radius: 4px;
    padding: 3px 10px;
    font-family: 'Bebas Neue';
    font-size: 20px;
    color: var(--accent);
    box-shadow: 0 2px 0 var(--accent);
    margin-left: 10px;
    display: inline-block;
    min-width: 30px;
    text-align: center;
}

.key-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 6px;
    margin-bottom: 5px;
    transition: 0.2s;
}

.key-item:hover { background: rgba(70, 165, 229, 0.1); }

.close-btn { 
    background: transparent; 
    border: 1px solid var(--accent); 
    color: var(--accent); 
    padding: 12px 35px; 
    font-family: 'Bebas Neue'; 
    font-size: 20px;
    cursor: pointer; 
    margin-bottom: 30px; 
    transition: 0.3s;
    border-radius: 8px;
}

.close-btn:hover { background: var(--accent); color: #000; }

/* --- STAFF & ROLES --- */
.role-item { border-bottom: 1px solid rgba(255,255,255,0.05); padding: 15px 0; }
.role-header {
    cursor: pointer;
    font-family: 'Rajdhani';
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    transition: 0.3s;
    letter-spacing: 1px;
}
.role-header:hover { color: var(--accent); }

.pseudo-reveal {
    display: none; 
    color: var(--accent);
    font-family: 'Bebas Neue';
    font-size: 26px;
    margin: 12px 0 8px 25px;
    cursor: pointer;
    animation: slideDown 0.3s ease;
}

.subroles-list {
    display: none; 
    flex-direction: column;
    gap: 8px;
    margin-left: 50px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border-left: 2px solid var(--accent);
}

.subrole-badge {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
}

.subrole-badge span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 12px;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- FOOTER --- */
.footer {
    position: fixed;
    bottom: 20px;
    width: 100%;
    text-align: center;
    font-family: 'Rajdhani';
    font-size: 25px;
    color: rgba(255,255,255,0.2);
    letter-spacing: 1px;
}

@keyframes fadeIn { 
    from { opacity: 0; transform: translateY(20px); } 
    to { opacity: 1; transform: translateY(0); } 
}

/* --- LECTEUR MUSIQUE --- */
.ac {
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 100;
    background: var(--glass);
    backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.ac__toggle {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--accent);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ac__toggle:hover { background: var(--accent); color: #000; }

.ac__slider {
    -webkit-appearance: none;
    width: 80px;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
    border-radius: 5px;
}

.ac__slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: var(--accent);
    border-radius: 50%;
    cursor: pointer;
}
