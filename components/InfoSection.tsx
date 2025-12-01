import React, { useState } from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg text-center transform hover:-translate-y-2 border border-gray-200 hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-300">
    <div className="flex justify-center mb-4 text-brand-red">{icon}</div>
    <h3 className="text-xl font-bold font-heading mb-2 text-brand-text-primary">{title}</h3>
    <p className="text-brand-text-secondary">{description}</p>
  </div>
);

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-left text-brand-text-primary hover:bg-gray-100 transition-colors duration-300"
        onClick={onClick}
      >
        <span className="font-semibold">{title}</span>
        <svg className={`w-6 h-6 transform transition-transform duration-300 text-brand-red ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
    </h2>
    <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-5 border-t border-gray-200 bg-gray-50">
        <p className="text-brand-text-secondary">{children}</p>
      </div>
    </div>
  </div>
);

const InfoSection: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(1);

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const safetyTips = [
        { id: 1, title: "Seguridad en el Hogar", content: "Instala detectores de humo y revisa sus baterías cada seis meses. Ten un extintor de incendios accesible y sabe cómo usarlo. No sobrecargues los enchufes eléctricos." },
        { id: 2, title: "Prevención de Incendios Forestales", content: "Nunca dejes fogatas desatendidas. Despeja la vegetación seca alrededor de tu casa. Respeta las prohibiciones de quema locales." },
        { id: 3, title: "Actuación durante un Incendio", content: "Mantén la calma y evacúa inmediatamente. Cierra las puertas a tu paso para contener el fuego. Si hay humo, agáchate y gatea. Llama a emergencias desde un lugar seguro." },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Section Servicios */}
                <section id="servicios" className="mb-20">
                    <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">Los servicios que prestan</h2>
                    <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">Más allá de apagar incendios, estamos aquí para proteger, educar y servir a nuestra comunidad en múltiples facetas.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>}
                            title="Respuesta a Emergencias"
                            description="Atención inmediata a incendios, accidentes de tráfico y otras situaciones de riesgo."
                        />
                        <ServiceCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.085.12L10 11.854l3.665-3.683a1 1 0 011.085-.12L17 7.081a1 1 0 000-1.84l-7-3zM15 9.421l-5 5-5-5v3.579l5 5 5-5V9.42z" /></svg>}
                            title="Educación y Prevención"
                            description="Programas de formación en escuelas y empresas para concienciar sobre la seguridad."
                        />
                         <ServiceCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>}
                            title="Asistencia Médica"
                            description="Primeros auxilios y soporte vital básico en emergencias médicas hasta la llegada de la ambulancia."
                        />
                    </div>
                </section>
                
                {/* Section Consejos de Seguridad */}
                <section id="seguridad">
                    <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">Consejos de Seguridad</h2>
                    <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">Unos pocos minutos de prevención pueden salvar vidas. Aprende a proteger a tu familia y tu hogar.</p>
                    <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
                       {safetyTips.map(tip => (
                           <AccordionItem 
                                key={tip.id}
                                title={tip.title}
                                isOpen={openAccordion === tip.id}
                                onClick={() => toggleAccordion(tip.id)}
                           >
                               {tip.content}
                           </AccordionItem>
                       ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InfoSection;