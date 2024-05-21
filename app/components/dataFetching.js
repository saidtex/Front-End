// dataFetching.js
export async function getServerSideProps() {
  try {
    const url = `https://saidtex.ma/api/partners`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const blogs = await response.json();

    console.log("Fetched blogs:", blogs);

    return {
      props: {
        initialGalleryItems: blogs,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        initialGalleryItems: [],
      },
    };
  }
}
