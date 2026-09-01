import { bookmarks } from "../data/bookmarks";
import Card from "../components/Card";

export default function Bookmarks() {
  return (
    <div>
      <h2 className="text-lg font-heading mb-4">Bookmarks by alocano</h2>
      <div className="space-y-4 ">
        {bookmarks.map((bookmark) => (
          <Card key={bookmark.id}>
            <a href="#" className="text-red-900 font-medium underline">
              {bookmark.title}
            </a>
            <p className="text-xs text-neutral-500 mt-1">{bookmark.category}</p>
            <p className="text-sm text-neutral-700 mt-2">{bookmark.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
