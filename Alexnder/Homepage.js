function HideCookies() {
    document.getElementById("cookieoverlay").style.display = "none";
}
function FirstPageButton() {
    window.location.href = "{secondpagename}.html"
}
function ShowBrowseButtons() {
    document.getElementById("browsebuttonscontainer").classList.add("visible");
}
function HideBrowseButtons() {
    document.getElementById("browsebuttonscontainer").classList.remove("visible");
}
function ShowNames() {
    const variable = document.getElementById("namescontainerbuttons");
    if (variable) variable.classList.add("visible");
}
function HideNames() {
    const variable = document.getElementById("namescontainerbuttons");
    if (variable) variable.classList.remove("visible");
}
function TakeToGitInstallPage() {
    window.location.replace('HowToInstallGit.html');
}
function TakeToGitUsePage() {
    window.location.replace('HowToUseGit.html');
}
function TakeToGitHelpPage() {
    window.location.replace('GitHelp.html');
}

const browseContainer = document.getElementById("browsecontainer");
browseContainer.addEventListener("mouseenter", ShowBrowseButtons);
browseContainer.addEventListener("mouseleave", HideBrowseButtons);
const namesContainer = document.getElementById("namescontainer");
if (namesContainer) {
    namesContainer.addEventListener("mouseenter", ShowNames);
    namesContainer.addEventListener("mouseleave", HideNames);
}