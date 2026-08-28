/* =========================================================
   KBG — Base Card System
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll("[data-card]");

    cards.forEach((card) => {

        const trigger = card.querySelector(".kbg-card__trigger");

        if (!trigger) return;

        trigger.addEventListener("click", () => {

            const isOpen = card.classList.contains("is-open");

            if (isOpen) {
                closeCard(card);
            } else {
                openCard(card);
            }

        });

    });


    function openCard(card) {

        card.classList.add("is-open");

        const trigger = card.querySelector(".kbg-card__trigger");

        if (trigger) {
            trigger.setAttribute("aria-expanded", "true");
        }

    }


    function closeCard(card) {

        card.classList.remove("is-open");

        const trigger = card.querySelector(".kbg-card__trigger");

        if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
        }

    }

});
