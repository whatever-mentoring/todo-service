import create from "zustand";

interface Todo {
  id: number;
  text: string;
  stateId: number;
}

interface TodoState {
  todos: {
    todo: Todo[];
    doing: Todo[];
    done: Todo[];
  };
  addTodo: ({ id, text, stateId }: Todo) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: {
    todo: [],
    doing: [],
    done: [],
  },
  addTodo: ({ id, text, stateId }) =>
    set((state) => {
      const newTodo = { id, text, stateId };
      switch (stateId) {
        case 0:
          return {
            todos: { ...state.todos, todo: [...state.todos.todo, newTodo] },
          };
        case 1:
          return {
            todos: { ...state.todos, doing: [...state.todos.doing, newTodo] },
          };
        case 2:
          return {
            todos: { ...state.todos, done: [...state.todos.done, newTodo] },
          };
        default:
          return state;
      }
    }),
}));
