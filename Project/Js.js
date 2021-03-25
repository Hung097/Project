var view, up, dialog, close ,check3, img1, img2, img3;
window.onload=function(){
    window.setInterval(check, 1);
    view=document.getElementById("picture");
    window.setInterval(changeView, 2000);
    var home=document.getElementById("home");
    home.classList.add("effect");
    up=document.getElementById("up");
    up.addEventListener("click", function(){
        document.documentElement.scrollTop=0;
    });
    dialog=document.getElementById("number");
    close=document.getElementById("close");
    check3=document.getElementById("check3");
    close.addEventListener("click", function(){
        dialog.style.display="none";
    });
    check3.addEventListener("click", function(){
       dialog.style.display="block";
    });
    img1=document.getElementById("img1");
    img2=document.getElementById("img2");
    img3=document.getElementById("img3");
    img1.addEventListener("click", function(){
        go("youtube");
    });
    img2.addEventListener("click", function(){
        go("facebook");
    });
    img3.addEventListener("click", function(){
        go("gmail");
    });
}
function go(str){
    window.location.replace("http://www."+str+".com/");
}
function check(){
    if(document.documentElement.scrollTop<254){
        up.style.display="none";
    }
    else{
        up.style.display="block";
    }
}
function changeView(){
    if(view.src.match("img/img_1.png")){
        view.src="img/img_2.png";
    }
    else if(view.src.match("img/img_2.png")){
        view.src="img/img_3.png";
    }
    else{
        view.src="img/img_1.png";
    }
}
function hideItem(num){
    var menu=document.getElementById("item-"+num);
    menu.classList.toggle("hide");
}

