/* =========================================================
   PORTFOLIO JAVASCRIPT
   ใช้ JavaScript เฉพาะส่วนที่จำเป็น
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOAD ANIMATION
       ===================================================== */

    document.body.classList.add("page-loaded");


    /* =====================================================
       BACKGROUND VIDEO
       ถ้าไม่มี video ให้ใช้ Gradient Background แทน
       ===================================================== */

    const video = document.querySelector(".background-video");

    if (video) {

        video.addEventListener("error", () => {

            video.style.display = "none";

        });

        video.addEventListener("loadeddata", () => {

            video.style.display = "block";

        });

    }


    /* =====================================================
       PAGE TRANSITION
       เมื่อคลิกลิงก์ภายในเว็บไซต์
       ===================================================== */

    const internalLinks = document.querySelectorAll(
        'a[href$=".html"], a[href="index.html"]'
    );

    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const target = link.getAttribute("href");

            if (!target || target.startsWith("#")) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = target;

            }, 250);

        });

    });


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons = document.querySelectorAll(
        ".btn, .back-btn, .social-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("click", function(event) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = this.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

});