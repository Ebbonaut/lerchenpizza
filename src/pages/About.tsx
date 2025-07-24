const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Über Lerchenpizza</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-3xl font-semibold text-olive-600 mb-4">Unsere Geschichte</h2>
        <p className="text-gray-600 mb-6">
          Lerchenpizza wurde aus einer Leidenschaft für authentische neapolitanische Pizza geboren. 
          Laura, unsere Gründerin und Pizzaiola, hat ihre Technik in Neapel perfektioniert und 
          bringt nun den wahren Geschmack Italiens ins Lerchenäcker Industriegebiet.
        </p>
        <h2 className="text-3xl font-semibold text-olive-600 mb-4">Unsere Philosophie</h2>
        <p className="text-gray-600">
          Wir glauben an Qualität, Frische und Tradition. Unser Teig wird mit viel Zeit und Liebe 
          zubereitet, was ihn besonders aromatisch und bekömmlich macht. Wir verwenden ausschließlich 
          hochwertige, frische Zutaten, um Ihnen bei jedem Bissen ein Lächeln ins Gesicht zu zaubern.
        </p>
      </div>
    </div>
  );
};

export default About;
