export function getParsedPrice(price: number) {
  const parsedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return parsedPrice;
}
