interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export default function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onSelectTag(null)}
        className={`px-4 py-2 rounded-full transition-colors ${
          selectedTag === null
            ? 'bg-[#DA7F66] text-white'
            : 'bg-[#ECE7DF] hover:bg-[#E5D9C1]'
        }`}
      >
        Toutes
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-4 py-2 rounded-full capitalize transition-colors ${
            selectedTag === tag
              ? 'bg-[#DA7F66] text-white'
              : 'bg-[#ECE7DF] hover:opacity-50'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}