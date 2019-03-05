import $ from 'jquery';
export function NguoiDung(taiKhoan,matKhau,hoTen,email,soDT,mlnd){
    this.TaiKhoan = taiKhoan;
    this.MatKhau = matKhau;
    this.HoTen = hoTen;
    this.Email = email;
    this.SoDT = soDT;
    this.MaLoaiNguoiDung = mlnd;
}
var hoTen = 5;

module.exports = {
    ND : NguoiDung,
    ht : hoTen
}
