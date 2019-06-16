window.addEventListener("load", () => {
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
    }
}

function animateEvilQueenCard() {
    var element = document.getElementById("evilQueenCard");
    if (inView(element)) {
        element.classList.add('animateEvilQueenCard');
        element.classList.add('display');
    }
}

function animateJesterBearCard() {
    var element = document.getElementById("jesterBearCard");
    if (inView(element)) {
        element.classList.add('animateJesterBearCard');
        element.classList.add('display');
    }
}

function animateClubKingCard() {
    var element = document.getElementById("clubKingCard");
    if (inView(element)) {
        element.classList.add('animateClubKingCard');
        element.classList.add('display');
    }
}

function animateHeart() {
    var elementObject = document.getElementById("heart"),
        element = elementObject.contentDocument.getElementById("clip-rect-heart"),
        elementHeart = elementObject.contentDocument.getElementById("heart");

  if (inViewHeart(element)) {
      element.classList.add('animateHeart');
      elementHeart.classList.add('display');
  }
}

function inViewHeart(element) {
    var windowHeight = window.innerHeight,
        scrollY = window.scrollY,
        scrollPosition = scrollY + windowHeight,
        elementObjectDiv = document.getElementById('footer-illo-castle'),
        elementHeight = 0.4 * elementObjectDiv.clientHeight,
        elementPosition = elementObjectDiv.getBoundingClientRect().top + scrollY + elementHeight;
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
