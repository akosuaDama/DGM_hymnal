const API_URL = 'http://localhost:3000/api';
let hymns = [];
let currentHymnId = null;
let favorites = JSON.parse(localStorage.getItem('hymnFavorites') || '[]');

const hymnList = document.getElementById('hymnList');
const lyricsView = document.getElementById('lyricsView');
const lyricsContent = document.getElementById('lyricsContent');
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const controls = document.getElementById('controls');
const themeToggle = document.getElementById('themeToggle');
const favBtn = document.getElementById('favBtn');
const hymnAudio = document.getElementById('hymnAudio');

// Theme handling
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  themeToggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});

// Fetch hymns from backend
async function loadHymns() {
  try {
    const res = await fetch(`${API_URL}/hymns`);
    hymns = await res.json();
    renderHymns();
  } catch (err) {
    console.error('Failed to load hymns:', err);
    hymnList.innerHTML = '<p>Could not connect to server. Make sure the backend is running on port 3000.</p>';
  }
}

function renderHymns(filteredHymns = hymns) {
  hymnList.innerHTML = filteredHymns.map(hymn => `
    <div class="hymn-card" onclick="showLyrics(${hymn.id})">
      ${favorites.includes(hymn.id) ? '<span class="fav-indicator">★</span>' : ''}
      <h3>${hymn.title}</h3>
      <p class="hymn-meta">${hymn.author} | ${hymn.category}</p>
    </div>
  `).join('');
}

function showLyrics(id) {
  const hymn = hymns.find(h => h.id === id);
  currentHymnId = id;
  
  lyricsContent.innerHTML = `
    <h2>${hymn.title}</h2>
    <p class="author">${hymn.author} | ${hymn.category}</p>
    <div>${hymn.lyrics}</div>
  `;
  
  // Audio
  if (hymn.audio_url) {
    hymnAudio.src = hymn.audio_url;
    hymnAudio.classList.add('active');
  } else {
    hymnAudio.classList.remove('active');
  }
  
  // Favorite button
  favBtn.classList.toggle('active', favorites.includes(id));
  favBtn.textContent = favorites.includes(id) ? '★' : '☆';
  
  hymnList.style.display = 'none';
  controls.style.display = 'none';
  lyricsView.classList.add('active');
  window.scrollTo(0, 0);
}

function showList() {
  lyricsView.classList.remove('active');
  hymnList.style.display = 'grid';
  controls.style.display = 'flex';
  hymnAudio.pause();
  currentHymnId = null;
}

function toggleFavorite() {
  if (!currentHymnId) return;
  
  const idx = favorites.indexOf(currentHymnId);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(currentHymnId);
  }
  
  localStorage.setItem('hymnFavorites', JSON.stringify(favorites));
  favBtn.classList.toggle('active');
  favBtn.textContent = favorites.includes(currentHymnId) ? '★' : '☆';
}

function filterHymns() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  
  let filtered = hymns.filter(hymn => {
    const matchesSearch = hymn.title.toLowerCase().includes(searchTerm) || 
                         hymn.lyrics.toLowerCase().includes(searchTerm);
    const matchesCategory = category === '' || category === 'Favorites' || hymn.category === category;
    return matchesSearch && matchesCategory;
  });
  
  if (category === 'Favorites') {
    filtered = filtered.filter(h => favorites.includes(h.id));
  }
  
  renderHymns(filtered);
}

searchInput.addEventListener('input', filterHymns);
categorySelect.addEventListener('change', filterHymns);

initTheme();
loadHymns();