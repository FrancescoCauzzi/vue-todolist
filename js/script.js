// VueJS
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      todos: [
        { text: "Fare la spesa", done: true },
        { text: "Andare in posta", done: false },
        { text: "Pulire la casa", done: false },
        { text: "Fare la lavanderia", done: false },
        { text: "Chiamare il dentista", done: false },
        { text: "Prenotare una cena con gli amici", done: false },
        { text: "Scrivere una lettera di ringraziamento", done: false },
      ],
      newTodo: {},
      newInput: "",
    };
  },
  methods: {
    // Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

    deleteTodo(myIndex) {
      this.todos.splice(myIndex, 1);
    },

    addTodo() {
      console.log(this.newTodo.text);
      this.newTodo.text = this.newInput;
      this.newTodo.done = false;

      this.todos.push(this.newTodo);

      this.newTodo = {};

      this.newInput = "";
    },
  },
}).mount("#app");
