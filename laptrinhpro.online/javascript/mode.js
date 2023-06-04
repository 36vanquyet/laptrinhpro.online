const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.querySelector("header.header").classList.toggle("dark");
    document.querySelector("div.container").classList.toggle("dark");
    document.querySelector("footer.footer").classList.toggle("dark");
    document.querySelector("div.footer_info").classList.toggle("dark");
    document.querySelector("div.bar1").classList.toggle("dark");
    document.querySelector("div.bar2").classList.toggle("dark");
    document.querySelector("div.bar3").classList.toggle("dark");
    document.querySelector("label.checkbox-label").classList.toggle("dark");
    document.querySelector("span.ball").classList.toggle("dark");
})