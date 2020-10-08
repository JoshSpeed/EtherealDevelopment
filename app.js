// Nav Functionality

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(function (i) {
        i.addEventListener("click", function () {

            if (nav.classList.contains("nav-active")) {
                nav.classList.remove("nav-active");
                burger.classList.remove("toggle");

                navLinks.forEach(function (i) {
                    i.style.animation = "";
                });

            }

        });
    });


};

navSlide();

// Nav Scroll Animation

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});

// TypeWriter Effect

const TypeWriter = function (txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
    // Current Index of Word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // check if deleting
    if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add Char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
        typeSpeed = typeSpeed / 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Pause at end of word
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing new word
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM Load

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}
// document.addEventListener("DOMContentLoaded", init);

// Init App

function init() {
    const txtElement = document.querySelector('.typing');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

// Pop Ups


const plusSign = document.querySelectorAll(".fa-plus");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close-web-dev");
const webDevText = document.querySelector(".web-dev-text");
const wordpressText = document.querySelector(".wordpress-text");
const maintenanceText = document.querySelector(".maintenance-text");
const popupCTA = document.querySelectorAll(".popup-cta");

plusSign.forEach(function (i) {
    i.addEventListener('click', function () {
        popup.classList.remove("hidden");

        if (i === plusSign[0]) {
            webDevText.classList.remove("hidden");
        }
        if (i === plusSign[1]) {
            wordpressText.classList.remove("hidden");
        }
        if (i === plusSign[2]) {
            maintenanceText.classList.remove("hidden");
        }
    });
});

closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
    webDevText.classList.add("hidden");
    wordpressText.classList.add("hidden");
    maintenanceText.classList.add("hidden");
});

popupCTA.forEach(function (i) {
    i.addEventListener("click", function () {
        popup.classList.add("hidden");
        webDevText.classList.add("hidden");
        wordpressText.classList.add("hidden");
        maintenanceText.classList.add("hidden");
    });
});