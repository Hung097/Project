{
    const view = document.querySelector('#view_scroll');
    const items = [...document.querySelectorAll('#view_container .item')];
    let index = 0;
    let timer;

    const nextHandler = function() {
        let cur = index;
        let next;
        if (items[cur].classList.contains('nextLeft')) {
            items[cur].classList.remove('nextLeft');
        }
        items[cur].classList.add('preLeft');
        index++;
        index = index > 3 ? 0 : index;
        next = index;
        if (items[next].classList.contains('clear')) {
            items[next].classList.remove('clear');
        }
        items[next].classList.add('nextLeft');
        for (let i = 0; i < 4; i++) {
            if (i === cur || i === next) continue;
            items[i].classList.remove('preLeft');
            items[i].classList.add('clear');
        }
        //console.log(next);
    }

    const enterHandler = function() {
        clearInterval(timer);
    }
    const leaveHandler = function() {
        timer = setInterval(() => {
            nextHandler();
        }, 2500);
    }

    timer = setInterval(() => {
        nextHandler();
    }, 2500);

    view.addEventListener('mouseenter', enterHandler);
    view.addEventListener('mouseleave', leaveHandler);
}