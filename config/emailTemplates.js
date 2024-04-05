export const EmailTemplate = (data) => {
  return `<!doctype html>
<html lang=en>
<head>
<meta charset=UTF-8>
<meta name=viewport content="width=device-width,initial-scale=1">
<title>Contact Form Submission</title>
<style>body{font-family:Arial,sans-serif}h2{border-bottom:2px solid #333;padding-bottom:10px}table{width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;border:1px solid #ddd}td,th{padding:10px;border:1px solid #ddd}th{background-color:#f2f2f2;width:30%}.footer,.header{background-color:#2a2846;color:#fff;padding:10px;text-align:center;margin-top:10px;margin-bottom:10px}</style>
</head>
<body>
<div class=header>
<h1> VU2RCY </h1>
</div>
<h2>Contact Form Submission</h2>
<table>
<tr>
<th>Name</th>
<td>${data.name}</td>
</tr>
<tr>
<th>Email</th>
<td>${data.email}</td>
</tr>
<tr>
<th>Call Sign</th>
<td style=text-transform:uppercase>${data.callSign}</td>
</tr>
<tr>
<th>Phone Number</th>
<td>${data.phoneNumber}</td>
</tr>
<tr>
<th>Subject</th>
<td>${data.subject}</td>
</tr>
<tr>
<th>Message</th>
<td>${data.message}</td>
</tr>
</table>
<div class=footer>
<p>&copy; ${new Date().getFullYear()} <span style=color:#fff>[ vu2rcy ]</span> All rights reserved.</p>
</div>
</body>
</html>`;
};

export const TextTemplate = (data) => {
  return `Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Call Sign: ${data.callSign}
Phone Number: ${data.phoneNumber}
Subject: ${data.subject}
Message: ${data.message}
`;
};
