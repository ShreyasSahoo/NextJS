import Link from "next/link";
// import { useRouter } from "next/router";
const HomePage = () => {
  // const router = useRouter();
  return (
    <>
      <div>Home Page</div>
      <Link href="/dashboard#red">red</Link>
      {/* <button onClick={() => router.push("/dashboard")}>red</button> */}
      {/*useRouter hook works only in client components*/}
      <section style={{ height: "150vh", backgroundColor: "purple" }}></section>
      <Link href="/dashboard" scroll={false}>
        no scroll to dashboard
      </Link>
      <br />
      <Link href="/dashboard">default scroll to dashboard</Link>
    </>
  );
};
//The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation.

//If you'd like to scroll to a specific id on navigation, you can append your URL with a # hash link or just pass a hash link to the href prop. This is possible since <Link> renders to an <a> element.

//If you'd like to disable this behavior, you can pass scroll={false} to the <Link> component, or scroll: false to router.push() or router.replace().
export default HomePage;
//How Routing and Navigation Works
// The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

// 1. Prefetching
// Prefetching is a way to preload a route in the background before the user visits it.

// There are two ways routes are prefetched in Next.js:

{
  /* <Link> component: Routes are automatically prefetched as they become visible in the user's viewport. Prefetching happens when the page first loads or when it comes into view through scrolling.
router.prefetch(): The useRouter hook can be used to prefetch routes programmatically.
The<Link>'s prefetching behavior is different for static and dynamic routes:

Static Routes: prefetch defaults to true. The entire route is prefetched and cached.
Dynamic Routes: prefetch default to automatic. Only the shared layout down until the first loading.js file is prefetched and cached for 30s. This reduces the cost of fetching an entire dynamic route, and it means you can show an instant loading state for better visual feedback to users.
You can disable prefetching by setting the prefetch prop to false.



Good to know:

Prefetching is not enabled in development, only in production.
2. Caching
Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the React Server Component Payload of prefetched route segments and visited routes are stored in the cache.

This means on navigation, the cache is reused as much as possible, instead of making a new request to the server - improving performance by reducing the number of requests and data transferred.

Learn more about how the Router Cache works and how to configure it.

3. Partial Rendering
Partial rendering means only the route segments that change on navigation re-render on the client, and any shared segments are preserved.

For example, when navigating between two sibling routes, /dashboard/settings and /dashboard/analytics, the settings and analytics pages will be rendered, and the shared dashboard layout will be preseved.

How partial rendering works

Without partial rendering, each navigation would cause the full page to re-render on the server. Rendering only the segment that changes reduces the amount of data transferred and execution time, leading to improved performance.

4. Soft Navigation
By default, the browser performs a hard navigation between pages. This means the browser reloads the page and resets React state such as useState hooks in your app and browser state such as the user's scroll position or focused element. However, in Next.js, the App Router uses soft navigation. This means React only renders the segments that have changed while preserving React and browser state, and there is no full page reload.

5. Back and Forward Navigation
By default, Next.js will maintain the scroll position for backwards and forwards navigation, and re-use route segments in the Router Cache.
 */
}
