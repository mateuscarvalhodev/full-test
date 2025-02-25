export type TClientCards = {
  name: string;
  priceEnterprise: number;
  priceSalary: number;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onRemove?: () => void;
  variant?: 'default' | 'selected';
}