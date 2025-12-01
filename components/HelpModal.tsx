import React, { useEffect } from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string; // URL de la imagen
}

const products: Product[] = [
    { 
        id: 1, 
        name: 'Polos Piqué Oficiales', 
        price: 'S/. 45.00', 
        description: 'Algodón piqué de alta calidad. Disponibles en color rojo y azul con escudo bordado.',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop' // Foto Polo Rojo
    },
    { 
        id: 2, 
        name: 'Gorra Garibaldi 6', 
        price: 'S/. 35.00', 
        description: 'Gorra azul con visera roja, costuras reforzadas y escudo oficial bordado en el frente.',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500&auto=format&fit=crop' // Foto Gorra Azul
    },
    { 
        id: 3, 
        name: 'Polera Hoodie', 
        price: 'S/. 85.00', 
        description: 'Polera azul noche con capucha, bolsillo canguro y cordones ajustables. Ideal para el invierno.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop' // Foto Hoodie Oscuro
    },
    { 
        id: 4, 
        name: 'Tomatodos Colección', 
        price: 'S/. 25.00', 
        description: 'Botellas de aluminio acabado matte con arnés de transporte. Colores: Verde, Negro y Gris.',
        image: 'https://images.unsplash.com/photo-1602143407151-011141951516?q=80&w=500&auto=format&fit=crop' // Foto Botella
    },
    { 
        id: 5, 
        name: 'Taza Oficial 2025', 
        price: 'S/. 20.00', 
        description: 'Taza de cerámica negra con diseño "Bomberos Garibaldi 6". Resistente y elegante.',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500&auto=format&fit=crop' // Foto Taza Negra
    },
    { 
        id: 6, 
        name: 'Llavero de Goma', 
        price: 'S/. 10.00', 
        description: 'Llavero flexible con diseño de Cruz de Malta. El detalle perfecto para llevar a todos lados.',
        image: 'https://images.unsplash.com/photo-1612368098048-c920f78c8574?q=80&w=500&auto=format&fit=crop' // Foto Detalle/Llavero
    },
];

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className="bg-brand-background rounded-xl shadow-2xl w-full max-w-6xl h-auto max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-up"
                style={{ animationFillMode: 'forwards' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header del Modal */}
                <div className="p-6 md:p-8 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-xl sticky top-0 z-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black font-heading text-brand-text-primary uppercase">Tienda Solidaria</h2>
                        <p className="text-sm text-brand-text-secondary mt-1">El 100% de lo recaudado se destina al equipamiento de la estación.</p>
                    </div>
                    <button onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-brand-red hover:bg-red-50 transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenido Scrollable */}
                <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://placehold.co/600x400?text=${encodeURIComponent(product.name)}`;
                                        }}
                                    />
                                    <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        NUEVO
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold font-heading text-brand-text-primary">{product.name}</h3>
                                        <span className="text-lg font-bold text-brand-red">{product.price}</span>
                                    </div>
                                    <p className="text-brand-text-secondary text-sm mb-6 flex-grow">{product.description}</p>
                                    <button className="w-full bg-brand-dark hover:bg-brand-red text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        <span>Lo Quiero</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer del Modal con información extra */}
                    <div className="mt-10 bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                        <div>
                            <h4 className="font-bold text-brand-dark text-lg mb-1">¿Cómo comprar?</h4>
                            <p className="text-brand-text-secondary text-sm">Selecciona tus productos y contáctanos por WhatsApp para coordinar el pago y la entrega.</p>
                        </div>
                        <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-green-600/30 transition-all duration-300 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                            Escribir al WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpModal;