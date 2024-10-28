import React, { useState } from 'react';
import styles from './TextContent.module.scss';
import { useResize } from '../../../hooks/useResize';
import { RxDragHandleVertical } from 'react-icons/rx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';
import Btn from '../../../components/Btn/Btn';

export default function TextContent({ mainContentWidth }) {
  const ref = React.useRef();
  const options = {
    step: 1,
    axis: 'horizontal',
  };
  const { initResize, size } = useResize(ref, options, mainContentWidth);
  const [fontSize, setFontSize] = useState(13);
  const javaScriptMarkdownCodeblock = `# JavaScript code example:
 
~~~javascript
// function that adds "2 numbers" together 
const sumTwoNumbers = (num1, num2) => num1 + num2;
 
// call the function
console.log(sumTwoNumbers(1, 2)); // 3
 
// array of users
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 25 },
];
 
// print out the users age 
console.log(users.map(user => user.age)); // [30, 28, 25]
~~~

## JavaScript code example:
 
~~~javascript
// function that adds "2 numbers" together 
const sumTwoNumbers = (num1, num2) => num1 + num2;
 
// call the function
console.log(sumTwoNumbers(1, 2)); // 3
 
// array of users
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 25 },asdawkjdalkjdalksjdalkwjalksjdalksjdalkwjdalksjdlakjwkldajksldjaklsjdkawjdaklsjdakwjdlaksjdlakjdwlkdjaslkdjawkldjalksdjaslkdj
];
 
// print out the users age 
console.log(users.map(user => user.age)); // [30, 28, 25]
~~~

~~~css
.header{
  color:red
}
~~~
`;
  let width = 0;
  if (mainContentWidth > 0) {
    //initial width
    width = mainContentWidth / 2;
    if (size) {
      //resize enabled width
      if (size.width !== Infinity) width = size.width;
    }
  }

  const onZoomIn = () => {
    if (fontSize >= 22) return;
    setFontSize((prev) => prev + 2);
  };
  const onZoomOut = () => {
    if (fontSize <= 10) return;
    setFontSize((prev) => prev - 2);
  };
  return (
    <div
      className={styles.textContent}
      ref={ref}
      style={{ width: `${width}px` }}
    >
      <div className={styles.courseMaterial}>
        <div className={styles.header}>
          <h4>Course / Quiz</h4>
          <div className={styles.btnsContainer}>
            <Btn
              content={<BsZoomIn className={styles.zoomInOut} />}
              onClick={onZoomIn}
            />
            <Btn
              content={<BsZoomOut className={styles.zoomInOut} />}
              onClick={onZoomOut}
            />
          </div>
        </div>
        <div
          className={styles.contentWrapper}
          style={{
            width: `${width - 45}px`,
            fontSize: `${fontSize}px`,
          }}
        >
          <ReactMarkdown
            children={javaScriptMarkdownCodeblock}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    {...props}
                    style={nord}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
          {/* <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            accusamus saepe aperiam, sequi minima voluptatem sunt culpa,
            adipisci porro, et voluptatibus cupiditate! Unde neque vitae
            temporibus, voluptas minus aperiam consequatur?
          </div> */}
        </div>
      </div>
      <button className={styles.drag} onMouseDown={initResize}>
        <RxDragHandleVertical />
      </button>
    </div>
  );
}
