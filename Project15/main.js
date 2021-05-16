;(function(Vue){
    let timer
    const HomeView = {
        data(){
            return {
                contentAll: '人生的本質就在於運動，安謐寧靜就是死亡。',
                content: '人',
                emailInputText: "",
                textStatus: null,
            }
        },
        props:{
            info:{
                type: Object,
                required: true
            },
        },
        template: `
            <div id="view">
                <div class="viewTitle">
                    <img src="img/view.jpg" class="w-100 h-100" alt="">
                    <div class="info d-flex flex-column align-items-center justify-content-around p-2">{{content}}
                        <router-link  class="btn btn-dark" :to="info.viewTitle.path">
                            {{info.viewTitle.btnText}} <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                        </router-link>
                    </div>
                    <i class="fa fa-angle-double-down" aria-hidden="true" @click="downHandler"></i>
                </div>
                               
                <div class="title mt-4">
                    <h1>{{info.topicTitle}}</h1>
                </div>

                <div class="container mt-4">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-5 mb-md-3" v-for="item of info.topicList" :key="info.topicList.id">
                            <div class="card h-100">
                                <div class="pic h-50">
                                    <img :src="item.src" class="card-img-top h-100">
                                </div>
                                <div class="card-body h-40 m-2">
                                    <h5 class="card-title">{{item.title}}</h5>
                                    <p class="card-text">{{item.content}}</p>
                                </div>
                                <div class="card-btn h-10 d-flex justify-content-center mb-2">
                                    <router-link class="btn btn-dark" :to="item.path">{{info.btnText}}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid mt-4 p-0 running">
                    <div class="row row-cols-1 row-cols-md-3 w-100 m-0">
                        <div class="col p-0" v-for="item of info.runningList" :key="info.runningList.id">
                            <div class="pic w-100 h-100">
                                <img :src="item.src" class="w-100 h-100">
                            </div>
                        </div>
                        <div class="mark d-flex flex-column justify-content-around">
                            <div class="title">
                                <h1>{{info.running.title}}</h1>
                            </div>
                            <p>{{info.running.content}}</p>
                            <router-link class="btn btn-dark" to="/product">{{info.btnText}}</router-link>
                        </div>
                    </div>
                </div>

                <div class="container mt-4">
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col" id="grip">
                            <div class="img mx-auto">
                                <router-link class="pic" to="/product"></router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text d-flex flex-column justify-contetn-center align-items-center">
                                <div class="title">
                                    <h1>{{info.grip.title}}</h1>
                                </div>
                                <p class="p-5">{{info.grip.content}}</p>
                                <router-link class="btn btn-dark" to="/product">{{info.btnText}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4">
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col order-1 order-lg-0">
                            <div class="text d-flex flex-column justify-contetn-center align-items-center">
                                <div class="title">
                                    <h1>{{info.soft.title}}</h1>
                                </div>
                                <p class="p-5">{{info.soft.content}}</p>
                                <router-link class="btn btn-dark" to="/product">{{info.btnText}}</router-link>
                            </div>
                        </div>
                        <div class="col" id="soft">
                            <div class="img mx-auto">
                                <router-link class="pic" to="/product"></router-link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container-fulid">
                    <div class="row w-100 m-0">
                        <div class="col-12 col-md-7 col-lg-5 p-0 mx-auto my-auto">
                            <div class="input-group mt-4 mb-4">
                                <input type="text" class="form-control" placeholder="輸入信箱獲得本月優惠代碼" :class="{'is-invalid': !textStatus && emailInputText != null && emailInputText != '' ,'is-valid': textStatus}" v-model="emailInputText">
                                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" :disabled="!textStatus">
                                    <i class="fa fa-envelope-o" style="color:red;" aria-hidden="true"></i> 訂閱
                                </button>
                                <span class="invalid-feedback">請輸入有效Email</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="modal-title" id="exampleModalLabel">
                                    <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i> 訂閱成功
                                </h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>恭喜訂閱成功! 感謝訂閱 <i class="fa fa-hand-peace-o" aria-hidden="true"></i></h5>
                                <h5>本月優惠代碼為: <span style="color: red;">hung097123</span></h5>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">關閉</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        mounted(){
            this.typeAnimation()
        },
        methods:{
            downHandler(element){
                let distance = element.path[1].offsetHeight + 86.5
                function move(){
                    element.path[3].scrollTop += 20
                    if(element.path[3].scrollTop < distance){
                        setTimeout(move,1)
                    }   
                }
                setTimeout(move,1)
            },
            typeAnimation(){
                let end = 0
                timer = setInterval(()=>{
                    if(end > this.contentAll.length){
                        clearInterval(timer)
                        setTimeout(() => {
                            this.typeAnimation()
                        },1500)
                    }
                    end++
                    this.content = this.contentAll.slice(0,end)
                },200)
            }
        },
        watch:{
            emailInputText(value){
                const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
                this.textStatus = emailRule.test(value)
            }
        },
        beforeDestroy(){
            clearInterval(timer)
        }
    }
    const Home = {
        data(){
            return {
                info: {
                    viewTitle:{
                        path:'/product',
                        btnText:'前往購買',
                    },

                    btnText:'查看更多',
                    topicTitle:'熱門運動',
                    topicList:[
                        {id:1, src:'img/topic-1.png', title:'重訓系列', content:'如果你堅持了自己遠大的夢想、全世界都會為你讓路，沒人會阻擋你。', path:'/product'},
                        {id:2, src:'img/topic-2.png', title:'有氧系列', content:'提高耐力、增強心肺功能為目的，來增加熱量消耗，以達到減脂目的。', path:'/product'},
                        {id:3, src:'img/topic-3.png', title:'健腹系列', content:'為了達成完美曲線這個目的,那麼第一步當然就是要鍛鍊核心肌群!', path:'/product'}
                    ],
                    runningList:[
                        {id:1, src:'img/running-1.jpg'},
                        {id:2, src:'img/running-2.png'},
                        {id:3, src:'img/running-3.png'}
                    ],
                    running:{
                        title:'慢跑系列',
                        content:'口渴只是一刻，疲倦只是一時，榮耀卻是一生。'
                    },
                    grip:{
                        title:'握力系列',
                        content:'透過各種積極的訓練方式，增強前臂與手部的握力練習，這將可以讓你的肌肉力量與衰老程度獲得一定程度的改善，甚至於可以讓你過上更健康長壽的生活。'
                    },
                    soft:{
                        title:'柔軟度系列',
                        content:'柔軟度好的人活動自如、體態優美，柔軟度不好的人關節活動範圍會受到限制。 影響一個人柔軟度的因素有：肌肉、肌腱、骨骼、皮膚、脂肪、結締組織的構造與組成等。 具有比較良好的柔軟度，可以使我們運動時更有效率，在運動過程中，避免運動傷害的發生。'
                    }
                }
            }
        },
        mounted(){
        },
        components: {'home-view': HomeView,},
        template: `<home-view :info="info"></home-view>`,
        methods:{

        }
    }
    const AboutView = {
        data(){
            return {
            }
        },
        props:{
            info:{
                type: Object,
                required: true
            }
        },
        template:`
        <div id="about">
            <div class="container aboutTitle">
                <img src="img/about-view.png" class="w-100 h-100" alt="">
            </div>
            <div class="container mt-4 mb-4">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-12 col-md-6 backPeople">
                            <img src="img/about-view-1.jpg" class="w-100 h-100">
                            <img src="img/about-view-2.png" class="people">
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card-body text-center mt-5 ms-3 me-3">
                                <h1 class="card-title subTitle">
                                <i class="fa fa-hand-o-right" style="color: gold;" aria-hidden="true"></i> {{info.card.title}}
                            </h1>
                                <p class="card-text pt-3">{{info.card.content}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container aboutFooter">
                <img src="img/about-footer.jpg" class="w-100 h-100" alt="">
                <div class="aboutContent text-center">
                    <h1 class="subTitle">
                        <i class="fa fa-phone" style="color:red;" aria-hidden="true"></i> {{info.aboutFooter.title}}
                    </h1>
                    <p class="mt-2">{{info.aboutFooter.phone}}</p>
                    <p>{{info.aboutFooter.number}}</p>
                    <p>{{info.aboutFooter.address}}</p>
                </div>
            </div>
        </div>
        `,
        mounted(){
        }
    }
    const About = {
        data(){
            return{
                info:{
                    card:{
                        title: '產品理念',
                        content: '我們熱愛運動，藉此分享了我們的產品，也充實了我們的夢想。它們的功用讓運動更加方便，而我們也享受在其中，因此，我們每天努力絞盡腦汁的創新，就如同也豐富我們的生活一般。我們的力量便是透過科技的提昇，致力把這個世界變成一個充滿活力的地方。'
                    },
                    aboutFooter:{
                        title: '聯絡我們',
                        phone: '手機: 09-878778777',
                        number: '電話: 06-5938482',
                        address: '地址: 台南市西北區齁北里厚德路123巷23路'
                    }
                }
            }
        },
        components:{'about-view': AboutView},
        template: `<about-view :info="info"></about-view>`
    }
    const ProductView = {
        props:{
            info:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                title: '全部',
                productList: null,
                toast: null,
                toast_status: null,
                cancleToast: null,
                addCart: null,
                cart: null,
                cart_status: null,
                currentPage: 1,
                limit: 6,
                fare: 90,
                monthInputText: "",
                monthCoupon: 1,
                monthCouponShow: null,
                specialInputText: "",
                specialCoupon: 1,
                specialCouponShow: null,
                specialCouponPassword:[
                    "discount10%",
                    "discount20%",
                    "discount30%",
                    "discount40%",
                    "discount50%",
                    "discount60%",
                    "discount70%",
                    "discount80%",
                    "discount90%",
                ],
                orderDetail:[
                    {text:null, content:"收件人姓名", type:"text", isError:false, ErrorMsg: ''},
                    {text:null, content:"Email", type:"email", isError:false, ErrorMsg: ''},
                    {text:null, content:"連絡電話", type:"text", isError:false, ErrorMsg: ''},
                    {text:null, content:"收件地址", type:"text", isError:false, ErrorMsg: ''}
                ],
                submitMethod: '選擇寄件方式',
                payMethod: '選擇付款方式',
                orderInit: [
                    {title:'訂單編號', content: ''},
                    {title:'顧客姓名', content: ''},
                    {title:'Email', content: ''},
                    {title:'顧客電話', content: ''},
                    {title:'收件地址', content: ''},
                    {title:'付款方式', content: ''},
                    {title:'應付金額', content: ''},
                    {title:'付款狀態', content: '尚未付款'}
                ],
                payShow: null,
                payStatus: false,
                sortContent:['價格高到低','價格低到高'],
                sortCondition: '原始排序',
            }
        },
        template: `
        <div id="product" v-if="productList!=null">
            <!-- 商品標題 -->
            <div class="container-fulid view">
                <img src="/img/product-view.png" class="w-100 h-100" alt="">
                <div class="title">
                    {{title}}
                </div>
            </div>
            <div class="container">
                <!-- 商品類型選單 -->
                <div class="row mt-4">
                    <div class="col-12 col-lg-3 text-center mb-4">
                        <h1 class="subTitle">{{info.commoditySeries.title}}</h1>
                        <p>{{info.commoditySeries.firstText}} {{filterListLength}} {{info.commoditySeries.lastText}}</p>
                        <p>{{info.commoditySeries.selectContent}}</p>
                        <select class="form-select" v-model="sortCondition">
                            <option selected>{{info.commoditySeries.optionContent}}</option>
                            <option v-for="(item,index) of sortContent" :value="index" :key="item">
                                {{item}}
                            </option>
                        </select>

                        <div class="list-group">
                            <button class="list-group-item" v-for="(item,index) of info.switchList" :key="item.id" :class="{listGroupActive:title === item.content}" @click="clickHandler(index,info)">
                                {{item.content}}
                            </button>
                        </div>
                    </div>
                    <!-- 商品總覽 -->
                    <div class="col-12 col-lg-9">
                        <div class="container mb-4">
                            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">
                                <div class="col" v-for="item of pageProduct" :key="item.id">
                                    <div class="card h-100">
                                        <img :src="item.src" class="card-img-top h-40" alt="...">
                                        <div class="card-body h-60">
                                            <h5 class="card-title h-25 text-center">{{item.name}}</h5>
                                            <p style="font-size: 19px;" class="card-text h-50">{{item.content}}</p>
                                            <div class="price h-50">
                                                <p class="d-flex justify-content-between align-items-center text-center">
                                                    <span style="font-size:15px;"><s>{{info.commodityCard.originalPrice}} {{item.originalPrice}}</s></span>
                                                    <span style="font-size:25px; color: red;"> {{info.commodityCard.specialOffer}} {{item.specialOffer}}</span>
                                                </p>
                                            </div>
                                            <!-- 加入購物車按鈕 -->
                                            <i class="add fa fa-cart-plus" aria-hidden="true" @click="addCartHandler(item.id, 1)"></i>
                                            <!-- 加入收藏按鈕 -->
                                            <div class="favorite">
                                                <i v-show="item.favorite==='false'" class="fa fa-heart-o" aria-hidden="true" @click="favoriteHandler(item.id, 'true')"></i>
                                                <i v-show="item.favorite==='true'" class="fa fa-heart" aria-hidden="true" @click="favoriteHandler(item.id, 'false')"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 換頁按鈕 -->
                <div class="row">
                    <div>
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <button class="page-link" @click="changePageHandler(currentPage-1)" :disabled="currentPage===1">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <li class="page-item" v-for="(i,index) of totalPage"  @click="changePageHandler(i)" :key="index">
                                <button class="page-link" :class="{pageLinkActive:i === currentPage}">
                                    {{i}}
                                </button>
                            </li>
                            <li class="page-item">
                                <button class="page-link" @click="changePageHandler(currentPage+1)" :disabled="currentPage===totalPage">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 加入收藏訊息提示 -->
            <div class="toast shadow position-fixed top-50 start-50" :class="{show:toast,hide:!toast}" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex" style="font-size: 30px;">
                    <div class="toast-body" v-show="!toast_status">
                        <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                        {{info.message.favoriteAdd}}
                    </div>
                    <div class="toast-body" v-show="toast_status">
                        <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                        {{info.message.favoriteCancle}}
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
            <!-- 加入購物車訊息提示 -->
            <div class="toast shadow position-fixed top-50 start-50" :class="{show:cart,hide:!cart}" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex " style="font-size: 30px;">
                    <div class="toast-body" v-if="cart_status">
                        <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                        {{info.message.cartAdd}}
                    </div>
                    <div class="toast-body" v-if="!cart_status">
                        <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                        {{info.message.cartError}}
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
            <!-- Fixed按鈕群組 -->
            <div class="btnGroup">
                <!-- 我的收藏按鈕 -->
                <button type="button" class="btn btn-dark favoriteBtn" data-bs-toggle="modal" data-bs-target="#myFavorite">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <small>{{favoriteProduct.length}}</small>
                </button>
                <!-- 我的購物車按鈕 -->
                <button type="button" class="btn btn-dark cartBtn" data-bs-toggle="modal" data-bs-target="#myCart">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <small>{{cartProduct.length}}</small>
                </button>
            </div>
            <!-- 我的收藏 Modal -->
            <div class="modal fade" id="myFavorite" tabindex="-1" aria-labelledby="myFavoriteModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header flex-wrap">
                            <h3 class="modal-title" id="myFavoriteModalLabel">
                                <i class="fa fa-heart" aria-hidden="true" style="color: red;"></i>
                                {{info.favoriteModal.objectTitle}}
                            </h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h5 class="mdoalBodyTitle text-center">{{info.favoriteModal.title}} ( {{favoriteProduct.length}} ) </h5>
                        </div>
                        <div class="modal-body p-0">
                            <div class="isEmpty text-center" v-if="favoriteProduct.length === 0">
                                <i class="fa fa-heart-o pt-3" aria-hidden="true"></i>
                                <h3 class="pt-3">{{info.favoriteModal.content1}}</h3>
                                <h5 class="pt-3">{{info.favoriteModal.content2}}</h5>
                                <h5 class="pt-3 pb-3">{{info.favoriteModal.content3}}
                                    <i class="fa fa-heart" aria-hidden="true" style="color: red;"></i>{{info.favoriteModal.content4}}
                                </h5>
                            </div>
                            <div class="hasSomething" v-else>
                                <div class="container">
                                    <div class="row mb-4 text-center align-items-center" v-for="item of favoriteProduct" :key="item.id">
                                        <div class="col-2 col-lg"><i class="fa fa-trash" aria-hidden="true" @click="cancleFavorite(item.id)"></i></div>
                                        <div class="col-6 col-lg"><img class="h-100 w-100" :src="item.src" alt=""></div>
                                        <div class="col-4 col-lg">
                                            {{item.name}}
                                        </div>
                                        <div class="col">
                                            $ {{item.specialOffer}}
                                        </div>
                                        <div class="col"><i class="favoriteAdd fa fa-cart-plus" aria-hidden="true" @click="addCartHandler(item.id, 2)"></i></div>
                                    </div>
                                </div>
                            </div>
                            <!-- 取消收藏訊息 -->
                            <div class="toast shadow position-fixed top-50 start-50" :class="{show:cancleToast,hide:!cancleToast}" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex" style="font-size: 30px;">
                                    <div class="toast-body">
                                        <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                                        {{info.message.favoriteCancle}}
                                    </div>
                                    <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                            <!-- 加入購物車訊息 -->
                            <div class="toast shadow position-fixed top-50 start-50" :class="{show:addCart,hide:!addCart}" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="d-flex " style="font-size: 30px;">
                                    <div class="toast-body" v-if="cart_status">
                                        <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                                        {{info.message.cartAdd}}
                                    </div>
                                    <div class="toast-body" v-if="!cart_status">
                                        <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                                        {{info.message.cartError}}
                                    </div>
                                    <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{info.continueText}}
                                <i class="fa fa-shopping-bag" aria-hidden="true" style="color: red;"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的購物車 Modal-->
            <div class="modal fade" id="myCart" tabindex="-1" aria-labelledby="myCartModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header flex-wrap">
                            <h3 class="modal-title" id="myCartModalLabel">
                                <i class="fa fa-shopping-cart" aria-hidden="true" style="color:red"></i>
                                {{info.cartModal.objectTitle}}
                            </h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h5 class="mdoalBodyTitle text-center">{{info.cartModal.title}} ( {{cartProduct.length}} )</h5>
                        </div>
                        <div class="modal-body">
                            <div class="isEmpty text-center" v-if="cartProduct.length === 0">
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                <h3 class="mt-3">{{info.cartModal.content1}}</h3>
                                <h5 class="mt-3">{{info.cartModal.content2}}</h5>
                                <h5 class="mt-3">{{info.cartModal.content3}}</h5>
                            </div>
                            <div class="container" v-else>
                                <div class="row align-items-center text-center mb-4" v-for="(item,index) of cartProduct" :key="index">
                                    <div class="col-2 col-lg">
                                        <i class="fa fa-trash" aria-hidden="true" @click="cancleCart(item.id)"></i>
                                    </div>
                                    <div class="col-6 col-lg">
                                        <img :src="item.src" class="w-100 h-100">
                                    </div>
                                    <div class="col-4 col-lg">
                                        {{item.name}}
                                    </div>
                                    <div class="col-6 col-lg">
                                        $ {{item.specialOffer}}
                                    </div>
                                    <div class="col-6 col-lg-3 mt-2">
                                        <button class="btn btn-warning" @click="countHandler(item.id, +item.count-1)">
                                            <i class="fa fa-minus" aria-hidden="true"></i>
                                        </button>
                                        {{item.count}}
                                        <button class="btn btn-warning" @click="countHandler(item.id, +item.count+1)">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </button>
                                        <div class="text-center mt-1">{{info.cartModal.residualText}} {{item.countLimit}} {{item.unit}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer flex-wrap">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                {{info.continueText}} <i class="fa fa-shopping-bag" aria-hidden="true" style="color:red"></i>
                            </button>
                            <button type="button" class="btn btn-dark" data-bs-target="#order" data-bs-toggle="modal" data-bs-dismiss="modal" v-if="cartProduct.length!=0">
                                {{info.cartModal.footerText}} <i class="fa fa-cart-arrow-down" aria-hidden="true" style="color:red"></i>
                            </button>
                            <div class="w-100 text-end" v-show="cartProduct.length!=0">
                                <p style="color: red;">{{info.cartModal.footerContent1}}</p>
                                <p>{{info.cartModal.footerContent2}}{{fare}}</p>
                                <h5>{{info.cartModal.footerContent3}}<span style="color:red">$ {{cartTotalMoney + fare}}</span></h5>
                            </div>
                        </div>
                        <!-- 取消商品訊息 -->
                        <div class="toast shadow position-fixed top-50 start-50" :class="{show:cancleToast,hide:!cancleToast}" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex" style="font-size: 30px;">
                                <div class="toast-body">
                                    <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                                    {{info.message.cartCancle}}
                                </div>
                                <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 訂單 Modal -->
            <div class="modal fade" id="order" aria-hidden="true" aria-labelledby="orderModalLabe" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="orderModalLabel">
                                <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:red"></i> {{info.orderModal.title}}
                            </h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <button class="btn btn-dark w-100" type="button" data-bs-toggle="collapse" data-bs-target="#cartDetail" aria-expanded="true" aria-controls="collapseOne">
                            <h4 class="mx-auto">
                                <i class="fa fa-hand-pointer-o" aria-hidden="true"></i>{{info.orderModal.btnTitle}} <span style="color: red;">$ {{ specialOffer }}</span>
                            </h4>
                            </button>
                            <div class="collapse" id="cartDetail">
                                <div class="card card-body">
                                    <div class="container">
                                        <div class="row align-items-center text-center mb-4" v-for="(item,index) of cartProduct" :key="index">
                                            <div class="col-6 col-lg"><img :src="item.src" class="w-100 h-100"></div>
                                            <div class="col-6 col-lg">
                                                {{item.name}}
                                            </div>
                                            <div class="col">
                                                $ {{item.specialOffer}}
                                            </div>
                                            <div class="col">
                                                X {{item.count}} {{item.unit}}
                                            </div>
                                            <div class="col">
                                                $ {{+item.specialOffer * +item.count}}
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <p>{{info.orderModal.content1}}{{fare}}</p>
                                            <h5>{{info.orderModal.content2}}<span style="color:red">$ {{cartTotalMoney + fare}}</span></h5>
                                            <div class="d-flex flex-column align-items-end">
                                                <div class="input-group w-100 mb-3" v-if="monthCoupon === 1">
                                                    <input type="text" class="form-control" :placeholder="info.orderModal.placeHolderText1" v-model.trim="monthInputText">
                                                    <button class="btn btn-dark" type="button" @click="monthDiscount">{{info.orderModal.inputBtnText}}</button>
                                                </div>
                                                <div class="input-group w-100 mb-3" v-if="specialCoupon === 1">
                                                    <input type="text" class="form-control" :placeholder="info.orderModal.placeHolderText2" v-model.trim="specialInputText">
                                                    <button class="btn btn-dark" type="button" @click="specialDiscount">{{info.orderModal.inputBtnText}}</button>
                                                </div>
                                            </div>
                                            <h5 v-if="monthCoupon != 1 || specialCoupon != 1">{{info.orderModal.content3}} <span style="color:red">$ {{specialOffer}}</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-3">
                                <h3 class="text-center">
                                    <i class="fa fa-list-ul" aria-hidden="true"></i> {{info.orderModal.dataTitle}}
                                </h3>
                                <div class="row" v-for="(item,index) of orderDetail" :key="index">
                                    <div class="form-floating mb-3">
                                        <input :type="item.type" class="form-control" :class="{'is-invalid': item.isError,'is-valid':item.text!=null && !item.isError}" placeholder="name@example.com" v-model="item.text" @blur="blurHandler(item)">
                                        <label class="ms-2" for="floatingInput">{{item.content}}</label>
                                        <div class="invalid-feedback">
                                            {{item.ErrorMsg}}
                                        </div>
                                    </div>
                                </div>
                                <select class="form-select mt-3" v-model="submitMethod">
                                    <option selected disabled>選擇寄件方式</option>
                                    <option v-for="(item,index) of info.orderModal.select1" :value="index+1" :key="item">{{item}}</option>
                                </select>
                                <select class="form-select mt-3 mb-5" v-model="payMethod">
                                    <option selected disabled>選擇付款方式</option>
                                    <option v-for="item of info.orderModal.select2" :value="item" :key="item">{{item}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-dark" data-bs-target="#myCart" data-bs-toggle="modal" data-bs-dismiss="modal">
                            <i class="fa fa-reply" aria-hidden="true" ></i> {{info.orderModal.footerBtn1}}
                            </button>
                            <button type="button" class="btn btn-dark" data-bs-target="#orderFinish" data-bs-toggle="modal" data-bs-dismiss="modal" @click="initHandler" :disabled="orderDetailSubmit">
                                {{info.orderModal.footerBtn2}} <i class="fa fa-pencil-square-o" aria-hidden="true" style="color:red"></i>
                            </button>
                        </div>
                        <!-- 輸入本月代碼訊息 -->
                        <div class="toast shadow position-fixed top-50 start-50" :class="{show:monthCouponShow,hide:!monthCouponShow}" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex " style="font-size: 30px;">
                                <div class="toast-body" v-if="monthCoupon != 1">
                                    <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                                    {{info.message.couponSuccess}}
                                </div>
                                <div class="toast-body" v-if="monthCoupon == 1">
                                    <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                                    {{info.message.couponFaile}}
                                </div>
                                <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                        <!-- 輸入專屬代碼訊息 -->
                        <div class="toast shadow position-fixed top-50 start-50" :class="{show:specialCouponShow,hide:!specialCouponShow}" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex " style="font-size: 30px;">
                                <div class="toast-body" v-if="specialCoupon != 1">
                                    <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                                    {{info.message.couponSuccess}}
                                </div>
                                <div class="toast-body" v-if="specialCoupon == 1">
                                    <i class="fa fa-window-close-o" style="color:red;" aria-hidden="true"></i>
                                    {{info.message.couponFaile}}
                                </div>
                                <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 訂單成立 Modal -->
            <div class="modal fade" id="orderFinish" tabindex="-1" aria-labelledby="orderFinishLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="orderFinishLabel">{{info.orderSuccessModal.title}}</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">

                            <div class="row" v-for="(item,index) of orderInit" :class="{orderNumber: index===0}" :key="index">
                                <div class="col-4 p-0">
                                    {{item.title}}
                                </div>
                                <div class="col-8 p-0" :class="{redText:item.content==='尚未付款', greenText:item.content==='完成付款'}">
                                    {{item.content}}
                                </div>
                            </div>
                            <div class="row w-100 mt-3">
                                <div class="col">
                                    {{info.orderSuccessModal.content}} <i class="fa fa-truck" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                {{info.continueText}} <i class="fa fa-shopping-bag" aria-hidden="true" style="color:red"></i>
                            </button>
                            <button type="button" class="btn btn-dark" @click="payHandler" :disabled="payStatus">
                                {{info.orderSuccessModal.btnText}} <i class="fa fa-money" style="color: green;" aria-hidden="true"></i>
                            </button>
                        </div>
                        <!-- 付款成功訊息 -->
                        <div class="toast shadow position-fixed top-50 start-50" :class="{show:payShow,hide:!payShow}" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex " style="font-size: 30px;">
                                <div class="toast-body">
                                    <i class="fa fa-check-square-o" style="color:green;" aria-hidden="true"></i>
                                    {{info.message.paySuccess}}
                                </div>
                                <button type="button" class="btn-close me-2 m-auto" @click="closeHandler" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
        computed:{
            sortPrduct(){
                if(this.sortCondition!=0 && this.sortCondition!=1)return this.productList
                const temp = JSON.parse(JSON.stringify(this.productList))
                if(this.sortCondition === 0){
                    return temp.sort(function(a,b){
                        return +b.specialOffer - +a.specialOffer
                    })
                }else{
                    return temp.sort(function(a,b){
                        return +a.specialOffer - +b.specialOffer
                    })
                }
            },
            filterProduct(){
                if(this.title === '全部')return this.sortPrduct
                return this.sortPrduct.filter(item => item.group === this.title)
            },
            filterListLength(){
                return this.filterProduct.length
            },
            favoriteProduct(){  //最愛群
                return this.productList.filter(item => item.favorite === 'true')
            },
            totalPage(){        //計算最大頁數
                if(this.filterListLength <= this.limit){
                    return 1
                }else{
                    return Math.ceil(this.filterListLength/this.limit)
                } 
            },
            pageProduct(){
                if(this.totalPage === 1){
                    return this.filterProduct
                }else{
                    let start = (this.currentPage - 1) * this.limit
                    if(this.currentPage < this.totalPage){
                        return this.filterProduct.slice(start, start + this.limit)
                    }else{
                        return this.filterProduct.slice(start)
                    }
                }
            },           
            cartProduct(){
                return this.productList.filter(item => item.cart === "true")
            },
            cartTotalMoney(){
                let result = this.cartProduct.reduce((acc,item) => {
                    return acc + (item.count*1) * (item.specialOffer*1)
                },0)
                if(result >= 999)this.fare = 0
                else this.fare = 90
                return result
            },
            specialOffer(){
                return Math.round(this.cartTotalMoney * this.monthCoupon * this.specialCoupon) + this.fare
            },
            orderDetailSubmit(){
                let count = 0
                this.orderDetail.forEach(item => {
                    if(item.isError)return true
                    else if(item.text!=null && !item.isError)count++
                })
                if(count===4 && this.submitMethod!='選擇寄送方式' && this.payMethod!='選擇付款方式')return false
                return true
            }
        },
        methods:{
            clickHandler(index,info){
                this.title = info.switchList[index].content
                this.currentPage = 1
            },
            async getJsonData(){
                await axios({
                    method: 'get',
                    url: 'https://hung097.github.io/Test/json/product.json'
                }).then(res => {
                    if(window.localStorage.getItem('Product') === null){
                        const originalData = res["data"]["Product"]
                        const discountShow = res["data"]["discountShow"]
                        this.productList = originalData
                        window.localStorage.setItem('Product',JSON.stringify(originalData))
                        window.localStorage.setItem('discountShow',JSON.stringify(discountShow))
                    }else{
                        this.productList = JSON.parse(window.localStorage.getItem('Product'))
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            closeHandler(){
                this.toast = false
                this.cancleToast = false
                this.cart = false
                this.addCart = false
                this.monthCouponShow = false
                this.specialCouponShow = false
                this.payShow = false
            },
            favoriteHandler(id,status){
                this.toast = true
                this.toast_status = (status==="true")
                this.productList.find(item => item.id === id).favorite = status
                window.localStorage.setItem('Product',JSON.stringify(this.productList))
                setTimeout(()=>{
                    this.toast = false
                },1500)
            },
            changePageHandler(index){
                if(this.currentPage === index)return
                this.currentPage = index <= 0 ? 1 : index > this.totalPage ? this.totalPage : index
            },
            addCartHandler(id, num){
                if(num === 1)this.cart = true
                else this.addCart = true
                if(this.productList.find(item => item.id === id).cart === "false"){
                    this.cart_status = true
                    this.productList.find(item => item.id === id).cart = "true"
                    window.localStorage.setItem('Product',JSON.stringify(this.productList))
                }else{
                    this.cart_status = false
                }
                setTimeout(()=>{
                    this.cart = false
                    this.addCart = false
                },1500)
            },
            cancleFavorite(id){
                this.productList.find(item => item.id === id).favorite = "false"
                this.cancleToast = true
                window.localStorage.setItem('Product',JSON.stringify(this.productList))
                setTimeout(()=>{
                    this.cancleToast = false
                },1500)
            },
            cancleCart(id){
                this.cancleToast = true
                this.productList.find(item => item.id === id).cart = "false"
                this.productList.find(item => item.id === id).count = "1"
                window.localStorage.setItem('Product',JSON.stringify(this.productList))
                setTimeout(() => {
                    this.cancleToast = false
                },1500)
            },
            countHandler(id, num){
                if(num === 0 || num > this.productList.find(item=>item.id === id).countLimit)return
                this.productList.find(item=>item.id === id).count = num
                window.localStorage.setItem('Product',JSON.stringify(this.productList))
            },
            monthDiscount(){
                if(this.monthInputText==="")return
                this.monthCouponShow = true
                if(this.monthInputText === "hung097123"){
                    this.$set(this,'monthCoupon',0.95)
                }
                this.monthInputText = ""
                setTimeout(() => {
                    this.monthCouponShow = false
                },1500)
            },
            specialDiscount(){
                if(this.specialInputText==="")return
                this.specialCouponShow = true
                for(let i=0;i<this.specialCouponPassword.length;i++){
                    if(this.specialCouponPassword[i] === this.specialInputText){
                        this.$set(this,'specialCoupon',(i+1)/10)
                        break
                    }
                }
                this.specialInputText = ""
                setTimeout(() => {
                    this.specialCouponShow = false
                },1500)
            },
            blurHandler(item){
                if(item.text === null){
                    item.text = ""
                }
            },
            initHandler(){
                this.orderDetailFinish()
                this.orderDetail.forEach(el=>el.text=null)
                this.cartProduct.forEach(item=>{
                    item.count= 1
                    item.cart = "false"
                })
                window.localStorage.setItem('Product',JSON.stringify(this.productList))
            },
            orderDetailFinish(){
                this.orderInit[0].content = "FQ" + Math.round(Math.random()*100000 + Math.random()*100000)
                for(let i=1;i<5;i++){
                    this.orderInit[i].content = this.orderDetail[i-1].text
                }
                this.orderInit[5].content = this.payMethod
                this.orderInit[6].content = this.specialOffer + ' 元'
            },
            payHandler(){
                this.payStatus = true
                this.payShow = true
                this.orderInit.find(item=>item.content === '尚未付款').content = '完成付款'
                setTimeout(() => {
                    this.payShow = false
                },1500)
            }
        },
        mounted(){
            this.getJsonData()
        },
        watch:{
            orderDetail:{
                handler: function(newValue){
                    newValue.forEach(item => {
                        const numberRule = /\d{8}$/
                        const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
                        if(item.text === ''){
                            item.isError = true
                            item.ErrorMsg = item.content + " 為必填"
                        }else if(item.content==='連絡電話' && item.text!=null && !numberRule.test(item.text)){
                            item.isError = true
                            item.ErrorMsg = item.content + " 須為字元長度不能小於8的數字"
                        }else if(item.content==='Email' && item.text!=null && !emailRule.test(item.text)){
                            item.isError = true
                            item.ErrorMsg = item.content + " 須為有效的Email"
                        }else{
                            item.isError = false
                        }
                    })
                },
                deep: true
            }
        }

    }
    const Product = {
        data(){
            return{
                info:{
                    switchList:[
                        {id:1, content: '全部'},
                        {id:2, content: '重訓系列'},
                        {id:3, content: '有氧系列'},
                        {id:4, content: '健腹系列'},
                        {id:5, content: '慢跑系列'},
                        {id:6, content: '握力系列'},
                        {id:7, content: '柔軟度系列'},
                    ],
                    commoditySeries:{
                        title: '商品系列',
                        firstText: '共',
                        lastText: '件商品',
                        selectContent: '排序方式',
                        optionContent: '原始排序'
                    },
                    commodityCard:{
                        originalPrice: '原價:',
                        specialOffer: '特價:'
                    },
                    message:{
                        favoriteAdd: '已加入收藏',
                        favoriteCancle: '已取消收藏',
                        cartAdd: ' 加入購物車成功',
                        cartCancle: '已取消商品',
                        cartError: '商品已在購物車',
                        couponSuccess: '代碼套用成功',
                        couponFaile: '代碼套用失敗',
                        paySuccess: '付款成功'
                    },
                    favoriteModal:{
                        objectTitle: '我的收藏',
                        title: '收藏列表',
                        content1: '您尚未收藏任何一項商品哦~',
                        content2: '再怎麼省也不要忘記對自己好一點好嗎?',
                        content3: '快前往尋找你新中的最',
                        content4: '吧~'
                    },
                    cartModal:{
                        objectTitle: '我的購物車',
                        title: '商品列表',
                        content1: '您尚未選購任何一項商品哦~',
                        content2: '我們提供優質商品任您挑選',
                        content3: '數量有限要買要快!!!',
                        residualText: '庫存: ',
                        footerText: '結帳去',
                        footerContent1: '消費滿999免運費',
                        footerContent2: '小計: ',
                        footerContent3: '運費: $ '
                    },
                    orderModal:{
                        title: '我的訂單',
                        btnTitle: '顯示購物車明細 小計',
                        content1: '運費: $ ',
                        content2: '小計: ',
                        placeHolderText1: '輸入本月優惠代碼',
                        placeHolderText2: '輸入專屬優惠代碼',
                        inputBtnText: '套用',
                        content3: '優惠價: ',
                        dataTitle: '訂單資料',
                        select1:['黑貓宅急便', 'FamilyMart', '7-11', '郵局宅配'],
                        select2:['ATM', 'Credit', 'GooglePay', 'LinePay', 'ApplePay'],
                        footerBtn1: '返回購物車',
                        footerBtn2: '送出訂單'
                    },
                    orderSuccessModal:{
                        title: '訂單成立，感謝您的購買',
                        content: '約需要三到五天工作天送達',
                        btnText: '確認付款'
                    },
                    continueText: '繼續購買',
                }
            }
        },
        components:{
            'product-view': ProductView
        },
        template: `<product-view :info="info"></product-view>`
    }
    const DiscountView = {
        data(){
            return {
                discountShow: null,
                randomNumber: null,
                discountList:[
                    {content:'一折', num: 'discount10%'},
                    {content:'兩折', num: 'discount20%'},
                    {content:'三折', num: 'discount30%'},
                    {content:'四折', num: 'discount40%'},
                    {content:'五折', num: 'discount50%'},
                    {content:'六折', num: 'discount60%'},
                    {content:'七折', num: 'discount70%'},
                    {content:'八折', num: 'discount80%'},
                    {content:'九折', num: 'discount90%'}
                ],
                coupon: {content:null, num: null},
            }
        },
        props:{
            info:{
                type:Object,
                required:true
            }
        },
        template: `
            <div id="discount">
                <div class="container discount-view p-0">
                    <img src="img/discount-view.png" alt="" class="w-100 h-100">
                    
                    <div class="discount-title text-center mx-auto">
                        {{info.title}}
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row wrap">
                        <div class="col-11 col-sm-10 col-md-8 col-lg-6 place mt-2 mb-3 mx-auto text-center">
                            <p class="mt-5 me-4 ms-4 mb-3">{{info.content}}</p>
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 mx-auto circle">
                                        <div v-show="discountShow">
                                            <p>{{info.circle}}</p>
                                            <h3 style="color: red;">{{coupon.content}}</h3>
                                            <p>{{info.title}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <p>{{info.prompt}}</p>
                                    <div v-show="discountShow">
                                        <h5 style="position: relative;">
                                            <input id="input_code" class="form-control w-75 mx-auto text-center" type="text" :value="coupon.num" readonly>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <button v-show="!discountShow" class="btn btn-dark mb-2" @click.once="discountHandler">{{info.btnText}}</button>
                            <router-link v-show="discountShow" class="btn btn-dark mt-3" to="/product">{{info.btnPath}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        `,
        mounted(){
            const data = JSON.parse(window.localStorage.getItem("discountShow"))
            this.discountShow = (data.status === "true")
            if(data.number!="null"){
                this.randomNumber = +data.number
                this.coupon.content =  this.discountList[this.randomNumber].content
                this.coupon.num = this.discountList[this.randomNumber].num
            }
        },
        methods:{
            discountHandler(){
                this.discountShow = !this.discountShow
                const num = Math.round(Math.random()*8)
                this.coupon.content =  this.discountList[num].content
                this.coupon.num = this.discountList[num].num
                const result = {
                    status: "true",
                    number: num+""
                }
                window.localStorage.setItem("discountShow", JSON.stringify(result))
            },
        }
    }
    const Discount = {
        data(){
            return{
                info:{
                    title: '專屬優惠',
                    content: '你還在等什麼!點擊下方來抽取您的專屬優惠，多項折扣優惠等你來拿，最高折扣為一折，數量有限送完為止，專屬優惠要拿要快，絕不等人!!!',
                    circle: '恭喜獲得',
                    prompt: '結帳時輸入以下代碼即可獲得折扣',
                    btnText: '抽獎',
                    btnPath: '前往購買'
                }
            }
        },
        components:{
            'discount-view': DiscountView
        },
        template: `<discount-view :info="info"></discount-view>`
    }
    const router = new VueRouter({
        routes:[{
            path: '/',
            component: Home,
            name: 'home'
        },{
            path: '/about',
            component: About,
            name: 'about'
        },{
            path: '/product',
            component: Product,
            name: 'product'
        },{
            path: '/discount',
            component: Discount,
            name: 'discount'
        },{
            path:'*',
            redirect: '/'
        }]
    })
    const vm = new Vue({
        el:'#app',
        router,
        data(){
            return{
                navList:[
                    {id:1, path:'/about', content:'關於我們'},
                    {id:2, path:'/product', content:'商品列表'},
                    {id:3, path:'/discount', content:'專屬優惠'}
                ],
                linkList:[
                    {id:1, src:'img/facebook.png', path:'/'},
                    {id:2, src:'img/line.png', path:'/'},
                    {id:3, src:'img/ig.png', path:'/'}
                ],
                scrollBtnShow: true,
                loadingStatus: false
            }
        },
        computed:{
            footerList(){
                const result = []
                result.push({id:1, path:'/', content:'回到首頁'})
                this.navList.forEach((item,index)=>{
                    result.push({id:index+2,path:item.path, content:item.content})
                })
                return result
            }
        },
        methods:{
            scrollEvent(e){
                let middle = Math.round((e.srcElement.scrollHeight - e.srcElement.offsetHeight)/2)
                if(e.srcElement.scrollTop < middle){
                    this.$set(this,'scrollBtnShow',true)
                }else{
                    this.$set(this,'scrollBtnShow',false)
                }
            },
            scrollHandler(el){
                function fun(){
                    el.path[1].scrollTop -= 30
                    if(el.path[1].scrollTop > 0){
                        setTimeout(fun,1)
                    }
                }
                setTimeout(fun,1)
            }
        },
        mounted(){
            this.loadingStatus = true
        }
    })
})(Vue)