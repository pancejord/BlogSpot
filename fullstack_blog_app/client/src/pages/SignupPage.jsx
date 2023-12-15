import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React, {useState} from "react";
import {BiImages} from "react-icons/bi"
import { FcGoogle } from "react-icons/fc";
import {IoArrowBackCircleSharp} from "react-icons/io5"
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Logo, InputBox, Button, Divider } from "../components";

const SignupPage = () => {

  const user = {}
  const [showForm, setShowForm] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  if (user.token) window.location.replace("/")


  const handleSubmit = async () => {};

  return <div className="flex w-full h-[100vh]">
    <div className="hidden md:flex flex-col items-center justify-center h-full w-1/3 gap-y-4 bg-black">
      {fileUrl && (
        <img src={fileUrl || file} alt="" className="w-16 h-16 rounded-full" />
      )}
      <Logo type='signin' />
      <span className='text-xl font-semibold text-white'>Welcome!</span>

    </div>
    <div className="flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black items-center px-4 md:px-20 lg:px-40">
      <div className="w-full h-full flex flex-col items-center justify-center py-12 px-4 sm:px-0 lg:px-8">
      <div className='block mb-10 md:hidden -ml-8'>
            <Logo />
          </div>
          <div className="w-full space-y-6 flex flex-col  justify-start">
            <div className="max-w-md w-full flex gap-3 md:gap-4 mb-12">
              {showForm && (
                <IoArrowBackCircleSharp className="text-2xl lg:text-3xl cursor-pointer mt-1 text-gray-800 dark:text-gray-400"
                onClick={() => setShowForm(false)} />
              )}
              
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white">Sign Up For An Account</h2>
              
            </div>
            {showForm ? (
              <form onSubmit={handleSubmit} className="max-w-md w-full mt-8 space-y-6">
                <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-6 mb-8">
                  <div className="w-full flex gap-4">
                  <InputBox
                      label='First Name'
                      name='firstName'
                      type='text'
                      isRequired={true}
                      placeholder='First Name'
                      value={data.firstName}
                    />
                    <InputBox
                      label='Last Name'
                      name='lastName'
                      type='text'
                      isRequired={true}
                      placeholder='Last Name'
                      value={data.lastName}
                    />
                  </div>
                  <InputBox
                      label='Email'
                      name='email'
                      type='text'
                      isRequired={true}
                      placeholder='Email'
                      value={data.email}
                    />
                     <InputBox
                      label='Password'
                      name='password'
                      type='text'
                      isRequired={true}
                      placeholder='Password'
                      value={data.password}
                    />

                    <div className="flex items-center justify-between py-4">
                      <label htmlFor="imgUpload" className="flex items-center gap-1 text-base text-blakc dark:text-gray-500 cursor-pointer">
                        <input id='imgUpload' type="file" onChange={(e) => setFile(e.target.files[0])} className="hidden" data-max-size="1024" accept="jpg, .png, .jpeg" />
                        <BiImages/> <p>Upload Profile Photo</p>
                      </label>
                    </div>
                    <Button
                    label="Create Account"
                    type='submit'
                    styles='group relative flex w-full items-center justify-center py-2.5 2xl:py-3 px-4 border border-transparent text-sm font-medium bg-black dark:bg-rose-800 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 text-white rounded-full'/>

                  
                  

                </div>
              </form>
            ) : (
              <div className="max-w-md w-full space-y-8">
              <Button onClick={() => GoogleLogin()}
              label="Sign In With Google"
              icon={<FcGoogle className="text-xl"/>}
              styles='w-full flex flex-row-reverse gap-4 bg-black dark:bg-transparent dark:border text-white px-5 py-2.5 rounded-full' 
                />

                <Divider label="OR" /> 

                <Button label='Continue With Email'
                onClick={() => setShowForm(true)}
                styles='w-full flex gap-4 bg-black dark:bg-rose-800 dark:border text-white px-5 py-2.5 rounded-full' /> 
             </div>
            )}
            <p className="max-w-md w-full text-center text-gray-600 dark:text-gray-300">Already have an account?
              <Link className="p-4 text-rose-800 font-medium" to="/signin">Sign In</Link>
            </p>
            



          </div>

      </div>

    </div>
    <Toaster richColors />
  </div>;
};

export default SignupPage;
