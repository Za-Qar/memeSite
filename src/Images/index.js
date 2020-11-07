// import React, { useEffect, useState } from "react";
// import redditImageFetcher from "reddit-image-fetcher";

// function Images() {
//   useEffect(() => {
//     async function getMemes() {
//       let res = await redditImageFetcher.fetch({
//         type: "meme",
//         total: 20,
//         addSubreddit: ["memes", "funny"],
//         removeSubreddit: ["dankmemes"],
//       });

//       let details = res.map((item) => {
//         console.log({ id: item.id, titel: item.title, img: item.image });
//       });
//     }
//     getMemes();
//   }, []);

//   return <h1>Images are here</h1>;
// }

// export default Images;
