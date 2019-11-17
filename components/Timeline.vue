<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-size="size"    layout="prev, pager, next, jumper" :total="total">
            </el-pagination>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activities: [],
                data: '',
                page: 1,
                size: 13,
                total: 1,
            };
        },
        mounted() {
            this.getData()
        },
        methods: {
            handleSizeChange(val) {
                this.size = val
                this.getData()
            },
            handleCurrentChange(val) {
                this.page = val
                this.getData()
            },
            getData() {
                this.$get('/home/article/time',{
                    page: this.page,
                    size: this.size
                }).then(res => {
                    this.$check(res.data, true).then(res => {
                        this.data = res.data.records
                        this.total = res.data.total
                        //数据解析
                        this.execDataAnalyze()
                    }).catch(res => {})
                })
            },
            execDataAnalyze() {
                //   content: '支持使用图标',
                //   timestamp: '2018-04-12 20:46',
                //   size: 'large',
                //   type: 'primary',
                //   icon: 'el-icon-more'
                // }, {
                //   content: '支持自定义颜色',
                //   timestamp: '2018-04-03 20:46',
                //   color: '#0bbd87'
                // }, {
                //   content: '支持自定义尺寸',
                //   timestamp: '2018-04-03 20:46',
                //   size: 'large'
                // }, {
                //   content: '默认样式的节点',
                //   timestamp: '2018-04-03 20:46'
                // }
                this.activities = []
                this.data.map(item => {
                    let obj = {
                        content: item.title,
                        timestamp: item.createDate,
                        size: 'large',
                        color: '#0bbd87',
                        icon: 'el-icon-more'
                    }
                    this.activities.push(obj)
                })
            }
        }
    }
</script>

<style>

</style>