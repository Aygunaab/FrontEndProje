


var Yle = {
    init: function() {
        this.Basic.init();  
    },
    Basic: {
        init: function() {
            this.ylpreloader();
            this.BackgroundImage();
            this.Animation();
            this.ylStickymenu();
            this.ylMobileMenu();
            this.YlVideoBox();
            this.ylSliderMain();
            this.YlDepartment();
            this.YlTestimonial1();
            this.CourseGrid();
            this.CourseGridFilter();
            this.countDown();
            this.Ylblog();
            this.YLcategory();
            this.YlTestimonial12();
            this.YlTeamInstructor();
            this.YlBlog2();
            this.GoogleMap();

        },







    GoogleMap: function (){
    if ( $('#map').length ){
        var $lat = $('#map').data('lat');
        var $lon = $('#map').data('lon');
        var $zoom = $('#map').data('zoom');
        var $marker = $('#map').data('marker');
        var $info = $('#map').data('info');
        var $markerLat = $('#map').data('mlat');
        var $markerLon = $('#map').data('mlon');
        var map = new GMaps({
            el: '#map',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,    
            infoWindow: {
                content: $info
            }
        })
    }
}
    }
}
        
        