<template>
  <div id="article-sidebar">
    <ArticleList type="latest"></ArticleList>
    <ArticleList type="related" :category="category"></ArticleList>
  </div>
</template>

<script>
import ArticleList from '@/components/Article/ArticleList.vue'
export default {
  props: ['category'],
  components: {
    ArticleList
  }
}
</script>

<style lang="scss">
#article-sidebar {
  border-left: 1px solid #00000055;
  padding-left: 20px;
}
</style>