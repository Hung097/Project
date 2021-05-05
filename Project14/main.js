;(function(Vue){
    let timer
    const interval = 3000
    const vm = new Vue({
        el:'#app',
        data(){
            return{
                current:0,
                imgs:[
                    {id:1,src:'img/img1.png'},
                    {id:2,src:'img/img2.png'},
                    {id:3,src:'img/img3.png'},
                    {id:4,src:'img/img4.png'},
                    {id:5,src:'img/img5.png'},
                ]
            }
        },
        computed:{
            len(){
                return this.imgs.length
            },
            fakeImgs(){
                const result = []
                const count = this.len + 4
                while(this.len>0 && result.length<count){
                    const num = Math.floor(result.length/this.len)
                    for(let i=0;i<this.len;i++){
                        result.push({id:num+'-'+this.imgs[i].id,src:this.imgs[i].src})
                    }
                }
                return result
            },
            sortImgs(){
                const begin = this.current-4
                return this.fakeImgs.slice(begin).concat(this.fakeImgs.slice(0,begin))
            }
        },
        methods:{
            changeCurrent(val){
                const limit = this.fakeImgs.length-1
                this.current = val<0 ? limit : val>limit ? 0 : val
            },
            enterHandler(){
                clearInterval(timer)
            },
            leaveHandler(){
                timer = setInterval(()=>{
                    this.changeCurrent(this.current+1)
                },interval)
            }
        },
        mounted(){
            timer = setInterval(()=>{
                this.changeCurrent(this.current+1)
            },interval)
        },
        beforeDestory(){
            clearInterval(timer)
        }
    })
})(Vue)