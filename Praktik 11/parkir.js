function hitungParkir() {
    // dapatkan nilai inputan user
    let masuk = document.getElementById("masuk").value
    let keluar = document.getElementById("keluar").value

    // dapatkan elemen untuk menampilkan hasil
    let hasilDurasi = document.querySelector("#hasilDurasi")
    let hasilBiaya = document.querySelector("#hasilBiaya")

    // hitung durasi
    let durasi = keluar - masuk

    // hitung biaya
    let biaya = 10000

    // setelah 2 jam pertama, tambahkan biaya perjamnya 2000
    if(durasi > 2) {
        biaya += (durasi - 2) * 2000
    }

    console.log(biaya);

    hasilBiaya.innerHTML = biaya
    hasilDurasi.innerHTML = durasi

}