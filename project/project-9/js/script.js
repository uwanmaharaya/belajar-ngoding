let nama = '';
let password = '';
let nama_log = simpan_data();

function simpan_data() {
  nama = document.getElementById('username').value;
  password = document.getElementById('password').value;
}

function hapus_data() {
  nama = '';
  password = '';
}

function register() {
  let register_nama = document.getElementById('username').value;
  let register_password = document.getElementById('password').value;
  if (nama != '' && password != '') {
    alert('data sudah ada, silahkan login');
  } else {
    if (register_nama == '' || register_password == '') {
      alert('Mohon masukan data');
    } else {
      simpan_data();
    }
  }
}

function login() {
  let login_nama = document.getElementById('username').value;
  let login_password = document.getElementById('password').value;
  if (nama == login_nama && password == login_password) {
    alert('login sukses');
  } else {
    alert('login gagal');
  }
}

function logout() {
  if (nama == '' && password == '') {
    alert('anda belum login');
  } else {
    hapus_data();
    alert('anda telah logout');
  }
}
