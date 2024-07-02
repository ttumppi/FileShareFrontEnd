const OnDownloadClick = (id) => {
    window.location.href = "https://dabblestudios.tplinkdns.com:16000/download/" + id
}

const  OnUploadClick = async () => {
    console.log("Upload button clicked");
    const fileControl = document.getElementById("fileSelect");
    const files = fileControl.files;
    if (files.length == 0){
        alert("No File Selected");
        return;
    }

    const formData = new FormData();

    formData.append("file", files[0]);

    console.log("Uploading file");
    const popupWindow = showPopup();
    const response = await fetch("https://dabblestudios.tplinkdns.com:16000/upload", {
        method: "POST",
        body: formData
    });
    popupWindow.closePopup();
    if (response.status != 200) {
        alert(response.headers.get("Errors"));
    }
    location.reload();
}

const OnDeleteClick = async (id) => {
    await fetch("https://dabblestudios.tplinkdns.com:16000/delete/" + id);
    location.reload();
}


const  showPopup = () => {
  
    const popupContent = `
        <div style="padding: 20px; text-align: center;">
            <h2>Notification</h2>
            <p>Upload in progress, please wait!</p>
            <button onclick="closePopup()">Close</button>
        </div>
    `;

    const popupWindow = window.open("", "_blank", "width=400,height=300");

    popupWindow.document.write(popupContent);

    popupWindow.closePopup = function() {
        popupWindow.close();
    };
    return popupWindow;
}
