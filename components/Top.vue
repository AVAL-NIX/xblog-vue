<template>
  <div class="top">
    <div class="top-div">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">主页</el-menu-item>
        <el-menu-item style="float:right">
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-menu-item>
        <el-menu-item style="float:right">
          <el-autocomplete
            class="inline-input"
            v-model="input"
            :fetch-suggestions="querySearch"
            placeholder
            :trigger-on-focus="false"
            @select="handleSelect2"
          ></el-autocomplete>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    ...mapActions("home", {
      getTitles: "getTitles",
      getArticles: "getArticles"
    }),
    ...mapMutations("home", {
      changeQueryTitle: "changeQueryTitle",
      changeLabels: "changeLabels",
      cleanSearchContion: "cleanSearchContion"
    }),
    handleSelect(key, keyPath) {
      console.log(" key ", key, keyPath);
      if (key == 1) {
        this.cleanSearchContion();
        this.$router.push("/");
        this.getArticles();
      }
    },
    onSubmit() {
      this.changeLabels("");
      this.$router.push("/");
      this.changeQueryTitle(this.input);
      this.getArticles();
    },
    querySearch(queryString, cb) {
      console.log("titles", this.titles, queryString);
      var restaurants = this.titles;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      console.log("results", results);
      cb(results);
    },
    handleSelect2(item) {
      console.log(item);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) !=
          -1
        );
      };
    }
  },
  mounted() {
    this.getTitles();
  },
  computed: {
    ...mapState("home", {
      titles: "titles",
      queryTitle: "queryTitle"
    }),
    input: {
      get() {
        return this.$store.state.home.queryTitle;
      },
      set(val) {
        this.$store.state.home.queryTitle = val;
      }
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 1000;
  margin: 0px;
  padding: 0px;
  top: 0px;
}
.top-title {
  float: left;
}
.top-div {
  width: 60%;
  margin: auto;
}
</style>