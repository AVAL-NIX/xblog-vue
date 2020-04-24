<template>
    <div style="z-index:3">
        <el-col :span="5" hidden-sm-and-down>
                <el-row :gutter="0">
                    <el-col :span="24">
                        <AboutMe></AboutMe>
                        <ArticleUp></ArticleUp>
                        <ArticleView></ArticleView>
                        <LabelCloud></LabelCloud>
                    </el-col>
                </el-row>
        </el-col>
    </div>
</template>

<script>
    import AboutMe from '~/components/AboutMe'
    import ArticleUp from '~/components/ArticleUp'
    import ArticleView from '~/components/ArticleView'
    import LabelCloud from '~/components/LabelCloud'
    export default {
        components: {
            AboutMe,
            ArticleUp,
            ArticleView,
            LabelCloud
        }
    }
</script>

<style>

</style>