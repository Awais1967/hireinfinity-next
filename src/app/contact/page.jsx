import { Suspense } from "react";
import { Contact } from "../../site-pages/Contact";

export const metadata = {
  title: "Book a Free Call",
  description: "Book a free HireInfinity consultation call to discuss engineering requirements.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}
