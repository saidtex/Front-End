"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { getServerSideProps } from "./dataFetching";
const Hero1 = ({ initialGalleryItems }) => {
  console.log("Initial Gallery Items:", initialGalleryItems); // Log initial items
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState(initialGalleryItems || []);

  const handleFilterClick = (filter) => {
    console.log("Selected category:", filter);
    setActiveFilter(filter);
  };

  console.log("Filtered Gallery Items:", galleryItems); // Log filtered items

  const fetchBlogs = async () => {
    try {
      const timestamp = new Date().getTime(); // Get current timestamp
      const url = `https://saidtex.ma/api/partners?timestamp=${timestamp}`; // Append timestamp as a query parameter
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const blogs = await response.json();
      console.log("Fetched Blogs on Refresh:", blogs); // Log fetched data on refresh
      setGalleryItems(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <section
      className="works section-padding"
      data-scroll-index="2"
      id="partenaires"
    >
      <div className="">
        <div className="row">
          <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <h4>
              <span>Nos</span> partenaires
            </h4>
            <button onClick={fetchBlogs} style={{ marginTop: "20px" }}>
              Refresh Data
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="filtering text-center mb-30 col-sm-12">
            <div className="filter">
              {/* Filter buttons */}
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.length > 0 ? (
              galleryItems
                .filter((item) => {
                  if (activeFilter === "All") return true;
                  return (
                    item.categorie1 === activeFilter ||
                    item.categorie2 === activeFilter ||
                    item.categorie3 === activeFilter
                  );
                })
                .map(({ _id, link, image1, image2 }) => (
                  <div key={_id} className="item-img">
                    {/* Render item */}
                  </div>
                ))
            ) : (
              <p>No items to display</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

