"use client"
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero1 = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleFilterClick = (filter) => {
    console.log("Selected category:", filter);
    setActiveFilter(filter);
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://saidtex.ma/api/partners", {
    next: {
      revalidate: 60, // 1 hour
    },
  });
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const blogs = await response.json();
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
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="filtering text-center mb-30 col-sm-12">
            <div className="filter">
              <span
                key="All"
                onClick={() => handleFilterClick("All")}
                className={activeFilter === "All" ? "active" : ""}
              >
                All
              </span>
              <span
                onClick={() => handleFilterClick("Tissage et bonneterie")}
                className={activeFilter === "Tissage et bonneterie" ? "active" : ""}
              >
                Tissage et bonneterie
              </span>
              <span
                onClick={() => handleFilterClick("Finissage")}
                className={activeFilter === "Finissage" ? "active" : ""}
              >
                Finissage
              </span>
              <span
                onClick={() => handleFilterClick("Filature")}
                className={activeFilter === "Filature" ? "active" : ""}
              >
                Filature
              </span>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems
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
                  <img src={image1} alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <img src={image2} alt="image" />
                      <p></p>
                      <a href={link} className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
