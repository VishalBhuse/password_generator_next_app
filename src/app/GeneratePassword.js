const GeneratePassword = (length, uppercase, numbers, symbols) => {
  const charset = "abcdefghijklmnopqrstuvwxyz";
  let Filtercharset = "";
  if (uppercase) {
    Filtercharset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    Filtercharset += "0123456789";
  }
  if (symbols) {
    Filtercharset += "!@#$%^&*()";
  }
  const fullCharset = charset + Filtercharset;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomVal = Math.floor(Math.random() * fullCharset.length);
    password += fullCharset[randomVal];
  }
  return password;
};

export default GeneratePassword;
