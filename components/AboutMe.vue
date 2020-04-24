<template>
    <div class="">
        <el-card shadow="hover" class="about-me">
            <el-avatar :size="122" style="margin:50px 0px;"></el-avatar>
            <div style="margin:10px;font-size:20px; margin-bottom:0px;">
                Avalon | 郑新
            </div>
            <el-card class="box-card" style="margin:10px">
                <div class="text item" @click="setDrawer()">
                    书中自有颜如玉,书中自有黄金屋
                </div>
            </el-card>
        </el-card>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        methods: {
            ...mapMutations('home',{
                changeDrawer: 'changeDrawer',
            }),
            setDrawer() {
                this.changeDrawer()
            }
        }
    }
</script>

<style scoped>
    .about-me {
        text-align: center;
        margin: 5px 2px 5px;
    }
</style>