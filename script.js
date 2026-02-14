document.addEventListener('DOMContentLoaded', function() {
    const envelopeContainer = document.getElementById('envelopeContainer');
    const valentineContent = document.getElementById('valentineContent');
    const envelope = document.getElementById('envelope');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    const musicBtn = document.getElementById('musicBtn');
    const loveSong = document.getElementById('loveSong');
    
    let isPlaying = false;

    // Open envelope animation
    envelopeContainer.addEventListener('click', function() {
        envelope.style.transform = 'rotateX(180deg)';
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            setTimeout(() => {
                envelopeContainer.style.display = 'none';
                valentineContent.classList.add('show');
                
                // Create heart burst
                createHeartBurst();
            }, 500);
        }, 300);
    });

    // Yes button click
    yesBtn.addEventListener('click', function() {
        responseMessage.textContent = 'Yay! You made me the happiest person! I love You To Bhuvana  ❤️';
        responseMessage.style.animation = 'heartbeat 2s ease';
        
        // Create more hearts
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
    });

    // No button hover effect (it runs away!)
    noBtn.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.transition = 'all 0.6s';
    });

    // Music player
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            loveSong.pause();
            musicBtn.innerHTML = '<span class="music-icon">🎵</span><span class="music-text">Play Love Song</span>';
        } else {
            loveSong.play().catch(e => console.log('Audio play failed:', e));
            musicBtn.innerHTML = '<span class="music-icon">🎵</span><span class="music-text">Pause Love Song</span>';
        }
        isPlaying = !isPlaying;
    });

    // Create floating hearts periodically
    setInterval(createFloatingHeart, 1000);

    // Functions
    function createHeartBurst() {
        for(let i = 0; i < 20; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 50);
        }
    }

    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
        heart.style.opacity = Math.random();
        heart.style.animation = `floatUp ${Math.random() * 3 + 3}s linear forwards`;
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Add floating animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            from {
                transform: translateY(0) rotate(0deg);
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});