;
(function(Vue) {
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                count: 0, //步數
                list: [0, 0, 0, 0, 0, 0, 0, 0, 0], //每格狀態紀錄
                show: false, //選擇OX
                plus: 0 //控制誰先
            }
        },
        methods: {
            //OOXX 開始
            clickHandler(index) {
                if (this.list[index] === 0) {
                    // this.list[index] = this.count % 2 ? 10 : 1
                    this.$set(this.list, index, this.count % 2 ? 10 : 1)
                    this.count++
                }
            },
            //重製DATA
            Reset() {
                this.count = 0, this.list = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    this.show = !this.show
            },
            //決定O先 還 X先
            start(val) {
                this.show = !this.show
                this.plus = val
                this.count += val
            }
        },
        computed: {
            //解答陣列
            status() {
                return [
                    this.list[0] + this.list[1] + this.list[2],
                    this.list[3] + this.list[4] + this.list[5],
                    this.list[6] + this.list[7] + this.list[8],
                    this.list[0] + this.list[3] + this.list[6],
                    this.list[1] + this.list[4] + this.list[7],
                    this.list[2] + this.list[5] + this.list[8],
                    this.list[0] + this.list[4] + this.list[8],
                    this.list[2] + this.list[4] + this.list[6]
                ]
            },
            //其中答案為3 O WIN 答案為30 X WIN 或 Nobody
            result() {
                let winer = null
                if (this.count >= 4) {
                    winer = this.status.find(num => num === 3 || num === 30) || null
                }
                winer = (winer === 3) ? 'Circle' : (winer === 30) ? 'Cross' : (winer === null && this.count === (9 + this.plus)) ? 'Nobody' : winer
                return winer
            }
        }


    })
})(Vue)