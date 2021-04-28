;
(function(Vue) {
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                ball: 0,
                balls: [],
                start: false,
                startInterval: 500,
                lotteryInterval: 1,
                timer: null,
                maxBall: 7,
            }
        },
        mounted() {
            for (let i = 1; i <= 49; i++) {
                this.balls.push({ num: i, status: 0 })
            }
            this.setTimer(this.timerHandler, this.interval)
        },
        computed: {
            pickList() {
                return this.balls.filter(ball => ball.status).sort((a, b) => a.status - b.status)
            },
            unpickList() {
                return this.balls.filter(ball => !ball.status)
            },
            sortList() {
                return this.balls.filter(ball => ball.status)
            }
        },
        methods: {
            setTimer(hadler, interval) {
                clearTimeout(this.timer)
                this.timer = setTimeout(hadler, interval)
            },
            timerHandler() {
                this.ball = (this.ball + 1) % this.unpickList.length
                if (this.start) {
                    this.lotteryInterval *= 1.25
                    if (this.lotteryInterval > this.startInterval) {
                        this.unpickList[this.ball].status = this.pickList.length + 1
                        this.lotteryInterval = 1
                    }
                    if (this.maxBall === this.pickList.length) {
                        this.timer = null
                        return
                    }
                    this.setTimer(this.timerHandler, this.lotteryInterval)
                } else {
                    this.setTimer(this.timerHandler, this.startInterval)
                }
            },
            clickHandler() {
                if (this.start) {
                    if (confirm('確定重新開獎???')) {
                        this.start = false
                        this.balls.forEach(ball => ball.status = false)
                        this.lotteryInterval = 1
                        this.ball = 0
                        this.timer = null
                        setTimeout(this.timerHandler, this.startInterval)
                    }
                } else {
                    this.start = true
                    this.lotteryInterval = 1
                    this.setTimer(this.timerHandler, this.lotteryInterval)
                }
            },

        }
    })
})(Vue)