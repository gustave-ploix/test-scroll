const fixedEl = document.getElementsByClassName('presentation')[0];

const second = document.getElementById('second')

document.addEventListener('DOMContentLoaded', (e) => {
    document.addEventListener('scroll', (e) => {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        let modifierToAppear = 1;
        let modifierToDisappear = 20;

        if(currentScroll + modifierToAppear > documentHeight) {
            console.log("you're at the bottom");
            fixedEl.classList.add('notFixed')
        }

        if(currentScroll + modifierToDisappear < documentHeight) {
            console.log("you're not at the bottom");
            // secondPage.classList.remove('visible')
            fixedEl.classList.remove('notFixed')

        }

    })
}) 