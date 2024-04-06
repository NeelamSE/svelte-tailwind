
<script>

    import {goto} from "$app/navigation";
    import {isuserLoggedIn} from "$lib/utils/store";
    import { Notyf } from 'notyf';
    import 'notyf/notyf.min.css';
    import {onMount} from "svelte";
    let notyf;

    console.log($isuserLoggedIn)
    const userData = {
        email:"",
        password:"",
    }

    async function handleSignUp(){
        const D =await fetch('http://localhost:3000/signUp',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userData)});
        const data = await D.json();
        console.log(data)
        if(data.valid){
            goto('/login')
        }else{
            notyf.error('User Not Found')

        }
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
            <h2 class="text-2xl font-bold text-[#002D74]">Sign Up</h2>
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



                <button  class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6" on:click={handleSignUp} >Sign Up</button>
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