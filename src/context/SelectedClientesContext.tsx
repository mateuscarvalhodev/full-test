// import { createContext, useContext, useState, ReactNode } from 'react';

// export interface Client {
//   name: string;
//   priceEnterprise: number;
//   priceSalary: number;
// }

// interface SelectedClientsContextType {
//   selectedClients: Client[];
//   addClient: (client: Client) => void;
//   removeClient: (client: Client) => void;
// }

// const SelectedClientsContext = createContext<SelectedClientsContextType | undefined>(undefined);

// export const useSelectedClients = () => {
//   const context = useContext(SelectedClientsContext);
//   if (!context) {
//     throw new Error('useSelectedClients must be used within a SelectedClientsProvider');
//   }
//   return context;
// };

// export const SelectedClientsProvider = ({ children }: { children: ReactNode }) => {
//   const [selectedClients, setSelectedClients] = useState<Client[]>([]);

//   const addClient = (client: Client) => {
//     // Opcional: evite duplicatas
//     setSelectedClients((prev) => {
//       if (prev.some((c) => c.name === client.name)) return prev;
//       return [...prev, client];
//     });
//   };

//   const removeClient = (client: Client) => {
//     setSelectedClients((prev) =>
//       prev.filter((c) => c.name !== client.name)
//     );
//   };

//   return (
//     <SelectedClientsContext.Provider value={{ selectedClients, addClient, removeClient }}>
//       {children}
//     </SelectedClientsContext.Provider>
//   );
// };