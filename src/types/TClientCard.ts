export type Client = {
  id: number;
  userId: number;
  name: string;
  enterprisePrice: number;
  salary: number;
  isSelected: boolean
}
export type TClientCards = {
  onAdd?: (data: Client) => void;
  onEdit?: (data: Client) => void;
  onDelete?: () => void;
  onRemove?: (data: Client) => void;
  clientData: Client
  variant?: 'default' | 'selected';
};

export type TNewClient = Omit<Client, 'id' | 'isSelected'>;