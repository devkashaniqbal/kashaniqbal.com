import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-center">
      {/* ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute select-none font-semibold leading-none tracking-[-0.05em]"
        style={{
          fontSize: "clamp(14rem, 42vw, 34rem)",
          WebkitTextStroke: "1px #eceef2",
          color: "transparent",
        }}
      >
        404
      </span>

      <div className="relative">
        <span
          aria-hidden
          className="mx-auto block h-14 w-px bg-gradient-to-b from-transparent via-[#c4c7cf] to-[#8e919b]"
        />
        <span
          aria-hidden
          className="mx-auto mb-10 mt-[-1px] block h-2 w-2 rounded-full bg-[#e8eaef]"
          style={{ boxShadow: "0 0 12px rgba(190,193,204,0.8)" }}
        />
        <p className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-[#9a9da6]">
          Lost thread
        </p>
        <h1
          className="mt-5 font-semibold leading-[1.04] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
        >
          This page doesn&rsquo;t exist.
          <br />
          <span className="text-[#9a9da6]">Yet.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[38ch] text-[15.5px] leading-relaxed text-ink-soft">
          The ecosystem is still growing — what you&rsquo;re looking for may
          simply not be built yet.
        </p>
        <Link
          href="/"
          className="group relative mt-10 inline-flex h-[50px] items-center gap-2.5 overflow-hidden rounded-full px-8 text-[14.5px] font-medium text-white"
          style={{
            background:
              "linear-gradient(180deg, #33343a 0%, #17171a 55%, #0c0c0e 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.16)",
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] transition-transform duration-700 ease-out group-hover:translate-x-[130%]"
          />
          Back to the beginning
        </Link>
      </div>
    </main>
  );
}
