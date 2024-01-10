function defaultCenter() {
     centerImg.src='assets/landingImgs/welcome.png';
     centerText.src='assets/landingImgs/welcomeText.png';
}

function lbCenter() {
     centerImg.src='assets/landingImgs/letterboxd.png';
     centerText.src='assets/landingImgs/letterboxdText.png';
}

function resumeCenter() {
     centerImg.src='assets/landingImgs/resume.png';
     centerText.src='assets/landingImgs/resumeText.png';
}

function igCenter() {
     centerImg.src='assets/landingImgs/instagram.png';
     centerText.src='assets/landingImgs/instagramText.png';
}

function liCenter() {
    centerImg.src='assets/landingImgs/linkedin.png';
    centerText.src='assets/landingImgs/linkedinText.png';
}

function portCenter() {
     centerImg.src='assets/landingImgs/portfolio.png';
     centerText.src='assets/landingImgs/portfolioText.png';
}

function miscCenter() {
     centerImg.src='assets/landingImgs/misc.png';
     centerText.src='assets/landingImgs/miscText.png';
}

function fbCenter() {
    centerImg.src='assets/landingImgs/facebook.png';
    centerText.src='assets/landingImgs/facebookText.png';
}

function hsCenter() {
    centerImg.src='assets/landingImgs/handshake.png';
    centerText.src='assets/landingImgs/handshakeText.png';
}

function navToggle() {
        let menu = document.getElementById('navMenu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            menu.classList.add('visible');
          } else {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
          }
}