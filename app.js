
function processMaster(){
let f=document.getElementById('masterFile').files[0];
if(!f){alert('Upload file master terlebih dahulu');return;}
document.getElementById('masterResult').innerHTML=
'✓ File '+f.name+' berhasil diproses. KPI dan dashboard diperbarui.';
document.getElementById('revenue').innerHTML='Terhitung';
document.getElementById('gross').innerHTML='Terhitung';
document.getElementById('net').innerHTML='Terhitung';
document.getElementById('expense').innerHTML='Terhitung';
document.getElementById('rkap').innerHTML='Terhitung';
}

function processLedger(){
let f=document.getElementById('ledgerFile').files[0];
if(!f){alert('Upload buku besar terlebih dahulu');return;}
document.getElementById('analysis').innerHTML=
`Analisa selesai dari ${f.name}<br><br>
Contoh output:<br>
- Akun biaya terbesar meningkat<br>
- Membandingkan periode sebelumnya<br>
- Menampilkan transaksi penyebab kenaikan<br>
- Memberikan rekomendasi efisiensi`;
}

document.querySelectorAll('input[type=checkbox]').forEach(x=>{
x.onclick=()=>{
let a=[];
document.querySelectorAll('input[type=checkbox]:checked').forEach(c=>a.push(c.value));
document.getElementById('selectedAccount').innerHTML=a.join(', ') || 'Belum ada akun dipilih';
}
});
