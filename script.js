function cetakStruk() {
  let baju = parseInt(document.getElementById("baju").value) || 0;
  let sepatu = parseInt(document.getElementById("sepatu").value) || 0;
  let bedcover = parseInt(document.getElementById("bedcover").value) || 0;

  let tglMasuk = document.getElementById("tglMasuk").value;
  let tglSelesai = document.getElementById("tglSelesai").value;
  let pembayaran = document.getElementById("pembayaran").value;

  // Harga
  const hargaBaju = 7000;
  const hargaSepatu = 14000;
  const hargaBedcover = 30000;

  // Hitung total
  let totalBaju = baju * hargaBaju;
  let totalSepatu = sepatu * hargaSepatu;
  let totalBedcover = bedcover * hargaBedcover;
  let total = totalBaju + totalSepatu + totalBedcover;

  if (total === 0) {
    alert("Masukkan minimal 1 kategori laundry!");
    return;
  }

  // Tampilkan struk
  let strukDiv = document.getElementById("struk");
  strukDiv.style.display = "block";

  strukDiv.innerHTML = `
    <h3>Struk Laundry Ridho</h3>
    <p><strong>Tanggal Masuk:</strong> ${tglMasuk}</p>
    <p><strong>Tanggal Selesai:</strong> ${tglSelesai}</p>
    <hr>
    <p>Baju: ${baju} kg = Rp ${totalBaju.toLocaleString()}</p>
    <p>Sepatu: ${sepatu} pasang = Rp ${totalSepatu.toLocaleString()}</p>
    <p>Bed Cover: ${bedcover} set = Rp ${totalBedcover.toLocaleString()}</p>
    <hr>
    <p><strong>Total Bayar:</strong> Rp ${total.toLocaleString()}</p>
    <p><strong>Metode Pembayaran:</strong> ${pembayaran}</p>
    <p><em>Terima kasih sudah menggunakan Laundry Ridho!</em></p>
  `;
}
