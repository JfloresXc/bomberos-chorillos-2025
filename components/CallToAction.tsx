import React, { useState } from 'react';
import HelpModal from './HelpModal';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormStatus('¡Mensaje enviado con éxito! Gracias por contactarnos.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <>
      <section id="colaborar" className="py-20 bg-brand-background" style={{backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.95), rgba(248, 249, 250, 0.95)), url(https://storage.googleapis.com/genai-downloads/images/3e10a21013b0c2a524a87e07a61678227b013a793a54b3a4e9240b99a531f9d2)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-4xl font-black font-heading uppercase text-brand-text-primary">Únete a la Causa</h2>
              <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
                Tu apoyo es fundamental para que podamos seguir protegiendo a nuestra comunidad. Hay muchas formas de ayudar.
              </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Donation and Volunteer Section */}
              <div className="space-y-8">
                  <div>
                      <h3 className="text-2xl font-bold font-heading mb-4 text-brand-red">Formas de Colaborar</h3>
                      <p className="text-brand-text-secondary mb-6">Cada gesto cuenta. Ya sea con una donación, comprando nuestros productos o con tu tiempo como voluntario, tu contribución marca la diferencia.</p>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                      <h4 className="text-xl font-bold mb-3 text-brand-text-primary">¿Cómo Ayudar?</h4>
                      <p className="text-brand-text-secondary mb-4">Descubre cómo puedes apoyar a nuestro equipo. Cada compra y donación nos ayuda a servirte mejor.</p>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Ver Opciones de Ayuda
                      </button>
                  </div>
                  <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                      <h4 className="text-xl font-bold mb-3 text-brand-text-primary">Ser Voluntario</h4>
                      <p className="text-brand-text-secondary mb-4">Únete a nuestro equipo y recibe la formación para servir a tu comunidad.</p>
                      <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                        Más Información
                      </button>
                  </div>
              </div>

              {/* Contact Form Section */}
              <div id="contacto" className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold font-heading mb-6 text-brand-text-primary">Contáctanos</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-brand-text-secondary text-sm font-bold mb-2">Nombre</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 text-brand-text-primary bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-brand-text-secondary text-sm font-bold mb-2">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2 text-brand-text-primary bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-brand-text-secondary text-sm font-bold mb-2">Mensaje</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} required className="w-full px-3 py-2 text-brand-text-primary bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transform hover:scale-105 transition-all duration-300">
                      Enviar Mensaje
                    </button>
                    {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
                  </form>
              </div>
          </div>
        </div>
      </section>
      <HelpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CallToAction;