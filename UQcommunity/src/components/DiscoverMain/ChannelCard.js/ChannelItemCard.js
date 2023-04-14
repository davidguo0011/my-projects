import styles from "./ChannelItemCard.module.scss";
import MemberNum from "./MemberNum";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { enrolGroup } from "../../../api/groups";

function ChannelItemCard({ group }) {
  const [isMore, setIsMore] = useState(false);
  const userContext = useContext(UserContext);
  const {
    groupName,
    groupId,
    membersNum,
    groupAvatar,
    groupBackground,
    groupIntro,
  } = group;

  const enrolHandler = async (event) => {
    const data = {
      userId: userContext.userState.userId,
      groupId,
    };

    const response = await enrolGroup(data);
    console.log(response);
  };

  const isMoreHandler = () => {
    setIsMore((prevState) => (prevState = !prevState));
  };

  return (
    <div className={`${styles.cardContainer} ${isMore && styles.isMore}`}>
      <div
        className={`${styles.backgroundImgContainer} ${
          isMore && styles.isMore
        }`}
      >
        <div className={styles.backgroundInnerContainer}>
          <img src={groupBackground} alt="backgroundImg" />
        </div>
        <div className={styles.channelImgContainer}>
          <img src={groupAvatar} alt="channelImg" />
        </div>
      </div>
      <div className={styles.outterContainer}>
        <div className={styles.contextContainer}>
          <div
            className={`${styles.moreBtnContainer} ${isMore && styles.isMore}`}
            onClick={isMoreHandler}
          >
            {isMore ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <h1 className={styles.groupTitle}>{groupName}</h1>
          <div
            className={`${styles.groupDescription} ${isMore && styles.isMore}`}
          >
            {groupIntro}
          </div>
          <div className={styles.infoContainer}>
            <MemberNum membersNum={membersNum} isOnline />
            <MemberNum membersNum={membersNum} />
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.joinButton} onClick={enrolHandler}>
          加入群组
        </button>
      </div>
    </div>
  );
}

export default ChannelItemCard;
