/*
Bài Tập 1: 
Viết chương trình tính tiền lương nhân viên: lương 1 ngày 100.000, cho người dùng nhập vào số ngày làm.In ra tiền lương nhân viên
*/

document.querySelector(".btn-success").onclick = function () {
  // input: tienLuong1Ngay, soNgayLam
  let tienLuong1Ngay = document.getElementById("tienLuong1Ngay").value;
  let soNgayLam = document.getElementById("soNgayLam").value;

  // Kiểm tra input
  // console.log('Tiền Lương 1 Ngày =', tienLuong1Ngay);
  // console.log('Số Ngày Làm =', soNgayLam);

  // output tongLuong: number
  let tongLuong = 0;
  tongLuong = tienLuong1Ngay * soNgayLam;
  // console.log('Tổng Lương =', tongLuong);
  document.getElementById("tongLuong").innerHTML = tongLuong.toLocaleString();
};
/* 
Bài Tập 2:
Viết chương trình nhập vào 5 sô thực. Tính giá trị trung bình(tổng của 5 số thực chia cho 5) của 5 số thực này và xuất ra màn hình
*/

document.querySelector(".btn-danger").onclick = function () {
  // input: nhap5SoThuc
  let soThuc1 = document.getElementById("soThuc1").value * 1;
  let soThuc2 = document.getElementById("soThuc2").value * 1;
  let soThuc3 = document.getElementById("soThuc3").value * 1;
  let soThuc4 = document.getElementById("soThuc4").value * 1;
  let soThuc5 = document.getElementById("soThuc5").value * 1;

  // Kiểm tra input
  // console.log(nhapSoThuc);

  // output tinhGiaTri: number
  let tinhGiaTriTB = 0;
  tinhGiaTriTB = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
  // console.log(tinhGiaTriTB);

  let result =
    "<div class= 'alert alert-success mt-3 w-25'>Kết quả là:" +
    tinhGiaTriTB +
    "</div>";
  document.getElementById("ketQua1").innerHTML = result;
};

/**
 * Bài tập 3: Viết chương trình cho người dùng nhập vào số tiền usd. Tính và xuất ra số tiền sau quy đổi vnd
 */

document.querySelector(".btn-primary").onclick = function () {
  console.log("Tôi đã bị click");
  //input
  let giaUSD = 23500;
  let soTien = document.getElementById("soTien").value * 1;
  // xử lý
  let thanhTien = 0;
  thanhTien = soTien * giaUSD;
  let tienTe = thanhTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  // output

  let result = `
    <div class="alert alert-success w-25 mt-3">
        <p>Quy đổi thành tiền VND: ${tienTe} </p>
  `;
  document.getElementById("ketQua2").innerHTML = result;
};

/**
 * Bài tập 4: Viết chương trình nhập vào chiều dài và chiều rộng hình chữ nhật. Tính và xuất ra chu vi và diện tích hcn đó
 */

document.querySelector(".btn-warning").onclick = function () {
  console.log("Tôi đã bị click");
  //input
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  console.log(chieuDai);
  console.log(chieuRong);
  // xử lý
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;

  // output
  let result = `
        <div class="alert alert-primary w-25 mt-3">
            <p>Chu vi hình chữ nhật: ${chuVi}</p>
            <p>Diện tích hình chữ nhật: ${dienTich}</p>
        </div>
    `;
  document.getElementById("showInfoTinh").innerHTML = result;
};

/**
 * Bài tập 5: Viết chương trình nhập vào 1 số có 2 chữ số (vd: 12,44,83). Tính tổng 2 ký số đó
 * VD: 12 ==> Tổng là 1+2 = 3
 * VD: 44 ==> Tổng là 4+4 = 8
 */

document.querySelector(".btn-light").onclick = function () {
  console.log("Tôi đã bị click");
  // input
  let soNhapVao = document.getElementById("nhapSo2ChuSo").value * 1;
  // xử lý
  let soHangDonVi = 0;
  let soHangChuc = 0;
  if (10 <= soNhapVao && soNhapVao <= 99) {
    soHangDonVi = soNhapVao % 10;
    soHangChuc = Math.floor(soNhapVao / 10);
  } else {
    console.log("Nhập sai!");
  }
  let ketQua3 = soHangDonVi + soHangChuc;
  //output
  let result = `
        <div class="alert alert-danger w-25 mt-3">
            <p>Tổng 2 ký số: ${ketQua3}</p>
        </div>
    `;
  document.getElementById("showInfoTong").innerHTML = result;
};
