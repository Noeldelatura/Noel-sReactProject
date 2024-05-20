import { useForm } from "react-hook-form"
import { LoginUser } from "../@types/types"
import patterns from "../validation/patterns"
import { useState } from "react"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import auth from "../services/auth";
import dialogs, { showSuccessDialog } from "../ui/dialogs";
import "./Login.scss";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const { login } = useAuth();
    const onLogin = (data: LoginUser) => {
        auth
            .login(data)
            .then((res) => {
                login(res.data);

                showSuccessDialog("Login", "Logged in").then(() => {
                    login(res.data);
                    navigate("/cards");
                })

            })
            .catch((e) => {
                dialogs.error("Login Error", e.response.data);
            });
    };
    const { register, handleSubmit, formState: { errors } } = useForm<LoginUser>()
    return (

        <div className="main-container-log shadow-md mb-5 dark:bg-pink-200 ">
            <div>
                <h2 className="mt-8 text-center text-2xl  leading-9 tracking-tight text-pink-900  dark:text-black" >Enter To  Login</h2>
                <form noValidate onSubmit={handleSubmit(onLogin)}
                    className="flex  flex-col justify-end items-center px-6 py-12 lg:px-8 gap-4"
                >

                    <input
                        autoCapitalize="true"
                        autoCorrect="false"
                        autoComplete="email"
                        className="custom-input"
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                            required: "This field is mandatory",
                            pattern: patterns.email
                        })}
                    />
                    {errors.email && <p>{errors.email?.message}</p>}


                    <div className="custom-input-container">
                        <input

                            className="custom-input"
                            placeholder="Password"
                            type={showPassword ? `text` : `password`}
                            autoComplete="current-password"
                            {...register("password", {
                                required: "This field is mandatory",
                                pattern: patterns.password,

                            })}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setShowPassword((s) => !s);
                            }}
                            className="input-button"
                        >
                            {showPassword ? <VscEyeClosed /> : <VscEye />}
                        </button>

                    </div>
                    {errors.password && (
                        <p className="text-pink-800 w-56">{errors.password?.message}</p>
                    )}

                    <button className="custom-button">Login</button>
                </form>

            </div>

            <div className="flex flex-col justify-center items-center mt-3">

                    <a href="/register" >
                    User does not exist??? Click here to register
                    </a>
            </div>

        </div>






    )
}

export default Login