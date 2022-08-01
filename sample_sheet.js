var addOpts = document.getElementById('add-opts-samp');

var refName = document.getElementById('ref-name-samp');
var dataName = document.getElementById('data-name-samp');
var dataURL = document.getElementById('data-url');
var refChose = document.getElementById('ref-chosen');

var fastqPath = document.getElementById('fastq-path');
var fastqFile = document.getElementById('fastq-file');
var fastqChose = document.getElementById('fastq-chosen');

var md5sum = document.getElementById('md5sum');

var ftBcPath = document.getElementById('ft-bc-path');
var ftBcFile = document.getElementById('ft-bc-file');
var ftBcChose = document.getElementById('ft-bc-chosen');

var mpLibPath = document.getElementById('mp-lib-path');
var mpLibFile = document.getElementById('mp-lib-file');
var mpLibChose = document.getElementById('mp-lib-chosen');

var sampTable = document.getElementById('sample-files')
var addFiles = document.getElementById('sample-add-files');
var download =document.getElementById('samp-download');


var text = "reference\tref_data\tfasta\tgtf\textra_spliced\textra_unspliced\n";
var firstFile = true;

function handleAddOptsClick() {
    if(addOpts.textContent === '&#9660' || addOpts.textContent === '\u25B2') {
        addOpts.textContent = '\u25BC';
    } else {
        addOpts.textContent = '\u25B2';
    }
}

function addRow() {
    if (refName.value === "" || refPath.value === "" 
    || fastaPath.value === "" || gtfPath.value === "") {
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

        text += refName.value + "\t" + refPath.value +
        "\t" + fastaPath.value + "\t" + gtfPath.value +
        "\t" + addSplPath.value + "\t" + addUnSplPath.value + "\n";


        reference.innerHTML = refName.value;
        ref_data.innerHTML = refPath.value;
        fasta.innerHTML = fastaPath.value;
        gtf.innerHTML = gtfPath.value;
        extra_spl.innerHTML = addSplPath.value;
        extra_unspl.innerHTML = addUnSplPath.value;

        refName.value = "";
        refPath.value = "";
        fastaPath.value="";
        gtfPath.value="";
        addSplPath.value="";
        addUnSplPath.value="";
    }
}

function fastqCheckUpload() {
    fastqChose.textContent='\u2705';
    fastqChose.title=this.files[0].name
}

function ftBcCheckUpload() {
    ftBcChose.textContent='\u2705';
    ftBcChose.title=this.files[0].name
}

function mpLibCheckUpload() {
    mpLibChose.textContent='\u2705';
    mpLibChose.title=this.files[0].name
}

function sampleDownload() {
    getFile("sample_sheet.tsv", text);
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
addOpts.addEventListener('click', handleAddOptsClick);

fastqFile.addEventListener('change', fastqCheckUpload);
ftBcFile.addEventListener('change', ftBcCheckUpload);
mpLibFile.addEventListener('change', mpLibCheckUpload);