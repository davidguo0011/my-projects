//hamburger menu, toggle class onclick
$('#hamberger-menu').click(function () {
  $('#hamberger-menu > div').toggleClass('active');
  $('.nav-container').toggleClass('active');
});

//enquiry form 
$(".enquiry input[type='submit']").click(function(event){
  event.preventDefault()
  //get input field value
  var name = $(this).parent().find("input[type = 'text']").val()
  var email = $(this).parent().find("input[type = 'email']").val()
  var phone = $(this).parent().find("input[type = 'phone']").val()
  var text = $(this).parent().find("textarea").val()
  //check whether each field have contents
  if (name == ""){
    $(".enquiry input[type = 'text']").css("border","2px solid coral")
  }else{
    $(".enquiry input[type = 'text']").css("border","2px solid ivory")
  }
  if(email == ""){
    $(".enquiry input[type = 'email']").css("border","2px solid coral")
  }else{
    $(".enquiry input[type = 'email']").css("border","2px solid ivory")
  }
  if (phone == ""){
    $(".enquiry input[type = 'phone']").css("border","2px solid coral")
  }else{
    $(".enquiry input[type = 'phone']").css("border","2px solid ivory")
  }
  if (text == ""){
    $(".enquiry textarea").css("border","2px solid coral")
  }else{
    $(".enquiry textarea").css("border","2px solid ivory")
  }
  //if they all have contents, popup submit message, change button border and text, change back to default in 3.5s 
  if (name != "" && email != "" && phone != "" && text != ""){
    $(".enquiry input").val("")
    $(".enquiry textarea").val("")
    submit_message()
    $(this).val('Submited, we will contact you soon.')
    $(this).addClass("submit")
    setTimeout(function(){
      $(".enquiry input[type='submit']").val('Submit')
      $(".enquiry input[type='submit']").removeClass("submit")
    },3500)
  }else{
    //if not, popup error message
    error_popup_message("Please complete your enquiry")
  }
})

//Activity form check
$("#book_activities input[type='submit']").click(function(event){
  event.preventDefault()
  //get values from input fields
  var name = $("#personal_details input[type='text']").val()
  var phone = $("#personal_details input[type='phone']").val()
  var email = $("#personal_details input[type='email']").val()
  var input = $("#activity-list").children().length
  //check whether personal details are entered, if not, popup message
  if (check_personal_details(name,email,phone)){
    //if there is something in the table, submission is permitted,  
    if (input>0){
      //on submission: remove table, clear input field, pop-submit message, change button appearnace 
      $('#activity-list tr').remove()
      clear_activity_field()
      calculate_cost()
      submit_message()
      $('#add_to_cart').text("Add To Cart")
      $(this).val('Submited');
      $(this).addClass("submit");
      setTimeout(function(){
        $("#book_activities input[type='submit']").val('Submit');
        $("#book_activities input[type='submit']").removeClass("submit");
      },2000)
    }else{
      error_popup_message("Please add items")
    }
  }
})
//add item
$("#add_to_cart").click(function(event){
  event.preventDefault()
  //get all input fields value
  var activities = $("#activity option:selected ").text()
  var child = $("#number-of-child").val()
  var adult = $("#number-of-adult").val()
  var date = $("#date").val()
  var time = $("#time").val()
  //check if they are all filled in, if not pop error message
  if (activities != "" &&  date != "" && time != "" && adult != "" && child != "" ){
    //tickets number must be greater than 0
    if (parseInt(adult)>=0 && parseInt(child) >=0){
      //one of adult or child tickets numebr must be greater than 0
      if (parseInt(adult)>0 || parseInt(child)>0){
        //clear input field, add items, calculate cost, change add to cart button text
        clear_activity_field()
        add_items(activities,adult,child,date,time)
        calculate_cost()
        $('#add_to_cart').text("Add More To Cart")
      }else{
        error_popup_message("Incorrect number of tickets")
      }
    }else{
      error_popup_message("Incorrect number of tickets")
    }
  }else{
    error_popup_message("Please comlete activities information")
  }
})
//delete item
$('#activity-list').click(function(event){
  //get the trash bin icon
  if(event.target.parentElement.getAttribute('id') === "delete"){
    //remove the current item <tr>
    event.target.parentElement.parentElement.remove()
    calculate_cost()
    $(".remove-message").css("display","block")
    setTimeout(function(){
      $(".remove-message").css("display","none")
    },2000)
  }
})
//Hotel form check
var availability = false
$("#book_hotels input[type='submit']").click(function(event){
  event.preventDefault()
  var complete = true
  //get personal detail value
  var name = $("#personal_details input[type='text']").val()
  var phone = $("#personal_details input[type='phone']").val()
  var email = $("#personal_details input[type='email']").val()
  //get hotel input field value
  var input = $("#book_hotels section").find("input")
  //check if all input field is filled out, if not, set var complete to false
  for (var i = 0; i<input.length; i++){
    if (input[i].value == ""){
      complete = false
    }
  }
  //check personal detail
  if (check_personal_details(name,email,phone)){
    //check availability, if not, ask user to check availability 
    if(availability){
      //check if complete is true = all input field is filled out, if not ask user to fill out the form properly
      if(complete){
        //clear input field, popup submit message, change button appearance
        clear_hotel_field()
        submit_message()
        $(this).val('Submited');
        $(this).addClass("submit");
        setTimeout(function(){
          $("#book_hotels input[type='submit']").val('Submit');
          $("#book_hotels input[type='submit']").removeClass("submit");
        },2000)
      }else{
        error_popup_message("Please comlete your hotel information")
      }
    }else{
      error_popup_message("Please check availability")
    }
  }
})
//check availability button
$("#check-availability").click(function(){
  //check if all input field is filled out
  var complete = true
  var input = $("#book_hotels section").find("input")
  for (var i = 0; i<input.length; i++){
    if (input[i].value == ""){
      complete = false
    }
  }
  //if filled out, change the appearance of the button, else pop error message
  if (complete){
    $(this).text('Available');
    $(this).addClass("submit");
    setTimeout(function(){
      $("#check-availability").text('Check Availability');
      $("#check-availability").removeClass("submit");
    },2000)
    availability = true
  }else{
    error_popup_message("Please comlete your hotel information")
  }
})

function clear_activity_field(){
  $('#book_activities section input').val("")
}
function clear_hotel_field(){
  $('#book_hotels section input').val("")
}
function submit_message(){
  $(".submit-message").css("display","block")
  setTimeout(function(){
    $(".submit-message").css("display","none")
  },2000)
}
function error_popup_message(text){
  $(".error-popup-message").text(text)
  $(".error-popup-message").css("display","block")
  setTimeout(function(){
    $(".error-popup-message").text("")
    $(".error-popup-message").css("display","none")
  },2000)
}

//add HTML to the table 
function add_items(activities,adult_ticket,child_ticket,date,time){
  const table = document.getElementById('activity-list');
  // Create tr element
  const item = document.createElement('tr');
  // Insert cols
  item.innerHTML = `
    <td>${activities}</td>
    <td>${date}</td>
    <td>${time}</td>
    <td>${adult_ticket}</td>
    <td>${child_ticket}</td>
    <td id = "delete" class="border-none"><i class="fas fa-trash-alt"></i></td>
  `;
  table.appendChild(item);
  //popup item added message
  $(".add-message").css("display","block")
  setTimeout(function(){
    $(".add-message").css("display","none")
  },2000)
}

//calculate total cost of multiple activities with arbitrary number of tickets
function calculate_cost(){
  /*swim with marine life adult:40 child:20
    visit Atlantis museum adult:60 child:30
    swim with mermaid adult:70 child:35
   */
  total = 0
  var input = $("#activity-list").children()
  //calculate the cost of each activity
  function calculation(i, adult_price, child_price){
    var adult_ticket = parseInt(input[i].children[3].innerText)
    var child_ticket = parseInt(input[i].children[4].innerText)
    return adult_ticket*adult_price + child_ticket*child_price
  }
  //get all activities in the table, calculate the cost of each activity, add all cost to the total
  for(var i=0; i<input.length; i++){
    var activity = input[i].children[0].innerText
    if (activity === "Swim with mermaid"){ 
      total += calculation(i,70,35)
    }else if(activity === "Swim with marine lifes"){
      total += calculation(i, 40, 20)
    }else if(activity === "Visit Atlantis Museum"){
      total += calculation(i, 60, 30)
    }
  }
  //display total
  $('#price span').text(total)
}

function check_personal_details(name,email,phone){
  //which ever field is empty, give it a red border and display the error message
  if (name == ""){
    $("#personal_details input[type = 'text']").css("border","2px solid  rgb(250, 92, 92)")
    $(".error-message1").css("opacity","100")
    setTimeout(function(){
      $("#personal_details input[type = 'text']").css("border","2px solid ivory")
      $(".error-message1").css("opacity","0")
    },5000)
  }
  if(email == ""){
    $("#personal_details input[type = 'email']").css("border","2px solid  rgb(250, 92, 92)")
    $(".error-message3").css("opacity","100")
    setTimeout(function(){
      $("#personal_details input[type = 'email']").css("border","2px solid ivory")
      $(".error-message3").css("opacity","0")
    },5000)
  }
  if (phone == ""){
    $("#personal_details input[type = 'phone']").css("border","2px solid  rgb(250, 92, 92)")
    $(".error-message2").css("opacity","100")
    setTimeout(function(){
      $("#personal_details input[type = 'phone']").css("border","2px solid ivory")
      $(".error-message2").css("opacity","0")
    },5000)
  }
  //if all filled in, return True, else pop error message
  if(name != "" && email !="" && phone !=""){
    return true
  }else{
    error_popup_message("Please enter your personal details")
  }
}

//scroll button
var y = $(window).scrollTop();
$('#scroll-down .scroll-down-btn').click(function () {
  $('html, body').animate({ scrollTop: y + 600 });
});
//Khullar, Y.(2015) https://stackoverflow.com/questions/2659354/jquery-scroll-down-page-a-set-increment-in-pixels-on-click

//slide show
var slideIndex = 0;
$('.slide-left').click(function () {
  var images = $(this).parent().find('.my-slides');
  //decrement number by one from 2 to 0
  if (slideIndex > 0) {
    slideIndex -= 1;
  } else {
    slideIndex = 2;
  }
  //execute slideshow function
  slideshow(images);
});
$('.slide-right').click(function () {
  var images = $(this).parent().find('.my-slides');
  //increment number by one from 0 to 2
  if (slideIndex < 2) {
    slideIndex += 1;
  } else {
    slideIndex = 0;
  }
  //execute slideshow function
  slideshow(images);
});
function slideshow(images) {
  //remove all images with active class
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  //add an active class to the image at the current slideIndex
  images[slideIndex].classList.add('active');
}



//google map
function initMap() {
  var atlantis = { lat: -25.344, lng: 131.036 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: atlantis,
  });
  var marker = new google.maps.Marker({ position: atlantis, map: map });
}



