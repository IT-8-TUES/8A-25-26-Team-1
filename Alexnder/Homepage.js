function HideCookies() {
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
function TakeToSecondPage() {
    window.location.replace('gitcmd.html');
}

const browseContainer = document.getElementById("browsecontainer");
browseContainer.addEventListener("mouseenter", ShowBrowseButtons);
browseContainer.addEventListener("mouseleave", HideBrowseButtons);