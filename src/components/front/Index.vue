<template>
    <div class="index">
        <Top></Top>
        <el-container>
            <el-header style="height:30%">
                <Carousel></Carousel>
            </el-header>
            <el-main>
                <ArticleCard></ArticleCard>
            </el-main>
            <el-footer>
                <Backtop></Backtop>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Top from '@/components/front/Top'
    import Carousel from '@/components/front/Carousel'
    import Backtop from '@/components/front/Backtop'
    import Drawer from '@/components/front/Drawer'
    import ArticleCard from '@/components/front/ArticleCard'
    export default {
        name: 'Index',
        components: {
            Carousel,
            Backtop,
            Drawer,
            ArticleCard,
            Top
        },
        metaInfo: {
            title: 'Avalon博客',
            meta: [{
                name: 'java,python',
                content: 'java,python代码'
            }],
            link: [{
                rel: 'github',
                href: 'https://github.com/AVAL-NIX'
            }]
        }
    }
</script>

<style scoped>
    .index {}
</style>