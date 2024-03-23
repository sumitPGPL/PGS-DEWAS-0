export function validateInputs(input) {
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.email === "") {
    return "Email cannot be empty";
  } else if (!emailRegex.test(input.email)) {
    return "Invalid Email";
  }

  // Phone number validation (10 digits and positive)
  const phoneRegex = /^\d{10}$/;
  if (input.phone === "") {
    return "Phone number cannot be empty";
  } else if (!phoneRegex.test(input.phone)) {
    return "Invalid Phone Number";
  }

  // Password validation (at least 6 characters)
  const passwordRegex = /^.{6,}$/;
  if (input.password === "") {
    return "Password cannot be empty";
  } else if (!passwordRegex.test(input.password)) {
    return "Invalid Password";
  }

  // Return null if all fields are valid
  return true;
}
