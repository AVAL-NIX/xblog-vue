<template>
  <div class="index-class">
    <el-main>
      <ArticleBodyContent></ArticleBodyContent>
      <ArticleBodyRight></ArticleBodyRight>
      <Drawer></Drawer>
    </el-main>
  </div>
</template>

<script>
import Drawer from "~/components/Drawer";
import ArticleBodyRight from "~/components/ArticleBodyRight";
import ArticleBodyContent from "~/components/ArticleBodyContent";
import { mapGetters, mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  async asyncData({ store, params }) {
    await store.dispatch("home/getArticles");
    await store.dispatch("timeline/getTimeLine");
  },
  layout: "blog",
  name: "Index",
  head() {
    return {
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content: "java,python,avalon,遥远的理想乡,AVALON的博客"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "java,python,avalon,遥远的理想乡,AVALON的博客"
        }
      ],
      title: "AVALON的博客 - 遥远的理想乡"
    };
  },
  data() {
    return {};
  },
  components: {
    Drawer,
    ArticleBodyContent,
    ArticleBodyRight
  },
  computed: {
    ...mapState("home", {
      isMobile: "isMobile"
    })
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.index-class {
  margin-top: 45px;
  /* background-color: red !important ; */
}
</style>