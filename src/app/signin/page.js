"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { useRouter } from "next/navigation";
import Head from 'next/head';

const SignIn = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleSignIn = async () => {
    console.log('handleSignIn called');

    const email = session?.user?.email;

    let response = await Axios.get(`api/userRoute/${email}`);

    if (response.data.length > 0) {
      var role = response.data[0].role;
      console.log(response.data[0]);
      if (role === 'faculty') {
        router.push('/signin/faculty-portal');
      } else if (role === 'HOD') {
        router.push('/signin/hod-portal');
      }else if(role === 'student')
      {
        router.push('/signin/Std-portal');
      }
    } else {
      var role = 'HOD';
      const name = session?.user?.name;
      console.log(name);
      const elen = name.length;
      const check = name.substring(elen - 31, elen - 18);
      console.log(check);

      if (check === 'betechstudent') {
        role = 'student';
        const userobj = {
          name: session?.user?.name,
          email: session?.user?.email,
          role: role
        };
  
        await Axios.post('/api/userRoute', userobj).then(() => {
          alert('Created');
        });

        await Axios.post('/api/std_routes', userobj).then(() => {
          // alert('Created');
        });

        router.push('/signin/Std-portal');
      }
      else{
        alert('invalid username');
      }

      
    }
  };

  return (


    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>ETD Prabandhak</title>
      </Head>
      {status === "authenticated" ? (
        <>
          <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>
            Welcome, {session?.user?.name}!
          </h1>
          <div style={{ marginBottom: '20px', lineHeight: '1.5' }}>
            <strong style={{ color: '#555' }}>Name:</strong> {session?.user?.name} <br />
            <strong style={{ color: '#555' }}>Email:</strong> {session?.user?.email}
          </div>
          <button
            style={{ padding: '12px 20px', marginRight: '10px', cursor: 'pointer', background: '#4285f4', color: '#fff', border: 'none', borderRadius: '5px' }}
            onClick={() => handleSignIn()}
          >
            Go to Portal
          </button>
          <button
            style={{ padding: '12px 20px', cursor: 'pointer', background: '#db4437', color: '#fff', border: 'none', borderRadius: '5px' }}
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>Sign In</h1>
          <p style={{ marginBottom: '20px', color: '#555' }}>
            Sign in to access personalized content
          </p>
          <button
            style={{ padding: '15px 20px', cursor: 'pointer', background: '#4285f4', color: '#fff', border: 'none', borderRadius: '5px' }}
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
        </>
      )}
    </div>

  );
};

export default SignIn;
