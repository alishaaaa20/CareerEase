import { create } from "zustand";

const useCounterStore = create((set) => ({
  login: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export { useCounterStore };
