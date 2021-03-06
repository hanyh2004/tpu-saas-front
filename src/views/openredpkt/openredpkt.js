
import foot from "@/components/foot.vue";
export default {
    name: "openredpkt",
    components: {
        foot
    },
    data() {
        return {
            secret: "",
            active: 0,
            allData: {
                amount: "0",
                sendToken: "**",
                getedznum: "0",
                num: "0",
                opened: "0",
                opened_pkt: false,
                user_set: []
            },
            history: [],
            kouLing: "",
            rid: "",
            sendName: "", //用户名
            sharePage: false
        };
    },
    methods: {
        pktInfo() {
            this.$post2("redpkt/Share/pktinfo", { rid: this.rid }).then(res => {
                console.log(res);
                this.sendName = res.username;
                this.allData.sendToken = res.token;
                this.allData.amount = res.amount;
                this.allData.opened = res.opened;
                this.allData.num = res.num;
                this.secret = res.secret;
                this.allData.user_set = res.user_set;
                this.allData.opened_pkt = res.opened_pkt;
                this.openHistory();
            });
        },
        openHistory() {
            this.$post2("redpkt/Share/openHistory", { rid: this.rid }).then(
                res => {
                    this.history = res;
                }
            );
        },

        //拆红包
        openHb() {
            this.$post2("redpkt/Index/openpkt", {
                rid: this.rid,
                secret: this.kouLing
            })
                .then(res => {
                    this.showAlert("抢到:" + res.num + "个" + res.token);
                })
                .catch(err => {
                    this.showAlert(err);
                });
        },
        routerTo() {
            this.$router.push({ path: "/share", query: { rid: this.rid } }); //请求成功后跳 分享二维码页
        },
        //提示框
        showAlert(msg) {
            return this.$dialog.alert({
                title: "提示",
                message: msg
            });
        }
    },
    created() {
        this.rid = this.$route.query.rid;
        console.log(this.rid);
    },
    mounted() {
        this.pktInfo();
    }
};