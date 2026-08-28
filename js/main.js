/* =========================================================
   KBG — LANGUAGE SYSTEM
   ========================================================= */


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    fa: {

        "brand.name":
            "KLAUS",

        "brand.tagline":
            "هوش برند",

        "brand.description":
            "ساخت سیستم‌های هوشمند برند با هوش مصنوعی و استراتژی",


        "hero.title":
            "راهنمای برند",

        "hero.description":
            "معرفی کوتاه برند و داستان شکل‌گیری آن",


        "philosophy.title":
            "فلسفه برند",

        "philosophy.vision":
            "چشم‌انداز",

        "philosophy.values":
            "ارزش‌ها",

        "philosophy.strategy":
            "استراتژی",


        "identity.title":
            "سیستم هویت",

        "identity.logo":
            "سیستم لوگو",

        "identity.color":
            "زبان رنگ",

        "identity.typography":
            "تایپوگرافی",


        "assets.title":
            "دارایی‌ها",

        "assets.images":
            "تصاویر",

        "assets.videos":
            "ویدیوها",

        "assets.audio":
            "صدا",


        "ai.title":
            "هوش مصنوعی",

        "ai.engine":
            "موتور هوش مصنوعی",

        "ai.automation":
            "اتوماسیون",

        "ai.assistant":
            "دستیار برند",


       "nav.opening":
    "شروع",

"nav.intro":
    "معرفی",

"nav.philosophy":
    "فلسفه",

"nav.identity":
    "هویت",

"nav.assets":
    "دارایی‌ها",

"nav.ai":
    "هوش مصنوعی",

"nav.music":
    "موسیقی",

       

        "closing.title":
            "فراتر از هویت بساز"

    },


    en: {

        "brand.name":
            "KLAUS",

        "brand.tagline":
            "Brand Intelligence",

        "brand.description":
            "Building intelligent brand systems with AI and strategy",


        "hero.title":
            "Brand Guide",

        "hero.description":
            "A short introduction to the brand and its story",


        "philosophy.title":
            "Philosophy",

        "philosophy.vision":
            "Vision",

        "philosophy.values":
            "Values",

        "philosophy.strategy":
            "Strategy",


        "identity.title":
            "Identity System",

        "identity.logo":
            "Logo System",

        "identity.color":
            "Color Language",

        "identity.typography":
            "Typography",


        "assets.title":
            "Assets",

        "assets.images":
            "Images",

        "assets.videos":
            "Videos",

        "assets.audio":
            "Audio",


        "ai.title":
            "AI Intelligence",

        "ai.engine":
            "AI Engine",

        "ai.automation":
            "Automation",

        "ai.assistant":
            "Brand Assistant",


"nav.opening":
    "Opening",

"nav.intro":
    "Introduction",

"nav.philosophy":
    "Philosophy",

"nav.identity":
    "Identity",

"nav.assets":
    "Assets",

"nav.ai":
    "AI",

"nav.music":
    "Music",

       
        "closing.title":
            "Build Beyond Identity"

    }

};


/* =========================================================
   CHANGE LANGUAGE
   ========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        return;
    }


    /* ---------- HTML Direction ---------- */

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "fa"
            ? "rtl"
            : "ltr";


    /* ---------- Body Language ---------- */

    document.body.dataset.lang = language;


    /* ---------- Replace Text ---------- */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const value =
                translations[language][key];

            if (value !== undefined) {

                element.textContent = value;

            }

        });


    /* ---------- Update Buttons ---------- */

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === language
            );

        });


    /* ---------- Save Language ---------- */

    localStorage.setItem(
        "kbg-language",
        language
    );

}


/* =========================================================
   LANGUAGE BUTTONS
   ========================================================= */

document
    .querySelectorAll(".language-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    });


/* =========================================================
   INITIAL LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem("kbg-language");


setLanguage(
    savedLanguage || "fa"
);


/* =========================================================
   MAIN NAVIGATION
   ========================================================= */

const navigationItems =
    document.querySelectorAll(".nav-item");


navigationItems.forEach(item => {

    item.addEventListener("click", () => {

        const sectionId =
            item.dataset.section;

        const target =
            document.getElementById(sectionId);


        if (!target) {
            return;
        }


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        navigationItems.forEach(navItem => {

            navItem.classList.remove("active");

        });


        item.classList.add("active");

    });

});





