// dataFetching.js
export async function getServerSideProps() {
  try {
    const timestamp = new Date().getTime(); // Get current timestamp
    const url = `https://saidtex.ma/api/partners?timestamp=${timestamp}`; // Append timestamp as a query parameter
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const blogs = await response.json();

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
