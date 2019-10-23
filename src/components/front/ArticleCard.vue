<template>
    <div class="ArticleCard">
        <el-row :gutter="0">
            <ArticleBodyContent></ArticleBodyContent>
            <ArticleBodyRight></ArticleBodyRight>
            <Drawer></Drawer>
        </el-row>
    </div>
</template>

<script>
    import Drawer from '@/components/front/Drawer'
    import ArticleBodyRight from '@/components/front/ArticleBodyRight'
    import ArticleBodyContent from '@/components/front/ArticleBodyContent'
    export default {
        name: "ArticleCard",
        components: {
            Drawer,
            ArticleBodyContent,
            ArticleBodyRight,
        }
    }
</script>

<style scoped>
    .article-body {
        background-color: #FFF;
    }
     .about-me {
        text-align: center;
        margin: 5px 2px 5px;
    }
</style>