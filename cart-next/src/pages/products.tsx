import * as PrimitiveSelect from '@radix-ui/react-select';
import * as Select from '@/components/Select';

import { Product, ProductProps } from '@/components/Product';
import { TextInput } from '@/components/TextInput';
import { API } from '@/services/api';
import { useEffect, useState } from 'react';

type CategoryProps = {
  name: string;
  id: number;
};

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filter, setFilter] = useState('');
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(filter.toLowerCase()));
  const visibleProducts = filteredProducts.length ? filteredProducts : products;

  useEffect(() => {
    (async () => {
      const [response1, response2] = await Promise.all([API.get('/products'), API.get('/categories')]);
      setProducts(response1.data);
      setCategories(response2.data);
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

          <h3 className="font-bold text-xl mb-3 mt-4">Categories</h3>

          <div>
            {categories.map((category) => (
              <div key={category.id}>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1">
        <div className="flex mb-4 items-center justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <PrimitiveSelect.Root defaultValue="name">
            <Select.Trigger placeholder="Sort-by" defaultValue="name" />

            <Select.Select>
              <PrimitiveSelect.Item className="flex relative select-none" value="name">
                Name
              </PrimitiveSelect.Item>
              <PrimitiveSelect.Item className="flex relative select-none" value="price">
                Price
              </PrimitiveSelect.Item>
              <PrimitiveSelect.Item className="flex relative select-none" value=""></PrimitiveSelect.Item>
            </Select.Select>
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
