import { Palette } from 'lucide-react';
import { images } from '../utils/imageImports';

export default function Header() {
  return (
    <header className="relative py-4 px-8 shadow-lg overflow-hidden" style={{ height: 'clamp(120px, 20vh, 200px)' }}>
      <div className="absolute inset-0">
        <img 
          src={images.headerBg}
          alt="Header background" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 mix-blend-multiply" />
      </div>
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.1em] text-white font-roboto font-thin">
          LORHART
        </h1>
      </div>
    </header>
  );
}