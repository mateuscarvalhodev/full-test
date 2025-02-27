export type TClientCards = {
  id: number;
  userId: number;
  name: string;
  enterprisePrice: number;
  salary: number;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onRemove?: () => void;
  variant?: 'default' | 'selected';
};

export type TNewClient = Omit<TClientCards, 'id'>;