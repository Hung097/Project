;
(function(Vue) {
    new Vue({
        el: '#app',
        data: {
            active: 0,
            transitionName: null,
            imgList: [
                {src:"../img/img_1.jpg",alt:1},
                {src:"../img/img_2.jpg",alt:2},
                {src:"../img/img_3.jpg",alt:3},
                {src:"../img/img_4.jpg",alt:4},
                {src:"../img/img_5.jpg",alt:5},
            ]
        },
        computed: {
            total() {
                return this.imgList.length
            }
        },
        methods: {
            change(val) {
                this.active = val
            }
        },
        watch:{
            active(newValue,oldValue){
                //console.log(newValue,oldValue)
                if(newValue < 0){
                    this.active = this.total-1 
                }else if(newValue > this.total-1){
                    this.active = 0
                }else{
                    if(newValue === 0 && oldValue === 5 || newValue === 4 && oldValue === -1){
                        this.transitionName = newValue>oldValue ? 'slide-left' : 'slide-right'
                    }
                    else{
                        this.transitionName = newValue>oldValue ? 'slide-right' : 'slide-left'
                    }
                }
            }
        }
    })
})(Vue)