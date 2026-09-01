import SectionBox from "../components/SectionBox";

// Placeholder data., swap for LastFM and Hardcover later?
const nowPlaying = {
  track: "Placeholder Song",
  artist: "Placeholder Artist",
  album: "Placeholder Album",
};

const currentlyReading = {
  title: "Project Hail Mary",
  author: "Andy Weir",
  progress: "100%",
};

export default function Misc() {
  return (
    <div>
      <h2 className="text-lg font-medium font-heading mb-4">
        Miscellaneous
      </h2>

      <div className="space-y-6">
        <SectionBox title="Now Playing">
          <div className="border border-neutral-300 rounded-sm bg-white p-3">
            <p className="text-sm font-semibold font-heading">{nowPlaying.track}</p>
            <p className="text-sm text-neutral-700">
              {nowPlaying.artist} · {nowPlaying.album}
            </p>
          </div>
        </SectionBox>

        <SectionBox title="Currently Reading">
          <div className="border border-neutral-300 rounded-sm bg-white p-3">
            <p className="text-sm font-semibold font-heading">
              {currentlyReading.title}
            </p>
            <p className="text-sm text-neutral-700">{currentlyReading.author}</p>
            <p className="text-xs text-neutral-500 mt-1">
              {currentlyReading.progress} complete
            </p>
          </div>
        </SectionBox>
      </div>
    </div>
  );
}