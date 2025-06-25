"use client"
import ContentSection from "@/components/ContentSection";
import NavbarSection from "@/components/NavbarSection";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const itineraryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting)
      },
      {
        threshold: 0.1, // Show navbar when 10% of itinerary section is visible
        rootMargin: "-100px 0px 0px 0px", // Offset to account for navbar height
      },
    )

    if (itineraryRef.current) {
      observer.observe(itineraryRef.current)
    }

    return () => {
      if (itineraryRef.current) {
        observer.unobserve(itineraryRef.current)
      }
    }
  }, [])
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavbarSection />
      </div>
      <ContentSection itineraryRef={itineraryRef} />
    </>
  );
};

export default Home;
