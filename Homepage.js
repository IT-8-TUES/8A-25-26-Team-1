function HideCookies() {
    document.getElementById("cookies").style.display = "none";
}
function DeclineCookies() {
    document.getElementById("cookies").style.display = "none";
}
function FirstPageButton() {
    window.location.href = "{secondpagename}.html"
}
function ShowBrowseButtons() {
    document.getElementById("browsebuttonscontainer").style.display = "block";
}
function HideBrowseButtons() {
    document.getElementById("browsebuttonscontainer").style.display = "none";
}

browseContainer.addEventListener("mouseenter", ShowBrowseButtons);
browseContainer.addEventListener("mouseleave", HideBrowseButtons);