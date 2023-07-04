import { useEffect, useRef } from "react";

interface Props {
  loadMore(): void;
}

const InfinityScroll = ({ loadMore }: Props) => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        loadMore();
      }
    }, options);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default InfinityScroll;
