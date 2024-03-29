<script lang="ts">

   import {sendMail} from "$lib/mail/mail";
   import { Notyf } from 'notyf';
   import 'notyf/notyf.min.css';
   import {onMount} from "svelte";
   let notyf;


   let testArr = [
      {
         testimonial:
                 "Dsons exceeded my expectations! They provided an outstanding renovation service that transformed my home beyond recognition. The team was professional, communicative, and delivered the project on time and within budget." +
                 " I couldn't be happier with the results. Highly recommend!",
         img: "/client.png",
         name: "S Davies",
      },
      {
         testimonial:
                 "Dsons exceeded my expectations! They provided an outstanding renovation service that transformed my home beyond recognition. The team was professional, communicative, and delivered the project on time and within budget." +
                 " I couldn't be happier with the results. Highly recommend!",
         img: "/client2.png",
         name: "John mcmahon",
      },
      {
         testimonial:
                 "Dsons exceeded my expectations! They provided an outstanding renovation service that transformed my home beyond recognition. The team was professional, communicative, and delivered the project on time and within budget." +
                 " I couldn't be happier with the results. Highly recommend!",
         img: "/client.png",
         name: "S Davies",
      },
      {
         testimonial:
                 "Dsons exceeded my expectations! They provided an outstanding renovation service that transformed my home beyond recognition. The team was professional, communicative, and delivered the project on time and within budget." +
                 " I couldn't be happier with the results. Highly recommend!",
         img: "/client2.png",
         name: "John mcmahon",
      },
   ];

   let mobileMenuHidden = true;

   let validationArr=[];

   function toggleMobileMenu() {
      console.log("clicked");
      mobileMenuHidden = !mobileMenuHidden;
   }

   let jsonData={
      name:"",
      mail:"",
      phone:"",
      address:"",
      message:"",
   };



   function submitButton(){
      validationArr=[];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(jsonData.phone===null ||(jsonData.phone!==null && (jsonData.phone.toString().length<10 || jsonData.phone.toString().length>10 ))){
         validationArr.push("Phone");
      }
      if(jsonData.name.trim().length===0){
         validationArr.push("Name");
      }
      if(!emailRegex.test(jsonData.mail.trim())){
         validationArr.push("Email");
      }
      if(jsonData.message.trim().length===0){
         validationArr.push("Message");
      }
      if(jsonData.address.trim().length===0){
         validationArr.push("Address");
      }

      
      


      if(validationArr.length===0){
         sendMail(jsonData);
         notyf.success("Mail sent");
         jsonData.name='';
         jsonData.phone='';
         jsonData.message='';
         jsonData.address='';
         jsonData.mail='';

      }else{
         notyf.error("Error in Data")
      }
   
   }
   onMount(()=>{
      notyf = new Notyf();
   })
</script>

<body>
<nav class="bg-[#344349] p-4 fixed w-full top-0 z-[100]">
   <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div>
         <a href="#" class="text-white text-lg font-semibold">
            <img src="/projects/logo.webp" /></a
         >
      </div>

      <!-- Navigation Links -->
      <div class="hidden lg:block">
         <ul class="flex space-x-4 items-center py-4">
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >Home</a
               >
            </li>
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >About</a
               >
            </li>
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >Services</a
               >
            </li>
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >Projects</a
               >
            </li>
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >Testimonials</a
               >
            </li>
            <li>
               <a
                       href="#"
                       class="text-white hover:border-b-blue-100 hover:border-b-2"
               >Contact Us</a
               >
            </li>
            <li style="margin-left: 70px"><img src="/projects/phone.png" /></li>
            <li class="hover:border-b-blue-100 hover:border-b-2">
               <a href="#" class="text-white">CONTACT US TODAY?</a>
               <p class="text-white">+44 (0) 234 789 22224</p>
            </li>
         </ul>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden">
         <button
                 id="mobileMenuButton"
                 on:click={toggleMobileMenu}
                 class="text-white focus:outline-none"
         >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
            >
               <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M4 6h16M4 12h16m-7 6h7"
               />
            </svg>
         </button>
      </div>
   </div>
</nav>

<!-- Mobile Menu (Hidden by default) -->
<div
        id="mobileMenu"
        class:hidden={mobileMenuHidden}
        class="lg:hidden bg-gray-800 hidden w-full fixed top-16 overflow-y-auto z-[99]"
>
   <ul class="pt-24 pb-10 p-5">
      <li class="hover:border-b-blue-100 hover:border-b-2"><a href="#" class="block text-white py-2">Home</a></li>
      <li class="hover:border-b-blue-100 hover:border-b-2"><a href="#" class="block text-white py-2">About</a></li>
      <li class="hover:border-b-blue-100 hover:border-b-2"><a href="#" class="block text-white py-2">Services</a></li>
      <li class="hover:border-b-blue-100 hover:border-b-2 l"><a href="#" class="block text-white py-2">Contact</a></li>
      <li class="flex mt-4">
         <img src="/projects/phone.png" /><span class="ml-4">
          <a href="#" class="text-white"
          >CONTACT US TODAY? <br />+44 (0) 234 789 22224</a
          ></span
      >
      </li>
   </ul>
</div>
</body>

<div class="relative my-20">
   <div>
      <img class="w-full h-[60vh] md:h-[70vh]" src="/hero-banner.webp" />
   </div>
   <div
           class="absolute top-0 left-0 flex justify-center items-center w-full h-full"
   >
      <div
              class="h-[45vh] w-full bg-black bg-opacity-60 flex justify-center items-center flex-col"
      >
         <p class="text-white font-bold text-2xl sm:text-4xl">Welcome to</p>
         <h1 class="text-white text-4xl sm:text-7xl font-bold">
            <span class="text-[#c0cf38] font-bold">D</span>SONS
         </h1>
         <p class="text-white w-[90vw] md:w-[65vw] text-center text-wrap text-xl">
            At Dsons, we combine innovative design with exceptional construction
            services to transform your space. With a wealth of industry experience,
            our team is committed to delivering
         </p>
         <button
                 class="relative my-5 rounded-full border-none text-white font-bold py-4 px-9 overflow-hidden button"
         >
            <span class="diagonal scale-up-center-return scale-up-center"></span>
            <span class="relative z-10 text-[15px] lg:text-2xl">CONTACT US </span>
         </button>
      </div>
   </div>
</div>

<div
        class="lg:px-10 xl:px-40 sm:px-4 px-4 w-full flex flex-col md:flex-row justify-start items-center pt-0 pb-0  relative z-10 bg-fixed bg-cover bg-center bg-no-repeat mb-16 bg-[url('/projects/about-us-bg-min.webp')]
">
   <div class="md:w-1/2">
      <h1 class="text-4xl font-bold pb-2">About DSONS</h1>
      <h2 class="font-bold text-[15px] pb-2">Passion & Innovation</h2>
      <p class="pb-2 text-[12px]">
         DSons Limited is a well established, family run property developing
         company founded in 2009. We specialise in the construction of residential
         new builds and refurbishments in the London area. Our drive stems from the
         passion to redesign and develop projects into beautiful homes. We love
         turning visions into reality
      </p>

      <p class="pb-2 text-[12px]">
         We have worked on a range of developments, from houses, (including loft
         conversions and extensions) to flats, to new builds to HMO's.
      </p>

      <p class="pb-2 text-[12px]">
         We have extensive knowledge of the construction trade and pride ourselves
         in providing high quality and attention to detail that exceeds all
         expectations. Our wealth of knowledge means we are able to provide a
         service suited to all needs and requirements and our combined years of
         experience and breadth of knowledge has resulted in us being able to
         maintain a successful and growing Company.
      </p>
      <p class="pb-2 text-[12px]">
         From homes to HMO's, we aim to deliver a service that is professional,
         stylish and elegant. We design innovative projects that meet the needs and
         requirements of our clients seamlessly while keeping up to date with the
         latest trends.
      </p>

      <div class="w-full flex justify-start items-center">
         <div class="w-1/2">
            <h1 class="font-bold">RENOVATION</h1>
            <p class="pr-5">Transform your space with Dsons' bespoke renovation services.</p>
         </div>
         <div class="w-1/2">
            <h class="font-bold">INTERIOR</h>
            <p class="pr-5">Elevate your space with Dsons' exceptional interior decorations.</p>
         </div>
      </div>
      <div class="w-full flex justify-start items-center">
         <div class="w-1/2">
            <h1 class="font-bold">BUILDING</h1>
            <p class="pr-5">
               Build with confidence with Dsons' exceptional construction services.
            </p>
         </div>
         <div class="w-1/2">
            <h1 class="font-bold">RENOVATION</h1>
            <p class="pr-5">
               Turn your vision into reality with Dsons' innovative architectural and
               design solutions
            </p>
         </div>
      </div>
      <button
              class="relative my-5 rounded-full border-none text-white font-bold py-4 px-9 overflow-hidden button"
      >
         <span class="diagonal scale-up-center-return scale-up-center"></span>
         <span class="relative z-10 text-xl lg:text-2xl">FIND OUT MORE </span>
      </button>
   </div>
   <div class="flex justify-end items-center md:w-1/2 px-2">
      <img class="sm:w-[100vw] w-[100vw] h-[80vh]" src="/projects/about-right-img-min.png" />
   </div>
</div>

<div class="relative h-56 my-5">
   <img
           src="/projects/get-in-touch-bg-min.png"
           class="absolute inset-0 w-full h-full object-fill"
           alt="Your Image"
   />
   <div class="absolute inset-0 flex items-center justify-center flex-wrap">
      <div class="text-white text-center lg:w-2/3">
         <h1 class="text-xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-10">
            Need some help with your project?
         </h1>
         <p class="text-xs lg:text-md xl:text-lg px-4">
            Get in touch with the DSONS team of experts. With over 100 years of
            combined experience and a team that can help from design to delivery,
            you really are in good hands with us.
         </p>
      </div>
      <div class="text-white">
         <button
                 class="relative mt-5 rounded-full border-none text-white font-bold py-4 px-9 overflow-hidden button"
         >
            <span class="diagonal scale-up-center-return scale-up-center"></span>
            <span class="relative z-10 text-xl lg:text-2xl">GET IN TOUCH </span>
         </button>
      </div>
   </div>
</div>

<div class="justify-center relative flex items-center my-5">
   <h1 class="font-bold text-2xl relative sm:text-3xl md:text-4xl py-1 pt-2.5">
      <span>WHAT</span>
      <span class="text-yellow-500">WE DO</span>
      <span
              class="absolute bottom-0 left-1/4 transform -translate-x-9 w-[80%] h-1 bg-yellow-400"
      ></span>
   </h1>
</div>
<div class="flex justify-evenly items-center mt-5 mb-10">
   <div class="sm:pl-36 pl-5 text-center">
      <h1 class="sm:text-2xl py-2 text-[15px]">Construction</h1>
      <p class="sm:text-[15px] text-[10px] text-start">
         Dsons is an dynamic and modern construction company providing tailored
         commercial and residential services. We work closely with clients from
         design to completion, delivering exceptional results on time and within
         budget. Contact us to bring your project to life.
      </p>
   </div>
   <div class="sm:px-20 text-center px-5">
      <h1 class="sm:text-2xl py-2 text-[15px]">Renovations</h1>
      <p class="sm:text-[15px] text-[10px] text-start">
         Dsons is an dynamic and modern construction company providing tailored
         commercial and residential services. We work closely with clients from
         design to completion, delivering exceptional results on time and within
         budget. Contact us to bring your project to life.
      </p>
   </div>
   <div class="sm:pr-36 pr-5 text-center">
      <h1 class="sm:text-2xl py-2 text-[15px]">Architecture</h1>
      <p class="sm:text-[15px] text-[10px] text-start">
         Dsons is an dynamic and modern construction company providing tailored
         commercial and residential services. We work closely with clients from
         design to completion, delivering exceptional results on time and within
         budget. Contact us to bring your project to life.
      </p>
   </div>
</div>

<div class="relative h-64 md:h-56 my-5 ">
   <img
           src="/projects/counter-bg-min.png"
           class="absolute inset-0 w-full h-full object-fill"
           alt="Your Image"
   />
   <div
           class="absolute inset-0 flex flex-col items-center justify-center text-white"
   >
      <div class="text-center lg:w-2/3">
         <div class="flex flex-col md:flex-row justify-between">
            <div class="mb-4 md:mb-0 md:mr-4">
               <p class="font-bold text-4xl md:text-6xl">250</p>
               <p class="font-bold">Projects completed</p>
            </div>
            <div class="mb-4 md:mb-0 md:mx-4">
               <p class="font-bold text-4xl md:text-6xl">98</p>
               <p class="font-bold">Properties renovated</p>
            </div>
            <div class="mb-4 md:mb-0 md:ml-4">
               <p class="font-bold text-4xl md:text-6xl">130</p>
               <p class="font-bold">Blueprints drawn up</p>
            </div>
         </div>
      </div>
   </div>
</div>

<div class=" relative z-10 bg-fixed bg-cover bg-center bg-no-repeat mb-16 bg-[url('/projects/about-us-bg-min.webp')]">
<div class="justify-center relative flex items-center my-5  ">
   <h1 class="font-bold text-2xl relative sm:text-3xl md:text-4xl py-1 pt-2.5">
      <span>RECENT</span>
      <span class="text-yellow-500">PRODUCT</span>
      <span
              class="absolute bottom-0 left-1/4 transform -translate-x-9 w-[80%] h-1 bg-yellow-400"
      ></span>
   </h1>
</div>
<div class="flex flex-wrap justify-center my-5">
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project1-min.png"
              alt="Card Image"
      />
   </div>
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project-2.png"
              alt="Card Image"
      />
   </div>
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project3.png"
              alt="Card Image"
      />
   </div>
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project4.png"
              alt="Card Image"
      />
   </div>
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project5.png"
              alt="Card Image"
      />
   </div>
   <div class="max-w-sm mx-2 my-2 bg-white shadow-lg overflow-hidden card hover:border-gray-500 hover:border-solid hover:border-2">
      <img
              class="w-full object-cover"
              src="/projects/project6.png"
              alt="Card Image"
      />
   </div>
</div>
</div>

<div
        class="w-full mt-20 mb-5 px-2 py-10 lg:px-20 lg:py-20 bg-[url('/testimonials-bg.png')] bg-no-repeat bg-cover shadow-md overflow-hidden"
>
   <div class="text-5xl flex justify-center text-white font-bold mb-16">
      <h1 class="relative inline-block text-center">
         <span>Testimonials</span>
         <span
                 class="absolute -bottom-1 left-1/4 transform -translate-x-9 w-[80%] h-1 bg-yellow-200 y-1"
         ></span>
      </h1>
   </div>

   <!-- Card content -->
   {#each testArr as a}
      <div>
         <p class="mt-2 text-black text-sm bg-white sm:text-base m-4 px-10 py-5">
            {a.testimonial}
         </p>
      </div>
      <div class="flex justify-start items-center p-4">
         <img
                 class="h-16 w-16 md:h-24 md:w-24 rounded-full border-1 border-white ml-4"
                 src={a.img}
                 alt="Circular image"
         />
         <span class="px-3 text-xl text-white font-bold">{a.name}</span>
      </div>
   {/each}
</div>

<div class="justify-center relative flex items-center w-full my-20">
   <h1 class="font-bold text-xl relative sm:text-3xl md:text-4xl py-1 pt-2.5 mx-2">
      <span class="text-yellow-500">DSONS</span>
      <span>THE TEAM YOU CAN TRUST</span>
   </h1>
</div>
<div
        class="bg-[url('/projects/contact-us-bg.png')] px-6 py-12 sm:py-24  bg-no-repeat bg-cover lg:px-8 ">
   <div
           class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl md:text-5xl tracking-tight text-white">
         SEND US A MESSAGE
      </h1>
      <p class="text-white leading-[18px] py-3">
         Get in touch with Dsons today and let us help you bring your construction
         project to life. Fill out our contact form and one of our experts will be
         in touch shortly to discuss your needs.
      </p>
   </div>
   <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
         <div>
           <div class="mt-2.5">
               <input bind:value={jsonData.name}
                       required={false}
                       type="text"
                       name="first-name"
                       id="first-name"
                       autocomplete="given-name"
                       placeholder="Name"
                       class={validationArr.includes('Name')?"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6":"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}/>
            </div>
         </div>
         <div>
           <div class="mt-2.5">
               <input  bind:value={jsonData.mail}
                       required={false}
                       type="email"
                       name="email"
                       id="email"
                       autocomplete="family-name"
                       placeholder="Email"
                       class={validationArr.includes('Email')?"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6":"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}/>
               
            </div>
         </div>
         <div>
            <!--               <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>-->
            <div class="mt-2.5">
               <input  bind:value={jsonData.phone}
                       required={false}
                       type="number"
                       name="phone"
                       id="phone"
                       autocomplete="mobile"
                       placeholder="Phone "
                       class={validationArr.includes('Phone')?"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6":"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}/>
               
            </div>
         </div>
         <div>
            <!--               <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>-->
            <div class="mt-2.5">
               <input  bind:value={jsonData.address}
                       required={false}
                       type="text"
                       name="address"
                       id="address"
                       autocomplete="address"
                       placeholder="Address"
                       class={validationArr.includes('Address')?"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6":"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}/>
               
            </div>
         </div>

         <div class="sm:col-span-2">
            <!--               <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>-->
            <div class="mt-2.5">
          <textarea
                  bind:value={jsonData.message}
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  class={validationArr.includes('Message')?"block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6":
                  "block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}
          />
              
            </div>
         </div>
      </div>
      <div class="my-5 flex justify-center">
         <button
                 class="relative rounded-full border-none text-white font-bold py-4 px-9 overflow-hidden button"
                 on:click={submitButton}
         >
            <span class="diagonal scale-up-center-return scale-up-center"></span>
            <span class="relative z-10 text-xl lg:text-2xl">SUBMIT </span>
         </button>
         <!--            <button type="submit" class="bg-blue-600 text-white rounded-sm py-2 w-full block">Submit →</button>-->
      </div>
   </div>
</div>

<footer class="bg-[#344349] text-white py-8 px-5 mt-0">
   <div
           class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
   >
      <!-- Footer Section 1 -->
      <div>
         <img src="/projects/logo.webp" />
         <p class="py-4">
            At Dsons, our mission is to deliver exceptional construction services
            that enhance and transform spaces.
         </p>
      </div>
      <!-- Footer Section 2 -->
      <div >
         <h2 class="text-lg font-semibold mb-4">OUR SERVICES</h2>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Construction</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Renovations</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Architecture</p>
      </div>
      <!-- Footer Section 3 -->
      <div class="w-fit">
         <h2 class="text-lg font-semibold mb-4">SITE LINK</h2>
         <p class="w-fit hover:border-b-blue-100 hover:border-b-2">About us</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Services</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Projects</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Testimonials</p>
         <p class="hover:border-b-blue-100 hover:border-b-2 w-fit">Team</p>
      </div>
      <!-- Footer Section 4 -->
      <div>
         <h2 class="text-lg font-semibold mb-4">CONTACT US</h2>
         <p>1004-AD-Block 3rd floor Radha puram ,Delhi,NCR</p>
      </div>
   </div>
   <div class="mt-8 text-center flex justify-center align-middle">
      <img src="/projects/copyright-icon.png" />
      <p class="text-[10px] px-1">
         023 DSONS. ALL RIGHTS RESERVED WEBSITE DESIGNED, MAINTAINED & HOSTED BY
         WEBOLOGY MARKETING
      </p>
   </div>
</footer>



<style>
   /* CSS for responsive layout */
   .card {
      flex: 0 0 calc(33.33% - 2rem); /* Three cards in a row with margins */
      margin: 1rem;
   }

   @media (max-width: 1024px) {
      .card {
         flex-basis: calc(
                 50% - 2rem
         ); /* Two cards in a row with margins on medium screens */
      }
   }

   @media (max-width: 768px) {
      .card {
         flex-basis: calc(
                 100% - 2rem
         ); /* Single card per row with margins on small screens */
      }
   }

   .diagonal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #c0cf38 85%, gray 50%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      transition: width 0.3s ease-in-out;
   }
   .button:hover .diagonal {
      width: 100%;
   }
   .button:hover .scale-up-center {
      animation: scale-up-center 1s ease-in-out;
      transition: width 1s ease-in-out;
      -webkit-animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
      animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
   }
   .button:not(:hover) .scale-up-center-return {
      animation: scale-up-center 0.5s ease-in-out;
      transition: width 0.5s ease-in-out;
      -webkit-animation: scale-up-center-return 0.5s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center-return 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
   }
   @keyframes scale-up-center {
      0% {
         background: linear-gradient(135deg, #c0cf38 50%, gray 50%);
      }
      10% {
         background: linear-gradient(135deg, #c0cf38 25%, gray 0%);
      }
      20% {
         background: linear-gradient(135deg, #c0cf38 0%, gray 0%);
      }
      30% {
         background: linear-gradient(135deg, #c0cf38 -25%, gray 0%);
      }
      40% {
         background: linear-gradient(135deg, #c0cf38 -50%, gray 0%);
      }
      50% {
         background: linear-gradient(135deg,  #c0cf38 -75%, gray 0%);
      }
      60% {
         background: linear-gradient(135deg,  #c0cf38 -100%, gray 0%);
      }
      70% {
         background: linear-gradient(135deg,  #c0cf38 -125%, gray 0%);
      }
      80% {
         background: linear-gradient(135deg,  #c0cf38 -150%, gray 0%);
      }
      90% {
         background: linear-gradient(135deg, #c0cf38 -175%, gray 0%);
      }
      100% {
         background: linear-gradient(135deg, #c0cf38 -200%, gray 0%);
      }
   }
   @keyframes scale-up-center-return {
      0% {
         background: linear-gradient(135deg, #c0cf38 -200%, gray 0%);
      }
      10% {
         background: linear-gradient(135deg, #c0cf38 -175%, gray 0%);
      }
      20% {
         background: linear-gradient(135deg, #c0cf38 -150%, gray 0%);
      }
      30% {
         background: linear-gradient(135deg, #c0cf38 -125%, gray 0%);
      }
      40% {
         background: linear-gradient(135deg, #c0cf38 -100%, gray 0%);
      }
      50% {
         background: linear-gradient(135deg, #c0cf38 -75%, gray 0%);
      }
      60% {
         background: linear-gradient(135deg,  #c0cf38 -50%, gray 0%);
      }
      70% {
         background: linear-gradient(135deg,  #c0cf38 -25%, gray 0%);
      }
      80% {
         background: linear-gradient(135deg,  #c0cf38 0%, gray 0%);
      }
      90% {
         background: linear-gradient(135deg, #c0cf38 25%, gray 0%);
      }
      100% {
         background: linear-gradient(135deg,  #c0cf38 85%, gray 20%);
      }
   }
</style>
