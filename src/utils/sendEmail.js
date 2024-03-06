import emailjs from 'emailjs-com';

const EMAIL_JS_USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID;
const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;

emailjs.init(EMAIL_JS_USER_ID);

const sendEmail = async (data) => {
  const { name, email, message } = data;
  const emailData = {
    subject: `${name}`,
    from_name: `${name}`,
    email: `${email}`,
    message: `
    🙂 Name: ${name}
		📧 Email: ${email}
		📃 Message: ${message}   
    `,
  };

  try {
    const res = await emailjs.send(
      EMAIL_JS_SERVICE_ID,
      EMAIL_JS_TEMPLATE_ID,
      emailData
    );
    if (res.status === 200) return res;
    else {
      throw new Error('Cant send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
