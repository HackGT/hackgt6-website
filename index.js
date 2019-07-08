const main = () => {
    // Smooth scroll - modified from https://codepen.io/StephenScaff/pen/yyQxbq
    const links = document.querySelectorAll('[data-scroll]');
    links.forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            // Set Offset Distance from top to account for fixed nav
            let offset = 10;
            const targetID = e.target.dataset.scroll;
            if (targetID === 'schedule') {
                offset = 160;
            }
            const section = document.getElementById(targetID);
            if (!section) {
                console.error("No graceful failure here");
            }
            window.scrollTo({
                top: section.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });

    // TODO: blend navbar on inactivity (depends on hero - blend modes?)
    // Hide on scroll - https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    let cachedScroll = window.pageYOffset;
    // TODO enable only if nav is even visible
    // TODO set nav background to section color
    window.addEventListener('scroll', () => {
        if (cachedScroll > window.pageYOffset
            || (document.activeElement
                && document.activeElement.classList.contains('nav-link'))) { // navbar
                    document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-6vh";
        }
        cachedScroll = window.pageYOffset;
    })

    document.addEventListener('mousemove', () => {
        // TODO roll down splash
    });
}

window.addEventListener('load', main);