"use client";
import GoogleLoginBtn from '@/component/shared/GoogleLoginBtn';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { Bounce, toast } from 'react-toastify';


const page = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
    const onSubmit = async(data) => {
            console.log(data);
            const {email, password} = data;
            const { data:res, error } = await authClient.signIn.email({
                email: email, // required
                password: password, // required
                rememberMe: true,
                callbackURL: "/",
            });
            console.log(error, res);
            if(error){
                //alert(error.message);
                   toast.error(`${error.message}`, {
                                    position: "top-center",
                                    autoClose: 2500,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Bounce,
                                });
            }
            if(res){
                    toast.success('🦄 Login Successful!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
    }
    const handle_google_login = async () => {
          const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
    }
//   console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className='container mx-auto py-20 flex justify-center items-center'>
            <div>
                    <Link href="/"> <p className='mb-4 text-center'><Image className='mx-auto' src={'/logo-r.png'} alt={'logo'} width={150} height={100} /></p></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Email</label>
                    <input defaultValue={``} {...register("email")} type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input  defaultValue={``} {...register("password")}  type="password" className="input" placeholder="Password" />

                    <button className="btn btn-primary text-white  mt-4"> <FiLogIn className='text-[20px]'/> Login</button>
                    <p className='mt-4'>Don't have an account? <Link className='text-blue-500 underline mx-2' href="/Register">Register</Link></p>
                </fieldset>
            </form>
            <div className='flex items-center gap-4'>
                  <GoogleLoginBtn/>
            </div>
            </div>
        </div>
    );
};

export default page;