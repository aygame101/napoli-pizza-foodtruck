import React from 'react';

const pizzas = [
  {
    name: "Regina",
    description: "Tomate, mozzarella fior di latte, champignons, jambon.",
    price: "13€",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80"
  },
  {
    name: "Margherita",
    description: "Tomate, mozzarella fior di latte, parmigiano reggiano, basilic.",
    price: "10€",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80"
  },
  {
    name: "Burratta",
    description: "tomate, oignons rouges, parmiagiano reggiano, jambon de Parme, tomates cerises, burratta, crème de balsamique.",
    price: "14€",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Notre Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <div key={pizza.name} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-serif">{pizza.name}</h3>
                  <span className="text-lg font-medium">{pizza.price}</span>
                </div>
                <p className="mt-2 text-gray-600">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}