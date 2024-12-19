import React from 'react';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Notre Histoire</h2>
            <p className="text-lg mb-6">
            Née d'une passion pour la véritable pizza napolitaine, notre aventure a commencé au coeur de Naples, 
            où notre fondateur a appris l'art de la pizza auprès de pizzaiolos de troisième génération.
            </p>
            <p className="text-lg mb-6">
            Chaque pizza que nous préparons suit les méthodes traditionnelles strictes : une pâte pétrie à la main, 
            une fermentation de 72 heures, une cuisson au feu de bois à 480°C, et des ingrédients D.O.P. d'une qualité exceptionnelle.
            </p>
            <p className="text-lg">
            Aujourd'hui, nous vous apportons ce goût authentique de Naples directement grâce à notre pizzeria mobile, 
            tout en conservant la même exigence de qualité et de tradition transmise depuis des générations.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80"
              alt="Pizza making process"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}