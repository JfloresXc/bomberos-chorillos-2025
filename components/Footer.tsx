import React, { useState } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed with email:', email);
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
    };

    return (
        <footer className="bg-brand-dark py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* About */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Bomberos Chorrillos</h4>
                        <p className="text-gray-400">Protegiendo vidas y propiedades con honor y valentía. Siempre listos, siempre ahí.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Enlaces Rápidos</h4>
                        <ul>
                            <li className="mb-2"><a href="#servicios" className="text-gray-400 hover:text-brand-red transition-colors">Servicios</a></li>
                            <li className="mb-2"><a href="#seguridad" className="text-gray-400 hover:text-brand-red transition-colors">Consejos</a></li>
                            <li className="mb-2"><a href="#colaborar" className="text-gray-400 hover:text-brand-red transition-colors">Colaborar</a></li>
                            <li className="mb-2"><a href="#contacto" className="text-gray-400 hover:text-brand-red transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><YoutubeIcon /></a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold font-heading text-lg mb-4 text-white uppercase">Boletín Informativo</h4>
                        <p className="text-gray-400 mb-4">Recibe alertas y noticias importantes directamente en tu correo.</p>
                        <form onSubmit={handleSubscribe}>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com" 
                                    className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-red" 
                                    required
                                />
                                <button type="submit" className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r-lg transition-colors">
                                    Suscribirse
                                </button>
                            </div>
                            {subscribed && <p className="mt-4 text-green-400">¡Gracias por suscribirte!</p>}
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bomberos Chorrillos. Todos los derechos reservados.</p>
                    <p className="mt-2">Diseñado con ❤️ por la comunidad.</p>
                </div>
            </div>
        </footer>
    );
};

// FIX: Add default export to make the component available for import.
export default Footer;