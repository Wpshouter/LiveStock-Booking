"use client";
import LoadingPage from '@/app/loading';
import GoogleLoginBtn from '@/component/shared/GoogleLoginBtn';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { SiGnuprivacyguard } from 'react-icons/si';
import { Bounce, toast } from 'react-toastify';

const page = () => {
         const [loading, setLoading] = useState(false);
        const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
        const onSubmit = async(data) => {
            setLoading(true);
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
                 setLoading(false);
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
                 setLoading(false);
                toast.success('🦄 Registration Done! Redirecting....', {
                    position: "top-center",
                    autoClose: 1500,
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
      if (loading) {
        return (
          <LoadingPage/>
        );
      }
    return (
        <div className='container mx-auto py-20 flex justify-center items-center'>
            <div>
           <Link href="/"> <p className='mb-4 text-center'><Image className='mx-auto' src={'/logo-r.png'} alt={'logo'} width={150} height={100} /></p></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Name</label>
                    <input required defaultValue={``} {...register("name")} type="text" className="input" placeholder="Your Name" />
                    
                    <label className="label">Email</label>
                    <input required defaultValue={``} {...register("email")} type="email" className="input" placeholder="Your Email" />

                    <label className="label">Photo Url</label>
                    <input   defaultValue={``} {...register("photo_url")}  type="url" className="input" placeholder="Photo Url" />

                    <label className="label">Password</label>
                    <input required  defaultValue={``} {...register("password")}  type="password" className="input" placeholder="Password" />

                    <button  type="submit" className="btn btn-primary mt-4">  <SiGnuprivacyguard className='text-[20px]' ></SiGnuprivacyguard> Register</button>
                     <p className='mt-4'>Already have an account? <Link className='text-blue-500 underline mx-2' href="/Login">Login</Link></p>
                </fieldset>
            </form>
             <div className='flex items-center gap-4'>
                            <GoogleLoginBtn setLoading={setLoading}/>
                        </div>
            </div>
        </div>
    );
};

export default page;