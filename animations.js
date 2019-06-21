var heroContent,
    diamondBearCard,
    evilQueenCard,
    jesterBearCard,
    clubKingCard,
    heart,
    heartObject,
    heartElement,
    heroObject,
    path1,
    path1Element,
    path2,
    path2Element,
    path3,
    path3Element,
    heartContentDocument,
    pathsContentDocument,
    windowHeight,
    scrollY,
    scrollPosition,
    elementHeight,
    elementPosition;

window.addEventListener("load", () => {
    heroContent = document.getElementById("hero-content");
    diamondBearCard = document.getElementById("diamondBearCard");
    evilQueenCard = document.getElementById("evilQueenCard");
    jesterBearCard = document.getElementById("jesterBearCard");
    clubKingCard = document.getElementById("clubKingCard");

    heartObject = document.getElementById("heart");
    heartContentDocument = heartObject.contentDocument;
    heart = heartContentDocument.getElementById("clip-rect-heart");
    heartElement = heartContentDocument.getElementById("heart");

    heroObject = document.getElementById("forest-illo-base");

    pathsContentDocument = heroObject.contentDocument;
    path1 = pathsContentDocument.getElementById("clip-rect-path-1");
    path1Element = pathsContentDocument.getElementById("path-1");
    path2 = pathsContentDocument.getElementById("clip-rect-path-2");
    path3 = pathsContentDocument.getElementById("clip-rect-path-3");

    document.addEventListener('scroll', animatePath1);
    document.addEventListener('scroll', animatePath2);
    document.addEventListener('scroll', animatePath3);
    document.addEventListener('scroll', animateHeart);
    document.addEventListener('scroll', animateDiamondBearCard);
    document.addEventListener('scroll', animateEvilQueenCard);
    document.addEventListener('scroll', animateJesterBearCard);
    document.addEventListener('scroll', animateClubKingCard);
})


function animateDiamondBearCard() {
    if (inView(diamondBearCard)) {
        diamondBearCard.classList.add('animateDiamondBearCard');
        diamondBearCard.classList.add('display');
        document.removeEventListener('scroll', animateDiamondBearCard);
    }
}

function animateEvilQueenCard() {
    if (inView(evilQueenCard)) {
        evilQueenCard.classList.add('animateEvilQueenCard');
        evilQueenCard.classList.add('display');
        document.removeEventListener('scroll', animateEvilQueenCard);
    }
}

function animateJesterBearCard() {
    if (inView(jesterBearCard)) {
        jesterBearCard.classList.add('animateJesterBearCard');
        jesterBearCard.classList.add('display');
        document.removeEventListener('scroll', animateJesterBearCard);
    }
}

function animateClubKingCard() {
    if (inView(clubKingCard)) {
        clubKingCard.classList.add('animateClubKingCard');
        clubKingCard.classList.add('display');
        document.removeEventListener('scroll', animateClubKingCard);
    }
}

function animateHeart() {
  if (inViewSVG(heart, heartObject)) {
      heartElement.classList.add('display');
      heart.classList.add('animateHeart');
      document.removeEventListener('scroll', animateHeart);
  }
}

function animatePath1() {
    if (inViewSVG(path1, heroObject)) {
        path1.classList.add('animatePath1');
        path1Element.classList.add('display');
        document.removeEventListener('scroll', animatePath1);
    }
}

function animatePath2() {
    if (inViewSVG(path2, heroObject)) {
        path2.classList.add('animatePath2');
        document.removeEventListener('scroll', animatePath2);
    }
}

function animatePath3() {
    if (inViewSVG(path3, heroObject)) {
        path3.classList.add('animatePath3');
        document.removeEventListener('scroll', animatePath3);
    }
}

function inViewSVG(element, elementObject) {
    windowHeight = window.innerHeight,
    scrollY = window.scrollY,
    scrollPosition = scrollY + windowHeight,
    elementHeight = 0.4 * elementObject.clientHeight,
    elementPosition = elementObject.getBoundingClientRect().top + scrollY + elementHeight;
    return scrollPosition > elementPosition;
}

function inView(element) {
    windowHeight = window.innerHeight,
    scrollY = window.scrollY,
    scrollPosition = scrollY + windowHeight,
    elementHeight = 0.4 * element.clientHeight,
    elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    return scrollPosition > elementPosition;
}
