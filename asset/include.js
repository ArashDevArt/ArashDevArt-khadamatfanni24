async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
    

    if (id === "header") {

        // Hamburger Menu

        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");

        if (menuBtn && mobileMenu) {

            menuBtn.addEventListener("click", () => {

                mobileMenu.classList.toggle("hidden");

            });

        }

        // Active Link

        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".nav-link").forEach(link => {

            const href = link.getAttribute("href");

            if (href === currentPage) {

                link.classList.add(
                    "text-blue-600",
                    "font-bold"
                );

            }

        });

    }

}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
