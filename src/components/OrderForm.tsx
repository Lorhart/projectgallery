import { useState } from 'react';
import { ArtworkItem } from '../types';

interface OrderFormProps {
  artwork: ArtworkItem;
  onClose: () => void;
}

export default function OrderForm({ artwork, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    format: 'A4',
    comments: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const emailBody = `
      Nouvelle commande d'impression:
      
      Œuvre: ${artwork.title}
      Format: ${formData.format}
      Prix: ${formData.format === 'A4' ? artwork.priceA4 : artwork.priceA5}€
      
      Client:
      Nom: ${formData.lastName}
      Prénom: ${formData.firstName}
      Email: ${formData.email}
      
      Commentaires:
      ${formData.comments}
    `;

    // Create mailto link
    const mailtoLink = `mailto:laura.boussarie@gmail.com?subject=Nouvelle commande - ${artwork.title}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Close modal after sending
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#E5D9C1] p-6 rounded-b-lg">
      <h3 className="text-xl font-semibold mb-4">Commander une impression</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Prénom</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded border border-gray-300"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded border border-gray-300"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 rounded border border-gray-300"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Format</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="format"
              value="A4"
              checked={formData.format === 'A4'}
              onChange={(e) => setFormData({ ...formData, format: e.target.value })}
              className="mr-2"
            />
            Format A4 ({artwork.priceA4}€)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="format"
              value="A5"
              checked={formData.format === 'A5'}
              onChange={(e) => setFormData({ ...formData, format: e.target.value })}
              className="mr-2"
            />
            Format A5 ({artwork.priceA5}€)
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Commentaires</label>
        <textarea
          className="w-full p-2 rounded border border-gray-300 h-24"
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-[#DA7F66] text-white hover:bg-opacity-90 transition-colors"
        >
          Commander
        </button>
      </div>
    </form>
  );
}