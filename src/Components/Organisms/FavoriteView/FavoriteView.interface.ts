export interface IFavorite {
  data: IFavoriteData[];
}
interface IFavoriteData {
  name: string;
  price: string;
  favorite: boolean;
  details: string;
  image: string;
}
