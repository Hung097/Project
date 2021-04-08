window.addEventListener("load", function(){

    
    var inf = document.getElementById("inf");
    var item = inf.children;
    var data = document.getElementsByClassName("data");
    var dog = document.getElementsByClassName("dog");
    var cat = document.getElementsByClassName("cat");
    var heart = document.getElementsByClassName("heart");

    function item_clear(){
        for(var i=0; i<item.length;i++){
            item[i].className="item";
        }
    }

    item[0].className+=" item_focus";
    item[0].addEventListener("click" ,function(){
        item_clear();
        item[0].className+=" item_focus";
        for(var i=0;i<dog.length;i++){
            dog[i].style.display="block";
        }
        for(var i=0;i<cat.length;i++){
            cat[i].style.display="block";
        }
    })
    item[1].addEventListener("click" ,function(){
        item_clear();
        item[1].className+=" item_focus";
        for(var i=0;i<dog.length;i++){
            dog[i].style.display="block";
        }
        for(var i=0;i<cat.length;i++){
            cat[i].style.display="none";
        }
    })
    item[2].addEventListener("click" ,function(){
        item_clear();
        item[2].className+=" item_focus";
        for(var i=0;i<cat.length;i++){
            cat[i].style.display="block";
        }
        for(var i=0;i<dog.length;i++){
            dog[i].style.display="none";
        }
    })
    item[3].addEventListener("click" ,function(){
        item_clear();
        var mark = document.getElementsByClassName("mark");
        item[3].className+=" item_focus";
        for(var i=0;i<dog.length;i++){
            dog[i].style.display="none";
        }
        for(var i=0;i<cat.length;i++){
            cat[i].style.display="none";
        }
        for(var i=0;i<mark.length;i++){
            mark[i].style.display="block";
        }
    })

    function check(data,img){
        if(data.classList.contains("mark")){
            img.src="img/heart-fill.png";
        }
        else{
            img.src="img/heart.png";
        }
    }
    heart[0].addEventListener("click" ,function(){
        data[0].classList.toggle("mark");
        check(data[0],heart[0]);
    })
    heart[1].addEventListener("click" ,function(){
        data[1].classList.toggle("mark");
        check(data[1],heart[1]);
    })
    heart[2].addEventListener("click" ,function(){
        data[2].classList.toggle("mark");
        check(data[2],heart[2]);
    })
    heart[3].addEventListener("click" ,function(){
        data[3].classList.toggle("mark");
        check(data[3],heart[3]);
    })
    heart[4].addEventListener("click" ,function(){
        data[4].classList.toggle("mark");
        check(data[4],heart[4]);
    })
    heart[5].addEventListener("click" ,function(){
        data[5].classList.toggle("mark");
        check(data[5],heart[5]);
    })
    heart[6].addEventListener("click" ,function(){
        data[6].classList.toggle("mark");
        check(data[6],heart[6]);
    })
    heart[7].addEventListener("click" ,function(){
        data[7].classList.toggle("mark");
        check(data[7],heart[7]);
    })
    heart[8].addEventListener("click" ,function(){
        data[8].classList.toggle("mark");
        check(data[8],heart[8]);
    })
    heart[9].addEventListener("click" ,function(){
        data[9].classList.toggle("mark");
        check(data[9],heart[9]);
    })
    heart[10].addEventListener("click" ,function(){
        data[10].classList.toggle("mark");
        check(data[10],heart[10]);
    })
    heart[11].addEventListener("click" ,function(){
        data[11].classList.toggle("mark");
        check(data[11],heart[11]);
    })
    heart[12].addEventListener("click" ,function(){
        data[12].classList.toggle("mark");
        check(data[12],heart[12]);
    })
    heart[13].addEventListener("click" ,function(){
        data[13].classList.toggle("mark");
        check(data[13],heart[13]);
    })
    heart[14].addEventListener("click" ,function(){
        data[14].classList.toggle("mark");
        check(data[14],heart[14]);
    })
    heart[15].addEventListener("click" ,function(){
        data[15].classList.toggle("mark");
        check(data[15],heart[15]);
    })
    heart[16].addEventListener("click" ,function(){
        data[16].classList.toggle("mark");
        check(data[16],heart[16]);
    })
    heart[17].addEventListener("click" ,function(){
        data[17].classList.toggle("mark");
        check(data[17],heart[17]);
    })
    heart[18].addEventListener("click" ,function(){
        data[18].classList.toggle("mark");
        check(data[18],heart[18]);
    })
    heart[19].addEventListener("click" ,function(){
        data[19].classList.toggle("mark");
        check(data[19],heart[19]);
    })
    heart[20].addEventListener("click" ,function(){
        data[20].classList.toggle("mark");
        check(data[20],heart[20]);
    })
    heart[21].addEventListener("click" ,function(){
        data[21].classList.toggle("mark");
        check(data[21],heart[21]);
    })
    heart[22].addEventListener("click" ,function(){
        data[22].classList.toggle("mark");
        check(data[22],heart[22]);
    })
    heart[23].addEventListener("click" ,function(){
        data[23].classList.toggle("mark");
        check(data[23],heart[23]);
    })
    heart[24].addEventListener("click" ,function(){
        data[24].classList.toggle("mark");
        check(data[24],heart[24]);
    })
    heart[25].addEventListener("click" ,function(){
        data[25].classList.toggle("mark");
        check(data[25],heart[25]);
    })
    heart[26].addEventListener("click" ,function(){
        data[26].classList.toggle("mark");
        check(data[26],heart[26]);
    })
    heart[27].addEventListener("click" ,function(){
        data[27].classList.toggle("mark");
        check(data[27],heart[27]);
    })
    heart[28].addEventListener("click" ,function(){
        data[28].classList.toggle("mark");
        check(data[28],heart[28]);
    })
    heart[29].addEventListener("click" ,function(){
        data[29].classList.toggle("mark");
        check(data[29],heart[29]);
    })


})