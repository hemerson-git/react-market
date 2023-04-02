import * as PrimitiveSelect from '@radix-ui/react-select';

import { Product, ProductProps } from '@/components/Product';
import { TextInput } from '@/components/TextInput';
import { API } from '@/services/api';
import { useEffect, useState } from 'react';
import { Select } from '@/components/Select';

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
  const visibleProducts = filteredProducts.length ? filteredProducts : products;

  useEffect(() => {
    (async () => {
      const response = await API.get('/products');
      setProducts(response.data);
    })();
  }, []);

  return (
    <section className="flex pt-10 px-4">
      <aside className="px-4 w-64 max-w-full">
        <div>
          <h3 className="font-bold text-xl mb-3">Filter</h3>

          <TextInput
            type="search"
            placeholder="Product Name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </aside>

      <main className="flex-1">
        <div className="flex mb-4 items-center justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <PrimitiveSelect.Root defaultValue="name">
            <PrimitiveSelect.Trigger>
              <PrimitiveSelect.Value />
              <PrimitiveSelect.Icon />
            </PrimitiveSelect.Trigger>

            <Select>
              <PrimitiveSelect.Item value="name">Name</PrimitiveSelect.Item>
              <PrimitiveSelect.Item value="price">Price</PrimitiveSelect.Item>
              <PrimitiveSelect.Item value=""></PrimitiveSelect.Item>
            </Select>
          </PrimitiveSelect.Root>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1">
          {visibleProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
    </section>
  );
}
