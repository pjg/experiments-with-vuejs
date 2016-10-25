// Parent | Subreddit component containing a list of 'post' components.
var subreddit = Vue.component('subreddit', {
  template: '#subreddit',
  props: ['name'],

  data: function () {
    return { posts:
      [
        { title: 'abc', body: 'def' },
        { title: 'ghiasdfasdfasdfasdfasdf', body: 'jkl' },
      ]
    }
  }
});

// Child | Componenet represiting a single post.
var post = Vue.component('post', {
  template: "#post",
  props: ['post']
});

new Vue({
  el: '#vue'
});
