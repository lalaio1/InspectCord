(() => {
  const styles = {
    container: `
      position:fixed; 
      top:50%; 
      left:50%; 
      transform:translate(-50%,-50%);
      background:linear-gradient(145deg, #2C2F33 0%, #23272A 100%);
      padding:25px;
      border-radius:16px;
      box-shadow:0 8px 32px rgba(0,0,0,0.3);
      width:600px;
      font-family:'Segoe UI',Arial;
      color:#fff;
      max-height:90vh;
      overflow-y:auto;
    `,
    header: `
      display:flex;
      justify-content:space-between;
      margin-bottom:25px;
      position:sticky;
      top:0;
      background:linear-gradient(145deg, #2C2F33 0%, #23272A 100%);
      padding:10px 0;
      z-index:100;
    `,
    closeBtn: `
      background:rgba(255,255,255,0.1);
      border:none;
      color:#fff;
      font-size:18px;
      cursor:pointer;
      padding:8px 12px;
      border-radius:50%;
      transition:all 0.2s;
    `,
    userSection: `
      display:flex;
      gap:20px;
      padding:20px;
      background:rgba(255,255,255,0.1);
      border-radius:12px;
      margin-bottom:20px;
      position:relative;
      overflow:hidden;
    `,
    avatar: `
      width:100px;
      height:100px;
      border-radius:50%;
      border:3px solid #5865F2;
      box-shadow:0 0 15px rgba(88,101,242,0.3);
    `,
    section: `
      background:rgba(255,255,255,0.05);
      padding:20px;
      border-radius:12px;
      margin-bottom:20px;
      backdrop-filter:blur(10px);
    `,
    tokenText: `
      background:#18191c;
      padding:12px;
      border-radius:8px;
      word-break:break-all;
      margin:10px 0;
      font-family:monospace;
      font-size:12px;
      color:#b9bbbe;
    `,
    button: `
      background:#5865F2;
      color:white;
      border:none;
      padding:12px 20px;
      border-radius:8px;
      cursor:pointer;
      font-weight:600;
      transition:all 0.2s;
      display:flex;
      align-items:center;
      gap:8px;
      width:fit-content;
    `,
    downloadBtn: `
      background:#43b581;
      color:white;
      border:none;
      padding:12px 20px;
      border-radius:8px;
      cursor:pointer;
      font-weight:600;
      transition:all 0.2s;
    `,
    infoGrid: `
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
      gap:15px;
    `,
    infoItem: `
      background:rgba(0,0,0,0.2);
      padding:15px;
      border-radius:8px;
    `,
    friendsList: `
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
      gap:15px;
      margin-top:15px;
    `,
    friendCard: `
      background:rgba(0,0,0,0.2);
      padding:15px;
      border-radius:8px;
      display:flex;
      align-items:center;
      gap:10px;
    `,
    friendAvatar: `
      width:40px;
      height:40px;
      border-radius:50%;
      object-fit:cover;
    `,
    tabs: `
      display:flex;
      gap:10px;
      margin-bottom:20px;
      border-bottom:2px solid rgba(255,255,255,0.1);
      padding-bottom:10px;
    `,
    tab: `
      background:none;
      border:none;
      color:#b9bbbe;
      padding:8px 16px;
      cursor:pointer;
      font-weight:600;
      transition:all 0.2s;
      border-radius:6px;
    `,
    activeTab: `
      background:rgba(255,255,255,0.1);
      color:white;
    `
  };

  const div = document.createElement('div');
  div.innerHTML = `
    <div style="${styles.container}">
      <div style="${styles.header}">
        <h2 style="margin:0;">Discord Profile Inspector</h2>
        <button id="closeBtn" style="${styles.closeBtn}">✕</button>
      </div>
 
      <div style="${styles.userSection}">
        <img id="userAvatar" style="${styles.avatar}" />
        <div style="flex-grow:1;">
          <h2 id="userName" style="margin:0;font-size:24px;"></h2>
          <p id="userTag" style="margin:5px 0;color:#b9bbbe;"></p>
          <div id="badges" style="margin-top:10px;"></div>
          <div style="display:flex;gap:10px;margin-top:15px;">
            <button id="downloadBtn" style="${styles.downloadBtn}">
              📥 Download Info
            </button>
          </div>
        </div>
      </div>
 
      <div style="${styles.tabs}">
        <button class="tab" style="${styles.tab}${styles.activeTab}" data-tab="info">Informações</button>
        <button class="tab" style="${styles.tab}" data-tab="friends">Amigos</button>
        <button class="tab" style="${styles.tab}" data-tab="token">Token</button>
      </div>
 
      <div id="infoTab" class="tab-content" style="${styles.section}">
        <div style="${styles.infoGrid}">
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">ID DO USUÁRIO</div>
            <div id="userId" style="font-family:monospace;"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">EMAIL</div>
            <div id="userEmail"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">TELEFONE</div>
            <div id="userPhone"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">CRIADO EM</div>
            <div id="userCreated"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">NITRO</div>
            <div id="userNitro"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">VERIFICAÇÕES</div>
            <div id="userStatuses"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">LOCALE</div>
            <div id="userLocale"></div>
          </div>
          <div style="${styles.infoItem}">
            <div style="color:#b9bbbe;font-size:12px;">NSFW PERMITIDO</div>
            <div id="userNsfw"></div>
          </div>
        </div>
      </div>
 
      <div id="friendsTab" class="tab-content" style="${styles.section};display:none;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
          <h3 style="margin:0;">Lista de Amigos</h3>
          <span id="friendCount" style="color:#b9bbbe;"></span>
        </div>
        <div id="friendsList" style="${styles.friendsList}"></div>
      </div>
 
      <div id="tokenTab" class="tab-content" style="${styles.section};display:none;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;">Token de Acesso</h3>
          <span style="color:#b9bbbe;font-size:12px;">⚠️ Informação Sensível</span>
        </div>
        <div id="tokenText" style="${styles.tokenText}"></div>
        <button id="copyBtn" style="${styles.button}">
          📋 Copiar Token
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(div);
 
  const getUser = async () => {
    const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m)
      .find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
    const response = await fetch('https://discord.com/api/v9/users/@me', {
      headers: { 'Authorization': token }
    });
    return response.json();
  };
 
  const getFriends = async () => {
    const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m)
      .find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
    const response = await fetch('https://discord.com/api/v9/users/@me/relationships', {
      headers: { 'Authorization': token }
    });
    return response.json();
  };
 
  const mapNitroStatus = (type) => {
    const types = {
      0: 'Nenhum',
      1: 'Nitro Classic',
      2: 'Nitro',
      3: 'Nitro Basic'
    };
    return types[type] || 'Desconhecido';
  };
 
  document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.tab').forEach(t => {
        t.style = styles.tab;
      });
      tab.style = `${styles.tab}${styles.activeTab}`;
      
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById(`${tab.dataset.tab}Tab`).style.display = 'block';
    };
  });
 
  Promise.all([getUser(), getFriends()]).then(([user, friends]) => {
    const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`;
    document.getElementById('userAvatar').src = avatar;
    document.getElementById('userName').textContent = user.username;
    document.getElementById('userTag').textContent = `#${user.discriminator}`;
    document.getElementById('userId').textContent = user.id;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userPhone').textContent = user.phone || 'Não cadastrado';
    document.getElementById('userCreated').textContent = new Date(parseInt(user.id) / 4194304 + 1420070400000).toLocaleDateString();
    document.getElementById('userNitro').textContent = mapNitroStatus(user.premium_type);
    document.getElementById('userLocale').textContent = user.locale;
    document.getElementById('userNsfw').textContent = user.nsfw_allowed ? 'Sim' : 'Não';
    
    const statuses = [];
    if(user.verified) statuses.push('✓ Email Verificado');
    if(user.mfa_enabled) statuses.push('🔒 2FA Ativo');
    document.getElementById('userStatuses').innerHTML = statuses.join('<br>');
    
    const badges = [];
    if(user.premium_type) badges.push('💎 Nitro');
    if(user.flags & 1) badges.push('👨‍💻 Staff');
    if(user.flags & 2) badges.push('🏠 Partner');
    if(user.flags & 4) badges.push('🎉 Events');
    if(user.flags & 8) badges.push('🐛 Bug Hunter');
    document.getElementById('badges').innerHTML = badges.map(b => 
      `<span style="background:rgba(255,255,255,0.1);padding:4px 8px;border-radius:12px;font-size:12px;margin-right:5px;">${b}</span>`
    ).join('');
    
    document.getElementById('friendCount').textContent = `${friends.length} amigos`;
    const friendsList = document.getElementById('friendsList');
    friends.forEach(friend => {
      const friendAvatar = friend.user.avatar ? 
        `https://cdn.discordapp.com/avatars/${friend.user.id}/${friend.user.avatar}.png` :
        `https://cdn.discordapp.com/embed/avatars/${friend.user.discriminator % 5}.png`;
      
      const friendEl = document.createElement('div');
      friendEl.style = styles.friendCard;
      friendEl.innerHTML = `
        <img src="${friendAvatar}" style="${styles.friendAvatar}" />
        <div>
          <div style="font-weight:600;">${friend.user.username}</div>
          <div style="color:#b9bbbe;font-size:12px;">#${friend.user.discriminator}</div>
        </div>
      `;
      friendsList.appendChild(friendEl);
    });
    
    const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m)
      .find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
    document.getElementById('tokenText').textContent = token;
 
    document.getElementById('downloadBtn').onclick = () => {
      const data = {
        user: {
          ...user,
          token,
          created_at: new Date(parseInt(user.id) / 4194304 + 1420070400000).toISOString()
        },
        friends: friends.map(f => ({
          username: f.user.username,
          discriminator: f.user.discriminator,
          id: f.user.id,
          type: f.type
        }))
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `discord-data-${user.username}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  });
 
  document.getElementById('copyBtn').onclick = () => {
    const token = document.getElementById('tokenText').textContent;
    navigator.clipboard.writeText(token);
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '✓ Copiado!';
    btn.style.background = '#43b581';
    setTimeout(() => {
      btn.innerHTML = '📋 Copiar Token';
      btn.style.background = '#5865F2';
    }, 2000);
  };

  document.getElementById('closeBtn').onclick = () => {
    div.remove();
  };

  const hoverElements = {
    'copyBtn': {hover: '#4752C4', default: '#5865F2'},
    'downloadBtn': {hover: '#3ca374', default: '#43b581'},
    'closeBtn': {hover: 'rgba(255,255,255,0.2)', default: 'rgba(255,255,255,0.1)'}
  };

  Object.keys(hoverElements).forEach(id => {
    const element = document.getElementById(id);
    element.onmouseover = () => {
      element.style.background = hoverElements[id].hover;
      element.style.transform = 'scale(1.05)';
    };
    element.onmouseout = () => {
      element.style.background = hoverElements[id].default;
      element.style.transform = 'scale(1)';
    };
  });

  const style = document.createElement('style');
  style.textContent = `
    .tab-content::-webkit-scrollbar {
      width: 8px;
    }
    .tab-content::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.2);
      border-radius: 4px;
    }
    .tab-content::-webkit-scrollbar-thumb {
      background: #5865F2;
      border-radius: 4px;
    }
    .tab-content::-webkit-scrollbar-thumb:hover {
      background: #4752C4;
    }
  `;
  document.head.appendChild(style);
})();
