export default function shopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Welcome to the Shop</h2>
      {children}
    </section>
  );
}

// Opting specific segments into a layout
// To opt specific routes into a layout, create a new route group (e.g. (shop)) and move the routes that share the same layout into the group (e.g. account and cart). The routes outside of the group will not share the layout (e.g. checkout).

//Creating multiple root layouts
// To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route groups. This is useful for partitioning an application into sections that have a completely different UI or experience. The <html> and <body> tags need to be added to each root layout.

// Route Groups with Multiple Root Layouts

// In the example above, both (marketing) and (shop) have their own root layout.

// Good to know:

// The naming of route groups has no special significance other than for organization. They do not affect the URL path.
// Routes that include a route group should not resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, (marketing)/about/page.js and (shop)/about/page.js would both resolve to /about and cause an error.
// If you use multiple root layouts without a top-level layout.js file, your home page.js file should be defined in one of the route groups, For example: app/(marketing)/page.js.
// Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts.
