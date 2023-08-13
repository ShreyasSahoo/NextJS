//Templates are similar to layouts in that they wrap each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation. This means that when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Template </h2>
      {children}
    </div>
  );
}
