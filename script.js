const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
})

// Data Laptop

const DaLap = [
    {
        name: 'Unyil A94 - BBA',
        deskripsi: 'Laptop Unyil Generasi Terbaik Seaifnjansd',
        price: 'Rp. 41.000.00',
        img: '../images/acer-1.png',
    },
,   
    {
        name: 'Unyil A26 - BBB',
        deskripsi: 'Laptop Biasa aJhhhhhhhhh BBB',
        price: 'Rp. 21.000.00',
        img: '../images/laptop-1.png',
    },
   
    {
        name: 'Unyil A74 - BBC',
        deskripsi: 'Laptop TeRKEREN ANJASSS',
        price: 'Rp. 13.000.00',
        img: '../images/laptop-3.png',
    },
   
    {
        name: 'Unyil    B94 - BBD',
        deskripsi: 'Laptop Terbaik ANJAYYYYYYYad Raya',
        price: 'Rp. 31.200.00',
        img: '../images/laptop-4.png',
    },
   
    {
        name: 'Unyil A44 - BBE',
        deskripsi: 'Laptop Terbaik SAKU SUKA MILFaya',
        price: 'Rp. 1.000.00',
        img: '../images/laptop-5.png',
    },
   
]

let nomor = 0
let maksimalLaptop = DaLap.length
let selected = {
    name: 'Unyil A94 - BBA',
        deskripsi: 'Laptop Terbaik Seantero Jagad Raya',
        img: '../images/acer-1.png',
}


const previous = document.querySelector('#previousButton')
const next = document.querySelector('nextButton')

previousButton.addEventListener('click', function(){
    
    if (nomor >= maksimalLaptop - 1) {
        nomor = 0;
    }else{
        nomor--
    }
    selected = DaLap[nomor]
    showData()
    console.log(selected)
})
nextButton.addEventListener('click', function(){
    
    if (nomor >= maksimalLaptop) {
        nomor = 0;
    }else{
        nomor++
    }
    selected = DaLap[nomor]
    showData()
    console.log(selected)
})

let namaLaptop = document.querySelector('#nama-laptop')
let deskripsiLaptop = document.querySelector('#deskripsi-laptop')
let hargaLaptop = document.querySelector('#harga-laptop')
let nomorLaptop = document.querySelector('#nomor-laptop')
let maxLaptop = document.querySelector('#max-laptop')
let gambarLaptop = document.querySelector('#gambar-laptop')


function showData(){
    namaLaptop.innerText = selected.name
    deskripsiLaptop.innerText = selected.deskripsi
    gambarLaptop.src = selected.img
}

showData()
