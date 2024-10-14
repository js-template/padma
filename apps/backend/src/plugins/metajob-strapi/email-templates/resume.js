const createResumeTemplate = (resumeTitle) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume Created</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding: 20px 0;
      background-color: #007BFF;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content p {
      font-size: 16px;
      color: #333;
    }
    .resume-title {
      font-weight: bold;
      font-size: 18px;
      color: #007BFF;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Resume has been Created!</h1>
    </div>
    <div class="content">
      <p>Congratulations on creating your resume! Your resume titled <span class="resume-title">${resumeTitle}</span> has been successfully generated on our platform.</p>
      <p>Feel free to edit and manage your resume at any time. You can log in to your account to make further changes or download it as needed.</p>
      <p>If you have any questions or need assistance, don not hesitate to reach out to us!</p>
    </div>
    <div class="footer">
      <p>Best regards</p>
    </div>
  </div>
</body>
</html>`;
};

module.exports = {
  createResumeTemplate,
};
