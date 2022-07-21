document.addEventListener("DOMContentLoaded", () => {
    const pelement = document.getElementById("text");
    const updatep = pelement.innerHTML = "This is really cool!"
    console.log(updatep)
})