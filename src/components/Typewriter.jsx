import { useState, useEffect } from 'react';

const words = [
  "Scalable Web Apps.",
  "IoT Firmware & Systems.",
  "Secure Architectures.",
  "Data-Driven Tools."
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1400);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-sky-400 inline-block">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse text-white">|</span>
    </span>
  );
}
