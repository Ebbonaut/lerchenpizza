const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-200 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {currentYear} Lerchenpizza. Alle Rechte vorbehalten.</p>
        <p className="text-sm mt-2">
          Handgemacht von Laura im Lerchenäcker Industriegebiet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
