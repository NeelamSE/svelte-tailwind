
<script>

    import {goto} from "$app/navigation";
    import {isuserLoggedIn} from "$lib/utils/store";
    import { Notyf } from 'notyf';
    import 'notyf/notyf.min.css';
    import {onMount} from "svelte";
    import Cookies from 'js-cookie';
    let notyf;


    const userData = {
        email:"",
        password:"",
    }

     async function handleLogin(){
      const D =await fetch('http://localhost:3000/login',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userData)});
      const data = await D.json();
         console.log(data) ;
         if(data.token.trim()!==""){
             Cookies.set("token",data.token);
             console.log(Cookies.get("token"))

         }else{
             notyf.error('User Not Found , Please Sign Up using Register Button')

         }
         userData.email='';
         userData.password='';
    }

    onMount(()=>{
        notyf = new Notyf();
    })


</script>


<body class="max-h-screen">
<a href="https://www.codewithfaraz.com/" class="logo" target="_blank">
    <img src="https://www.codewithfaraz.com/InstaPic.png" alt="">
</a>
<section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div class="w-full px-5">
            <h2 class="text-2xl font-bold text-[#002D74]">Login</h2>
            <p class="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
            <div class="mt-6" >
                <div>
                    <label class="block text-gray-700">Email Address</label>
                    <input type="email" name="" id="" bind:value={userData.email} placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
                </div>

                <div class="mt-4">
                    <label class="block text-gray-700">Password</label>
                    <input type="password" name="" id="" bind:value={userData.password} placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
                </div>

                <div class="text-right mt-2">
                    <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div>

                <button  class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6" on:click={handleLogin} >Log In</button>
            </div>

            <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
                <hr class="border-gray-500" />
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-500" />
            </div>

            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                <span class = "ml-4">Login with Google</span>
            </button>

            <div class="text-sm flex justify-between items-center mt-3">
                <p>If you don't have an account...</p>
                <a href="/signUp">
                <button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button>
                </a>
            </div>
        </div>



    </div>
</section>
</body>

<style>
    .logo {
        position: absolute;
        top: 30px;
        right: 30px;
        display: block;
        z-index: 100;
        transition: all 250ms linear;
    }

    .logo img {
        height: 30px;
        width: auto;
        display: block;
    }
</style>