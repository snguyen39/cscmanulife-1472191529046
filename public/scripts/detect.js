var isMobile = {
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    any: function() {
        if(isMobile.Android()){
            return "Android";
        }
        else if(isMobile.iOS()){
            return "iOS";
        }
        else if(isMobile.BlackBerry()){
            return "BlackBerry";
        }
        else 
            return "Windows";
    }
};

var gradMakerDownload = document.getElementById("gradMakerDownload");

if(isMobile.any() == "iOS"){
    gradMakerDownload.href = "itms-services://?action=download-manifest&url=https://cscmanulife.mybluemix.net/build/GradMaker.plist";
    
}
else if(isMobile.any() == "Android") {
    gradMakerDownload.href = "";
}
else{
    gradMakerDownload.href = "";
}


