"use client";
import GoogleLoginBtn from '@/component/shared/GoogleLoginBtn';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
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
            const {email, name, photo_url, password} = data;
            const {data:res, error} = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                image: photo_url,
                callbackURL: "/"
            })
            console.log(res, error);
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
           
                toast.success('🦄 Registration Done!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => {
                        redirect('/Login');
                        // e.g. redirect, trigger API, update state
                    },
                });
            }
        }
        
    return (
        <div className='container mx-auto py-20 flex justify-center items-center'>
            <div>
           <Link href="/"> <p className='mb-4 text-center'><Image className='mx-auto' src={'/logo.png'} alt={'logo'} width={200} height={100} /></p></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Name</label>
                    <input defaultValue={``} {...register("name")} type="text" className="input" placeholder="Your Name" />
                    
                    <label className="label">Email</label>
                    <input defaultValue={``} {...register("email")} type="email" className="input" placeholder="Your Email" />

                    <label className="label">Photo Url</label>
                    <input  defaultValue={``} {...register("photo_url")}  type="url" className="input" placeholder="Photo Url" />

                    <label className="label">Password</label>
                    <input  defaultValue={``} {...register("password")}  type="password" className="input" placeholder="Password" />

                    <button  type="submit" className="btn btn-primary mt-4">  <SiGnuprivacyguard className='text-[20px]' ></SiGnuprivacyguard> Register</button>
                     <p className='mt-4'>Already have an account? <Link className='text-blue-500 underline mx-2' href="/Login">Login</Link></p>
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