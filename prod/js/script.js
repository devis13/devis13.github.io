var writeUs_btn=document.querySelector(".contacts__btn"),modal_writeUs=document.querySelector(".modal-writeUs__wrap"),writeUs_close_btn=document.querySelector(".modal-writeUs__close-btn"),map_link=document.querySelector(".contacts__link-map"),modal_map=document.querySelector(".modal-map__wrap"),map_close_btn=document.querySelector(".modal-map__close-btn"),delivery_item=document.querySelector(".services__item--delivery"),garantee_item=document.querySelector(".services__item--guarantee"),credit_item=document.querySelector(".services__item--credit"),delivery_section=document.querySelector(".services__elem--delivery"),garantee_section=document.querySelector(".services__elem--guarantee"),credit_section=document.querySelector(".services__elem--credit");writeUs_btn.addEventListener("click",function(e){e.preventDefault(),modal_writeUs.classList.add("modal-open")}),writeUs_close_btn.addEventListener("click",function(e){e.preventDefault(),modal_writeUs.classList.remove("modal-open")}),map_link.addEventListener("click",function(e){e.preventDefault(),modal_map.classList.add("modal-open")}),map_close_btn.addEventListener("click",function(e){e.preventDefault(),modal_map.classList.remove("modal-open")}),$(document).ready(function(){$(".slider-banner").slick({variableWidth:!1,dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,draggable:!1})}),delivery_item.addEventListener("click",function(e){e.preventDefault(),delivery_item.classList.add("services__item--active"),delivery_section.classList.add("services__elem--active"),garantee_item.classList.remove("services__item--active"),garantee_section.classList.remove("services__elem--active"),credit_item.classList.remove("services__item--active"),credit_section.classList.remove("services__elem--active")}),garantee_item.addEventListener("click",function(e){e.preventDefault(),garantee_item.classList.add("services__item--active"),garantee_section.classList.add("services__elem--active"),delivery_item.classList.remove("services__item--active"),delivery_section.classList.remove("services__elem--active"),credit_item.classList.remove("services__item--active"),credit_section.classList.remove("services__elem--active")}),credit_item.addEventListener("click",function(e){e.preventDefault(),credit_item.classList.add("services__item--active"),credit_section.classList.add("services__elem--active"),garantee_item.classList.remove("services__item--active"),garantee_section.classList.remove("services__elem--active"),delivery_item.classList.remove("services__item--active"),delivery_section.classList.remove("services__elem--active")});