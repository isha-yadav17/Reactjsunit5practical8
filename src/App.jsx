
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
  ]);

  const [selectedId, setSelectedId] = useState(1);
  const [name, setName] = useState("Laptop");
  const [price, setPrice] = useState("50000");

  function selectProduct(product) {
    setSelectedId(product.id);
    setName(product.name);
    setPrice(String(product.price));
  }

  function updateProduct(e) {
    e.preventDefault();

    setProducts(
      products.map((product) =>
        product.id === selectedId
          ? { ...product, name, price: Number(price) }
          : product
      )
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 px-4 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3 inline-block rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-5 py-2 text-sm font-bold tracking-widest text-fuchsia-300">
            ✦ PRODUCT MANAGEMENT
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Update <span className="text-fuchsia-400">Product</span>
          </h1>

          <p className="mt-3 text-slate-300">
            Manage your products with style.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border-2 border-purple-400/40 bg-white/10 p-5 shadow-2xl shadow-purple-950/50 backdrop-blur-xl transition duration-300 hover:border-fuchsia-400/70 sm:p-8">

          <h2 className="mb-4 text-xl font-extrabold text-white">
            Choose a Product
          </h2>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => selectProduct(product)}
                className={`group rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  selectedId === product.id
                    ? "border-fuchsia-400 bg-fuchsia-500/20 shadow-lg shadow-fuchsia-900/30"
                    : "border-white/15 bg-slate-900/50 hover:border-purple-400 hover:bg-purple-500/20"
                }`}
              >
                <span className="mb-3 block text-3xl transition-transform duration-300 group-hover:scale-110">
                  {product.name.toLowerCase().includes("laptop")
                    ? "💻"
                    : "📱"}
                </span>

                <span className="block text-lg font-extrabold">
                  {product.name}
                </span>

                <span className="mt-1 block font-bold text-fuchsia-300">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>

                <span className="mt-3 inline-block text-xs font-bold text-purple-300">
                  {selectedId === product.id
                    ? "✓ SELECTED"
                    : "CLICK TO EDIT →"}
                </span>
              </button>
            ))}
          </div>

          {/* Update Form */}
          <div className="rounded-2xl border border-purple-400/30 bg-slate-950/50 p-5 sm:p-6">
            <h2 className="mb-6 text-xl font-extrabold">
              <span className="text-fuchsia-400">✦</span> Edit Details
            </h2>

            <form onSubmit={updateProduct} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-purple-200">
                  Product Name
                </label>

                <input
                  className="w-full rounded-xl border-2 border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/20 hover:border-purple-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-purple-200">
                  Product Price (₹)
                </label>

                <input
                  className="w-full rounded-xl border-2 border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-500/20 hover:border-purple-400"
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter product price"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl border-2 border-fuchsia-300 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-4 font-extrabold tracking-wide text-white shadow-lg shadow-fuchsia-950/40 transition duration-300 hover:-translate-y-1 hover:border-white hover:from-fuchsia-500 hover:to-purple-500 hover:shadow-xl hover:shadow-fuchsia-500/30 active:translate-y-0"
              >
                ✨ UPDATE PRODUCT
              </button>
            </form>
          </div>

          {/* Product List */}
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-extrabold">
              All Products
              <span className="ml-3 rounded-full border border-purple-400/40 bg-purple-500/20 px-3 py-1 text-sm text-purple-200">
                {products.length}
              </span>
            </h2>

            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/60 hover:bg-purple-500/15 hover:shadow-lg hover:shadow-purple-950/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/20 text-xl">
                      {product.name.toLowerCase().includes("laptop")
                        ? "💻"
                        : "📦"}
                    </span>

                    <div>
                      <p className="font-bold text-white">
                        {product.name}
                      </p>
                      <p className="text-sm text-slate-400">
                        Product ID: {product.id}
                      </p>
                    </div>
                  </div>

                  <p className="font-extrabold text-fuchsia-300">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          ✦ Simple • Stylish • Responsive ✦
        </p>
      </div>
    </div>
  );
}

export default App;
