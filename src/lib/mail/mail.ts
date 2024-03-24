export async function sendMail(jsonData:any){
    const response= await fetch('/api/mail',{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(jsonData)
    });
    console.log(await response.json());
}