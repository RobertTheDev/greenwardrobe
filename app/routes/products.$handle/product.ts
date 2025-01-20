import IProduct from '~/interfaces/Product';

const product: IProduct = {
  id: '1',
  slug: 'roadster',
  title: 'Women Embroidered A-line Kurta',
  description:
    'Women Embroidered Georgette A-line Kurta with Attached Dupatta in a rich maroon shade, featuring intricate embroidery, and a lightweight georgette fabric.',
  price: {
    current: 12,
    previous: 16,
    currency: 'USD',
    taxIncluded: true,
  },
  productInformation: [
    {
      title: 'Product details',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Vendor details',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Return and exchange policy',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
  colours: ['Blue', 'Green', 'Yellow', 'Orange', 'Purple'],
  sizes: ['SM', 'MD', 'LG', 'XL', 'XXL'],
  images: [
    {
      id: '1',
      src: 'https://readymadeui.com/images/fashion-img-1.webp',
      alt: 'Product',
    },
    {
      id: '2',
      src: 'https://readymadeui.com/images/fashion-img-2.webp',
      alt: 'Product2',
    },
    {
      id: '3',
      src: 'https://readymadeui.com/images/fashion-img-3.webp',
      alt: 'Product3',
    },
    {
      id: '4',
      src: 'https://readymadeui.com/images/fashion-img-4.webp',
      alt: 'Product4',
    },
  ],
};

export default product;
