// Parent | Subreddit component containing a list of 'post' components
var subreddit = Vue.component('subreddit', {
  template: '#subreddit',
  props: ['name'],

  data: function () {
    return { posts: [] }
  },
  created: function() {
    this.$http.get("https://www.reddit.com/r/" + this.name + "/top.json?limit=5")
      .then(function(resp) {
        this.posts = resp.data.data.children;
      });
  }
});

// Child | Component representing a single post
var post = Vue.component('post', {
  template: "#post",
  props: ['post'],
  methods: {
    truncatedTitle: function() {
      var maxlength = 60;
      var title = this.post.data.title;

      if (title.length <= maxlength) {
        return title;
      } else {
        return title.substring(0, maxlength) + '...';
      }
    }
  }
});

new Vue({
  el: '#vue'
});
