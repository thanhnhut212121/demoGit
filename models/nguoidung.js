// import $ from 'jQuery';
export function NguoiDung(taiKhoan,matKhau,hoTen,email,soDT,mlnd){
    this.TaiKhoan = taiKhoan;
    this.MatKhau = matKhau;
    this.HoTen = hoTen;
    this.Email = email;
    this.SoDT = soDT;
    this.MaLoaiNguoiDung = mlnd;
}

export var hoTen = 5;

//export những gì từ file này nguoidung.js
module.exports =  
    ND = NguoiDung;
    ht = hoTen;