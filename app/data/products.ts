import IProduct from '~/interfaces/Product';

const products: IProduct[] = [
  {
    id: '1',
    image:
      'https://cdn.shopify.com/s/files/1/0251/9855/9279/files/Untitled_design_81.jpg?v=1709909490',
    name: 'Roadster',
    slug: 'roadster',
    description: 'Black Solid Round Neck',
    price: 80,
    discount: 100,
  },
  {
    id: '2',
    image:
      'https://cdn.shopify.com/s/files/1/0251/9855/9279/files/Untitled_design_91.jpg?v=1709910354',
    name: 'Blue Blazer',
    slug: 'blue-blazer',
    description: 'Men’s clothes',
    price: 120,
    discount: 149,
  },
  {
    id: '3',
    image:
      'https://cdn.shopify.com/s/files/1/0251/9855/9279/files/Untitled_design_92.jpg',
    name: 'Black Shirt',
    slug: 'black-shirt',
    description: 'Shirts',
    price: 75,
    discount: 100,
  },
  {
    id: '4',
    image:
      'https://cdn.shopify.com/s/files/1/0251/9855/9279/files/Untitled_design_-_2024-03-11T143220.000.jpg?v=1710169942',
    name: 'Beige T-shirt',
    slug: 'beige-t-shirt',
    description: 'Women’s clothes',
    price: 75,
    discount: 75,
  },
];

export default products;
