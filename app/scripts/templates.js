define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/hotel.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row hotel">\n\t<div class="coffee-span-3 imageHotel"><img class="image-4-3 hotel" src="img/image-1.svg" alt="Image">\n\t</div>\n\t<div class="coffee-span-8 characteristics">\n\t\t<a class="link-text hotel-title" href="#" title="' +
((__t = (name)) == null ? '' : __t) +
'">' +
((__t = (name)) == null ? '' : __t) +
'</a>\n\t\t<span class="text-element text-1">' +
((__t = (address)) == null ? '' : __t) +
'<br></span>\n\t\t<a class="link-text verMapa" href="#" title="ver mapa">Ver mapa<br></a>\n\t</div>\n\t<div class="coffee-span-4 comunity">\n\t\t<span class="text-element text-2">' +
((__t = ( description)) == null ? '' : __t) +
'</span>\n\t\t<span class="text-element text-3">' +
((__t = ( rating)) == null ? '' : __t) +
' puntos<br></span>\n\t\t<a class="link-text text-link-2" href="#">' +
((__t = ( comments)) == null ? '' : __t) +
' comentarios</a>\n\t</div>\n\t<div class="coffee-span-4 price">\n\t\t<span class="text-element text-4">Desde</span>\n\t\t<span class="text-element text-5">U$S ' +
((__t = ( price )) == null ? '' : __t) +
'<br></span>\n\t\t<img data-interactive="disponibilidad" data-from="' +
((__t = ( availability.from)) == null ? '' : __t) +
'" data-to="' +
((__t = ( availability.to)) == null ? '' : __t) +
'" class="image-4-1 disponible" src="img/image-4x2.svg" alt="Image"/>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/modal.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-dialog modal-sm">\r\n    <div class="modal-content" data-interactive="modal-content">\r\n    N Noches - del ' +
((__t = (from)) == null ? '' : __t) +
' hasta el ' +
((__t = (to)) == null ? '' : __t) +
'\r\n    </div>\r\n</div>';

}
return __p
};

  return this["JST"];

});