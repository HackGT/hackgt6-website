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

  if (inViewSVG(element, elementObject)) {
      elementHeart.classList.add('display');
      element.classList.add('animateHeart');
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
    console.log(elementObject.clientHeight)
    var windowHeight = window.innerHeight,
        scrollY = window.scrollY,
        scrollPosition = scrollY + windowHeight,
        elementHeight = 0.4 * elementObject.clientHeight,
        elementPosition = elementObject.getBoundingClientRect().top + scrollY + elementHeight;
    console.log("scroll Position " + scrollPosition)
    console.log("element Position " + elementPosition)
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
