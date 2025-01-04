import { useEffect } from "react";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleSmoothScroll = (event: Event) => {
      const target = (event.target as HTMLElement).getAttribute("href");
      if (target && target.startsWith("#")) {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add event listener to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []); // Empty dependency array to run only once when the component is mounted

  return null;
};

export default SmoothScroll;
