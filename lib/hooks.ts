import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(
  section: SectionName,
  threshold: number = 0.5
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(section);
  }, [inView, setActiveSection, timeOfLastClick, section]);
  return { ref };
}
