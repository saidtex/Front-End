export async function getServerSideProps() {
  const timestamp = new Date().getTime(); // Get current timestamp
  const url = `https://saidtex.ma/api/partners?timestamp=${timestamp}`; // Append timestamp as a query parameter
  const response = await fetch(url, { cache: "no-store" });
  const blogs = await response.json();

  return {
    props: {
      initialGalleryItems: blogs,
    },
  };
}
