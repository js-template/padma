const createAppliedJobTemplate = (jobTitle) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application Submitted</title>
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
    .job-title {
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
      <h1>Your Job Application has been Submitted!</h1>
    </div>
    <div class="content">
      <p>Thank you for applying to the position <span class="job-title">${jobTitle}</span> on our platform.</p>
      <p>Your application has been successfully submitted, and the employer will review it shortly. We will notify you once there are any updates regarding your application status.</p>
      <p>In the meantime, you can view other job opportunities or update your profile.</p>
      <p>If you have any questions or need further assistance, feel free to contact our support team.</p>
    </div>
    <div class="footer">
      <p>Best regards</p>
    </div>
  </div>
</body>
</html>
`;
};

module.exports = {
  createAppliedJobTemplate,
};
