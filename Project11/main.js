(function(Vue) {

    Vue.directive('focus', { //載入 元件更新時觸發focus
        inserted: function(el) {
            el.focus()
        }
    })
    Vue.directive('modifyfocus', {
        componentUpdated: function(el) {
            el.focus()
        }
    })

    Vue.component('InputComponent', {
        data() {
            return {
                inputText: "",
            }
        },
        template: `
        <div>
            <input type="text" placeholder='輸入代辦事項' v-model.trim='inputText' @keyup.enter="inputHandler" v-focus>
        </div>    
        `,
        methods: {
            inputHandler() {
                if (!this.inputText) return
                this.$emit("input-text", this.inputText)
                this.inputText = ""
            }
        }
    })
    Vue.component('ShowComponent', {
        data() {
            return {
                modifyText: ""
            }
        },
        props: ['item', 'id', 'status', 'content', 'modify'],
        template: `
        <li>
            <template>
                <input v-show=!modify type='checkbox' v-model='check'>
                <span v-show=!modify :class='{mark:status}'>{{ content }}</span>
                <button v-show=!modify @click="modifyHandler(id,modify)">修改</button>
                <button v-show=!modify @click="deleteHandler(id,content)">刪除</button>
            </template>
            <template>
                <input v-show=modify type='text' v-model='modifyText' v-modifyfocus>
                <button v-show=modify @click="finishHandler(id,modify)">完成</button>
                <button v-show=modify @click="modifyHandler(id,modify)">取消</button>
            </template>
        </li>
        `,
        computed: {
            check: {
                get() {
                    return status
                },
                set(value) {
                    this.$emit("change", this.item, value)
                }
            }
        },
        methods: {
            modifyHandler(id, modify) {
                //console.log(id, modify)
                this.$emit('modify', id, modify)
                this.modifyText = ""
            },
            finishHandler(id, modify) {
                //console.log(id, this.modifyText)
                this.$emit('finishtext', id, this.modifyText)
                this.modifyText = ""
                this.modifyHandler(id, modify)
            },
            deleteHandler(id, content) {
                confirm(`確定要刪除 ${content} ???`)
                this.$emit('delete', id)
            }
        }
    })
    Vue.component('ChooseComponent', {
        data() {
            return {
                btnList: [{ name: '全部', value: 0 }, { name: '未完成', value: 1 }, { name: '已完成', value: 2 }]
            }
        },
        template: `
        <div>
            <button v-for='btn in btnList' :key='btn.name' @click='switchHandler(btn.value)'>{{btn.name}}</button>
        </div>`,
        methods: {
            switchHandler(value) {
                this.$emit('switch', value)
            }
        }
    })
    new Vue({
        el: '#todoList',
        data: {
            list: [],
            show: 0
        },
        methods: {
            inputHandler(value) {
                //console.log(this.list)
                this.list.push({ id: new Date().getTime(), status: false, content: value, modify: false })
            },
            changeHandler(item, value) {
                item.status = value
            },
            modifyHandler(id, value) {
                //console.log(id, value)
                this.list.forEach(item => {
                    if (item.id === id) {
                        item.modify = !value
                    }
                })
            },
            finishText(id, modifyText) {
                this.list.forEach(item => {
                    if (item.id === id) {
                        item.content = modifyText
                        return
                    }
                })
            },
            deleteHandler(value) {
                this.list = this.list.filter(item => item.id != value)
            },
            switchHandler(value) {
                this.show = value
            }
        },
        computed: {
            filterList() {
                return this.show === 1 ? this.list.filter(item => !item.status) : this.show === 2 ? this.list.filter(item => item.status) : this.list
            }
        }
    })

})(Vue)