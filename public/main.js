// console.info('Hi Ridzi');

// void = tidak mereturn sesuatu

// Menangkap element form dengan id = login_form
let login_form = document.getElementById('login_form');

// Tambahkan eventlistener di button submit
login_form.addEventListener('submit', function (event) {
  // stop browser to reload page
  event.preventDefault();

  // console.info(event.target.email.value);

  let input_email = event.target.email.value;
  let input_password = event.target.password.value;

  let my_email = 'rid@gmail.com';
  let my_password = '123123';

  if (input_email != my_email) {
    alert('Email belum terdaftar');
    return; // akan menghentikan proses code di bawahnya
  }

  if (input_password != my_password) {
    alert('Password salah');
    return;
  }

  alert('Login Berhasil');
});
