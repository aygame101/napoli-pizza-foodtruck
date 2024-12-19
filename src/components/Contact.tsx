import React from 'react';
import { Phone, Mail, Instagram, Facebook} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Vous pouvez nous privatiser !</h3>
            <div className="space-y-4">
              <a href="tel:+33626636560" className="flex items-center space-x-3 hover:text-gray-300">
                <Phone className="h-6 w-6" />
                <span>06 26 63 65 60</span>
              </a>
              <a href="mailto:info@napolipizza.fr" className="flex items-center space-x-3 hover:text-gray-300">
                <Mail className="h-6 w-6" />
                <span>info@napolipizza.fr</span>
              </a>
              <a href="https://instagram.com/_napoli_pizza" className="flex items-center space-x-3 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
                <span>_napoli_pizza</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61560104206459" className="flex items-center space-x-3 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
                <span>Napoli-Pizza</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif mb-6">Demande de renseignements</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}