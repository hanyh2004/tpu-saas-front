<template>
    <div class="wrap">


        <div class="get" v-if="sharePage">
            <div class="whiteBoxWrap">

                <div class="whiteBox">

                    <div class="photoBox">
                        <div class="photo">
                            <img class="photoImg" src="http://s.yqkkn.com/tpu.png" alt="photo">
                        </div>
                    </div>

                    <div class="sendName">来自{{sendName}}的红包</div>
                    <div class="secret">口令：{{secret}}</div>
                    <div class="formBox">
                        <div class="form-item">
                            <div class="form-item-line1">
                                <div class="left">输入口令</div>
                                <input
                                    class="right"
                                    style="width:50%"
                                    v-model="kouLing"
                                    type="text"
                                    placeholder="请输入"
                                >
                                <button class="btnopen" @click="openHb">拆红包</button>
                            </div>
                        </div>
                        <div class="btn-groups">
                            <div>
                                <router-link to="/my-cash">去提现</router-link>
                            </div>
                            <div>
                                <router-link to="/">发红包</router-link>
                            </div>
                            <div>
                                <router-link :to="{ path: '/share', query: { rid: this.rid}}">转发</router-link>
                                <!-- 转发 -->
                                <!-- <router-link to='/share'>转发</router-link> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="geted">
                    <div
                        class="tittle"
                    >共{{allData.num}}个{{allData.sendToken}}红包，已被领取{{allData.opened}}个</div>
                    <ul class="scrollBox">
                        <li v-for="item in allData.user_set" :key="item.id">
                            <div class="picBox">
                                <img :src="item.pic">
                            </div>
                            <div class="name">{{item.name}}</div>
                            <div class="right">
                                <div>{{item.num+' '+item.Bi}}</div>
                                <div>{{item.time}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        


        <div class="gets" v-if="!sharePage" style="top:0">
            <div class="record" style="top:0">
                <van-tabs v-model="active">
                    <van-tab title="红包广场">
                        <Hblist></Hblist>
                    </van-tab>
                    <van-tab title>
                        <!-- <MyAttention></MyAttention> 我关注的-->
                    </van-tab>
                </van-tabs>
            </div>
        </div>

        
        <foot></foot>

        <go-home></go-home>
    </div>
</template>

<script src="./plaza.js">
</script>
<style lang="less" src="./plaza.less" scoped>
</style>
