"use client";

// Global "Skip to main content" link (keyboard / screen-reader users).
// Works on every route: jumps to #main-content when a page defines it,
// otherwise to the first element after a <nav> inside <main>, otherwise to <main>.
export function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const main = document.querySelector("main");
    let target = document.getElementById("main-content") as HTMLElement | null;
    if (!target && main) {
      const nav = main.querySelector(":scope > nav");
      target = ((nav && nav.nextElementSibling) || main) as HTMLElement;
    }
    if (!target) return;
    e.preventDefault();
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus();
    target.scrollIntoView();
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-yellow-500 focus:px-4 focus:py-2 focus:font-bold focus:text-black"
    >
      Skip to main content
    </a>
  );
}
