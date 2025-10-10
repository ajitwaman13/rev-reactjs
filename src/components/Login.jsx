import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  username: z.string().min(4, "Username must be 4–10 chars").max(10),
  age: z.coerce.number().min(1, "Age must be at least 1").max(99, "Max age 99"),
  password: z.string().min(4, "Password must be at least 4 chars"),
});

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "20px",
    fontFamily: "Roboto, Arial, sans-serif",
    backgroundColor: "#f8f9fa",
  },
  formCard: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    textAlign: "center",
    color: "#343a40",
    marginBottom: "30px",
    fontSize: "2em",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    marginTop: "15px",
    fontWeight: "600",
    color: "#495057",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #ced4da",
    borderRadius: "6px",
    fontSize: "1em",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 0 3px rgba(0, 123, 255, 0.25)",
    outline: "none",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "0.9em",
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    marginTop: "30px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "1.1em",
    fontWeight: "700",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.1s ease",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
};

const Login = () => {
  const [isUsernameFocus, setIsUsernameFocus] = React.useState(false);
  const [isAgeFocus, setIsAgeFocus] = React.useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = React.useState(false);
  const [isButtonHover, setIsButtonHover] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    dispatch(loginUser(data));
    console.log("User Data:", data);
    navigate("/profile");
    alert("User logged in successfully!");
  };

  const getInputStyle = (isFocused) => ({
    ...styles.input,
    ...(isFocused ? styles.inputFocus : {}),
  });

  const getButtonStyle = (isHover) => ({
    ...styles.submitButton,
    ...(isHover ? styles.submitButtonHover : {}),
  });

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formCard}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username")}
            style={getInputStyle(isUsernameFocus)}
            onFocus={() => setIsUsernameFocus(true)}
            onBlur={() => setIsUsernameFocus(false)}
          />
          {errors.username && (
            <p style={styles.errorText}>{errors.username.message}</p>
          )}

          <label htmlFor="age" style={styles.label}>
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age")}
            style={getInputStyle(isAgeFocus)}
            onFocus={() => setIsAgeFocus(true)}
            onBlur={() => setIsAgeFocus(false)}
          />
          {errors.age && <p style={styles.errorText}>{errors.age.message}</p>}

          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            style={getInputStyle(isPasswordFocus)}
            onFocus={() => setIsPasswordFocus(true)}
            onBlur={() => setIsPasswordFocus(false)}
          />
          {errors.password && (
            <p style={styles.errorText}>{errors.password.message}</p>
          )}

          <button
            type="submit"
            style={getButtonStyle(isButtonHover)}
            onMouseEnter={() => setIsButtonHover(true)}
            onMouseLeave={() => setIsButtonHover(false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
