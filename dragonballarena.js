var images = [
    'images/banners/15.webp',
    'images/banners/2.webp',
    'images/banners/3.webp',
    'images/banners/4.webp',
    'images/banners/5.webp',
    'images/banners/6.webp',
    'images/banners/7.webp',
    'images/banners/8.webp',
    'images/banners/9.webp',
    'images/banners/10.webp',
    'images/banners/11.webp',
    'images/banners/12.webp',
    'images/banners/13.webp',
    'images/banners/14.webp',
    'images/banners/1.webp'
    ]
    
    var which = Math.floor(Math.random() * images.length);
    var img = document.getElementById('banner');
    img.src = images[which];
    img.title = images[which];
    
    
    $(document).ready(function() {
        $('.newsimage').hide();
        $('.newsimage:lt(5)').show();
    });




    $(document).ready(function(){
        $(".rankrequired").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="reset"){
                    $(".questcontainer").show();
                }

                if($(this).attr("value")=="earthling"){
                    $(".questcontainer").hide();
                    $(".earthling").show();
                }

                if($(this).attr("value")=="saibaman"){
                    $(".questcontainer").hide();
                    $(".saibaman").show();
                }

                if($(this).attr("value")=="namekian"){
                    $(".questcontainer").hide();
                    $(".namekian").show();
                }

                if($(this).attr("value")=="kingkai"){
                    $(".questcontainer").hide();
                    $(".kingkai").show();
                }

                if($(this).attr("value")=="android"){
                    $(".questcontainer").hide();
                    $(".android").show();
                }

                if($(this).attr("value")=="sayian"){
                    $(".questcontainer").hide();
                    $(".sayian").show();
                }

                if($(this).attr("value")=="supersaiyan"){
                    $(".questcontainer").hide();
                    $(".supersaiyan").show();
                }

                if($(this).attr("value")=="supremekai"){
                    $(".questcontainer").hide();
                    $(".supremekai").show();
                }

                if($(this).attr("value")=="majin"){
                    $(".questcontainer").hide();
                    $(".majin").show();
                }

                if($(this).attr("value")=="godofdestruction"){
                    $(".questcontainer").hide();
                    $(".godofdestruction").show();
                }
            });
        }).change();
    });

    $(".news").load("./news/newsgrab.html .news2");

    $(document).ready(function() {
        $(".topusername").css({
          'width': ($(".dropdown-content").width() + 'px')
        });
      });