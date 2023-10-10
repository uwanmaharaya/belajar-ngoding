let total_in_day = 0;
let total_in_room = 0;
let antrian = 0;
const hour_start = 8;
const hour_end = 18;

function update_total_in_day(){
    total_in_day = total_in_day + 1
}

function update_total_in_room(){
    total_in_room = total_in_room + 1
}


function update_queue(queue){
    if (queue=="out"){
        update_total_in_room()
        antrian = antrian - 1
       
    } else if (queue=="in"){
        antrian = antrian + 1
    } 
}

function exit_room() {
    total_in_room = total_in_room - total_in_room - 1
    update_queue("out")
    alert("terimakasih")
}

function cek_antrian() {
    if (antrian <= 0){
        console.log("antrian habis")
    }
    else{
        console.log("ada antrian   " + antrian)
    }
}


function hour_in(hour){
    //cek apakah klinik buka atau tutup
    if (hour >= 8 && hour <=18) {
    alert("silahkan masuk klinik")
    
    //cek apakah kuota harian masih ada atau penuh
    if (total_in_day < 100){
            update_total_in_day()
            alert("silahkan masuk ruangan pemeriksaan")
           

                //cek apakah ruangan sudah penuh atau belum
                if (total_in_room < 5){
                    update_total_in_room()
                    alert("silahkan")
                    
                } else {
                    console.log("Ruangan melebihi kapasitas harap menunggu")
                    //update antrian
                    update_queue("in")
                    return
                        

                }

        } else {
            alert("Maaf Klinik telah mencapai batas maksimal pasien harian")
        }
    } else {    
        alert("Klinik Tutup")
    }
}
