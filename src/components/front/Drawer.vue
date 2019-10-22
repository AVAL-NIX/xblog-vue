<template>
    <div>
        <el-drawer title="时光轴" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <Timeline></Timeline>
        </el-drawer>
    </div>
</template>

<script>
    import Timeline from '@/components/front/Timeline'
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
            ...mapState({
                drawer: state => state.home.drawer
            })
        },
        methods: {
            ...mapMutations({
                setDrawer: 'changeDrawer'
            }),
            handleClose(done) {
                this.setDrawer()
                //  done();
            }
        },
        components: {
            Timeline
        }
    }
</script>

<style>

</style>