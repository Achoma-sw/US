// =====================================================
//  📸🎥  HOW TO REPLACE MEDIA
// =====================================================
//  1. Put your photos/videos in a "media" folder next to
//     index.html.
//  2. In the mediaItems array below:
//       - "src"     → path to your file, e.g. "media/photo1.jpg"
//                     or "media/clip1.mp4"
//       - "kind"    → "image" or "video"
//       - "caption" → text shown under the media
//       - "type"    → "red" (for her) or "navy" (for him)
//  3. You can delete rows you don't need — the gallery
//     will simply show fewer items.
//  4. Videos autoplay muted & looped; controls appear on hover.
// =====================================================

const mediaItems = [
  { id: 1,  kind: "image", src: "1.jpeg",  caption: "first awkward pic together🥲",       type: "red"  },
  { id: 2,  kind: "image", src: "2.jpeg",  caption: "dubai distancing on the call, plus my annoyance😂",        type: "navy" },
  { id: 3,  kind: "image", src: "3.jpeg",   caption: "just because its one of my favourites😍",        type: "red"  },
  { id: 4,  kind: "image", src: "4.jpeg",  caption: "no caption😂😂",        type: "navy" },
  { id: 5,  kind: "image", src: "5.jpeg",  caption: "a favourite🥹",      type: "red"  },
  { id: 6,  kind: "image", src: "6.jpeg",   caption: "your weird dances is always your truest form😂😂",   type: "navy" },
  { id: 7,  kind: "image", src: "8.jpeg",  caption: "another awkward moment because of Adele😂",          type: "red"  },
  { id: 8,  kind: "image", src: "9.jpeg",  caption: "I'll always celebrate God's grace over you Minster Debbie_Shine🥹✨",          type: "navy" },
  { id: 9,  kind: "image", src: "10.jpeg",  caption: "I believe I had an assignment but you just can't take your hands off me😂",         type: "red"  },
  { id: 10, kind: "video", src: "11.mp4",  caption: "started IT so I had to keep sending some sort of my presence to you😉",          type: "navy" },
  { id: 11, kind: "video", src: "12.mp4",  caption: "you told me you fell from your bed when I first sent a wink video😉😂",       type: "red"  },
  { id: 12, kind: "video", src: "14.mp4",   caption: "also one of my favs of us both 🥹✨ God I go wound Adele😭",             type: "navy" },
  { id: 13, kind: "image", src: "141.jpeg", caption: "i love this dress and that expression😍",      type: "red"  },
  { id: 14, kind: "video", src: "13.mp4", caption: "agba stepper😂😂",          type: "navy" },
  { id: 15, kind: "video", src: "15.mp4", caption: "just so pretty🥹😍",           type: "red"  },
  { id: 16, kind: "video", src: "16.mp4", caption: "😉😉",        type: "navy" },
  { id: 17, kind: "video", src: "17.mp4",   caption: "father Emma couldn't have your attention that day, when I'm there keh😎",     type: "red"  },
  { id: 18, kind: "video", src: "18.mp4", caption: "such a big baby😂😂",       type: "navy" },
  { id: 19, kind: "image", src: "19.jpeg", caption: "also another dress I love you in🥹",    type: "red"  },
  { id: 20, kind: "image", src: "20.jpeg", caption: "just...perfect✨",       type: "navy" },
  { id: 21, kind: "image", src: "21.jpeg", caption: "didn't care what you were adjusting but glad you were😂",        type: "red"  },
  { id: 22, kind: "image", src: "181.jpeg",   caption: "thisss🥹🥹",         type: "navy" },
  { id: 23, kind: "image", src: "23.jpeg", caption: "long story cut short..🥲",      type: "red"  },
  { id: 24, kind: "image", src: "24.jpeg", caption: "so glad we have each other...my right back defender🥹😘",    type: "navy" },
  { id: 25, kind: "image", src: "25.jpeg", caption: "we too hot die that day♨️😍",         type: "red"  },
  { id: 26, kind: "image", src: "26.jpeg", caption: "dammit we look good😍",         type: "navy" },
  { id: 27, kind: "image", src: "27.jpeg", caption: "being cute for a moment🤭",     type: "red"  },
  { id: 28, kind: "image", src: "28.jpeg",   caption: "back to aura mode😎", type: "navy" },
  { id: 29, kind: "video", src: "29.mp4", caption: "I had fun that day, as long as you were there, even though the dinner was trash😂😂",         type: "red"  },
  { id: 30, kind: "image", src: "30.jpeg", caption: "roses are red, violets are underrated, nothing can ever make these hands demarcated❤️💙",       type: "navy" }
];

// ===== RANDOM DECO TEXTS & ICONS =====
const redDeco  = ["❤️", "🌹", "👑", "love", "♛"];
const navyDeco = ["💙", "⚜️", "👑"];

// ===== DOM ELEMENTS =====
const introScreen   = document.getElementById('introScreen');
const galleryScreen = document.getElementById('galleryScreen');
const clickPrompt   = document.getElementById('clickPrompt');
const galleryGrid   = document.getElementById('galleryGrid');
const resetButton   = document.getElementById('resetButton');
const lightbox        = document.getElementById('lightbox');
const lightboxMedia   = document.getElementById('lightboxMedia');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');

// ===== BUILD GALLERY =====
function buildGallery() {
  galleryGrid.innerHTML = '';

  mediaItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    const rotate = (Math.random() * 4 - 2).toFixed(1);
    card.style.transform = `rotate(${rotate}deg)`;

    // --- MEDIA WRAPPER ---
    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'photo-img' + (item.kind === 'video' ? ' is-video' : '');

    if (item.kind === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.setAttribute('aria-label', item.caption);

      video.addEventListener('mouseenter', () => { video.controls = true; });
      video.addEventListener('mouseleave', () => { video.controls = false; });

      video.onerror = () => {
        mediaWrap.classList.add('media-error');
        mediaWrap.textContent = '🎬';
      };

      mediaWrap.appendChild(video);

      const badge = document.createElement('span');
      badge.className = 'video-badge';
      badge.textContent = '▶';
      mediaWrap.appendChild(badge);

    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption;
      img.loading = 'lazy';

      img.onerror = () => {
        mediaWrap.classList.add('media-error');
        mediaWrap.textContent = '📷';
      };

      mediaWrap.appendChild(img);
    }

    // --- CAPTION ---
    const captionUnder = document.createElement('div');
    captionUnder.className = 'caption-under';
    captionUnder.textContent = item.caption;

    card.appendChild(mediaWrap);
    card.appendChild(captionUnder);

    // --- RANDOM FLOATING DECORATIONS ---
    const decoCount = Math.random() > 0.3 ? 1 : 2;
    for (let d = 0; d < decoCount; d++) {
      const floating = document.createElement('div');
      floating.className = 'floating-deco ' + (item.type === 'red' ? 'deco-red' : 'deco-navy');

      const sourceArray = item.type === 'red' ? redDeco : navyDeco;
      floating.textContent = sourceArray[Math.floor(Math.random() * sourceArray.length)];

      const position = Math.floor(Math.random() * 4);
      const offsetPercent = (Math.random() * 60 + 20).toFixed(0);

      floating.style.position = 'absolute';

      if (position === 0) {
        floating.style.top = '-18px';
        floating.style.left = offsetPercent + '%';
        floating.style.transform = 'translateX(-50%)';
      } else if (position === 1) {
        floating.style.bottom = '-18px';
        floating.style.left = offsetPercent + '%';
        floating.style.transform = 'translateX(-50%)';
      } else if (position === 2) {
        floating.style.left = '-24px';
        floating.style.top = offsetPercent + '%';
        floating.style.transform = 'translateY(-50%)';
      } else {
        floating.style.right = '-24px';
        floating.style.top = offsetPercent + '%';
        floating.style.transform = 'translateY(-50%)';
      }

      const decoRotate = (Math.random() * 20 - 10).toFixed(1);
      floating.style.rotate = `${decoRotate}deg`;

      card.appendChild(floating);
    }

    // Extra crown on some cards
    if (Math.random() > 0.6) {
      const extraIcon = document.createElement('div');
      extraIcon.className = 'floating-deco ' + (item.type === 'red' ? 'deco-red' : 'deco-navy');
      extraIcon.textContent = '♛';
      extraIcon.style.position = 'absolute';
      extraIcon.style.top = '5px';
      extraIcon.style.right = '5px';
      extraIcon.style.fontSize = '1.4rem';
      extraIcon.style.padding = '0 6px';
      extraIcon.style.transform = 'rotate(15deg)';
      card.appendChild(extraIcon);
    }

        // open the lightbox when the card is clicked
    card.addEventListener('click', () => openLightbox(item));
    galleryGrid.appendChild(card);
  });
}

// ===== LIGHTBOX =====
function openLightbox(item) {
  lightboxMedia.innerHTML = '';
  lightboxCaption.textContent = item.caption || '';

  if (item.kind === 'video') {
    const video = document.createElement('video');
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.muted = false;   // allow sound in the popup
    video.setAttribute('aria-label', item.caption || '');
    lightboxMedia.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption || '';
    lightboxMedia.appendChild(img);
  }

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeLightbox() {
  // stop any playing video
  const v = lightboxMedia.querySelector('video');
  if (v) v.pause();

  lightbox.classList.add('hidden');
  lightboxMedia.innerHTML = '';
  lightboxCaption.textContent = '';
  document.body.style.overflow = '';
}

// close when clicking backdrop, ✕ button, or pressing Escape
lightboxClose.addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
    closeLightbox();
  }
});

// ===== NAVIGATION =====
let isBuilt = false;

function showGallery() {
  if (!isBuilt) {
    buildGallery();
    isBuilt = true;
  }
  introScreen.classList.add('hidden');
  galleryScreen.classList.remove('hidden');
}

function showIntro() {
  document.querySelectorAll('.photo-img video').forEach(v => v.pause());
  galleryScreen.classList.add('hidden');
  introScreen.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== EVENT LISTENERS =====
clickPrompt.addEventListener('click', showGallery);
clickPrompt.addEventListener('touchstart', (e) => {
  e.preventDefault();
  showGallery();
}, { passive: false });

resetButton.addEventListener('click', () => {
  buildGallery();
  isBuilt = true;
  showIntro();
});

// ===== INIT =====
window.addEventListener('load', () => {
  introScreen.classList.remove('hidden');
  galleryScreen.classList.add('hidden');
});
