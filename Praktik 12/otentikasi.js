function auth () {
    const username = "Fahmi"
    const password = "56789"

    // tangkap input user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    if(username == userInput && password == passwordInput){
        alert("Login Berhasil")
        document.location = "home.html"
    } else{
        alert("Login Gagal!")
    }
}

// const = variabel (tidak bisa diganti/tetap)
// let (bisa diganti)
// inner html (melihat isi)