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
    
    
