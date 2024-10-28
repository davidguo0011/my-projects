import React, { useEffect, useLayoutEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';

import styles from './Editor.module.scss';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { useListenResize } from '../../hooks/useListenResize';

export default function Editor({ value, onChange, setEditorRef, height }) {
  // const editorContainer = useRef(null);
  const [target, setTarget] = React.useState();
  const size = useListenResize(target);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const editorRef = useRef(null);

  useEffect(() => {
    //init ref
    setEditorRef(editorRef);
  }, [setEditorRef]);

  useLayoutEffect(() => {
    if (size?.height && height === Infinity) {
      editorRef.current.editor.display.wrapper.style.height = `${size.height}px`;
    } else {
      editorRef.current.editor.display.wrapper.style.height = `${
        height - 45
      }px`;
    }
  }, [height, size?.height]);

  useLayoutEffect(() => {
    let timeout = null;
    if (size?.width) {
      editorRef.current.editor.display.wrapper.style.width = `${
        size.width - 50
      }px`;
      timeout = setTimeout(() => {
        editorRef.current.editor.display.wrapper.style.width = `${
          size.width - 10
        }px`;
        editorRef.current.editor.refresh();
      }, 100);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [size?.width]);

  // useLayoutEffect(() => {
  //   // console.log(size);
  //   // if (editorHeight === Infinity && size) {
  //   //   const height = size.height;
  //   //   editorRef.current.editor.display.wrapper.style.height = `${height}px`;
  //   // } else {
  //   //   editorRef.current.editor.display.wrapper.style.height = `${
  //   //     editorHeight - 35 - 10
  //   //   }px`;
  //   //   editorRef.current.editor.refresh();
  //   // }
  //   let timeout = null;
  //   if (size) {
  //     editorRef.current.editor.display.wrapper.style.height = `${
  //       size.height - 10
  //     }px`;

  //     editorRef.current.editor.display.wrapper.style.width = `${
  //       size.width - 50
  //     }px`;
  //     timeout = setTimeout(() => {
  //       editorRef.current.editor.display.wrapper.style.width = `${
  //         size.width - 10
  //       }px`;
  //       editorRef.current.editor.refresh();
  //     }, 100);
  //   }
  //   return () => {
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     }
  //   };
  // }, [size]);

  return (
    <div className={styles.editorContainer} ref={setTarget}>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        ref={editorRef}
        className={styles.editor}
        options={{
          lineWrapping: true,
          lint: true,
          mode: 'python',
          theme: 'material-palenight',
          lineNumbers: true,
          scrollbarStyle: 'null',
          indentUnit: 4,
        }}
      />
    </div>
  );
}
