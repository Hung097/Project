;
(function(Vue) {

    new Vue({
        el: '#app',
        data() {
            return {
                score: 0,
                start: false,
                status: [],
                timer1: null,
                timer2: null,
                timer3: null,
                current1: 0,
                current2: 0,
                current3: 0,
                timer: 16000,
                second: 0,
                timerOut: null,
            }
        },
        mounted() {
            for (let i = 0; i < 9; i++) {
                this.status.push({ id: i, display: false, hit: false })
            }
        },
        methods: {
            clickHandler(index) {
                if (this.status[index].display) {
                    this.$set(this, 'score', this.score + 1)
                }
                this.status[index].display = false
            },
            mousedownHandler(index) {
                this.status[index].hit = true
            },
            mouseupHandler(index) {
                this.status[index].hit = false
            },
            clear() {
                this.status.forEach(element => { element.display = false })
            },
            display1Handler() {
                let val = this.randomNumber()
                this.status[this.current1].display = false
                this.current1 = val
                this.status[val].display = true
            },
            display2Handler() {
                this.second = this.second - 1
                let val = this.randomNumber()
                this.status[this.current2].display = false
                this.current2 = val
                this.status[val].display = true
            },
            display3Handler() {
                let val = this.randomNumber()
                this.status[this.current3].display = false
                this.current3 = val
                this.status[val].display = true
            },
            randomNumber() {
                let num = Math.round(Math.random() * 8)
                while (this.status[num].display) {
                    num = Math.round(Math.random() * 8)
                }
                return num
            },
            startHandler() {
                this.start = !this.start
                if (this.start) {
                    this.score = 0
                    this.second = this.timer / 1000 - 1
                    this.timer1 = setInterval(this.display1Handler, 1700)
                    this.timer2 = setInterval(this.display2Handler, 1000)
                    this.timer3 = setInterval(this.display3Handler, 700)
                    this.timerOut = setTimeout(() => {
                        alert(`時間到恭喜您獲得 ${this.score} 分`)
                        this.startHandler()
                    }, this.timer);
                } else {
                    clearInterval(this.timer1)
                    clearInterval(this.timer2)
                    clearInterval(this.timer3)
                    clearTimeout(this.timerOut)
                    this.score = 0
                    this.second = 0
                    this.clear()
                }
            }
        },
        beforeDestroy() {
            clearInterval(this.timer1)
            clearInterval(this.timer2)
            clearInterval(this.timer3)
            clearTimeout(this.timerOut)
        }
    })
})(Vue)