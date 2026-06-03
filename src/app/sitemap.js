export default function sitemap() {
  const baseUrl = "https://hireinfinity.com";
  const routes = ["", "/engineers", "/contact", "/case-studies"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
