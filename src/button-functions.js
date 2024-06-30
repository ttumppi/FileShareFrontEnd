const OnDownloadClick = (id) => {
    fetch("http://dabblestudios.tplinkdns.com:16000/download/" + id);
}


export {OnDownloadClick, }