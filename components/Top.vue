<template>
    <div class="top">
        <div class="top-div">
            <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"> 主页
                </el-menu-item>
                <el-menu-item style="float:right">
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-menu-item>
                <el-menu-item style="float:right">
                    <el-autocomplete class="inline-input" v-model="input" :fetch-suggestions="querySearch" placeholder="" :trigger-on-focus="false" @select="handleSelect2"></el-autocomplete>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        data() {
            return {
                activeIndex: '1',
                input:''
            };
        },
        methods: {
            ...mapActions('home',{
                getTitles: 'getTitles',
                getArticle: 'getArticle'
            }),
            ...mapMutations('home',{
                changeQueryTitle:'changeQueryTitle',
                changeLabels:'changeLabels'
            }),
            handleSelect(key, keyPath) {
                if (key == 1) {
                    this.$router.push("/")
                }
            },
            onSubmit() {
                this.changeLabels('')
                this.changeQueryTitle(this.input)
                this.getArticle()
            },
            querySearch(queryString, cb) {
                var restaurants = this.titles;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            handleSelect2(item) {
                console.log(item);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },

        },
        mounted() {
            if(!this.titles){
                this.getTitles()
            }
        },
        computed: {
            ...mapState('home',{
                titles: 'titles'
            })
        },
    }
</script>

<style scoped>
    .top {
        width: 100%;
        background: #fff;
        position: fixed;
        z-index: 1000;
        margin: 0px;
        padding: 0px;
        top: 0px;
    }
    .top-title {
        float: left;
    }
    .top-div {
        width: 60%;
        margin: auto;
    }
</style>