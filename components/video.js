import { useState } from "react";
import Container from "./container";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="">
          {!playVideo && (
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d=""
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only"></span>
            </button>
          )}
          {playVideo && (
            <iframe
              src=""
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          )}
        </div>
      </div>
    </Container>
  );
}
