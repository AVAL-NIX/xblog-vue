 <template>
 <div class="Backtop">
        <el-row :gutter="8">
            <el-col :span="12  " :offset="6">
                <div>
                    <el-link><a href="https://www.360.cn/" target="_blank">360</a></el-link>
                    <el-link type="primary"><a href="https://www.baidu.com" target="_blank">百度</a></el-link>
                    <el-link type="success"><a href="https://cn.aliyun.com/" target="_blank">阿里云</a></el-link>
                    <el-link type="warning"> <a href="https://www.qq.com/" target="_blank">腾讯</a></el-link>
                    <el-link type="danger"><a href="https://www.google.com" target="_blank">谷歌</a></el-link>
                    <el-link type="info"><a href="https://cn.bing.com" target="_blank">必应</a></el-link>
                    <br>
                    <span style="font-weight: 500; font-size: 12px;height:14px;">© 2019-2020 Zhengxin 版权所有</span>
                    <el-link type="info" ><a href="http://www.beian.miit.gov.cn" target="_blank" style="color:red;">粤ICP备18030792号-1</a></el-link>
                </div>
            </el-col>
        </el-row>

        <el-backtop target="" :bottom="30" :right="30">
            <div
            style="{
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0,0,0, .12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            }"
            >
            UP
            </div>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: 'Backtop',
        methods:{

        }
    }
</script>

<style scoped>
    .Backtop{
        text-align: center;
    }
</style>