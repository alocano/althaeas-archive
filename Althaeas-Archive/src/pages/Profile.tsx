import { useState } from "react";

{/* instead of normal profile button under username, connect button will link to LinkedIn profile*/}
const LINKEDIN_URL = "https://www.linkedin.com/in/alocano";

export default function Profile() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="w-20 h-20 bg-red-900 rounded-sm shrink-0" />

        <div className="flex items-center gap-4">

        <div className="flex flex-col gap-2">
          <p className="text-sm">Welcome, I'm Althaea!</p>
          <div className="flex gap-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-neutral-400 rounded-sm px-3 py-1 hover:bg-neutral-100"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setIsMuted((prev) => !prev)}
              className="text-xs border border-neutral-400 rounded-sm px-3 py-1 hover:bg-neutral-100"
            >
              {isMuted ? ":(" : "Mute"}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* divider under the avatar row */}
      <div className="border-t border-neutral-300 mt-3" />

      <div className="border border-neutral-300 rounded-sm p-3 mt-3 text-xs space-y-1">
        <p>
          <span className="text-neutral-500">My pseuds: </span>
          <span className="underline">[name]</span>
        </p>
        <p>
          <span className="text-neutral-500">I joined on: </span>
          <span className="underline">2021-10-06</span>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Bio</h3>
        <div className="text-sm text-neutral-700 space-y-3">
          <p>
            Hello, I am [name]. Welcome to my personal website (layout and
 (layout and
!
          </p>
          <p>
            I am a Computer Engineering grad from Sac State with interest in
            software development, especially embedded systems software and
            multidisciplinary projects.
          </p>
          <p>
            I spent my last year of undergraduate studies working on an
            assistive wearable for patients with Parkinson's disease and have
            earned a hackathon win in the Open Innovation category for a
            Braille-learning tool for pre-adolescent children.
          </p>
          <p>
            In my free time, I crochet, play games, read, and listen to and
            play music (I used to play violin and viola and now primarily play
            guitar and ukulele!).
          </p>
        </div>
      </div>
    </div>
  );
}
