import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../../hooks/cartHook";
import { getParsedPrice } from "../../utils/parsePriceToLocalePrice";
import { Button } from "../Button";
import { Toast } from "../Toast";

export type ProductProps = {
  id: string;
  imageURL: string;
  name: string;
  description: string;
  price: number;
};

export type Props = {
  product: ProductProps;
};

export function Product({
  product: { description, id, imageURL, name, price },
}: Props) {
  const { handleAddProduct } = useCart();
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div className="flex flex-col">
      <Link href={`/product/${id}`}>
        <Image
          src={imageURL}
          alt={name}
          className="h-48 object-cover"
          width={640}
          height={400}
        />

        <h3 className="text-bold text-lg mt-2 mb-3">{name}</h3>

        <span className="text-sm flex line-clamp-3">{description}</span>
        <span className="">{getParsedPrice(price)}</span>

        <Toast
          title="Success"
          description={`${name} added to cart!`}
          isOpen={isToastVisible}
          onOpenChange={setIsToastVisible}
        />
      </Link>

      <footer className="flex flex-col mt-4">
        <Button
          onClick={() => {
            handleAddProduct({ description, id, imageURL, name, price });
            setIsToastVisible(true);
          }}
        >
          Add to Card
        </Button>
      </footer>
    </div>
  );
}
