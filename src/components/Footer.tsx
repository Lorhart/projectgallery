import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#DA7F66] py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white font-roboto">
          © Lorhart - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}