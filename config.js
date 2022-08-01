var readLength = document.getElementById('read-len');
var filePref = document.getElementById('file-pref');
var flankLength = document.getElementById('flank-len');
var trimCheck = document.getElementById('trim-check');
var filePrefCheck = document.getElementById('file-pref-check');


function trimChecked() {
    flankLength.disabled = !flankLength.disabled;        
}

function filePrefChecked() {
    filePref.disabled = !filePref.disabled;
}

trimCheck.addEventListener('click', trimChecked)
filePrefCheck.addEventListener('click', filePrefChecked)