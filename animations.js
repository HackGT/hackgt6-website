window.addEventListener("load", () => {
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
    var elementObject = document.getElementById("paths"),
        element = elementObject.contentDocument.getElementById("clip-rect-path-1"),
        elementPath = elementObject.contentDocument.getElementById("path-1");
        console.log(element)
    if (inViewSVG(element, elementObject)) {
        element.classList.add('animatePath1');
        elementPath.classList.add('display');
    }
}

function animatePath2() {
    var elementObject = document.getElementById("paths"),
        element = elementObject.contentDocument.getElementById("clip-rect-path-2"),
        elementPath = elementObject.contentDocument.getElementById("path-2");
        console.log(element)
    if (inViewSVG(element, elementObject)) {
        element.classList.add('animatePath2');
        elementPath.classList.add('display');
    }
}

function animatePath3() {
    var elementObject = document.getElementById("paths"),
        element = elementObject.contentDocument.getElementById("clip-rect-path-3"),
        elementPath = elementObject.contentDocument.getElementById("path-3");
        console.log(element)
    if (inViewSVG(element, elementObject)) {
        element.classList.add('animatePath3');
        elementPath.classList.add('display');
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
