import $ from 'jquery';
import Swal from 'sweetalert2';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'popper.js';
import 'bootstrap';


//Import kiểu 1
import '../css/chitiet.css'
//Import kiểu 2
import {NguoiDung,hoTen} from '../models/nguoidung';
//Import kiểu 3
import TuDat from '../models/nguoidung'  //TuDat ngầm hiểu là object đã tạo bên nguoidung.js

TuDat.ht //lấy hoTen bên nguoidung.js

Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )

function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();