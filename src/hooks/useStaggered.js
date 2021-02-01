import { useTrail } from "react-spring";


export default function useStaggeredList (count) {
   const trailAnimes = useTrail(count, {
      transform: "translate3d(0, 0, 0)",
      from: { transform: "translate3d(-424px, 0, 0)" },
      config: {
         mass: 0.9,
         tension: 280,
         friction: 24,
      },
      delay: 0,
   });
   return trailAnimes;
}
