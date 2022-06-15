const app = Vue.createApp({
  data() {
    return {
      items: [],
      nextId: 1,
      todoTask: "",
      check: [],
    };
  },
  methods: {
    addTask() {
      if (this.todoTask === "") return;
      this.items.push({
        id: this.nextId++,
        title: this.todoTask,
      });
      this.todoTask = "";
    },
    clickTodo(index, type) {
      console.log(index, type);
      if (type === "need") {
        this.items.splice(index, 1);
      }
    },
    clickDoes(index, type) {
      console.log(index, type);
      if (type === "complete") {
        this.check.splice(index, 1);
      }
    },
  },
}).mount(".app");


