jQuery(window).load(function () {
	//var highlighted = ".saas";
	//console.log(highlighted = ".saas");
function fn(highlighted) {
var size = 1;
var button = 3;
var button_class = "gallery-header-center-right-links-current";
var normal_size_class = "gallery-content-center-normal";
var full_size_class = "gallery-content-center-full";
var jQuerycontainer = jQuery('.gallery-content-center');
    console.log(highlighted);
//jQuerycontainer.isotope({itemSelector : '.abc', filter: highlighted,});
jQuerycontainer.isotope({itemSelector : '.abc', filter: '.saas',});



function check_button(){
	jQuery('.gallery-header-center-right-links').removeClass(button_class);
	/* if(button==1){
		jQuery("#filter-all").addClass(button_class);
		jQuery("#gallery-header-center-left-title").html('All cards'); 
		} */
	if(button==2){
		jQuery("#filter-Agency").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('agency');
		}
	if(button==3){
		jQuery("#filter-SaaS").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==4){
		jQuery("#filter-Edu").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==5){
		jQuery("#filter-Health").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==6){
		jQuery("#filter-Cons").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==7){
		jQuery("#filter-Fin").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==8){
		jQuery("#filter-Travel").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==9){
		jQuery("#filter-Manuf").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==10){
		jQuery("#filter-Real").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
	if(button==11){
		jQuery("#filter-Furnishing").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==12){
		jQuery("#filter-Publishing").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==13){
		jQuery("#filter-Other").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
		
		
		
		
	/* ####### Tab2 ######*/
	if(button==14){
		jQuery("#filter-Cost").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('All Galleries'); 
		}
	if(button==15){
		jQuery("#filter-Savings").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==16){
		jQuery("#filter-Rol").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
	if(button==17){
		jQuery("#filter-Diagnostic").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==18){
		jQuery("#filter-Competitor").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==19){
		jQuery("#filter-Alternate").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==20){
		jQuery("#filter-Time").addClass(button_class);
		//jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
	if(button==21){
		jQuery("#filter-Grade").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==22){
		jQuery("#filter-Industry").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
	if(button==23){
		jQuery("#filter-User").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==24){
		jQuery("#filter-Risk").addClass(button_class);
		// jQuery("#gallery-header-center-left-title").html('Landscape Gallery'); 
		}
	
		
		/* ####### Tab2 Ends ######*/	
		
}
	
function check_size(){
	jQuery(".gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
	if(size==0){
		jQuery(".gallery-content-center").addClass(normal_size_class); 
		jQuery(".gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
		}
	if(size==1){
		jQuery(".gallery-content-center").addClass(full_size_class); 
		jQuery(".gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
		}
	jQuerycontainer.isotope({itemSelector : '.abc'});
}


	
//jQuery("#filter-all").click(function() { jQuerycontainer.isotope({ filter: '.all' }); button = 1; check_button(); });
jQuery("#filter-Agency").click(function() {  jQuerycontainer.isotope({ filter: '.agency' }); button = 2; check_button();  });
jQuery("#filter-SaaS").click(function() {  jQuerycontainer.isotope({ filter: '.saas' }); button = 3; check_button();  });
jQuery("#filter-Edu").click(function() {  jQuerycontainer.isotope({ filter: '.edu' }); button = 4; check_button();  });
jQuery("#filter-Health").click(function() {  jQuerycontainer.isotope({ filter: '.health' }); button = 5; check_button();  });
jQuery("#filter-Cons").click(function() {  jQuerycontainer.isotope({ filter: '.cons' }); button = 6; check_button();  });
jQuery("#filter-Fin").click(function() {  jQuerycontainer.isotope({ filter: '.fin' }); button = 7; check_button();  });
jQuery("#filter-Travel").click(function() {  jQuerycontainer.isotope({ filter: '.travel' }); button = 8; check_button();  });
jQuery("#filter-Manuf").click(function() {  jQuerycontainer.isotope({ filter: '.manuf' }); button = 9; check_button();  });
jQuery("#filter-Real").click(function() {  jQuerycontainer.isotope({ filter: '.real' }); button = 10; check_button();  });
jQuery("#filter-Furnishing").click(function() {  jQuerycontainer.isotope({ filter: '.furnishing' }); button = 11; check_button();  });
jQuery("#filter-Publishing").click(function() {  jQuerycontainer.isotope({ filter: '.publishing' }); button = 12; check_button();  });
jQuery("#filter-Other").click(function() {  jQuerycontainer.isotope({ filter: '.other' }); button = 13; check_button();  });



jQuery("#filter-Cost").click(function() {  jQuerycontainer.isotope({ filter: '.cost' }); button = 14; check_button();  });
jQuery("#filter-Savings").click(function() {  jQuerycontainer.isotope({ filter: '.savings' }); button = 15; check_button();  });
jQuery("#filter-Rol").click(function() {  jQuerycontainer.isotope({ filter: '.rol' }); button = 16; check_button();  });
jQuery("#filter-Diagnostic").click(function() {  jQuerycontainer.isotope({ filter: '.diagnostic' }); button = 17; check_button();  });
jQuery("#filter-Competitor").click(function() {  jQuerycontainer.isotope({ filter: '.competitor' }); button = 18; check_button();  });
jQuery("#filter-Alternate").click(function() {  jQuerycontainer.isotope({ filter: '.alternate' }); button = 19; check_button();  });
jQuery("#filter-Time").click(function() {  jQuerycontainer.isotope({ filter: '.time' }); button = 20; check_button();  });
jQuery("#filter-Grade").click(function() {  jQuerycontainer.isotope({ filter: '.grade' }); button = 21; check_button();  });
jQuery("#filter-Industry").click(function() {  jQuerycontainer.isotope({ filter: '.industry' }); button = 22; check_button();  });
jQuery("#filter-User").click(function() {  jQuerycontainer.isotope({ filter: '.user' }); button = 23; check_button();  });
jQuery("#filter-Risk").click(function() {  jQuerycontainer.isotope({ filter: '.risk' }); button = 24; check_button();  });

jQuery(".gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
check_size();
 }
 
 
// fn(".saas");
fn();
 $('.tab-title a').on('click', function() {
	  setTimeout( function() {
		  //fn('.cost');
		  fn();
	 });
});
});

