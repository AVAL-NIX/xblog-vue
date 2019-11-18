<template>
    <div class="index">
        <el-main>
            <ArticleBodyContent></ArticleBodyContent>
            <ArticleBodyRight></ArticleBodyRight>
            <Drawer></Drawer>
        </el-main>
    </div>
</template>

<script>
    import Drawer from '~/components/Drawer'
    import ArticleBodyRight from '~/components/ArticleBodyRight'
    import ArticleBodyContent from '~/components/ArticleBodyContent'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    import axios from 'axios'
    export default {
        async asyncData({
            store,
            params
        }) {
            await store.dispatch('home/getArticle')
            await store.dispatch('timeline/getTimeLine')
        },
        layout: 'blog',
        name: 'Index',
        head() {
            return {
                meta: [
                    { charset: 'utf-8' }, {
                    hid: 'description',
                    name: 'description',
                    content: 'java,python,avalon,遥远的理想乡,AVALON的博客'
                }, {
                        hid: 'keywords',
                    name: 'keywords',
                    content: 'java,python,avalon,遥远的理想乡,AVALON的博客'
                }],
                title: "AVALON的博客 - 遥远的理想乡",
            }
        },
        data() {
            return {}
        },
        components: {
            Drawer,
            ArticleBodyContent,
            ArticleBodyRight,
        },
        computed: {
            ...mapState('home', {
                isMobile: "isMobile",
            })
        },
        mounted() {
            this.isPc()
        },
        methods: {
            isPc() {
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"
                ];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                this.$store.state.home.isMobile = !flag
            }
        }
    }
</script>

<style scoped>
    .index {}
</style>