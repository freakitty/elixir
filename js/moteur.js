/*global $, jQuery*/

$(function () {
    'use strict';
    $(window).scroll(function () {
        $('#aloe1').css({'top': function (index, value) {return -31 - $(window).scrollTop() * 0.7; }});
        $('#aloe2').css({'top': function (index, value) {return 500 - $(window).scrollTop() * 0.4; }});
        $('#aloe3').css({'top': function (index, value) {return 1000 - $(window).scrollTop() * 0.7; }});
        $('#aloe4').css({'top': function (index, value) {return 2000 - $(window).scrollTop() * 0.2; }});
        $('#aloe5').css({'top': function (index, value) {return 2900 - $(window).scrollTop() * 0.7; }});
        $('#aloe6').css({'top': function (index, vaslue) {return 3300 - $(window).scrollTop() * 0.1; }});
    });
    $('#concept').parallax("center", "0.1");
    $('#produit').parallax("center", "0.2");
    $('#lieux').parallax("center", "0.1");
    $('#informations').parallax("center", "0.2");
});