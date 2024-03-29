import React, { useState, useContext } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import styles from './ChatPage.module.scss';
import ChatRoom from './ChatRoom/ChatRoom';
import TopNav from './TopNav/TopNav';
import RightSideMenu from '../../components/RightSideMenu/RightSideMenu';
import { useEffect } from 'react';
import LoadChatRoomSpinner from '../../components/Spinner/LoadChatRoomSpinner/LoadChatRoomSpinner';
import { getMessages } from '../../api/message';
import { UserContext } from '../../context/UserContext';
import ChatList from '../../components/ChatList/ChatList';

export default function ChatPage() {
  const {
    friendState,
    socket,
    chatDispatch,
    chatState,
    friendDispatch,
    setShowVideo,
  } = useOutletContext();
  const chatId = parseInt(useParams().chatId);
  const [loaded, setLoaded] = useState(false);
  const userContext = useContext(UserContext);

  const chatFriend = friendState.friends.filter((friend) => {
    return friend.id === parseInt(chatId);
  })[0];

  useEffect(() => {
    setLoaded(true);
    if (socket.readyState === 1) {
      socket.send(
        JSON.stringify({
          type: 6,
          sendId: userContext.userState.userId,
          activeChatBoxData: {
            onFriendChatPage: true,
            receiverId: chatId,
          },
        })
      );
      console.log({
        type: 6,
        sendId: userContext.userState.userId,
        activeChatBoxData: {
          onFriendChatPage: true,
          receiverId: chatId,
        },
      });
    }
    const data = {
      sendId: userContext.userState.userId,
      receiverId: chatId,
      sendTime: Date.now(),
      type: 'chatMessage',
    };
    if (
      !JSON.parse(localStorage.getItem('chats'))[chatId] ||
      chatFriend.notification > 0
    ) {
      //发送请求
      getMessages(data).then((res) => {
        chatDispatch({
          type: 'initMessages',
          messages: res.data,
          currentUserId: userContext.userState.userId,
          chatUserId: chatId,
        });
        setLoaded(true);
        if (chatFriend.notification > 0) {
          friendDispatch({ type: 'removeMessageNotification', id: chatId });
        }
        const chats = JSON.parse(localStorage.getItem('chats'));
        chats[chatId] = res.data;
        localStorage.setItem('chats', JSON.stringify(chats));
      });
    } else {
      chatDispatch({
        type: 'initMessages',
        messages: JSON.parse(localStorage.getItem('chats'))[chatId],
        currentUserId: parseInt(userContext.userState.userId),
        chatUserId: chatId,
      });
      setLoaded(true);
    }
  }, [
    chatDispatch,
    chatFriend.notification,
    chatId,
    friendDispatch,
    socket,
    userContext.userState.userId,
  ]);

  const sendMessage = (message) => {
    const randomSixDigits = Math.floor(100000 + Math.random() * 900000);
    const data = {
      type: 3,
      sendId: userContext.userState.userId,
      sendName: userContext.userState.userName,
      receiverId: chatFriend.id,
      receiverName: chatFriend.name,
      message,
      messageId: `${Date.now()}:${userContext.userState.userId}:${
        chatFriend.id
      }:${randomSixDigits}`,
      sendTime: Date.now(),
    };
    socket.send(JSON.stringify(data));
    chatDispatch({ type: 'addMessage', message: data, chatId: chatFriend.id });
  };
  return (
    <div className={styles.flexRowContainer}>
      <ChatList friendState={friendState} socket={socket} />
      <div className={styles.flexColumnContainer}>
        <TopNav chatFriend={chatFriend} setShowVideo={setShowVideo} />
        <div className={styles.chatContainer}>
          {!loaded && <LoadChatRoomSpinner />}
          {loaded && (
            <ChatRoom
              chatFriend={chatFriend}
              socket={socket}
              messages={chatState.messages}
              sendMessage={sendMessage}
              chatId={chatId}
            />
          )}
          <RightSideMenu
            onlineStatus='online'
            disable={false}
            chatFriend={chatFriend}
          />
        </div>
      </div>
    </div>
  );
}
