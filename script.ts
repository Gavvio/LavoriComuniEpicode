fetch('https://63ce47bf6d27349c2b6a74a0.mockapi.io/post').then(res=>{
    let risposta = res.json()
    return risposta
}).then(risposta=>{
    console.log(risposta)
    
})
