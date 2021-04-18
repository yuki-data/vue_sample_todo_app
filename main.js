const app = new Vue({
  el: "#app",
  data: {
    // ToDoリストの空の配列
    todos: [
      { id: 1, content: "rspec勉強", state: "not done" },
      { id: 2, content: "vueチュートリアル", state: "done" },
      { id: 3, content: "nuxtチュートリアル", state: "not done" },
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
      let todo = { id: id, content: content, state: "not done" };
      this.todos.push(todo);
      this.$refs.newtask.value = "";
    },
  },
});
