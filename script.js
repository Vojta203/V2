document.getElementById('changeImageBtn').addEventListener('click', function() {
    var img = document.getElementById('mainImage');
    img.src = img.src.includes('Greece.jpg') ? 'bridge.png' : 'Greece.jpg';
});

/*document.getElementById('changeImageBtn').addEventListener('click', function() {
    var image = document.getElementById('image');
    if (image.src.includes('IMG_20220715_124138.jpg')) {
        image.src = 'bridge.jpg';
    } else {
        image.src = 'Img_20220715_124138.jpg';
    }
});*/