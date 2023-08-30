import { useEffect } from "react";

const useScrollAnimation = (targetClass: string) => {
  useEffect(() => {
    const targets = document.querySelectorAll(`.${targetClass}`);
    const observer = new IntersectionObserver(callback);

    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    }
  }, [targetClass]);
};

export default useScrollAnimation;
