import OrderFooter from './OrderFooter';
import OrderInfo from './OrderInfo';
import OrderMessage from './OrderMessage';
import OrderSummary from './OrderSummary';
import productOrders from './productOrders';

export default function SuccessOrder() {
  return (
    <main className="relative py-24">
      <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
        <OrderMessage />
        <div className="main-box max-w-xl rounded-xl border border-gray-200 pt-6 max-lg:mx-auto lg:max-w-full">
          <OrderInfo />
          <OrderSummary productOrders={productOrders} />
          <OrderFooter />
        </div>
      </div>
    </main>
  );
}
