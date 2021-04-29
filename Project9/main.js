(function(Vue) {
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                height: null,
                weight: null,
                index: 0
            }
        },
        computed: {
            bmi() {
                let h = +this.height
                let w = +this.weight
                if (this.check(h) || this.check(w)) {
                    return 'Error'
                } else {
                    return (w / ((h / 100) ** 2)).toFixed(1)
                }
            },
            status() {
                let num = this.bmi
                if (num === 'Error') {
                    return 'Error'
                } else {
                    if (num < 18.5) {
                        this.index = 1
                        return '體重過輕'
                    } else if (num >= 18.5 && num < 24) {
                        this.index = 2
                        return '正常範圍'
                    } else if (num >= 24 && num < 27) {
                        this.index = 1
                        return '過重'
                    } else if (num >= 27 && num < 30) {
                        this.index = 3
                        return '輕度肥胖'
                    } else if (num >= 30 && num < 35) {
                        this.index = 3
                        return '中度肥胖'
                    } else if (num >= 35) {
                        this.index = 3
                        return '重度肥胖'
                    }
                }
            }
        },
        methods: {
            check(val) {
                if (isNaN(val) || val == 0 || val < 0 || val === null) {
                    return true
                } else {
                    return false
                }
            },
            clickHandler() {
                if (this.height === null && this.weight === null) return
                this.weight = null
                this.height = null
            }
        }
    })
})(Vue)