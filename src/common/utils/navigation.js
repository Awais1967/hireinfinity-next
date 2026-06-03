"use client";

export function scrollToSection(id, router) {
  if (window.location.pathname !== "/") {
    router?.push(`/#${id}`);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    return;
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
