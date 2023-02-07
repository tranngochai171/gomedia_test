export type ProductItemListType = {
  id: string;
  photo_url: string;
  title: string;
  address: string;
  agent_name: string;
  property_type: string;
  completion_date: string;
  launch_date: string;
  min_price: number;
  max_price: number;
  startCursor?: number;
};
