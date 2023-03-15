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
      newTodo: { text: "", done: false },
      newText: null,
    };
  },
  methods: {
    // Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

    deleteTodo(myIndex) {
      this.todos.splice(myIndex, 1);
    },

    addTodo() {
      console.log(this.newText);
      this.newTodo.text = this.newText;
      this.todos.push(this.newTodo);
      console.log(this.newTodo);
      newTodo = { text: "", done: false };
      console.log(this.newTodo);

      console.log(this.newTodo.text);
      console.log(this.todos);
      this.newText = "";
    },
  },
}).mount("#app");
