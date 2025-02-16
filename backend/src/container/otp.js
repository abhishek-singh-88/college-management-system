import nodemailer from "nodemailer";

function genOtp() {
  let otp = "";
  for (let i = 0; i <= 5; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
}

function sendOtp(email, name) {
  const otp = genOtp();
  let ui = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code</title>
</head>
<body style="background-color: #f3f4f6; margin: 0; padding: 0; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); overflow: hidden;">
        <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Your OTP Code</h1>
        </div>
        <div style="padding: 20px;">
            <p style="color: #4a5568; margin-bottom: 15px;">Hi ${name.split(' ')[0]}, </p>
            <p style="color: #4a5568; margin-bottom: 15px;">Your One-Time Password (OTP) for account verification is:</p>
            <div style="background-color: #f3f4f6; border-radius: 8px; padding: 15px; margin-bottom: 15px; text-align: center;">
                <p style="color: #4f46e5; font-size: 32px; font-weight: bold; margin: 0;">${otp}</p>
            </div>
            <p style="color: #4a5568; margin-bottom: 15px;">This OTP is valid for <span style="font-weight: bold;">10 minutes</span>. Please do not share this code with anyone.</p>
            <p style="color: #4a5568; margin-bottom: 5px;">If you didn't request this code, please ignore this email.</p>
            <p style="color: #4a5568;">Thank you for using our service!</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center;">
            <p style="color: #718096; font-size: 12px; margin: 0;">&copy; 2024 AB_NKY Techonologies. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

  `
  const transporter = nodemailer.createTransport({
    service: "aol",
    auth: {
      user: "nky_abhi@aol.com",
      pass: "oadx caqq qipf jhom",
    },
  });

  const mailOptions = {
    from: "nky_abhi@aol.com",
    to: `${email}`,
    subject: "Your OTP is Ready for Use",
    text: "To complete your verification, enter the OTP in the required field.",
    html: `${ui}`,
  };

  transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("Email sent : ", info.response);
        
    }
  })

  return otp
}



export default sendOtp