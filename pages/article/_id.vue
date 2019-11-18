<template>
    <div>
        <div v-if="!isMobile">
            <el-container>
                <transition name="fade">
                    <Top v-show="topShow"></Top>
                </transition>
                <transition name="fade">
                    <ArticleTop v-show="!topShow"></ArticleTop>
                </transition>
                <el-main>
                    <ArticleDetail></ArticleDetail>
                </el-main>
                <el-footer>
                    <Backtop></Backtop>
                </el-footer>
            </el-container>
        </div>
        <div v-else>
            <ArticleTop></ArticleTop>
            <el-container>
                <ArticleDetail></ArticleDetail>
            </el-container>
        </div>
    </div>
</template>

<script>
    import ArticleDetail from '@/components/ArticleDetail'
    import Top from '@/components/Top'
    import TopMobile from '@/components/TopMobile'
    import ArticleTop from '@/components/ArticleTop'
    import Backtop from '@/components/Backtop'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'ArticleIndex',
        head() {
            return {
                title: this.article.title + " - AVALON的博客 - 遥远的理想乡",
                meta: [  { charset: 'utf-8' },{
                    hid: 'description',
                    name: 'description',
                    content: this.article.title + "," + this.article.labels
                }, {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.article.title + "," + this.article.labels
                }]
            }
        },
        async asyncData({
            store,
            params
        }) {
            await store.dispatch('article/getArticle', params.id)
        },
        components: {
            ArticleDetail,
            Top,
            Backtop,
            TopMobile,
            ArticleTop
        },
        data() {
            return {}
        },
        computed: {
            ...mapState('home', {
                isMobile: "isMobile",
            }),
            ...mapState('article', {
                article: 'article',
                topShow: 'top',
            })
        },
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>