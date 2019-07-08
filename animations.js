var heroContent,
    diamondBearCard,
    evilQueenCard,
    jesterBearCard,
    clubKingCard,
    heart,
    heartObject,
    heartElement,
    heroObject,
    heartContentDocument,
    windowHeight,
    scrollY,
    scrollPosition,
    elementHeight,
    elementPosition;

window.addEventListener("load", () => {
    diamondBearCard = document.getElementById("diamondBearCard");
    evilQueenCard = document.getElementById("evilQueenCard");
    jesterBearCard = document.getElementById("jesterBearCard");
    clubKingCard = document.getElementById("clubKingCard");

    heartObject = document.getElementById("heart");
    heartContentDocument = heartObject.contentDocument;
    heart = heartContentDocument.getElementById("clip-rect-heart");
    heartElement = heartContentDocument.getElementById("heart");

    document.addEventListener('scroll', animateHeart);
    document.addEventListener('scroll', animateDiamondBearCard);
    document.addEventListener('scroll', animateEvilQueenCard);
    document.addEventListener('scroll', animateJesterBearCard);
    document.addEventListener('scroll', animateClubKingCard);
})


function animateDiamondBearCard() {
    var element = document.getElementById("diamondBearCard");
    if (inView(element)) {
        element.classList.add('animateDiamondBearCard');
        element.classList.add('display');
        document.removeEventListener('scroll', animateDiamondBearCard);
    }
}

function animateEvilQueenCard() {
    var element = document.getElementById("evilQueenCard");
    if (inView(element)) {
        element.classList.add('animateEvilQueenCard');
        element.classList.add('display');
        document.removeEventListener('scroll', animateEvilQueenCard);
    }
}

function animateJesterBearCard() {
    var element = document.getElementById("jesterBearCard");
    if (inView(element)) {
        element.classList.add('animateJesterBearCard');
        element.classList.add('display');
        document.removeEventListener('scroll', animateJesterBearCard);
    }
}

function animateClubKingCard() {
    var element = document.getElementById("clubKingCard");
    if (inView(element)) {
        element.classList.add('animateClubKingCard');
        element.classList.add('display');
        document.removeEventListener('scroll', animateClubKingCard);
    }
}

function animateHeart() {
    var elementObject = document.getElementById("heart"),
        element = elementObject.contentDocument.getElementById("clip-rect-heart"),
        elementHeart = elementObject.contentDocument.getElementById("heart");

    if (inViewSVG(element, elementObject)) {
        elementHeart.classList.add('display');
        element.classList.add('animateHeart');
        document.removeEventListener('scroll', animateHeart);
    }
}

function inViewSVG(element, elementObject) {
    var windowHeight = window.innerHeight,
    scrollY = window.scrollY,
    scrollPosition = scrollY + windowHeight,
    elementHeight = 0.4 * elementObject.clientHeight,
    elementPosition = elementObject.getBoundingClientRect().top + scrollY + elementHeight;
    return scrollPosition > elementPosition;
}

function inView(element) {
    var windowHeight = window.innerHeight,
        scrollY = window.scrollY,
        scrollPosition = scrollY + windowHeight,
        elementHeight = 0.4 * element.clientHeight,
        elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    return scrollPosition > elementPosition;
}
