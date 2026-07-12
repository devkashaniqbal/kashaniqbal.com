"use client";

import type { ReactNode } from "react";

/**
 * The shared hand-drawn line-icon set — used by both the luxury
 * homepage (ink/ice) and the /course funnel (blue). One path set per
 * name; stroke inherits via the `color` prop.
 */
export default function Icon({
  name,
  size = 22,
  color = "currentColor",
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const p: Record<string, ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    play: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="3" />
        <path d="M10.5 9.5v5l4.5-2.5z" fill={color} stroke="none" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
        <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="9" r="3.2" />
        <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
        <circle cx="16.8" cy="10" r="2.4" />
        <path d="M15.8 14.7c2.3.2 4 1.7 4.6 4.3" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21z" />
        <circle cx="12" cy="10.8" r="2.3" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3.5 20.5 8 12 12.5 3.5 8z" />
        <path d="m4.5 12.5 7.5 4 7.5-4" />
        <path d="m4.5 16.5 7.5 4 7.5-4" />
      </>
    ),
    box: (
      <>
        <path d="M12 3.5 20.5 8v8L12 20.5 3.5 16V8z" />
        <path d="M3.5 8 12 12.5 20.5 8M12 12.5v8" />
      </>
    ),
    bank: (
      <>
        <path d="m3.5 9 8.5-5 8.5 5z" />
        <path d="M5.5 9.5v7M10 9.5v7M14 9.5v7M18.5 9.5v7M3.5 19.5h17" />
      </>
    ),
    home: (
      <>
        <path d="m4 11 8-7 8 7" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
    star: (
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />
    ),
    chat: (
      <>
        <path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.1-4.4A8.5 8.5 0 1 1 20.5 12z" />
        <path d="M8.5 10.5h7M8.5 13.5h4.5" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 20.5V11" />
        <path d="M12 11c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6zM12 13.5C12 10.5 10 8.5 6 8.5c0 3 2 5 6 5z" />
      </>
    ),
    megaphone: (
      <>
        <path d="M4 10v4l3 .5V9.5zM7 9.5 19.5 5v14L7 14.5" />
        <path d="M9 15v4.5h3V15.4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3.5" y="8" width="17" height="11.5" rx="2" />
        <path d="M9 8V6.2A1.7 1.7 0 0 1 10.7 4.5h2.6A1.7 1.7 0 0 1 15 6.2V8M3.5 13h17" />
      </>
    ),
    live: (
      <>
        <circle cx="9" cy="8.5" r="3" />
        <path d="M3.5 18.5c.6-3 2.7-4.7 5.5-4.7s4.9 1.7 5.5 4.7" />
        <path d="M16.5 5.5a6.5 6.5 0 0 1 0 7M19 3.5a10 10 0 0 1 0 11" />
      </>
    ),
    chart: (
      <>
        <rect x="3.5" y="4" width="17" height="13" rx="2" />
        <path d="m7 13 3-3 2.5 2 4-4.5" />
        <path d="M9 20.5h6" />
      </>
    ),
    book: (
      <>
        <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12.5v15.5H7a2.5 2.5 0 0 0-2.5 2.5z" />
        <path d="M4.5 21A2.5 2.5 0 0 1 7 18.5h12.5" />
        <path d="M9 8h6" />
      </>
    ),
    calc: (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
        <path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.5h.01M12 15.5h.01M15.5 15.5v.01" />
      </>
    ),
    theme: (
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
        <path d="M3.5 9.5h17M8.5 9.5V19.5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.3l-1.8-5.7L4.5 10.8 10.2 9z" />
        <path d="M18.5 15.5l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.7A8.5 8.5 0 0 1 8 19.2L3.8 20.3l1.1-4.1a8.5 8.5 0 1 1 15.6-4.5z" />
        <path d="M9 8.8c-.3 1.9 2.6 5.7 5.3 6.2.9.1 1.9-.4 2-1.2l-2.1-1.3-1 .8c-1-.5-2-1.5-2.5-2.6l.9-.9L10.5 8z" />
      </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7" />,
    code: (
      <>
        <path d="m8 7.5-5 4.5 5 4.5M16 7.5l5 4.5-5 4.5" />
        <path d="m13.2 5-2.4 14" />
      </>
    ),
    bolt: (
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5z" />
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {p[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
