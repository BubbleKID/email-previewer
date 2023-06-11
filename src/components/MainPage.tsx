import React, { useEffect, useCallback } from 'react';
import './MainPage.css';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from "@codemirror/view";
import { dracula } from '@uiw/codemirror-theme-dracula';
import { emailTemplate } from '../template/email';
import { parse } from 'node-html-parser';
import Header from './Header';

function MainPage() {
  // const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
  // const options = {
  //   ignoreAttributes : false,
  //   allowBooleanAttributes: true
  // };
  // const parser = new XMLParser(options);
  const options = {
    comment: true,            // retrieve comments (hurts performance slightly)
    blockTextElements: {
      script: true,	// keep text content when parsing
      noscript: true,	// keep text content when parsing
      style: true,		// keep text content when parsing
      pre: true			// keep text content when parsing
    }
  }
  const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === 'IFRAME';

  const renderHtml = useCallback((emailTemplate: string) => {
    const liveRoom = document.getElementById('live');

    if (isIFrame(liveRoom) && liveRoom.contentWindow) {
      liveRoom.contentWindow.document.body.innerHTML = emailTemplate;
      let jObj = parse(emailTemplate, options);
      console.log(jObj);
    }
  }, []);

  const onChange = useCallback((value: string, viewUpdate: ViewUpdate) => {
    renderHtml(value);
  }, [renderHtml]);

  useEffect(() => {
    renderHtml(emailTemplate);
  }, [renderHtml])

  return (
    <>
      <Header/>
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
    </>
  );
}

export default MainPage;
