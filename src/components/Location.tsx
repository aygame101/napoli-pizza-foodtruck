import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  const schedule = [
    { day: "Mardi - Jeudi", hours: "11h30 - 21h00" },
    { day: "Vendredi - Samedi", hours: "11h30 - 22h00" },
    { day: "Dimanche", hours: "12h00 - 20h00" },
    { day: "Lundi", hours: "Fermé" }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Nous trouver</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-serif mb-4">Emplacement actuel</h3>
              <div className="flex items-start space-x-2 mb-4">
                <MapPin className="h-6 w-6 mt-1" />
                <div>
                  <p className="font-medium">OUI</p>
                  <p className="text-gray-600">123 Rue oui, Reims</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif mb-4 mt-8">Horaires</h3>
              <div className="space-y-2">
                {schedule.map(({ day, hours }) => (
                  <div key={day} className="flex items-start space-x-2">
                    <Clock className="h-6 w-6 mt-1" />
                    <div>
                      <p className="font-medium">{day}</p>
                      <p className="text-gray-600">{hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-serif mb-4">Calendrier Hebdomadaire</h3>
            <div className="space-y-4">
            <p className="flex items-center">
                <span className="font-medium w-32">Lundi:</span>
                <span>Reims</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Mardi:</span>
                <span>Reims</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Mercredi:</span>
                <span>Les Petites Loges</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Jeudi:</span>
                <span>Thillois</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Vendredi:</span>
                <span>Paris</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Samedi:</span>
                <span>New York</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-32">Dimanche:</span>
                <span>Mars</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}