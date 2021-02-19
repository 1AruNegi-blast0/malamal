"use strict";$(document).ready(function(){$('.AH_CancelRatingPopup').click(function(){$('#npsRatingPopup').addClass('hide');if(IB.globals.page=='order_history'){try{sessionStorage.setItem('nps_rating_rejected','true');}catch(e){console.log('not able to store data in sessionStorage',e);}}})
function AjaxRating(rating,index,has_rejected){var rejected_list=[];if(!index){index=0;}
$.ajax({url:'/nps-rating/',type:"POST",data:{btn_val:rating,order_item_id:IB.globals.ratingOrderItems[index].id,user_email:IB.globals.auth_user_email,has_rejected:has_rejected?1:0,rejected_list:rejected_list,csrfmiddlewaretoken:getCookie('csrftoken'),source:IB.globals.page=='order_history'?'desktop_order_history':'desktop_popup'},success:function(response){},error:function(response){},});}
$('.AH_rating').click(function(){var index=parseInt($('.AH_RatingOrderIndex').val());AjaxRating($(this).text(),index,0);if(index+1<IB.globals.ratingOrderItems.length){createRatingPopup(index+1);$('.AH_NpsMainHeading').addClass('hide');$('.AH_NpsThanksHeading').removeClass('hide');}
else{$('.AH_CustomerRatingTmpl').addClass('hide');$('.AH_RatingThankuTmpl').removeClass('hide');$('#npsRatingPopup').addClass('hide');setTimeout(function(){$('.AH_RatingThankuTmpl').addClass('hide');},2000);}})
function createRatingPopup(index){$('.AH_OrderTitle').text(IB.globals.ratingOrderItems[index].title);$('.AH_RatingOrderIndex').val(index);}
$('.AH_CloseThankuPopup').click(function(){$('.AH_RatingThankuTmpl').addClass('hide');})});