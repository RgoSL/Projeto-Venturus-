import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export function VanillaTiltComponent({ options, children, className }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options || {});
    }

    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
