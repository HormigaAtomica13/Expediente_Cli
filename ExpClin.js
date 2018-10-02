function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

//TOMAR FOTOS
function FunctionTomar(){
    var video= document.getElementById('video'), 
        canvas= document.getElementById('canvas'),
        context=canvas.getContext('2d'),
        photo=document.getElementById('photo'),
        vendoUrl=window.URL|| window.webkitURL;

        navigator.getMedia=navigator.getUserMedia||
                        navigator.webkitGetUserMedia||
                        navigator.mozGetUserMedia||
                        navigator.msGetUserMedia;
        
        navigator.getMedia({
            video:true,
            audio:false
        },function(stream){
            video.src=vendoUrl.createObjectURL(stream);
            video.play();
        },function(error){

        });
        document.getElementById('Capture').addEventListener('click',function(){
            context.drawImage(video,0,0,400,300);
            photo.setAttribute('src',canvas.toDataURL('image/png'));

        });
    }