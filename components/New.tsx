"use client";

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Flickity from "flickity"; // Make sure to import Flickity
import "flickity/css/flickity.css"; // Import Flickity CSS

const Array = [
  {
    title: "Frostpunk 2",
    eyebrow: "Out Now",
    description:
      "Develop, expand, and advance your city in a society survival game set 30 years after an apocalyptic blizzard ravaged Earth.",
    textColor: null,
    accentColor: null,
    textAccentColor: null,
    theme: {
      preferredMode: null,
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-desktop-1920x1080-c57a98a33421.jpg",
      altText: "Play Frostpunk 2 on Epic Games Store",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-mobile-1200x1600-87c831701946.jpg",
      altText: "Play Frostpunk 2 on Epic Games Store",
    },
    logoImage: {
      src: "https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-logo-400x54-edf9f4432aaf.png",
      altText: "",
    },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-thumb-1200x1600-818d1da7a903.jpg",
      altText: "Play Frostpunk 2 on Epic Games Store",
    },
    link: {
      src: "/p/frostpunk-2",
      linkText: "Buy Now",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: "NONE",
      appliedCountries: "",
    },
    offer: {
      namespace: "32bc7c6aaecd40eeb5f58bb83dba1c05",
      id: "b635193e03f6424ab4673246a94f457b",
    },
  },
  {
    title: "EA SPORTS FC™ 25",
    eyebrow: "Early Access Now Available",
    description:
      "Pre-purchase EA SPORTS FC™ 25 Ultimate Edition now to start your season today with up to 7 days early access.",
    textColor: null,
    accentColor: null,
    textAccentColor: null,
    theme: {
      preferredMode: null,
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/egs-ea-fc-25-ultimate-carousel-desktop-2-1248x702-ff44b8f5a37a.jpg",
      altText: "Pre-Purchase EA SPORTS FC™ 25 on Epic Games Store",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/egs-ea-fc-25-ultimate-carousel-mobile-1200x1600-dbbaae8037e3.jpg",
      altText: "Pre-Purchase EA SPORTS FC™ 25 on Epic Games Store",
    },
    logoImage: {
      src: "https://cdn2.unrealengine.com/egs-ea-fc-25-ultimate-carousel-logo-350x135-b8d3db95f220.png",
      altText: "",
    },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/egs-ea-fc-25-ultimate-edition-carousel-thumb-1200x1600-e9bc5d6280fc.jpg",
      altText: "Pre-Purchase EA SPORTS FC™ 25 on Epic Games Store",
    },
    link: {
      src: "/p/ea-sports-fc-25--ultimate-edition",
      linkText: "Pre-Purchase Now",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: "BLACKLIST",
      appliedCountries: "BE,RU,SY,CU,KP,IR,BY",
    },
    offer: {
      namespace: "b61e8ddd14e94619b7a74cf9d73f86b5",
      id: "b4542f09eca64f15a3e546c8369bcacb",
    },
  },
  {
    title: "God of War Ragnarök",
    eyebrow: "Out Now",
    description:
      "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives – now on PC.",
    textColor: null,
    accentColor: null,
    textAccentColor: null,
    theme: {
      preferredMode: "dark",
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/egs-god-of-war-ragnarok-carousel-desktop-1919x1079-e9d119c002bb.jpeg",
      altText: "Play God of War Ragnarök PC on Epic Games Store",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/egs-god-of-war-ragnarok-carousel-mobile-810x1080-68087a372aff.jpg",
      altText: "Play God of War Ragnarök PC on Epic Games Store",
    },
    logoImage: {
      src: "https://cdn2.unrealengine.com/egs-god-of-war-ragnarok-carousel-logo-350x105-87a918be0f2d.png",
      altText: "",
    },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/egs-god-of-war-ragnarok-carousel-thumb-1200x1600-2983ee4306cf.jpg",
      altText: "Play God of War Ragnarök PC on Epic Games Store",
    },
    link: {
      src: "/p/god-of-war-ragnarok-3ca641",
      linkText: "Buy Now",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: "NONE",
      appliedCountries: "",
    },
    offer: {
      namespace: "862d80a2d1044d88b01104b3ebaed032",
      id: "50192877718f4479a376aa11a5761110",
    },
  },
  {
    title: "FINAL FANTASY XVI",
    eyebrow: "Out Now",
    description:
      "A tragic warrior, Clive Rosfield, swears revenge on the Dark Eikon Ifrit, a mysterious entity that brings calamity in its wake.",
    textColor: null,
    accentColor: null,
    textAccentColor: null,
    theme: {
      preferredMode: null,
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/egs-ff-xvi-pre-purchase-carousel-desktop-1920x1080-3e3bf9f59e7e.jpg",
      altText: "Play Final Fantasy XVI on Epic Games Store",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/egs-ff-xvi-pre-purchase-carousel-thumb-1200x1600-22316698bee7.jpg",
      altText: "Play Final Fantasy XVI on Epic Games Store",
    },
    logoImage: { src: null, altText: "" },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/egs-ff-xvi-pre-purchase-carousel-thumb-1200x1600-22316698bee7.jpg",
      altText: "Play Final Fantasy XVI on Epic Games Store",
    },
    link: {
      src: "/p/final-fantasy-xvi",
      linkText: "Buy Now",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: null,
      appliedCountries: null,
    },
    offer: {
      namespace: "845587cb91e54ce6b682d4c9975c8b07",
      id: "14ebe37d1a34437ea29162bd8684cb97",
    },
  },
  {
    title: "Final Fantasy XVI - Deep Dive",
    eyebrow: "DEEP DIVE",
    description:
      "Final Fantasy XVI makes its triumphant PC debut, boasting action-packed gameplay and a classic tale of vengeance. We spoke to the devs.",
    textColor: null,
    accentColor: null,
    textAccentColor: null,
    theme: {
      preferredMode: null,
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/egs-ffxvi-cover-story-carousel-desktop-1920x1080-f2d2356c7a13.jpg",
      altText: "Play FINAL FANTASY XVI on Epic Games Store",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/egs-ffxvi-cover-story-carousel-mobile-1200x1600-9e03c2500079.jpg",
      altText: "Play FINAL FANTASY XVI on Epic Games Store",
    },
    logoImage: {
      src: "https://cdn2.unrealengine.com/egs-final-fantasy-xvi-carousel-logo-light-350x87-d2d16394d777.png",
      altText: "",
    },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/egs-ffxvi-cover-story-carousel-thumb-1200x1600-c14208193c2c.jpg",
      altText: "Play FINAL FANTASY XVI on Epic Games Store",
    },
    link: {
      src: "/news/final-fantasy-xvi-pc-interview-feature",
      linkText: "READ MORE",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: "NONE",
      appliedCountries: "",
    },
    offer: {
      namespace: "845587cb91e54ce6b682d4c9975c8b07",
      id: "14ebe37d1a34437ea29162bd8684cb97",
    },
  },
  {
    title: "Epic Savings",
    eyebrow: "September 19 - October 3",
    description: "Save up to 75% during our Epic Savings event.",
    textColor: "",
    accentColor: "",
    textAccentColor: null,
    theme: {
      preferredMode: null,
      light: { theme: null, accent: null },
      dark: { theme: null, accent: null },
    },
    image: {
      src: "https://cdn2.unrealengine.com/en-epic-savings-september-desktop-carousel-asset-c1e593e4eba6.avif",
      altText: "Epic Savings",
    },
    mobileImage: {
      src: "https://cdn2.unrealengine.com/en-epic-savings-september-carousel-mobile-a378c3a80e09.avif",
      altText: "Epic Savings",
    },
    logoImage: {
      src: "https://cdn2.unrealengine.com/en-epic-savings-april-carousel-logo-350x202-daffa3c89cae.png",
      altText: "",
    },
    thumbnail: {
      src: "https://cdn2.unrealengine.com/en-epic-savings-september-carousel-thumbnail-1200x1600-a19bdde257e1.jpg",
      altText: "Epic Savings",
    },
    link: {
      src: "/sales-and-specials/epic-savings",
      linkText: "Save Now",
    },
    videoRecipe: null,
    regionRestrictions: {
      filterType: null,
      appliedCountries: null,
    },
    offer: { namespace: "", id: "" },
  },
];

const New: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGame, setSelectedGame] = useState(Array[0]);
  const [isPaused, setIsPaused] = useState(false); // Track if the carousel is paused

  const intervalRef = useRef<NodeJS.Timeout | null>(null); // For the automatic carousel rotation
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // For managing manual pauses

  // Function to clear the current interval
  const clearCurrentInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Start the automatic carousel interval
  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      goToNextImage();
    }, 7000);
  };

  // Move to the next image in the array
  const goToNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % Array.length);
  };

  // Handle manual game selection and pause the carousel
  const handleGameClick = (index: number) => {
    // Clear previous timeout if it exists
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setSelectedIndex(index); // Update selected index to match clicked game
    setSelectedGame(Array[index]); // Set selected game based on index
    setIsPaused(true); // Pause the automatic carousel

    // Resume automatic switching after 7 seconds
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false); // Resume automatic carousel
      goToNextImage(); // Move to the next image after the clicked image completes its 7 seconds
    }, 7000);
  };

  // Sync selectedGame whenever selectedIndex changes
  useEffect(() => {
    if (selectedGame !== Array[selectedIndex]) {
      setSelectedGame(Array[selectedIndex]);
    }
  }, [selectedIndex]);

  // Manage the automatic carousel rotation based on isPaused state
  useEffect(() => {
    clearCurrentInterval(); // Clear any existing interval before setting a new one

    if (!isPaused) {
      startCarousel(); // Start the automatic carousel if it's not paused
    }

    // Cleanup function to clear interval on component unmount or pause
    return () => clearCurrentInterval();
  }, [isPaused]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const flickityRef = useRef<Flickity | null>(null); // To keep track of Flickity instance

  useEffect(() => {
    if (carouselRef.current) {
      // Initialize Flickity only if the carouselRef is not null
      flickityRef.current = new Flickity(carouselRef.current, {
        imagesLoaded: true,
        accessibility: true,
        prevNextButtons: false,
        percentPosition: false,
      });
    }

    // Clean up Flickity instance on unmount
    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="dieselReactWrapper">
      <div className="eds_xd1k8g0" lang="en-US" dir="ltr">
        <div className="css-2nhytu">
          <div id="loading-bar" />
          <div id="overlay" />
          <div className="css-cpu5ko" />
          <div className="css-1vplx76">
            <div className="css-1gj557w">
              <div className="css-1cnq1xl"></div>
            </div>
            <main className="css-1pmr3eb">
              <div className="css-izcrl4">
                <div className="css-9n0cp">
                  <div className="css-64ni4d">
                    <div className="css-1wmhn76"></div>
                  </div>
                  <div className="css-63ovw4">
                    <div className="css-u4p24i">
                      <div>
                        <div className="css-6x152p">
                          <div />
                        </div>
                        <div className="css-axozhu">
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1dnikhe">
                <div className="css-1dacand">
                  <div className="css-lai20k">
                    <div className="css-1knv3fd">
                      <div className="meta-schema" />
                      <h1 className="css-5ur8x">Discover</h1>
                      <div
                        data-testid="discover-page-0"
                        style={{ position: "relative" }}
                      >
                        <div
                          data-testid="absolute-watcher"
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            visibility: "hidden",
                          }}
                        />
                        <div>
                          <span>
                            <div className="css-2scrzp hidden md:block">
                              <div>
                                <h5 className="css-1672ni0">
                                  New Featured Carousel
                                </h5>
                                <div>
                                  <div className="css-1mgolpb" tabIndex={-1}>
                                    <div className="css-1kosn1k">
                                      <div className="css-u421q6">
                                        <div className="css-rl9sa6">
                                          <div className="css-svug8y">
                                            <div
                                              className="css-ark9g"
                                              tabIndex={-1}
                                            >
                                              <div className="css-uwwqev">
                                                <img
                                                  alt={
                                                    selectedGame.image.altText
                                                  }
                                                  src={selectedGame.image.src}
                                                  className="css-w2hg22"
                                                />
                                                <div className="css-rvwbuf" />
                                              </div>
                                              <div className="css-129etkm-WRAP">
                                                <div
                                                  key={selectedIndex}
                                                  className="css-160mh8t"
                                                  style={{
                                                    backgroundImage: `url(${Array[selectedIndex].logoImage.src})`,
                                                  }}
                                                ></div>
                                                <div>
                                                  <h6 className="css-5ur8x">
                                                    {selectedGame.title}
                                                  </h6>
                                                  <div className="css-1vwkv4o">
                                                    <span>
                                                      {selectedGame.eyebrow}
                                                    </span>
                                                    <span>
                                                      <div className="css-lgj0h8">
                                                        <div className="css-1h3di0n">
                                                          {
                                                            selectedGame.description
                                                          }
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                </div>
                                                <div tabIndex={-1}>
                                                  <div className="css-1qjb1ga-ROOT">
                                                    <div className="css-1r2f04i">
                                                      <div className="css-u4p24i">
                                                        <div className="css-l24hbj">
                                                          <div className="css-o1hbmr"></div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="css-1sqpkm6">
                                      <ul className="css-lbqvje">
                                        {Array.map((game, index) => (
                                          <li
                                            key={index}
                                            onClick={() =>
                                              handleGameClick(index)
                                            }
                                            className="css-opsp4z css-fy5orp"
                                          >
                                            <div className="css-uwwqev ">
                                              <div
                                                className="css-1swnkgg"
                                                tabIndex={0}
                                                role="button"
                                              >
                                                {
                                                  <div
                                                    className={
                                                      selectedIndex === index
                                                        ? "css-1ke353l"
                                                        : "css-1ke353p"
                                                    }
                                                  >
                                                    <div className="css-yb58t8">
                                                      <img
                                                        src={game.thumbnail.src}
                                                        alt={
                                                          game.thumbnail.altText
                                                        }
                                                        className="css-b4kcmh"
                                                      />
                                                    </div>
                                                  </div>
                                                }
                                                <span className="css-1wr01zw">
                                                  {game.title}
                                                </span>
                                                <div className="css-19e8s0e">
                                                  {selectedIndex === index && (
                                                    <div className="css-1f1mql8" />
                                                  )}
                                                  {selectedIndex === index && (
                                                    <div className="css-fy5orc" />
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block md:hidden">
                              <div className="main-carousel" ref={carouselRef}>
                                {Array.map((game, index) => (
                                  <div className="carousel-cell" key={index}>
                                    {/* Mobile image */}
                                    <img
                                      alt={game.mobileImage.altText}
                                      src={game.mobileImage.src}
                                    />
                                    <div className="css-64zdjg">
                                      <div
                                        key={selectedIndex}
                                        className="css-160mh8p"
                                        style={{
                                          backgroundImage: `url(${game.logoImage.src})`,
                                        }}
                                      ></div>
                                      <div>
                                        <h6 className="css-5ur8x">
                                          {game.title}
                                        </h6>
                                        
                                          <span className="css-iwks30">{game.eyebrow}</span>
                                          <span className="css-1xkfxc0">
                                                {game.description}
                                          </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}

                                <style jsx>{`
                                  .carousel-cell {
                                    margin-right: 20px;
                                    overflow: hidden;
                                  }

                                  .carousel-cell img {
                                    display: block;
                                    height: 100%;
                                    width: 500px;
                                    border-radius: 12px;
                                  }

                                  @media screen and (min-width: 768px) {
                                    .carousel-cell img {
                                      height: 400px;
                                    }
                                  }

                                  .main-carousel {
                                    display: flex;
                                  }

                                  .main-carousel.flickity-enabled {
                                    display: block;
                                  }
                                `}</style>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
