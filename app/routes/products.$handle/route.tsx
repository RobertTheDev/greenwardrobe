import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import ProductImages from './ProductImages';
import ProductInformation from './ProductInformation';
import ProductOptions from './ProductOptions';
import ProductTitleAndPrice from './ProductTitleAndPrice';
import product from './product';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Product') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function ProductPage() {
  return (
    <div className="p-4 font-[sans-serif]">
      <div className="w-full">
        <div className="grid grid-cols-1 items-start gap-8 max-lg:gap-12 max-sm:gap-8 lg:grid-cols-5">
          <ProductImages product={product} />
          <div className="w-full lg:col-span-2">
            <ProductTitleAndPrice product={product} />
            <hr className="my-6 border-gray-300" />
            <ProductOptions product={product} />
            <hr className="my-6 border-gray-300" />
            <ProductInformation product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
