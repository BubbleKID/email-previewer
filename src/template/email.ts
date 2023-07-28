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
</body>

</html>`;