import BasketListItemCard from './BasketListItem';

export default function BasketList() {
  return (
    <div className="lg:col-span-8">
      <h2 className="font-manrope w-full text-start text-3xl font-semibold leading-normal text-gray-900">
        Cart
      </h2>
      <BasketListItemCard />
      <BasketListItemCard />
      <BasketListItemCard />
    </div>
  );
}
