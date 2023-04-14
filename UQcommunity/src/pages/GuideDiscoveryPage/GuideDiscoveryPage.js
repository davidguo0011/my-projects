import DiscoverNav from "../../components/DiscoverNav/DiscoverNav";
import DiscoverMain from "../../components/DiscoverMain/DiscoverMain";
import styles from "./GuideDiscoveryPage.module.scss";
import { useState } from "react";

export default function GuideDiscoveryPage() {
  const [currentCategory, setCurrentCategory] = useState("");

  const categoryHandler = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  return (
    <div className={styles.discoveryContainer}>
      <DiscoverNav onSet={categoryHandler} />
      <DiscoverMain categoryId={currentCategory} />
    </div>
  );
}
