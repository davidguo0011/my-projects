import React, { useEffect, useRef, useState } from 'react';
import styles from './MainContent.module.scss';
import TextContent from '../TextContent/TextContent';
import EditorContainer from '../EditorContainer/EditorContainer';
import Output from '../Output/Output';

export default function MainContent() {
  const mainContentRef = useRef();
  const editorPaneRef = useRef();
  const [output, setOutput] = useState('');
  const [outputLoading, setOutputLoading] = useState(false);
  const [mainContentWidth, setMainContentWidth] = useState(0);
  const [editorPaneHeight, setEditorPaneHeight] = useState(0);
  useEffect(() => {
    setMainContentWidth(mainContentRef.current.offsetWidth);
    setEditorPaneHeight(editorPaneRef.current.offsetHeight);
  }, []);

  return (
    <div className={styles.mainContent} ref={mainContentRef}>
      <TextContent mainContentWidth={mainContentWidth} />
      <div className={styles.editorPane} ref={editorPaneRef}>
        <EditorContainer
          setOutput={setOutput}
          setOutputLoading={setOutputLoading}
          editorPaneHeight={editorPaneHeight}
        />
        <Output output={output} outputLoading={outputLoading} />
      </div>
    </div>
  );
}
