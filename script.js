// ===================================
// Data Stok Mobil
// ===================================
const dataStokMobil = [
    { 
        merek: 'Porsche', 
        model: '911 Turbo S PDK', 
        tahun: 2022, 
        harga: 'Rp 3.491.000.000', 
        km: 'New Car', 
        tag: 'BARU DATANG',
        gambar: 'https://imgx.gridoto.com/crop/0x77:1600x1066/360x0/photo/2021/04/22/6ffec990-topcar-stinger-gtr-whit-20210422082053.jpg'
    },
    { 
        merek: 'Ferrari', 
        model: '458', 
        tahun: 2015, 
        harga: 'Rp 4.990.000.000', 
        km: '40.000 Km', 
        tag: 'Limited Edition',
        gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7TU8sR8FuXPBWpwcdIXKwlhQ3y2W7p9B6A&s' 
    },
    { 
        merek: 'Koenigsegg', 
        model: 'Jesko Attack', 
        tahun: 2021, 
        harga: 'Rp 56.000.000.000', 
        km: '20.000 Km', 
        tag: 'Only One in Indonesian',
        gambar: 'https://beritajatim.com/wp-content/uploads/2025/05/11zon_resized-18-1.jpeg' 
    },
    { 
        merek: 'Toyota', 
        model: 'Innova Reborn G', 
        tahun: 2018, 
        harga: 'Rp 250.000.000', 
        km: '65.000 Km', 
        tag: 'BEST SELLER',
        gambar: 'https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2021/03/01/toyota-kijang-innova-reborn-2018-20210301053724.jpg' 
    },
    { 
        merek: 'Honda', 
        model: 'Brio RS CVT', 
        tahun: 2020, 
        harga: 'Rp 165.000.000', 
        km: '25.000 Km', 
        tag: 'READY',
        gambar: 'https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/08/21/honda-brio-rs-2020jpg-20230821031336.jpg' 
    },
    // Tambahkan data mobil lain di sini...
];

// Fungsi untuk me-render (menampilkan) semua stok mobil ke HTML
function renderAllStokMobil() {
    const gridElement = document.getElementById('stokMobilGrid');
    
    if (!gridElement) return; 
    
    if (dataStokMobil.length === 0) {
        document.getElementById('stok-kosong-pesan').style.display = 'block';
        return;
    }
    
    gridElement.innerHTML = ''; 
    
    dataStokMobil.forEach(mobil => {
        const tagClass = mobil.tag.toLowerCase().replace(/\s/g, '-'); 
        
        const cardHTML = `
            <div class="car-card">
                <img src="${mobil.gambar}" alt="${mobil.merek} ${mobil.model}">
                <div class="car-info">
                    <span class="tag ${tagClass}">${mobil.tag}</span>
                    <h3>${mobil.merek} ${mobil.model} ${mobil.tahun}</h3>
                    <p class="car-spec">
                        <i class="fas fa-calendar-alt"></i> ${mobil.tahun} | <i class="fas fa-tachometer-alt"></i> ${mobil.km}
                    </p>
                    <p class="price">${mobil.harga}</p>
                    <a href="detail-mobil.html?model=${mobil.model}" class="btn btn-detail">Detail Mobil</a>
                </div>
            </div>
        `;
        gridElement.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Fungsi dummy untuk Berita (Anda bisa mengembangkannya nanti)
function renderAllBerita() {
    // Logika render berita akan ditaruh di sini jika elemen beritaGrid ada
}


// ===================================
// Panggil semua fungsi saat DOM Content dimuat
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Logika Navigasi (Hamburger Menu)
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Logika Menampilkan Konten
    // Jika elemen stokMobilGrid ada, fungsi render stok akan dipanggil secara otomatis
    if (document.getElementById('stokMobilGrid')) {
        renderAllStokMobil();
    }
    
    if (document.getElementById('beritaGrid')) {
        renderAllBerita();
    }
});