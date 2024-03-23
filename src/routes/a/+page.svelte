<script>


    import {send} from "$lib/nodeMailer/sendEmail.js";
    send();

</script>

<button on:click={()=>{console.log("Hello")}}>
    Click me
</button>