import Head from "next/head";

export default function OpenGraph({
  titleName,
  descriptionName,
  imageUrl,
  siteName,
  imageAlt,
  typeOfPost,
  postUrl,
  twitterCard,
  twitterEnable,
  twitterWritterBy,
  twitterSiteOwner,
  twitterBlogCreator,
  iconPath,
  canonical,
  rssUrl,
  ampUrl,
  imageWidth,
  viewport = true,
  imageHeight = "1500"
}) {
  if (!titleName) {
    throw new Error("value is titleName require ");
  }
  if (!descriptionName) {
    throw new Error("value is  descriptionName require ");
  }
  if (!imageUrl) {
    throw new Error("value is imageUrl require ");
  }
  if (!typeOfPost) {
    throw new Error("value is typeOfPost require ");
  }
  if(!siteName){
    throw new Error("value is siteName require ");
  }
 
  return (
    <Head>
      <title> {titleName} </title>
      {viewport ? (
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ) : (
        ""
      )}
      <meta property="og:url" content={postUrl} />
      <meta property="og:type" content={typeOfPost} />
      <meta property="og:title" content={titleName} />
      <meta property="og:description" content={descriptionName} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt? imageAlt : titleName} />
      <meta property="og:site_name" content={siteName} />

      <meta
        property="og:image:width"
        content={imageWidth ? "3000" : imageWidth}
      />

      <meta
        property="og:image:height"
        content={imageHeight ? "1500" : imageHeight}
      />
      {iconPath !== true && iconPath.length > 8 ? (
        <link rel="icon" href={iconPath} type="image/png" />
      ) : (
        " "
      )}

      {canonical !== true && canonical.length > 8 ? (
        <link rel="canonical" href={canonical} />
      ) : (
        " "
      )}
      {rssUrl !== true && rssUrl.length > 8 ? (
        <link rel="alternate" type="application/rss+xml" href={rssUrl} />
      ) : (
        " "
      )}

      {ampUrl !== true && ampUrl.length > 8 ? (
        <link rel="amphtml" href={ampUrl} />
      ) : (
        ""
      )}

      {
      twitterEnable === true ? (
        <>
          <meta name="twitter:card" content={twitterCard ? twitterCard : "summary_large_image"} />
          <meta name="twitter:title" content={titleName} />
          <meta name="twitter:description" content={descriptionName} />
          <meta name="twitter:url" content={postUrl} />
          <meta name="twitter:image" content={imageUrl} />
          {twitterSiteOwner !== true && twitterSiteOwner.length >= 2 ? (
            <meta name="twitter:site" content={twitterSiteOwner} />
          ) : (
            ""
          )}
          {twitterBlogCreator !== true && twitterBlogCreator.length >= 2 ? (
            <meta name="twitter:creator" content={twitterBlogCreator} />
          ) : (
            ""
          )}
        </>
      ) : ''}
    </Head>
  );
}
