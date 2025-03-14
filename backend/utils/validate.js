const { z } = require('zod');

const userSchema = z.object({
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username cannot exceed 50 characters" }),

  email: z.string()
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(255, { message: "Email cannot exceed 255 characters" })
    .email({ message: "Invalid email format" }),

  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)" }),

  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

const validateUser = (data) => {
  try {
    userSchema.parse(data);
    return { success: true, errors: null };
  } catch (err) {
    return { success: false, errors: err.errors };
  }
};

module.exports = { validateUser };
