import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TagFilter from './components/TagFilter';
import ArtworkGrid from './components/ArtworkGrid';
import { artworks } from './data/artworks';

export default function App() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(artworks.flatMap((artwork) => artwork.tags))
  );

  const filteredArtworks = selectedTag
    ? artworks.filter((artwork) => artwork.tags.includes(selectedTag))
    : artworks;

  return (
    <div className="min-h-screen bg-[#E5D9C1] flex flex-col">
      <Header />
      <main className="w-[96%] mx-auto py-12 flex-grow">
        <TagFilter
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
        <ArtworkGrid artworks={filteredArtworks} />
      </main>
      <Footer />
    </div>
  );
}