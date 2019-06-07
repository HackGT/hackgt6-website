const main = () => {
    // Smooth scroll - modified from https://codepen.io/StephenScaff/pen/yyQxbq
    // Also from https://gist.github.com/andjosh/6764939
    const links = document.querySelectorAll('[data-scroll]');
    links.forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            // Set Offset Distance from top to account for fixed nav
            const offset = 10;
            const targetID = e.target.dataset.scroll;
            const section = document.getElementById(targetID);
            if (!section) {
                console.error("No graceful failure here");
            }
            console.log(section.offsetTop - offset);
            window.scrollTo({
                top: section.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });

    // TODO: hiding navbar
}

window.addEventListener('load', main);