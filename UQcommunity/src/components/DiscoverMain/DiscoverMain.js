import { useCallback, useEffect, useState } from "react";
import styles from "./DiscoverMain.module.scss";
import { getGroups } from "../../api/groups";
import DiscoverHeader from "./DiscoverLayout/DiscoverHeader";
import ChannelItemCard from "./ChannelCard.js/ChannelItemCard";
import GroupsLoading from "./ChannelCard.js/GroupsLoading";
import DiscoverFooter from "./DiscoverLayout/DiscoverFooter";

function DiscoverMain({ categoryId }) {
  // const fetchGroups = useCallback(, []);
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [courseCode, setCourseCode] = useState("");
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = {
        pageNum: 1,
        courseCode: courseCode || "",
        categoryId: categoryId || "",
      };

      console.log(data);

      const response = await getGroups(data);
      setGroups(response.data);
      setIsLoading(false);
    })();
  }, [courseCode, categoryId]);

  const searchHandler = (courseCode) => {
    setCourseCode(courseCode);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.scroller}>
        <div className={styles.viewWrapper}>
          <DiscoverHeader onSearch={searchHandler} />
          <div className={styles.guideListContainer}>
            {isLoading && <GroupsLoading />}
            {!isLoading &&
              groups.map((el) => (
                <ChannelItemCard key={el.groupId} group={el} />
              ))}
          </div>
          <DiscoverFooter />
        </div>
      </div>
    </div>
  );
}

export default DiscoverMain;
