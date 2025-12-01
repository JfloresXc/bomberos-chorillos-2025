import React from 'react';

const TestimonialCard: React.FC<{ imgSrc: string; quote: string; name: string; role: string; }> = ({ imgSrc, quote, name, role }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imgSrc} alt={`Foto de ${name}`} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-brand-red/50" />
        <blockquote className="text-brand-text-secondary italic mb-6 relative">
            <svg className="w-10 h-10 text-brand-red/20 absolute -top-4 -left-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 10c-1.25 0-2.25.895-2.25 2s1 2 2.25 2c1.1 0 2.02-.78 2.2-1.75h-1.6c-.19.44-.64.75-1.1.75-.55 0-1-.45-1-1s.45-1 1-1c.46 0 .82.31 1 .75h1.75c-.18-1.4-1.3-2.5-2.75-2.5zm9 0c-1.25 0-2.25.895-2.25 2s1 2 2.25 2c1.1 0 2.02-.78 2.2-1.75h-1.6c-.19.44-.64.75-1.1.75-.55 0-1-.45-1-1s.45-1 1-1c.46 0 .82.31 1 .75h1.75c-.18-1.4-1.3-2.5-2.75-2.5z"/></svg>
            "{quote}"
        </blockquote>
        <footer className="mt-auto">
            <p className="font-bold text-brand-text-primary font-heading">{name}</p>
            <p className="text-sm text-brand-red">{role}</p>
        </footer>
    </div>
);

const VolunteerStories: React.FC = () => {
    const volunteers = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
            quote: 'Ser voluntario me ha enseñado el verdadero significado de la comunidad. Cada día es una oportunidad para marcar una diferencia real en la vida de alguien.',
            name: 'Alberto Falconi',
            role: 'Voluntario de Rescate'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
            quote: 'La adrenalina es increíble, pero la gratitud en los ojos de las personas a las que ayudamos es la recompensa más grande. Es un honor servir.',
            name: 'Ana Lucía Torres',
            role: 'Paramédica Voluntaria'
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
            quote: 'Aquí no solo encontré un equipo, encontré una familia. Nos apoyamos mutuamente en los momentos más difíciles y celebramos cada vida salvada.',
            name: 'Javier Mendoza',
            role: 'Jefe de Brigada Voluntaria'
        }
    ];

    return (
        <section className="py-20 bg-brand-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">El Corazón de Nuestra Estación</h2>
                <p className="text-center text-brand-text-secondary mb-12 max-w-3xl mx-auto">
                    Detrás de cada uniforme hay una historia de valor, empatía y amor al prójimo. Conoce a las personas que lo dan todo por nuestra comunidad.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {volunteers.map(v => <TestimonialCard key={v.name} {...v} />)}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-brand-text-primary">¿Sientes el llamado para servir?</h3>
                    <p className="text-brand-text-secondary mb-8 max-w-2xl mx-auto">
                        Tú también puedes ser parte de esta familia. No se necesita experiencia, solo un gran corazón y el deseo de ayudar.
                    </p>
                    <a 
                        href="#colaborar" 
                        className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 text-lg"
                    >
                        Conviértete en Voluntario
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VolunteerStories;