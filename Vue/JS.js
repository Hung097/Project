;
(function(Vue) {
    new Vue({
        el: '#app',
        data: {
            active: 0,
            imgList: [
                "../img/img_1.jpg",
                "../img/img_2.jpg",
                "../img/img_3.jpg",
                "../img/img_4.jpg",
                "../img/img_5.jpg"
            ]
        },
        computed: {
            total() {
                return this.imgList.length
            }
        },
        methods: {
            change(val) {
                this.active = (val + this.total) % this.total
            }
        }
    })
})(Vue)