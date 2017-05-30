function nav_button_color(){

  var button_color = Math.random();

  if (button_color <= .25) {
    $(".arrow_button").css({'background' : 'red'});
  }
  if (button_color > .25 && button_color <= .5) {
    $(".arrow_button").css({'background' : 'rgb(71, 141, 255)'});
  }
  if (button_color > .5 && button_color <= .75) {
    $(".arrow_button").css({'background' : 'rgb(59, 206, 128)'});
  }
  if (button_color > .75 && button_color <= 1) {
    $(".arrow_button").css({'background' : 'yellow'});
  }

}


function change_sections(){

  //name, title and picture are in at the beginning

  $('.arrow_button').on("click", function(){
    if ($('.myName').hasClass('name_enter')){

      $('.myName').toggleClass('name_enter name_leave');
      $('.myTitle').toggleClass('MT_in MT_out');
      //name and title leave, but picture stays


      //all cover letter components enter
      $('.coverLetter').toggleClass('CL_out CL_in');
      $('.CL_title').toggleClass('CL_title_out CL_title_in');
      $('.letterBody').toggleClass('letterBody_in letterBody_out');


    }

    else if ($('.coverLetter').hasClass('CL_in')) {

      $('.myFace').toggleClass('pic_enter pic_leave');
      //picture leaves

      $('.CL_title').toggleClass('CL_title_out CL_title_in');
      $('.letterBody').toggleClass('letterBody_in letterBody_out');
      setTimeout(function() {
        $('.coverLetter').toggleClass('CL_in CL_out');
      }, 600);
      //all cover letter components leave and entire cover letter
      //container is set to display: none


      setTimeout(function() {
        $('.edu_exp').toggleClass('edu_exp_in edu_exp_out');
        $('.title_card').toggleClass('title_card_in cards_out');
        $('.card_holder').toggleClass('cards_out cards_in');
      }, 200);

      //all education and experience components enter

    }

    else if ($('.edu_exp').hasClass('edu_exp_in')) {

      $('.title_card').toggleClass('cards_out title_card_in');
      $('.card_holder').toggleClass('cards_out cards_in');
      setTimeout(function() {
        $('.edu_exp').toggleClass('edu_exp_out edu_exp_in');
      }, 420);

      //all education and experience components leaves and their
      //container is set to display: none

      $('.projects').toggleClass('projects_in projects_out');
      $('.my_website').toggleClass('my_website_in');
      $('.nicumoms').toggleClass('nicumoms_in');
      $('.twilight_ride').toggleClass('tr_in');

      //all project components enter, each with their own specific
      //animation

      setTimeout(function() {
        $('.project_bubble').toggleClass('interactive_bubble');
        //all project bubbles are given then bounce animations
        //property on hover after the enter animations finish
        //to avoid accidental overlap

        $('.my_website').removeClass('my_website_in');
        $('.nicumoms').removeClass('nicumoms_in');
        $('.twilight_ride').removeClass('tr_in');
        //initial animation classes removed
      }, 505);


    }


    else if ($('.projects').hasClass('projects_in')) {

      $('.projects').toggleClass('projects_in projects_exit');
      $('.project_bubble').removeClass('interactive_bubble');
      setTimeout(function() {
        $('.projects').toggleClass('projects_out projects_exit');
      }, 1000);

      //all projects components exit and loop resets

      $('.myFace').toggleClass('pic_enter pic_leave');
      $('.myName').toggleClass('name_enter name_leave');
      $('.myTitle').toggleClass('MT_in MT_out');

    }
  });

}


function projectOverlay(){
  $('.my_website').on("click", function(){
      $('.project_overlay').addClass('project_overlay_in');

      $('.my_website_info').css({'display' : 'block'});
      $('.nicumoms_info').css({'display' : 'none'});
      $('.twilight_ride_info').css({'display' : 'none'});
  });

  $('.nicumoms').on("click", function(){
      $('.project_overlay').addClass('project_overlay_in');

      $('.my_website_info').css({'display' : 'none'});
      $('.nicumoms_info').css({'display' : 'block'});
      $('.twilight_ride_info').css({'display' : 'none'});
  });

  $('.twilight_ride').on("click", function(){
      $('.project_overlay').addClass('project_overlay_in');

      $('.my_website_info').css({'display' : 'none'});
      $('.nicumoms_info').css({'display' : 'none'});
      $('.twilight_ride_info').css({'display' : 'block'});
  });

  $('.x').click(function(){
    $('.project_overlay').toggleClass('project_overlay_in project_overlay_out');

    setTimeout(function() {
      $('.project_overlay').removeClass('project_overlay_in project_overlay_out');
    }, 500);
  });
}


$(document).on("ready", function(){
  $(".arrow_button").on("mouseenter", function(){
    $(".arrow_button").css({'background' : 'rgb(230,230,230)'});
  });

  $(".arrow_button").on("mouseleave", function(){
    $(".arrow_button").css({'background' : 'white'});
  });

  change_sections();
  projectOverlay();

});
