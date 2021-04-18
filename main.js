const app = new Vue({
  el: "#app",
  data: {
    // ToDoリストの空の配列
    todos: [
      { id: 1, content: "rspec勉強", done: false },
      { id: 2, content: "vueチュートリアル", done: true },
      { id: 3, content: "nuxtチュートリアル", done: false },
    ],
    displayOptions: [
      { value: 0, label: "全て" },
      { value: 1, label: "doneのみ" },
      { value: 2, label: "not doneのみ" },
    ],
    currentDisplayOptions: 0,
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
    switchStatus(todo) {
      todo.done = !todo.done;
    },
    removeTodo(todo) {
      let todos = this.todos;
      console.log("he");
      for (const task of todos) {
        if (task.id === todo.id) {
          todos.pop(todo);
        }
      }
    },
  },
  computed: {
    filterTodos() {
      return this.todos.filter(function (todo) {
        return this.currentDisplayOptions === 0
          ? true
          : this.currentDisplayOptions == (todo.done ? 1 : 2);
      }, this);
    },
  },
});
