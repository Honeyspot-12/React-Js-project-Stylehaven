import React from 'react';
import './loginSignup.css';
import { useForm } from "react-hook-form";

const LoginSignup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data); // Log the form data
        
    };

    return (
        <div className="form-container">
            {/* Sign-Up Form */}
            <form id="signup-form" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>SIGN UP</h2>

                {/* Full Name Field */}
                {errors.username && <div className="red">{errors.username.message}</div>}
                <input
                    placeholder="Full Name"
                    {...register("username", {
                        required: { value: true, message: "This field is required" },
                        minLength: { value: 3, message: "Minimum length is 3" },
                        maxLength: { value: 15, message: "Maximum length is 15" },
                    })}
                    type="text"
                />
                

                {/* Email Field */}
                {errors.email && <div className="red">{errors.email.message}</div>}
                <input
                    placeholder="Email"
                    {...register("email", {
                        required: { value: true, message: "This field is required" },
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                        },
                    })}
                    type="email"
                />
                

                {/* Password Field */}
                {errors.password && <div className="red">{errors.password.message}</div>}
                <input
                    placeholder="Password"
                    {...register("password", {
                        required: { value: true, message: "This field is required" },
                        minLength: { value: 8, message: "Minimum length of password is 8" },
                    })}
                    type="password"
                />
                

                {/* Confirm Password Field */}
                {errors.confirmpassword && <div className="red">{errors.confirmpassword.message}</div>}
                <input
                    placeholder="Confirm Password"
                    {...register("confirmpassword", {
                        required: { value: true, message: "This field is required" },
                        minLength: { value: 8, message: "Minimum length of password is 8" },
                    })}
                    type="password"
                />
                

                {/* Phone Field */}
                {errors.phone && <div className="red">{errors.phone.message}</div>}
                <input
                    type="number"
                    placeholder="Phone"
                    {...register("phone", {
                        required: { value: true, message: "This field is required" },
                        minLength: { value: 10, message: "Phone number must be at least 10 digits" },
                        maxLength: { value: 15, message: "Phone number cannot exceed 15 digits" },
                    })}
                />
               

                {/* Submit Button */}
                <button type="submit" disabled={errors.isSubmitting}>
                    SIGN UP
                </button>
                <div className='loginhere'>
                <p >ALREADY HAVE AN ACCOUNT?<span>LOGIN HERE</span></p>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;