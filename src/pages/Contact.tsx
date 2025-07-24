import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data); // In a real app, you'd send this to a server
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Vielen Dank!</h1>
        <p className="text-lg text-gray-600">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Kontaktieren Sie uns</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input 
              type="text" 
              id="name"
              {...register('name', { required: 'Name ist ein Pflichtfeld' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-Mail</label>
            <input 
              type="email" 
              id="email"
              {...register('email', { 
                required: 'E-Mail ist ein Pflichtfeld',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ungültige E-Mail-Adresse'
                }
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Telefon (optional)</label>
            <input 
              type="tel" 
              id="phone"
              {...register('phone')}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Nachricht</label>
            <textarea 
              id="message"
              rows={5}
              {...register('message', { required: 'Nachricht ist ein Pflichtfeld' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button 
            type="submit"
            className="w-full bg-olive-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-olive-600 transition-colors"
          >
            Nachricht senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
