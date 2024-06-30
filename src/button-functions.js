const OnDownloadClick = (id) => {
    //fetch("http://dabblestudios.tplinkdns.com:16000/download/" + id);
    window.location.href = "http://dabblestudios.tplinkdns.com:16000/download/" + id
}

const OnUploadClick = () => {
    const fileControl = document.getElementById("fileSelect");
    const files = fileControl.files;
    if (files.length == 0){
        alert("No File Selected");
        return;
    }

    const formData = new FormData();

    formData.append("file", files[0], files[[0].name]);

    console.log("Uploading file");
    fetch("http://dabblestudios.tplinkdns.com:16000/upload", {
        method: "POST",
        body: formData
    });
}
