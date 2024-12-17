import { useState } from 'react';
import { ArtworkItem } from '../types';
import ImageModal from './ImageModal';
import Watermark from './Watermark';

interface ArtworkGridProps {
  artworks: ArtworkItem[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group relative aspect-[0.707] overflow-hidden border-3 border-black p-2 cursor-pointer bg-[#ECE7DF]"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center h-48">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-sm">{artwork.description}</p>
                <div className="mt-2">
                  <p className="text-sm">Format A4: {artwork.priceA4} €</p>
                  <p className="text-sm">Format A5: {artwork.priceA5} €</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  );
}