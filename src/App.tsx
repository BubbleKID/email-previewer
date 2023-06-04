import React from 'react';
import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from "@codemirror/view";
import { dracula } from '@uiw/codemirror-theme-dracula';

function App() {
  const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === 'IFRAME';
  const onChange = React.useCallback((value: string, viewUpdate: ViewUpdate) => {
    const liveRoom = document.getElementById('live');

    if (isIFrame(liveRoom) && liveRoom.contentWindow) {
      liveRoom.contentWindow.document.body.innerHTML = value;
    }
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <div style={{flexBasis: '50%'}}>
        <CodeMirror
          value="console.log('hello world!');"
          height="1000px"
          extensions={[javascript({ jsx: true })]}
          theme={dracula}
          onChange={onChange}
        />
      </div>
      <iframe id="live" src="" style={{flexBasis: '50%'}}></iframe>
    </div>
  );
}

export default App;
