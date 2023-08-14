import React from "react";

type Props = {};

const page = ({ params }: any) => {
  console.log(params, "adfa");
  return <div>items</div>;
};

export default page;
// A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].

// Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

//The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

//The primary benefit of the generateStaticParams function is its smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically memoized. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.

//Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].

// For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

//Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].

//For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.

//The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (/shop in the example above).
