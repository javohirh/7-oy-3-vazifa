import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        tickets: [],
        setTickets: (ticket) =>
          set((state) => {
            return { tickets: [...state.tickets, ticket] };
          }),
        deleteTicket: (id) =>
          set((state) => {
            return {
              tickets: state.tickets.filter((ticket) => ticket.id !== id),
            };
          }),
      }),
      {
        name: "ticket-storage", // unique name for the persisted storage
        getStorage: () => localStorage, // (optional) define the storage type
      }
    )
  )
);

export default useStore;
