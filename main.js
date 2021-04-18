const app = new Vue({
  el: "#app",
  data: {
    // ToDoリストの空の配列
    todos: [
      { id: 1, content: "rspec勉強", done: false },
      { id: 2, content: "vueチュートリアル", done: true },
      { id: 3, content: "nuxtチュートリアル", done: false },
    ],
  },
  methods: {
    submitNewTask() {
      // ref属性を付けたので$refsから要素を参照できる
      const content = this.$refs.newtask.value;
      const id = this.todos.length + 1;
      if (!content.length) {
        return;
      }
      let todo = { id: id, content: content, done: false };
      this.todos.push(todo);
      this.$refs.newtask.value = "";
    },
  },
});
