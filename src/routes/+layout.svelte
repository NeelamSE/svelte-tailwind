<script>
import '../app.css'

import {get} from "svelte/store";
import {isuserLoggedIn} from "$lib/utils/store";
import {goto} from "$app/navigation";

const userLoggedin=get(isuserLoggedIn);
import Cookies from 'js-cookie';



// This condition checks if the code is running on the client-side
// If running on the server-side (e.g., during SSR), the code inside this block won't execute
$: if (typeof window !== 'undefined') {

	let token=Cookies.get("token");
	const res=await fetch('http://localhost:3000/verify',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token})})
	console.log(res)

}
</script>
<div >
	<slot />
</div>

