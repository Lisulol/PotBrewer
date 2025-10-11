import React from 'react';

export default function Pot() {
  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(0.3);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-200px) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
        .bubble {
          animation: bubble-rise 4s ease-in infinite;
        }
      `}</style>
      
      <div className="relative w-96 h-[500px]">
        {/* Main cauldron container */}
        <div className="absolute inset-0 flex items-center justify-center">
          
          {/* Glowing aura above cauldron */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-80 h-48 bg-yellow-400 rounded-full blur-3xl opacity-50" style={{animation: 'glow-pulse 3s ease-in-out infinite'}}></div>
          
          {/* Cauldron structure */}
          <div className="relative w-80 h-96">
            
            {/* Top rim */}
            <div className="absolute top-12 left-0 right-0 h-10 bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 rounded-full shadow-2xl z-30 border-t-4 border-gray-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full"></div>
            </div>
            

            
            {/* Left handle */}
            <div className="absolute left-2 top-20 w-12 h-16 rounded-full z-35">
              <div className="w-full h-full border-8 border-gray-700 rounded-full bg-gradient-to-br from-gray-500 to-gray-800 shadow-xl"></div>
            </div>
            
            {/* Right handle */}
            <div className="absolute right-2 top-20 w-12 h-16 rounded-full z-35">
              <div className="w-full h-full border-8 border-gray-700 rounded-full bg-gradient-to-br from-gray-500 to-gray-800 shadow-xl"></div>
            </div>
            
            {/* Main cauldron body */}
            <div className="absolute top-16 left-10 right-10 bottom-16 bg-gradient-to-br from-gray-600 via-gray-800 to-black rounded-b-full shadow-2xl border-4 border-gray-900 z-20">
              
              {/* Metallic highlight */}
              <div className="absolute left-6 top-12 w-16 h-48 bg-gradient-to-r from-white to-transparent opacity-20 rounded-full blur-sm"></div>
              
              {/* Inner shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50 rounded-b-full"></div>
              
              {/* Dark inner shadow at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-60 rounded-b-full"></div>
            </div>
            
            {/* Potion surface (covered top) */}
            <div className="absolute top-24 left-16 right-16 h-3 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg z-15" style={{borderRadius: '50%'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 to-transparent opacity-40"></div>
            </div>
            
            {/* Glowing light from inside */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-30 z-10"></div>
            
            {/* Rising bubbles from the cauldron - contained within opening */}
            <div className="absolute top-24 left-36 w-8 h-8 bg-lime-300 rounded-full opacity-60 bubble shadow-lg" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-24 left-40 w-6 h-6 bg-yellow-400 rounded-full opacity-75 bubble shadow-lg" style={{animationDelay: '1.6s'}}></div>
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-7 h-7 bg-yellow-300 rounded-full opacity-70 bubble shadow-lg" style={{animationDelay: '3.2s'}}></div>
            <div className="absolute top-24 right-40 w-7 h-7 bg-lime-300 rounded-full opacity-80 bubble shadow-lg" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute top-24 right-36 w-6 h-6 bg-yellow-400 rounded-full opacity-75 bubble shadow-lg" style={{animationDelay: '2s'}}></div>
            
            {/* Cauldron legs - 2 legs design */}
            <div className="absolute bottom-8 left-20">
              <div className="w-14 h-20 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl relative rounded-b-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-transparent opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-950"></div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gray-600"></div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-20">
              <div className="w-14 h-20 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 shadow-2xl relative rounded-b-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-500 opacity-30"></div>
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-950"></div>
                <div className="absolute top-0 left-0 right-0 h-2 bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}