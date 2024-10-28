import React, { useState, useEffect } from 'react';
import styles from './EditorContainer.module.scss';
import Editor from '../../../components/Editor/Editor';
import { useResize } from '../../../hooks/useResize';
import { BsFillPlayFill, BsZoomIn, BsZoomOut } from 'react-icons/bs';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import { FaUndoAlt, FaRedoAlt } from 'react-icons/fa';
import { executePythonCode } from '../../../api/execute';
import Btn from '../../../components/Btn/Btn';

export default function EditorContainer({
  setOutput,
  setOutputLoading,
  editorPaneHeight,
}) {
  const [content, setContent] = useState('### Write your code here ###');
  const [fontSize, setFontSize] = useState(14);
  const [editorRef, setEditorRef] = useState(null);
  const ref = React.useRef();
  const { initResize, size } = useResize(
    ref,
    {
      step: 1,
      axis: 'vertical',
    },
    editorPaneHeight
  );
  const onZoomIn = () => {
    if (fontSize >= 24) return;

    setFontSize((prev) => prev + 3);
  };
  const onZoomOut = () => {
    if (fontSize <= 12) return;
    setFontSize((prev) => prev - 3);
  };
  const onRedo = () => {
    editorRef.current.editor.redo();
  };
  const onUndo = () => {
    editorRef.current.editor.undo();
  };
  const runCode = () => {
    setOutputLoading(true);
    const data = {
      code: btoa(content),
    };
    executePythonCode(data).then((res) => {
      if (res.status === 200) {
        setOutput(res.data);
      }
      setOutputLoading(false);
      console.log(res);
    });
  };
  useEffect(() => {
    if (editorRef) {
      editorRef.current.editor.getWrapperElement().style[
        'font-size'
      ] = `${fontSize}px`;
      editorRef.current.editor.refresh();
    }
  }, [editorRef, fontSize]);

  return (
    <div className={styles.editor} ref={ref}>
      <div className={styles.header}>
        <h4>Python</h4>
        <div className={styles.btnsContainer}>
          <Btn content={<FaUndoAlt />} onClick={onUndo} />
          <Btn content={<FaRedoAlt />} onClick={onRedo} />
          <div className={styles.separator}></div>
          <Btn
            content={<BsZoomIn className={styles.zoomInOut} />}
            onClick={onZoomIn}
          />
          <Btn
            content={<BsZoomOut className={styles.zoomInOut} />}
            onClick={onZoomOut}
          />
          <div className={styles.separator}></div>
          <Btn
            content={
              <BsFillPlayFill className={styles.run} onClick={runCode} />
            }
          />
        </div>
      </div>
      <Editor
        value={content}
        onChange={setContent}
        setEditorRef={setEditorRef}
        height={size?.height}
      />
      <button className={styles.drag} onMouseDown={initResize}>
        <RxDragHandleHorizontal />
      </button>
    </div>
  );
}
