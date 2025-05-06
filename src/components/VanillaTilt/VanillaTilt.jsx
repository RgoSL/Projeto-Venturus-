/* Esse arquivo guarda um componente do projeto responsável por algumas animações presentes em nossa aplicação. 
Para mais informações sobre a Biblioteca Vanilla-Tilt, a página https://micku7zu.github.io/vanilla-tilt.js/  pode ser consultada.
*/


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
