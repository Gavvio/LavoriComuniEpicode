fetch('https://63ce47bf6d27349c2b6a74a0.mockapi.io/post').then(function (res) {
    var risposta = res.json();
    return risposta;
}).then(function (risposta) {
    console.log(risposta);
});
