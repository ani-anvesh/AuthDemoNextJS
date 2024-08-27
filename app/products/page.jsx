// const products = [
//   {
//     prodId: 1,
//     prodName: "Basic Tee",
//     prodHref: "#",
//     prodImageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     prodImageAlt: "Front of men's Basic Tee in black.",
//     prodPrice: "$35",
//     prodColor: "Black",
//   },
//   {
//     prodId: 1,
//     prodName: "Basic Tee",
//     prodHref: "#",
//     prodImageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     prodImageAlt: "Front of men's Basic Tee in black.",
//     prodPrice: "$35",
//     prodColor: "Black",
//   },
//   {
//     prodId: 1,
//     prodName: "Basic Tee",
//     prodHref: "#",
//     prodImageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     prodImageAlt: "Front of men's Basic Tee in black.",
//     prodPrice: "$35",
//     prodColor: "Black",
//   },
//   {
//     prodId: 1,
//     prodName: "Basic Tee",
//     prodHref: "#",
//     prodImageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     prodImageAlt: "Front of men's Basic Tee in black.",
//     prodPrice: "$35",
//     prodColor: "Black",
//   },
//   {
//     prodId: 1,
//     prodName: "Basic Tee",
//     prodHref: "#",
//     prodImageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     prodImageAlt: "Front of men's Basic Tee in black.",
//     prodPrice: "$35",
//     prodColor: "Black",
//   },
//   // More products...
// ];

export default async function Products() {
  const data = await fetch("http://localhost:8080/products", {
    headers: { cache: "no-store" },
  });
  const products = await data.json();
  console.log(Array.isArray(products)); // Should log `true`
  console.log(products);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Choises</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.prodId} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img alt={product.prodImageAlt} src={product.prodImageSrc} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.prodHref}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.prodName}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.prodColor}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.prodPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
