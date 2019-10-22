<template>
    <div class="article-detail">
        <el-col :span="10" :offset="5">
            <el-row :gutter="0">
                <el-col :span="24">
                    <el-card shadow="hover" v-html="content" style="margin:5px;padding:15px;">
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="4">
            <el-row :gutter="0">
                <el-col :span="24">
                    <el-card shadow="hover" style="margin:5px;position:fixed;width:16.6%;"  :body-style="{ padding: '0px' }" id="article-toc" class="article-toc" ref="article-toc">
                        <div class="highlight-title" id="hightline-div" style=""></div>
                        <h1 style="    margin-block-start: 0.83em;
        margin-block-end: 0.83em;cursor: initial;padding-left: 15px;background-color: #FFF;    font-weight: bold;    border: none;    padding: 8px 12px;    font-size: 16px;">目录</h1>
                        <div id="article-mulu" class="article-mulu">
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </div>
</template>
<script>
    import marked from 'marked'
    import Vue from 'vue/dist/vue.js'
    import {
        mapGetters,
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        name: 'ArticleDetail',
        data: function() {
            return {
                tocArr: [],
                tocDom: [],
                index: 0,
                content: '',
                toc: '',
                //内容的div高度
                divHeights: [],
                item: {},
                //标记改变没
                make: true
            }
        },
        computed: {
            ...mapState({
                topShow: state => state.article.top,
                articleTopShow: state => state.article.articleTop,
                title: state => state.article.title,
            })
        },
        created: function() {},
        mounted: function() {
            let renderer = new marked.Renderer();
            renderer.heading = (text, level, raw) => {
                let anchor = this.addItem(text, level);
                anchor = anchor.replace("#", "")
                return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>`;
            };
            marked.setOptions({
                renderer: renderer,
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false
            });
            this.$get('/home/article/' + this.$route.params.id).then(res => {
                this.$resultCheck(res.data, true, true).then(res => {
                    this.item = res.data
                    //数据解析
                    this.execDataAnalyze()
                }).catch(res => {})
            })
            //启动监听
            window.addEventListener("scroll", this.handleScroll);
        },
        components: {},
        methods: {
            ...mapMutations({
                changeTop: 'changeTop',
                setTitle: 'setTitle' //
            }),
            //数据分析
            execDataAnalyze() {
                this.setTitle(this.item.title)
                let content = marked(this.item.content);
                this.content = content.replace("[TOC]", "")
                this.toc = this.toHTML();
                //TOC Vue对象
                let MyComponent = Vue.extend({
                    template: this.toc,
                    methods: {
                        //点击添加样式
                        addClass(e) {
                            let dom = $(this.$refs[e]);
                            if (dom) {
                                dom.parents("#article-mulu").find("li").removeClass("set_color")
                                dom.parent("li").addClass("set_color")
                                $("#hightline-div").css("display", "block")
                                let top = dom.position().top;
                                $("#hightline-div").css("top", top + 68)
                            }
                        },
                    }
                });
                var component = new MyComponent().$mount();
                document.getElementById('article-mulu').appendChild(component.$el);
            },
            //滚动添加样式
            changeClass(id) {
                id = id.replace("#", "")
                if (id) {
                    this.changeClassByDom($("#TOC" + id))
                }
            },
            //dom = a 标签
            changeClassByDom(dom) {
                if (dom) {
                    $("#hightline-div").css("display", "block")
                    let top = dom.position().top;
                    $("#hightline-div").css("top", top + 68)
                    dom.parents("#article-mulu").find("li").removeClass("set_color")
                    dom.parent("li").addClass("set_color")
                }
            },
            handleScroll() {
                this.divHeights = []
                for (let i = 0; i < this.tocDom.length; i++) {
                    this.divHeights.push($(this.tocDom[i]).offset().top);
                }
                let scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                let k;
                for (let i = this.divHeights.length - 1; i >= 0; i--) {
                    if (scrollTop > this.divHeights[i] - 50) {
                        this.changeClass(this.tocDom[i])
                        break
                    }
                }
                if (scrollTop > 100 && this.make) {
                    this.changeTop()
                    this.make = false
                } else if (scrollTop <= 100 && !this.make) {
                    this.changeTop()
                    this.make = true
                }
            },
            addItem(text, level) {
                var anchor = `#toc${level}toc${++this.index}`;
                this.tocArr.push({
                    anchor: anchor,
                    level: level,
                    text: text
                });
                this.tocDom.push(
                    anchor
                )
                return anchor;
            },
            toHTML() {
                let levelStack = [];
                let result = '';
                const addStartUL = () => {
                    result += '<ul style="    display: block;\
        list-style-type: disc;\
        margin-inline-start: 0px;\
        margin-inline-end: 0px;\
        padding-inline-start: 40px;">';
                };
                const addEndUL = () => {
                    result += '</ul>';
                };
                const addLI = (anchor, text) => {
                    let id = anchor.replace("#", "")
                    result += `<li style="  padding-left: 5px;
                            margin: 0;
                            list-style-type: square;
                            "><a style="   display: block;
            padding: 3px 0;
            color: #000;
            text-decoration: none;
            z-index: 2;  overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;" id='TOC${id}' class="title-hide" href=${anchor} ref=${anchor} @click="addClass('${anchor}')">${text}</a></li>`;
                };
                this.tocArr.forEach(function(item) {
                    let levelIndex = levelStack.indexOf(item.level);
                    // 没有找到相应level的ul标签，则将li放入新增的ul中
                    if (levelIndex === -1) {
                        levelStack.unshift(item.level);
                        addStartUL();
                        addLI(item.anchor, item.text);
                    } // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
                    else if (levelIndex === 0) {
                        addLI(item.anchor, item.text);
                    } // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
                    else {
                        while (levelIndex--) {
                            levelStack.shift();
                            addEndUL();
                        }
                        addLI(item.anchor, item.text);
                    }
                });
                // 如果栈中还有level，全部出栈打上闭合标签
                while (levelStack.length) {
                    levelStack.shift();
                    addEndUL();
                }
                return result;
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .article-detail {
        height: 100vh;
        width: 100%;
        margin-top: 35px;
    }
    #article-mulu {
        position: relative;
        z-index: 2;
    }
    .article-toc {
        padding: 0px!important;
    }
    .article-toc ul li {
        padding-left: 5px;
        margin: 0;
        list-style-type: square;
    }
    .article-toc ul li a {
        display: block;
        padding: 3px 0;
        color: #000;
        text-decoration: none;
        z-index: 2;
    }
    #hightline-div {
        z-index: 1;
        display: none;
        top: 0px;
        height: 27px;
        position: absolute;
        left: 0;
        right: 0;
        background: #f3f3f3;
        border-left: 2px solid #409EFF;
        transition: all .2s ease;
        opacity: 1;
    }
    .set_color a {
        color: #409EFF!important;
    }
    .set_color {
        color: #409EFF!important;
        transition: all .2s ease;
    }
    .title-hide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
 </style>