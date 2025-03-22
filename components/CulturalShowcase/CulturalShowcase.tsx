import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import RegionalCarousel from "./RegionalCarousel";
import styles from "./CulturalShowcase.module.css";
import { regions } from "../../types/region";

const CulturalShowcase = () => {
  const searchParams = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState(
    searchParams.get("region") || "all"
  );

  const handleRegionChange = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  return (
    <section className={styles.culturalShowcase}>
      <h2>Discover Algeria's Rich Culinary Heritage</h2>
      <div className={styles.regionSelector}>
        {regions.map((region) => (
          <motion.button
            key={region.id}
            className={`${styles.regionButton} ${selectedRegion === region.id ? styles.active : ""}`}
            onClick={() => handleRegionChange(region.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.regionIcon}>{region.icon}</span>
            {region.name}
          </motion.button>
        ))}
      </div>
      <RegionalCarousel selectedRegion={selectedRegion} />
    </section>
  );
};

export default CulturalShowcase;
