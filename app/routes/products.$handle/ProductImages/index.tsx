import IProduct from '~/interfaces/Product';

export default function ProductImages({ product }: { product: IProduct }) {
  return (
    <div className="top-0 w-full lg:sticky lg:col-span-3">
      <div className="grid grid-cols-2 gap-0.5">
        {product.images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[182/243] w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
