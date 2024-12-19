import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80"
          alt="Authentic Neapolitan Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">
          Napoli Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            D'authentique pizza napolitaine fabriqué à la main avec amour, en utilisant des recettes traditionnelles directement d'Italie
          </p>
          <div className="space-x-4">
            <a
              href="#menu"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors"
            >
              Voir le menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}