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
});
