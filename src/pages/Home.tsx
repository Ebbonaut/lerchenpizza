import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from './Contact';
import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.avif';

const Home = () => {
  return (
    <>
      <section 
        className="h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${pizza1})` }}
      >
        <motion.div 
          className="text-center bg-black/50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h1 className="text-6xl font-bold mb-4">
            Lerchenpizza
          </h1> */}
          <p className="text-2xl mb-8">
            Authentische neapolitanische Pizza, mit Liebe von Laura zubereitet.
          </p>
          <Link 
            to="/menu" 
            className="bg-olive-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-olive-600 transition-all duration-300 transform hover:scale-105"
          >
            Zur Speisekarte
          </Link>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mt-8 grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-olive-600 mb-3">Lange Teigführung</h3>
            <p className="text-gray-600">Unser Teig ruht mindestens 24 Stunden für einen unvergleichlichen Geschmack und eine leichte Verdaulichkeit.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-olive-600 mb-3">Frische Zutaten</h3>
            <p className="text-gray-600">Wir verwenden nur die besten, sorgfältig ausgewählten Zutaten für ein authentisches Geschmackserlebnis.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-olive-600 mb-3">Handgemacht</h3>
            <p className="text-gray-600">Jede Pizza wird von Laura persönlich mit Leidenschaft und nach traditionellem Rezept zubereitet.</p>
          </motion.div>
        </section>
      </div>

      <section 
        className="h-[50vh] bg-cover bg-center bg-fixed flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${pizza2})` }}
      >
        <motion.div 
          className="text-center bg-black/50 p-8 rounded-lg max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Qualität, die man schmeckt</h2>
          <p className="text-xl">
            Vom sonnengereiften San-Marzano-Tomaten bis zum cremigen Fior di Latte – wir setzen auf kompromisslose Qualität und Frische. Das ist unser Versprechen für den perfekten Pizzagenuss.
          </p>
        </motion.div>
      </section>

      <Contact />
    </>
  );
};

export default Home;
