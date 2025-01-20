export default interface IProduct {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: {
    current: number;
    previous: number;
    currency: string;
    taxIncluded: boolean;
  };
  productInformation: {
    title: string;
    content: string;
  }[];
  colours: string[];
  sizes: string[];
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}
