function emailClassifyPrompt(text) {
  const EmailText = text[0].toUpperCase() + text.slice(1).toLowerCase();
  return `Following are the list of Subjects and Categories they fall into
  
  Subject: Bug Report - Application Crashes on Start-up

  Dear XYZ,
  
  I would like to report a bug that I have encountered while using your application. Upon starting the application, it crashes immediately and I am unable to use it. Here are the details of the bug:
  
  Issue: Application crashes on start-up
  Steps to reproduce:
  Launch the application
  Observe the application crash
  Expected behavior: The application should start up normally and be ready to use
  Actual behavior: The application crashes immediately upon start-up
  Error message: "Application has stopped working"
  Environment: Windows 10, version 21H1, 64-bit operating system
  I have tried restarting my computer and reinstalling the application, but the issue persists. I believe this bug is preventing me from using the application as intended, and I would greatly appreciate your assistance in resolving it.
  
  Please let me know if you need any further information from me to address this issue. Thank you for your attention to this matter.
  
  Best regards
  
  Result: Bug
  
  Subject: New Sales Lead - Potential Customer

  Dear Sir,

  I would like to introduce you to a new sales lead I discovered. The lead is a potential customer who is interested in our products and services. Here are the details:

  Company Name: ABC Pvt. Ltd.
  Contact Name: Bob
  Contact Email: bob@example.com
  Contact Phone: 123456789
  Products/Services of Interest: [Products/Services]
  Please follow up with them and provide more information about our offerings. I believe this lead has strong potential to become a valuable customer. Let me know if you need any assistance.

  Best regards,
  
  Result: Sales
  
  Subject: Service Update - Scheduled Maintenance
  
  Dear Santosh,
  
  We would like to inform you of a scheduled maintenance on our service on [date] from [start time] to [end time] (GMT). During this time, the service will be temporarily unavailable. We apologize for any inconvenience this may cause and appreciate your patience.
  
  Once the maintenance is complete, the service will resume as normal. If you experience any issues after the maintenance, please contact our support team at [email/phone]. Thank you for your understanding and continued support.
  
  Best regards,

  Result: Update
  
  Classify the Following Subject as one of Bug, Sales, Update
  
  Subject: ${EmailText}
  Result:`;
}

module.exports = { emailClassifyPrompt };
