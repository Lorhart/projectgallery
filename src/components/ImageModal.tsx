import { X } from 'lucide-react';
import Modal from './Modal';
import OrderForm from './OrderForm';
import { ArtworkItem } from '../types';
import { useState } from 'react';

interface ImageModalProps {
  artwork: ArtworkItem | null;
  onClose: () => void;
}

export default function ImageModal({ artwork, onClose }: ImageModalProps) {
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!artwork) return null;

  return (
    <Modal isOpen={!!artwork} onClose={onClose}>
      <div className="bg-white rounded-lg overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="w-full h-auto"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {!showOrderForm ? (
          <div className="p-6 bg-[#E5D9C1]">
            <h3 className="text-2xl font-semibold mb-2">{artwork.title}</h3>
            <p className="text-gray-700 mb-4">{artwork.description}</p>
            <div className="flex gap-4 mb-4">
              <div className="bg-[#ECE7DF] p-3 rounded-lg">
                <p className="font-semibold">Format A4</p>
                <p className="text-lg">{artwork.priceA4} €</p>
              </div>
              <div className="bg-[#ECE7DF] p-3 rounded-lg">
                <p className="font-semibold">Format A5</p>
                <p className="text-lg">{artwork.priceA5} €</p>
              </div>
            </div>
            <button
              onClick={() => setShowOrderForm(true)}
              className="w-full py-2 bg-[#DA7F66] text-white rounded hover:bg-opacity-90 transition-colors"
            >
              Commander une impression
            </button>
          </div>
        ) : (
          <OrderForm artwork={artwork} onClose={() => setShowOrderForm(false)} />
        )}
      </div>
    </Modal>
  );
}