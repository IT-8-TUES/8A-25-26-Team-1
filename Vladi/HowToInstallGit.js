document.addEventListener('DOMContentLoaded', function() {
    var btnWindows = document.getElementById('btnWindows');
    var btnMac = document.getElementById('btnMac');
    var btnLinux = document.getElementById('btnLinux');

    var contentWindows = document.getElementById('contentWindows');
    var contentMac = document.getElementById('contentMac');
    var contentLinux = document.getElementById('contentLinux');

    function resetSelection() {
        contentWindows.style.display = 'none';
        contentMac.style.display = 'none';
        contentLinux.style.display = 'none';
    
        btnWindows.classListName = '';
        btnMac.classListName = '';
        btnLinux.className = '';
    }

    btnWindows.addEventListener('click', function() {
        resetSelection();
        contentWindows.style.display = 'block';
        btnWindows.className = 'active';
    });

    btnMac.addEventListener('click', function() {
        resetSelection();
        contentMac.style.display = 'block';
        btnMac.className = 'active';
    });

    btnLinux.addEventListener('click', function() {
        resetSelection();
        contentLinux.style.display = 'block';
        btnLinux.className = 'active';
    });

    btnWindows.click();
});