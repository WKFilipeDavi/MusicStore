function init() {
    $(document).ready(function(){

        // jQuery methods go here...
        let menuMobile = document.getElementById('ms-mobile-menu');
        let hambMobBtn = document.getElementById('ms-mobile-hamb');
        var closeBtn = document.getElementById('ms-close-btn');

    
        hambMobBtn.addEventListener("click", function() {
            menuMobile.classList.remove('hidden');
            closeBtn = document.getElementById('ms-close-btn');
            
            closeBtn.addEventListener("click", function() {
                menuMobile.classList.add('hidden');
            });
        });

      }); 
}

export default { init };