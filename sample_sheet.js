var addOpts = document.getElementById('add-opts-samp');

var refName = document.getElementById('ref-name-samp');
var dataName = document.getElementById('data-name-samp');
var dataURL = document.getElementById('data-url');
var refChose = document.getElementById('ref-chosen');

var fastqPath = document.getElementById('fastq-path');
var fastqFile = document.getElementById('fastq-file');
var fastqChose = document.getElementById('fastq-chosen');

var md5sum = document.getElementById('md5sum');
var md5sumCheck = document.getElementById('md5sum-check');


var ftBcPath = document.getElementById('ft-bc-path');
var ftBcFile = document.getElementById('ft-bc-file');
var ftBcChose = document.getElementById('ft-bc-chosen');

var mpLibPath = document.getElementById('mp-lib-path');
var mpLibFile = document.getElementById('mp-lib-file');
var mpLibChose = document.getElementById('mp-lib-chosen');

var sampTable = document.getElementById('sample-files')
var addSampFiles = document.getElementById('sample-add-files');
var downloadSamp = document.getElementById('samp-download');

var v2Chem = document.getElementById('v2')
var v3Chem = document.getElementById('v3')
var customChem = document.getElementById('custom-chem')
var chemVal = document.getElementById('chem-val')

var selectedChem = e;

var text = "chemistry\treference\tdataset_name\tdataset_url\tfastq_url\tfastq_MD5sum\tdelete_fastq\tfeature_barcode_csv_url\tmultiplexing_library_csv_url\n";
var firstSampFile = true;

function handleAddOptsClick() {
    if(addOpts.textContent === '&#9660' || addOpts.textContent === '\u25B2') {
        addOpts.textContent = '\u25BC';
    } else {
        addOpts.textContent = '\u25B2';
    }
}

function swapChem() {
    selectedChem.style.backgroundColor = "transparent";
    selectedChem.style.color = "black";
    selectedChem = this;
    this.style.backgroundColor = "#095078";
    this.style.color = "#85E79C";
    chemVal.textContent = "Chemistry: " + selectedChem.textContent;
}

function addRow() {
    if (refName.value === "" || refPath.value === "" 
    || fastaPath.value === "" || gtfPath.value === "") {

    } else {
        if(firstSampFile) {
            pyroeTable.deleteRow(1);
            firstFile = false;
        }

        var text = "chemistry\treference\tdataset_name\tdataset_url\tfastq_url\tfastq_MD5sum\tdelete_fastq\tfeature_barcode_csv_url\tmultiplexing_library_csv_url\n";

        var row = sampTable.insertRow(-1);
        var chem = row.insertCell(-1);
        var reference = row.insertCell(-1);
        var dataSetName = row.insertCell(-1);
        var dataSetURL = row.insertCell(-1);
        var fastq = row.insertCell(-1);
        var fastqMD5 = row.insertCell(-1);
        var deleteFastq = row.insertCell(-1);
        var featureBarcode = row.insertCell(-1);
        var multiPlex = row.insertCell(-1);

        text += refName.value + "\t" + refPath.value +
        "\t" + fastaPath.value + "\t" + gtfPath.value +
        "\t" + addSplPath.value + "\t" + addUnSplPath.value + "\n";

        
        chem.innerHTML = "v2";
        chem.innerHTML = "v3";

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

function md5Enabled() {
    md5sum.disabled = !md5sum.disabled;    
}

downloadSamp.addEventListener('click', pyroeDownload)
addSampFiles.addEventListener('click', addRow);
addOpts.addEventListener('click', handleAddOptsClick);

fastqFile.addEventListener('change', fastqCheckUpload);
ftBcFile.addEventListener('change', ftBcCheckUpload);
mpLibFile.addEventListener('change', mpLibCheckUpload);

v2Chem.addEventListener('click', swapChem);
v3Chem.addEventListener('click', swapChem);
customChem.addEventListener('click', swapChem);

md5sumCheck.addEventListener('click', md5Enabled);