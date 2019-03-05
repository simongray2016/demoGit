//import kiểu 2
import {NguoiDung} from '../models/nguoidung';

import $ from 'jquery';
//import kiểu 3
import nguoiDung from '../models/nguoidung';
import Swal from 'sweetalert2';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
//import kiểu 1
import '../css/chitiet.css';
function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool'
});