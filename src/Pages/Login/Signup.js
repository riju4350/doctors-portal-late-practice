import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,]
          = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    
    let signUpError;   
  
    if(loading || gLoading || updating){
      return <Loading></Loading>
    }
    
    if(error || gError || updatingError){
       signUpError = <p className='text-red-500'><small>{error?.message || gError?.message || updatingError?.message}</small></p>
    }

    if(user || gUser){
        console.log(user || gUser)
    }

    const onSubmit = async (data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign up</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control w-full max-w-xs">
        
        <label class="label">
        <span class="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs" 
        {...register("name", 
        {
          required: {
            value: true,
            message: "Name is Required"
          }
        })}/>
        <label class="label">
        {errors.text?.type === 'required' && <span class="label-text-alt text-red-500">{errors.text.message}</span>}
       
        </label>
        </div>
         <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs" 
        {...register("email", 
        {
          required: {
            value: true,
            message: "Email is Required"
          },
          pattern: {
          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          message: 'provide a valide email' // JS only: <p>error message</p> TS only support string
        }
        })}/>
        <label class="label">
        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
        </div>
         <div class="form-control w-full max-w-xs">
        <label class="label">
        <span class="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" class="input input-bordered w-full max-w-xs" 
        {...register("password", 
        {
          required: {
            value: true,
            message: "Password is Required"
          },
          minLength: {
          value: 6,
          message: 'at least 6 charecter' // JS only: <p>error message</p> TS only support string
        }
        })}/>
        <label class="label">
        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        {signUpError}
        </div>     
          <input type="submit" className='btn w-full max-w-xs my-5 font-bold' value="signup"/>
         </form>
         <p className='text-center'><small className='font-bold'>Already An Account? <Link to="/login" className='text-secondary'> Please Login</Link> </small></p>
          <div class="divider">OR</div>
          <button onClick={()=>{signInWithGoogle()}}class="btn btn-outline btn-ghost">Continue with Google</button>
         
        </div>
        </div>
    </div>
  )
}

export default Signup;