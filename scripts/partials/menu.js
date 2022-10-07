function init() {
    $(document).ready(function(){

        // jQuery methods go here...
        let menuMobile = document.getElementById('ms-mobile-menu');
        let closeBtn = document.getElementById('ms-close-btn');
        let hambMobBtn = document.getElementById('ms-mobile-hamb');
    
        closeBtn.addEventListener("click", function() {
            menuMobile.classList.add('hidden');
        });
    
        hambMobBtn.addEventListener("click", function() {
            menuMobile.classList.remove('hidden');
        });
      
      }); 
}

export default { init };