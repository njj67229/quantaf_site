var addOptsRoe = document.getElementById('add-opts');

var pyRefName = document.getElementById('ref-name');
var refPath = document.getElementById('ref-path');
var refFile = document.getElementById('ref-file');
var refChose = document.getElementById('ref-chosen');

var fastaPath = document.getElementById('fasta-path');
var fastaFile = document.getElementById('fasta-file');
var fastaChose = document.getElementById('fasta-chosen');

var gtfPath = document.getElementById('gtf-path');
var gtfFile = document.getElementById('gtf-file');
var gtfChose = document.getElementById('gtf-chosen');

var addSplPath = document.getElementById('add-spl-path');
var addSplFile = document.getElementById('add-spl-file');
var addSplChose = document.getElementById('add-spl-chosen');

var addUnSplPath = document.getElementById('add-un-spl-path');
var addUnSplFile = document.getElementById('add-un-spl-file');
var addUnSplChose = document.getElementById('add-un-spl-chosen');

var pyroeTable = document.getElementById('pyroe-files')
var addFiles = document.getElementById('pyroe-add-files');
var download =document.getElementById('pyroe-download');


var text = "reference\tref_data\tfasta\tgtf\textra_spliced\textra_unspliced\n";
var firstFile = true;

function handleAddOptsClick() {
    if(addOptsRoe.textContent === '&#9660' || addOptsRoe.textContent === '\u25B2') {
        addOptsRoe.textContent = '\u25BC';
    } else {
        addOptsRoe.textContent = '\u25B2';
    }
}

function addRow() {
    if (pyRefName.value === "" || refPath.value === "" 
    || fastaPath.value === "" || gtfPath.value === "") {
        console.log(pyRefName.value)
        console.log(refPath.value)
        console.log(fastaPath.value)
        console.log(gtfPath.value)
    } else {
        if(firstFile) {
            pyroeTable.deleteRow(1);
            firstFile = false;
        }
        var row = pyroeTable.insertRow(-1);
        var reference = row.insertCell(-1);
        var ref_data = row.insertCell(-1);
        var fasta = row.insertCell(-1);
        var gtf = row.insertCell(-1);
        var extra_spl = row.insertCell(-1);
        var extra_unspl = row.insertCell(-1);

        text += pyRefName.value + "\t" + refPath.value +
        "\t" + fastaPath.value + "\t" + gtfPath.value +
        "\t" + addSplPath.value + "\t" + addUnSplPath.value + "\n";


        reference.innerHTML = pyRefName.value;
        ref_data.innerHTML = refPath.value;
        fasta.innerHTML = fastaPath.value;
        gtf.innerHTML = gtfPath.value;
        extra_spl.innerHTML = addSplPath.value;
        extra_unspl.innerHTML = addUnSplPath.value;

        pyRefName.value = "";
        refPath.value = "";
        fastaPath.value="";
        gtfPath.value="";
        addSplPath.value="";
        addUnSplPath.value="";
    }
}

function refCheckUpload() {
    refChose.textContent='\u2705';
    refChose.title=this.files[0].name
}

function fastaCheckUpload() {
    fastaChose.textContent='\u2705';
    fastaChose.title=this.files[0].name
}

function gtfCheckUpload() {
    gtfChose.textContent='\u2705';
    gtfChose.title=this.files[0].name
}

function addSplCheckUpload() {
    addSplChose.textContent='\u2705';
    addSplChose.title=this.files[0].name
}

function addUnSplCheckUpload() {
    addUnSplChose.textContent='\u2705';
    addUnSplChose.title=this.files[0].name
}



function pyroeDownload() {
    getFile("ref_sheet.tsv", text);
}

function getFile(filename, fileText) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileText));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
    document.body.removeChild(element);
}


download.addEventListener('click', pyroeDownload)
addFiles.addEventListener('click', addRow);
addOptsRoe.addEventListener('click', handleAddOptsClick);
refFile.addEventListener('change', refCheckUpload);
fastaFile.addEventListener('change', fastaCheckUpload);
gtfFile.addEventListener('change', gtfCheckUpload);
addSplFile.addEventListener('change', addSplCheckUpload);
addUnSplFile.addEventListener('change', addUnSplCheckUpload);