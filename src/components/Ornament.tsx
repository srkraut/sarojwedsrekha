// Hand-drawn style leaf sprig used as decoration around sections.
export default function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg className={`leaf ${className}`} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path d="M14 108C40 80 62 52 104 14" fill="none" stroke="#7d8f6c" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M40 80c-14-2-24-12-26-26 14 2 24 12 26 26Z" fill="#9cab8d" />
      <path d="M40 80c2-14 12-24 26-26-2 14-12 24-26 26Z" fill="#b7c4a8" />
      <path d="M62 54c-14-3-23-14-24-28 14 3 23 14 24 28Z" fill="#8a9c7a" />
      <path d="M62 54c3-14 14-23 28-24-3 14-14 23-28 24Z" fill="#a9b89a" />
      <path d="M84 32c-11-4-17-14-17-25 11 4 17 14 17 25Z" fill="#9cab8d" />
      <path d="M84 32c4-11 14-17 25-17-4 11-14 17-25 17Z" fill="#c3cfb6" />
      <path d="M26 94c-12 0-21-7-24-18 12 0 21 7 24 18Z" fill="#b7c4a8" />
    </svg>
  );
}
