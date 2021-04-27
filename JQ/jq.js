;
(function($) {
    let active = 0
    let $img = $('.wrap > img')
    let $btn = $('#buttons > .button')
    let total = $img.length
    $img.hide().eq(active).show();
    $btn.eq(active).addClass('active')

    function appear() {
        $btn.removeClass('active').eq(active).addClass('active')
        $img.stop().fadeOut().eq(active).fadeIn()
    }
    //下一個
    $('#next').on('click', function() {
        ++active
        active = active > total - 1 ? 0 : active
        appear()
    })

    //上一個
    $('#prev').on('click', function() {
        --active
        active = active < 0 ? 4 : active
        appear()
    })

    //按鈕選擇
    $btn.on('click', function() {
        if (active === $(this).index()) return
        active = $(this).index()
        appear()
    })

})($)