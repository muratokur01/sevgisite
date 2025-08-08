document.addEventListener("DOMContentLoaded", function() {
    // Profil resmi mobil dokunma efekti
    const wrapper = document.querySelector('.profile-img-wrapper');
    if (wrapper) {
        wrapper.addEventListener('touchstart', function() {
            wrapper.classList.add('active');
        });
        wrapper.addEventListener('touchend', function() {
            setTimeout(() => wrapper.classList.remove('active'), 300);
        });
    }

    // Hero başlık kutusu dinamik efekt
    const heroTitleBox = document.querySelector('.hero-title-box');
    if (heroTitleBox) {
        heroTitleBox.addEventListener('mouseenter', function() {
            heroTitleBox.classList.add('active');
        });
        heroTitleBox.addEventListener('mouseleave', function() {
            heroTitleBox.classList.remove('active');
        });
        heroTitleBox.addEventListener('touchstart', function() {
            heroTitleBox.classList.add('active');
        });
        heroTitleBox.addEventListener('touchend', function() {
            setTimeout(() => heroTitleBox.classList.remove('active'), 300);
        });
    }

    // WhatsApp butonu dinamik efekt
    const wpBtn = document.querySelector('.whatsapp-btn');
    if (wpBtn) {
        wpBtn.addEventListener('mouseenter', function() {
            wpBtn.classList.add('active');
        });
        wpBtn.addEventListener('mouseleave', function() {
            wpBtn.classList.remove('active');
        });
        wpBtn.addEventListener('touchstart', function() {
            wpBtn.classList.add('active');
        });
        wpBtn.addEventListener('touchend', function() {
            setTimeout(() => wpBtn.classList.remove('active'), 300);
        });
    }

    // Hakkımda kutusu dinamik efekt
    const aboutBox = document.querySelector('.about-section');
    if (aboutBox) {
        aboutBox.addEventListener('mouseenter', function() {
            aboutBox.classList.add('active');
        });
        aboutBox.addEventListener('mouseleave', function() {
            aboutBox.classList.remove('active');
        });
        aboutBox.addEventListener('touchstart', function() {
            aboutBox.classList.add('active');
        });
        aboutBox.addEventListener('touchend', function() {
            setTimeout(() => aboutBox.classList.remove('active'), 300);
        });
    }

    // Yeni eklenen info-box'lar için dinamik efekt
    document.querySelectorAll('.info-box').forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            box.classList.add('active');
        });
        box.addEventListener('mouseleave', function() {
            box.classList.remove('active');
        });
        box.addEventListener('touchstart', function() {
            box.classList.add('active');
        });
        box.addEventListener('touchend', function() {
            setTimeout(() => box.classList.remove('active'),