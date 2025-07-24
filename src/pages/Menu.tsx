const classicPizzas = [
  { name: 'Margherita', price: '8,50€', ingredients: 'Tomatensauce, Mozzarella, Basilikum' },
  { name: 'Marinara', price: '7,50€', ingredients: 'Tomatensauce, Knoblauch, Oregano' },
  { name: 'Quattro Stagioni', price: '11,00€', ingredients: 'Tomatensauce, Mozzarella, Schinken, Pilze, Artischocken, Oliven' },
  { name: 'Diavola', price: '10,50€', ingredients: 'Tomatensauce, Mozzarella, scharfe Salami' },
  { name: 'Capricciosa', price: '11,50€', ingredients: 'Tomatensauce, Mozzarella, Schinken, Pilze, Artischocken' },
];

const specialPizzas = [
  { name: "Laura's Special", price: '13,50€', ingredients: 'Creme fraiche, Mozzarella, Lachs, Rucola, Kirschtomaten' },
  { name: 'Lerchenäcker', price: '12,50€', ingredients: 'Tomatensauce, Mozzarella, scharfe Salami, Gorgonzola, Zwiebeln' },
  { name: 'Industrie-Genuss', price: '13,00€', ingredients: 'BBQ-Sauce, Mozzarella, Pulled Pork, Zwiebeln, Paprika' },
];

const Menu = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Unsere Speisekarte</h1>
      
      <section>
        <h2 className="text-3xl font-semibold text-olive-600 mb-6">Klassiker</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {classicPizzas.map(pizza => (
            <div key={pizza.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-gray-800">{pizza.name}</h3>
                <p className="text-xl font-semibold text-olive-500">{pizza.price}</p>
              </div>
              <p className="text-gray-600 mt-2">{pizza.ingredients}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-olive-600 mb-6">Besondere Kreationen</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {specialPizzas.map(pizza => (
            <div key={pizza.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-gray-800">{pizza.name}</h3>
                <p className="text-xl font-semibold text-olive-500">{pizza.price}</p>
              </div>
              <p className="text-gray-600 mt-2">{pizza.ingredients}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
