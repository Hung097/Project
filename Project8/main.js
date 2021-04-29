;
(function(Vue) {
    const vm = new Vue({
        el: '#app',
        data() {
            return {
                dataList: [],
                number: 0
            }
        },
        computed: {
            publishTime() {
                return this.dataList[0].PublishTime
            },
            county() {
                let result = []
                this.dataList.forEach(item => {
                    if (!result.find(el => el === item.County)) {
                        result.push(item.County)
                    }
                })
                return result
            },
            classifyList() {
                let result = []
                this.county.forEach(item => {
                    result.push(this.dataList.filter(elemnet => elemnet.County === item))
                })
                return result
            },
            classifyLength() {
                return this.classifyList[this.number].length
            }
        },
        mounted() {
            this.getJsonData()
        },
        methods: {
            getJsonData() {
                axios({
                    methods: 'get',
                    url: 'https://hung097.github.io/Test/json/aqi.json'
                }).then((res) => {
                    let temp = JSON.stringify(res.data.records)
                    temp = temp.replace(/PM2./ig, 'PM2_')
                    this.dataList = JSON.parse(temp)
                })
            },
            clickHandler(index) {
                if (this.number === index) return
                this.number = index
            },
        },
    })
})(Vue)