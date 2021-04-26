;
(function(Vue) {
    Vue.directive('focus', {
        inserted: function(el) {
            el.focus()
        }
    })
    new Vue({
        el: '#app',
        data() {
            return {
                message: '',
                show: false,
                year_temp: '',
                month_temp: '',
                date_temp: '',
                content: '',
                target: null,
                target_node: null,
                target_text: '',
                todolistTitle: '待辦事項',
                today: {
                    year: 0,
                    month: 0,
                    date: 0,
                    week: 0
                },
                calendar: {
                    year: 0,
                    month: 0,
                    date: 0,
                    week: 0
                },
                todoList: {}
            }
        },
        mounted() {
            //初始化
            this.setToday()
            let storage = JSON.parse(window.localStorage.getItem('todoList')) || {}
            this.$set(this, "todoList", storage)
        },
        methods: {
            //今天
            setToday() {
                const data = new Date()
                this.today.year = this.calendar.year = data.getFullYear()
                this.today.month = this.calendar.month = data.getMonth()
                this.today.date = this.calendar.date = data.getDate()
                this.today.week = this.calendar.week = data.getDay()
            },
            //計算年份
            yearHandler(val) {
                this.calendar.year += val
            },
            //計算月份
            monthHandler(val) {
                let month = this.calendar.month + val
                if (month < 0) {
                    this.calendar.month = 11
                    this.yearHandler(-1)
                } else if (month > 11) {
                    this.calendar.month = 0
                    this.yearHandler(1)
                } else {
                    this.calendar.month = month
                }
            },
            count(i, j) {
                return (i - 1) * 7 + (j - 1)
            },
            //比較是不是今天
            findToday(array) {
                return this.today.year === array.year && this.today.month === array.month && this.today.date === array.date
            },
            //比較是不是這個月份
            compareMonth(array) {
                return array.month != this.calendar.month
            },
            //得到todolist每月的事件數量
            getTodoList({ year, month, date }) {
                return year in this.todoList && month in this.todoList[year] && date in this.todoList[year][month] ? this.todoList[year][month][date] : []
            },
            //新增內容
            addTodoList({ year, month, date }) {
                this.show = true
                this.content = '請輸入代辦事項'
                this.year_temp = year
                this.month_temp = month
                this.date_temp = date
            },
            addMessage() {
                let year = this.year_temp,
                    month = this.month_temp,
                    date = this.date_temp,
                    content = this.message
                if (content.trim()) {
                    let y = this.todoList[year] || {}
                    let m = y[month] || {}
                    let d = m[date] || []
                    d.push({
                        text: content.trim(),
                        done: false
                    })
                    this.$set(this.todoList, year, y)
                    this.$set(this.todoList[year], month, m)
                    this.$set(this.todoList[year][month], date, d)
                    this.pushStorage()
                }
                this.cancleMessage()
            },
            cancleMessage() {
                this.content = ''
                this.message = ''
                this.show = false
            },
            //修改內容
            openModify(i, j, item) {
                this.target = i
                this.target_node = j
                this.target_text = item.text
            },
            modifyHandler(item) {
                let content = this.target_text
                if (content.trim()) {
                    item.text = content.trim()
                    this.pushStorage()
                }
                this.closeHandler()
            },
            closeHandler() {
                this.target = null
                this.target_node = null
            },
            //刪除
            deleteTodoList(data, item, index) {
                console.log(item)
                if (window.confirm(`確定要刪除項目 ${item.text}?`)) {
                    data.item.splice(index, 1)
                    this.pushStorage()
                }
            },
            //push data to localStorage
            pushStorage() {
                window.localStorage.setItem('todoList', JSON.stringify(this.todoList))
            },
            //重製資料
            refreshHandler() {
                if (window.confirm('確定要重製資料嗎?')) {
                    window.localStorage.removeItem('todoList')
                    this.todoList = {}
                }
            }
        },
        computed: {
            //得到每月的第一天
            calendarFirstDay() {
                let month_firstDay = new Date(this.calendar.year, this.calendar.month, 1)
                let data = new Date(this.calendar.year, this.calendar.month, 1 - month_firstDay.getDay())
                return {
                    year: data.getFullYear(),
                    month: data.getMonth(),
                    date: data.getDate(),
                    week: data.getDay()
                }
            },
            //存進陣列
            calendarArray() {
                let list = []
                for (let i = 0; i < 42; i++) {
                    let data = new Date(this.calendarFirstDay.year, this.calendarFirstDay.month, this.calendarFirstDay.date + i)
                    let temp = {
                        year: data.getFullYear(),
                        month: data.getMonth(),
                        date: data.getDate(),
                        week: data.getDay()
                    }
                    temp.item = this.getTodoList(temp)
                    list.push(temp)
                }
                return list
            },
            //過濾有無item
            currentMonth() {
                return this.calendarArray.filter(element => element.month === this.calendar.month && element.item.length)
            }

        }
    })
})(Vue)