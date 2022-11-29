export interface IHomeScreenTemplate {
  data: food[];
}
interface food {
  name: string;
  price: string;
  favorite: boolean;
  image: string;
  details: string;
}
