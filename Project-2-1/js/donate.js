$('document').ready(function(){
    var can_count=0,feeder_count=0,cat_can_count=0,cat_feeder_count=0;
    var shoplist={};
    shoplist.list=[
        {name: "狗罐頭",price: 59,count: 0},
        {name: "狗飼料",price: 400,count: 0},
        {name: "貓罐頭",price: 49,count: 0},
        {name: "貓飼料",price: 350,count: 0}
    ]
    $('.reduce').hover(function(){
        $(this).toggleClass('check_color');
    })
    $('.increase').hover(function(){
        $(this).toggleClass('check_color');
    })
    

    $('#can_count_reduce').click(function(){
        if(can_count>0){
            can_count--;
            shoplist.list[0].count=can_count;
            $('#can_count').val(can_count);
        }
    })
    $('#can_count_increase').click(function(){
        can_count++;
        shoplist.list[0].count=can_count;
        $('#can_count').val(can_count);
    })

    $('#feeder_count_reduce').click(function(){
        if(feeder_count>0){
            feeder_count--;
            shoplist.list[1].count=feeder_count;
            $('#feeder_count').val(feeder_count);
        }
    })
    $('#feeder_count_increase').click(function(){
        feeder_count++;
        shoplist.list[1].count=feeder_count;
        $('#feeder_count').val(feeder_count);
    })

    $('#cat_can_reduce').click(function(){
        if(cat_can_count>0){
            cat_can_count--;
            shoplist.list[2].count=cat_can_count;
            $('#cat_can_count').val(cat_can_count);
        }
    })
    $('#cat_can_increase').click(function(){
        cat_can_count++;
        shoplist.list[2].count=cat_can_count;
        $('#cat_can_count').val(cat_can_count);
    })

    $('#cat_feeder_reduce').click(function(){
        if(cat_feeder_count>0){
            cat_feeder_count--;
            shoplist.list[3].count=cat_feeder_count;
            $('#cat_feeder_count').val(cat_feeder_count);
        }
    })
    $('#cat_feeder_increase').click(function(){
        cat_feeder_count++;
        shoplist.list[3].count=cat_feeder_count;
        $('#cat_feeder_count').val(cat_feeder_count);
    })

    $('#finish').click(function(){
        $('#wrap').slideDown();
        showlist();
    })

    
    var item_html="<li class='buy_item'>{{name}} ${{price}} * {{count}}/個</li><div class='buy_price'> = {{sum}}</div>";
    var total_html="<li class='total'>小計 : {{price}} 元</li><div id='enter' class='enter'>下一步</div><div id='cancle' class='cancle'>取消</div>";
    function showlist(){
        $('#wrap_list').html("<h1>總額清單</h1>");
        var total_price=0;
        for(var i=0;i<shoplist.list.length;i++){
            var items=shoplist.list[i];
            var sum=parseInt(items.price)*parseInt(items.count);
            total_price+=sum;
            var current_html=
            item_html.replace("{{name}}",items.name)
                    .replace("{{count}}",items.count)
                    .replace("{{price}}",items.price)
                    .replace("{{sum}}",sum);
            
            $('#wrap_list').append(current_html);
            
        }
        var total_current_html=
            total_html.replace("{{price}}",total_price);
        $('#wrap_list').append(total_current_html);

        $('#enter').click(function(){
            $('#wrap').hide();
        })
        $('#cancle').click(function(){
            $('#wrap').hide();
        })
    }
})
