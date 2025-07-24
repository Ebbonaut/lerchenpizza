import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Willkommen bei Lerchenpizza
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Authentische neapolitanische Pizza, mit Liebe von Laura zubereitet.
        </p>
        <Link 
          to="/menu" 
          className="bg-olive-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-olive-600 transition-colors"
        >
          Zur Speisekarte
        </Link>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-olive-600 mb-2">Lange Teigführung</h3>
          <p className="text-gray-600">Unser Teig ruht mindestens 72 Stunden für einen unvergleichlichen Geschmack und eine leichte Verdaulichkeit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-olive-600 mb-2">Frische Zutaten</h3>
          <p className="text-gray-600">Wir verwenden nur die besten, sorgfältig ausgewählten Zutaten für ein authentisches Geschmackserlebnis.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-olive-600 mb-2">Handgemacht</h3>
          <p className="text-gray-600">Jede Pizza wird von Laura persönlich mit Leidenschaft und nach traditionellem Rezept zubereitet.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
