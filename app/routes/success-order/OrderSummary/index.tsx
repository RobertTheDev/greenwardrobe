import IProductOrder from '~/interfaces/ProductOrder';
import ProductOrderCard from '../ProductOrderCard';

export default function OrderSummary({
  productOrders,
}: {
  productOrders: IProductOrder[];
}) {
  return (
    <div className="w-full px-3 min-[400px]:px-6">
      {productOrders.map((product, index) => (
        <ProductOrderCard key={index} product={product} />
      ))}
    </div>
  );
}
