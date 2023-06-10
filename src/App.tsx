import React, { useEffect } from 'react';
import './App.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from "@codemirror/view";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { emailTemplate } from './template/email';
import { parse } from 'node-html-parser';

function App() {
  const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === 'IFRAME';

  const renderHtml = (emailTemplate: string) => {
    const liveRoom = document.getElementById('live');

    if (isIFrame(liveRoom) && liveRoom.contentWindow) {
      liveRoom.contentWindow.document.body.innerHTML = emailTemplate;
      console.log(parse(emailTemplate));
    }
  }

  const onChange = React.useCallback((value: string, viewUpdate: ViewUpdate) => {
    renderHtml(value);
  }, []);

  useEffect(() => {
    renderHtml(emailTemplate);
  }, [])

  return (
    <div style={{display: 'flex'}}>
      <div style={{flexBasis: '50%', overflow: 'auto'}}>
        <CodeMirror
          value={emailTemplate}
          height="1000px"
          extensions={[javascript({ jsx: true })]}
          theme={dracula}
          onChange={onChange}
        />
      </div>
      <iframe title="live" id="live" src="" style={{flexBasis: '50%'}}></iframe>
    </div>
  );
}

export default App;
