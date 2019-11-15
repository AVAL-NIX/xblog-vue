<template>
    <div class="top">
        <div class="top-div">
            <el-button class="button" type="primary" @click="onSubmit">搜索</el-button>
            <el-autocomplete class="inline-input" v-model="input" :fetch-suggestions="querySearch" placeholder="" :trigger-on-focus="false" @select="handleSelect2"></el-autocomplete>
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
            ...mapState({
                titles: state => state.home.titles,
            })
        },
    }
</script>

<style scoped>
    .top {
        width: 100%;
        background: #fff;
        margin: 0px;
        height:3.5rem;
        padding: 0px;
        top: 0px;
    }
    .top-title {
        float: left;
    }
    .top-div {
        margin: 0.6rem;
    }
    .top-div button{
        float:right;
    }
    .inline-input{
        width: auto;
        float:left;
    }
</style>