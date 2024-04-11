import create from "zustand";

interface Todo {
  id: number;
  text?: string;
  stateId: number;
}

interface TodoState {
  todos: {
    todo: Todo[];
    doing: Todo[];
    done: Todo[];
  };
  counts: {
    todoCount: number;
    doingCount: number;
    doneCount: number;
  };
  itemId: number;
  increaseAddId: () => void;
  addTodo: ({ id, text, stateId }: Todo) => void;
  removeTodo: ({ id, stateId }: Todo) => void;
  updateTodo: ({ id, text }: Todo) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: {
    todo: [],
    doing: [],
    done: [],
  },
  counts: {
    todoCount: 0,
    doingCount: 0,
    doneCount: 0,
  },
  itemId: 0,
  increaseAddId: () => set((state) => ({ itemId: state.itemId + 1 })),
  addTodo: ({ id, text, stateId }) =>
    set((state) => {
      const newTodo = { id, text, stateId };
      switch (stateId) {
        case 0:
          return {
            todos: { ...state.todos, todo: [...state.todos.todo, newTodo] },
            counts: { ...state.counts, todoCount: state.counts.todoCount + 1 },
          };
        case 1:
          return {
            todos: { ...state.todos, doing: [...state.todos.doing, newTodo] },
            counts: {
              ...state.counts,
              doingCount: state.counts.doingCount + 1,
            },
          };
        case 2:
          return {
            todos: { ...state.todos, done: [...state.todos.done, newTodo] },
            counts: { ...state.counts, doneCount: state.counts.doneCount + 1 },
          };
        default:
          return state;
      }
    }),
  removeTodo: ({ id, stateId }) => {
    set((state) => {
      switch (stateId) {
        case 0:
          return {
            todos: {
              ...state.todos,
              todo: state.todos.todo.filter((item) => item.id !== id),
            },
            counts: { ...state.counts, todoCount: state.counts.todoCount - 1 },
          };
        case 1:
          return {
            todos: {
              ...state.todos,
              doing: state.todos.doing.filter((item) => item.id !== id),
            },
            counts: {
              ...state.counts,
              doingCount: state.counts.doingCount - 1,
            },
          };
        case 2:
          return {
            todos: {
              ...state.todos,
              done: state.todos.done.filter((item) => item.id !== id),
            },
            counts: { ...state.counts, doneCount: state.counts.doneCount - 1 },
          };
        default:
          return state;
      }
    });
  },
  updateTodo: ({ id, text, stateId }) => {
    set((state) => {
      const updateTodos = (todos: Todo[]) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));

      switch (stateId) {
        case 0:
          return {
            ...state,
            todos: {
              ...state.todos,
              todo: updateTodos(state.todos.todo),
            },
          };
        case 1:
          console.log(state.todos.doing, id, text, stateId);
          return {
            ...state,
            todos: {
              ...state.todos,
              doing: updateTodos(state.todos.doing),
            },
          };
        case 2:
          return {
            ...state,
            todos: {
              ...state.todos,
              done: updateTodos(state.todos.done),
            },
          };
        default:
          return state;
      }
    });
  },
}));
