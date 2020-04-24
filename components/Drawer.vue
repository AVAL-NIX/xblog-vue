<template>
    <div>
        <el-drawer title="时光轴" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <Timeline></Timeline>
        </el-drawer>
    </div>
</template>

<script>
    import Timeline from '~/components/Timeline'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'Drawer',
        data() {
            return {
                direction: 'rtl',
            };
        },
        computed: {
            ...mapState('home',{
                drawer: "drawer"
            })
        },
        methods: {
            ...mapMutations('home',{
                changeDrawer: 'changeDrawer'
            }),
            handleClose(done) {
                this.changeDrawer()
            }
        },
        components: {
            Timeline
        }
    }
</script>

<style>

</style>