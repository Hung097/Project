window.onload=function(){
    var view = document.getElementById("view");
    var view_container = document.getElementById("view_container");
    var viewboxs = view_container.children;
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var view_index = document.getElementById("view_index");
    var i_index=0;
    var timer=null;

    for(var i = 0; i<viewboxs.length; i++){
        var span = document.createElement("span");
        if(i===0){
            span.className="view_index_icon current";
        }
        else{
            span.className="view_index_icon";
        }
        span.innerHTML = i+1;
        view_index.appendChild(span);
    }
    var scroll_w = parseInt(view.clientWidth);
    console.log(scroll_w);

    viewboxs[0].style.left = 0 + "px";
    for(var j = 1;j < viewboxs.length; j++){
        viewboxs[j].style.left = scroll_w + "px";
    }
    
    function move_right(){
        scroll_w = parseInt(view.clientWidth)
        startAnimation(viewboxs[i_index],{"left": -scroll_w});
        i_index++;
        if(i_index >= viewboxs.length){
            i_index=0;
        }
        viewboxs[i_index].style.left=scroll_w+'px';
        startAnimation(viewboxs[i_index],{"left": 0});
        changeIndex();
    }
    function move_left(){
        scroll_w = parseInt(view.clientWidth)
        startAnimation(viewboxs[i_index],{"left": scroll_w});
        i_index--;
        if(i_index < 0){
            i_index=viewboxs.length-1;
        }
        viewboxs[i_index].style.left=-scroll_w+'px';
        startAnimation(viewboxs[i_index],{"left": 0});
        changeIndex();
    }
    timer = setInterval(move_right, 3000);
    next.addEventListener("click", move_right);
    prev.addEventListener("click", move_left);
    view.addEventListener("mouseover" ,function(){
        clearInterval(timer);
    });
    view.addEventListener("mouseout" , function(){
        timer=setInterval(move_right, 3000);
    });
    function changeIndex(){
        for(var i = 0;i < index.length;i++){
            index[i].className="view_index_icon";
        }
        index[i_index].className="view_index_icon current";
    }

    var index=view_index.children;
    for(var i=0;i<index.length;i++){
        index[i].addEventListener("click", function(){
            var cur=parseInt(this.innerText)-1;
            if(cur>i_index){
                startAnimation(viewboxs[i_index],{'left': -scroll_w});
                viewboxs[cur].style.left=scroll_w+"px";
            }
            else if(cur<i_index){
                startAnimation(viewboxs[i_index],{'left': scroll_w});
                viewboxs[cur].style.left=-scroll_w+"px";
            }
            i_index=cur;
            startAnimation(viewboxs[i_index],{'left':0});
            changeIndex();
        })
    }

}
var speed=0;
function startAnimation(obj, json ,fn){
    clearInterval(obj.timer);
    obj.timer=setInterval(() => {
        var cur = 0;
        var flag = true;
        for(var attr in json){
            cur = parseInt(getStyle(obj, attr));
            speed = (json[attr] - cur)/20;
            speed = json[attr] > cur ? Math.ceil(speed) : Math.floor(speed);
            if(json[attr] !== cur){
                flag=false;
            }
            obj.style[attr] = cur + speed +'px';
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
            return;
        }
    }, 10);
}
function getStyle(obj, attr){
    if (obj.currentSytle){
        return obj.currentSytle[attr];
    }
    else{
        return getComputedStyle(obj,null)[attr];
    }
}
