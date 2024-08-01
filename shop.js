document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('#scroll_up');
    const footer = document.getElementById("head")

    const silver_button = document.querySelector('#silver');
    const sil_img = document.getElementById("silver_img");

    const diamond_button = document.querySelector('#diamond');
    const dia_img = document.getElementById("diamond_img");

    const custom = document.querySelector('#custom')
    const design = document.getElementById('my_order');

    scrollButton.addEventListener('click', function() {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
    
    silver_button.addEventListener('click',function(){
      sil_img.scrollIntoView({behavior:'smooth'});
  })

    diamond_button.addEventListener('click',function(){
        dia_img.scrollIntoView({behavior:'smooth'});
    })

    custom.addEventListener('click',function(){
      design.scrollIntoView({behavior:'smooth'});
  })

  });