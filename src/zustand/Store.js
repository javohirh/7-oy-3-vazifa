import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        tickets: [],
        phoneNumber: "",
        setPhoneNumber: (number) =>
          set(() => {
            return { phoneNumber: number };
          }),
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
        name: "ticket-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;
