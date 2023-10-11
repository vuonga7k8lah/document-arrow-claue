jQuery(document).ready(function() {
	jQuery('.sidebar-left').mCustomScrollbar({
		theme:'minimal-dark',
		axis:'y' 
	});
	jQuery('#sidebar-left li:not(.nav-parent) > a').click(function(e){
		jQuery('#sidebar-left li').removeClass('active');
		jQuery(this).parent().addClass('active');
		var href = jQuery(this).attr('href');
		var elementScrollDefault = jQuery(href).offset().top - 38;
		jQuery('html,body').animate({scrollTop: elementScrollDefault}, 300);
	});
	jQuery('#sidebar-left li.nav-parent > span').click(function(e){
		jQuery(this).parent().find('.nav-children').slideToggle("fast");
	});
	
	jQuery('#show-index').click(function(e){
		jQuery("#index-content").addClass('enable');
	});
	jQuery('#index-content .close-btn').click(function(e){
		jQuery("#index-content").removeClass('enable');
	});
	
	
	jQuery('.navbar-header .navbar-toggle').click(function(e){
		jQuery('body').toggleClass('enable-menu');
	});
});
jQuery(window).load(function() {
	var url = window.location.href;
	var position = url.search('#');
	if(position > 0){
		var hrefLoad = url.slice(position);
		var elementScrollLoad = jQuery(hrefLoad).offset().top - 38;
		jQuery('html,body').animate({scrollTop: elementScrollLoad}, 300);
		jQuery("#sidebar-left li > a[href="+hrefLoad+"]").parent().addClass('active');
		jQuery("#sidebar-left li > a[href="+hrefLoad+"]").parent().parent().show();
	}
});