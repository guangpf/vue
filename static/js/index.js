export default {
    name: 'index',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            bannerList:[],
            HotCategory:[],
            HotBrand:[]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            let c=this;
            c.$fetch('/Page/GetHomePageCfg')
                .then((d) => {
                    this.msg = d.status;
                    this.bannerList = d.data.Banner;
                    this.HotCategory = d.data.HotCategory;
                    this.HotBrand = d.data.HotBrand;
                }).catch((err) =>{
                console.log(err)
            })
        },
        //点击搜索
        toSearch: function () {
            alert(1)
        }
    }


}