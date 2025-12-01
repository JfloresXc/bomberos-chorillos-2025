import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black font-heading text-center mb-2 uppercase text-brand-text-primary">Conoce su trabajo</h2>
        <p className="text-center text-brand-text-secondary mb-12 max-w-2xl mx-auto">
          Un vistazo a su día a día, la importancia del entrenamiento y testimonios de la comunidad.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl shadow-brand-red/20">
            <iframe 
              src="https://www.youtube.com/embed/ijevs5fWPz3I" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;