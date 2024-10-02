export const checkValidateData = (email, password) => {
    // Use regex literals for email and password validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
  
    // Return string or JSX if used in a React environment
    if (!isValidEmail) return "Invalid Email";
    if (!isValidPassword) return "Invalid Password";
  
    return null;  // Return null if everything is valid
  };
  