import IProduct from './Product';

export default interface ICollecction {
  id: string;
  slug: string;
  name: string;
  image: string;
  products: IProduct[];
}
