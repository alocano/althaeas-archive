import { useState } from "react";
import avatarImg from "../assets/me.jpg";

{/* instead of normal profile button under username, connect button will link to LinkedIn profile*/ }
const LINKEDIN_URL = "https://www.linkedin.com/in/alocano";

export default function Profile() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <img
          src={avatarImg}
          alt="Profile photo"
          className="w-25 h-25 rounded-sm shrink-0 object-cover"
        />

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
          <span className="underline"><a href="https://github.com/alocano">alocano</a></span>
        </p>
        <p>
          <span className="text-neutral-500">I joined on: </span>
          <span className="underline">2021-10-06</span>
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-med font-heading mb-2">Bio</h3>
        <div className="text-sm text-neutral-700 space-y-3">
          <p>
            Hello, I am Althaea! Welcome to my personal website (layout and
            palette inspired by{" "}
            <a
              href="https://archiveofourown.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-red-900"
            >
              Archive of Our Own/AO3
            </a>
            )!
          </p>
          <p>
            I'm a recent Computer Engineering graduate from Sacramento State with interest in software development, especially embedded systems and multidisciplinary projects. I'm experienced with programming languages including C, Python, and Java, web development with HTML, CSS, and JavaScript, and hardware description languages including VHDL, Verilog, and SystemVerilog. I've also used tools like Figma and VS Code, and have experience with UNIX/Linux, both through coursework and as an Instructional Student Assistant for UNIX Programming.
          </p>
          <p>
            I spent my last year of undergrad working on an assistive wearable for patients with Parkinson's disease, and earned a hackathon win in the Open Innovation category for a Braille-learning tool for pre-adolescent children. Through these and other group projects, I've built skills in software engineering principles and Scrum methodology alongside embedded systems work.
          </p>
          <p>
            In my free time, I crochet (currently working on a blanket), play music (guitar, ukulele, bass, and formerly violin and viola), read, and play games like "Minecraft" and "Dead Cells". I'm also a big PWHL fan and excited for San Jose's new team this upcoming season!
          </p>
        </div>
      </div>
    </div>
  );
}
