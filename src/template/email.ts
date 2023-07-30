export const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <!--[if mso]>
      <style>
        h1 {color: #ff0000;}
      </style>
    <![endif]-->
  </head>

  <body>
    <h1>Conditional Code</h1>
    <!--[if mso]>
      <p>This is Microsoft Outlook.</p>
    <![endif]-->

    <!--[if !mso]><!-->
      <p>This is NOT Microsoft Outlook</p>
    <!--<![endif]-->
    <div style="width: 157px; height: 118px; background-image: url(&quot;data:image/png;base64,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&quot;);"></div>
  </body>
</html>`;