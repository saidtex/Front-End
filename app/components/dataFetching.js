// dataFetching.js
export async function getServerSideProps() {
  try {
    const timestamp = new Date().getTime(); // Get current timestamp
    const url = `https://saidtex.ma/api/partners`; // Append timestamp as a query parameter
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const blogs = await response.json();

    console.log("Fetched blogs:", blogs); // Log fetched data

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
