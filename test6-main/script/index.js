$(function () {
    //1번째
    $('.img1,.view1').click(function () {
        $('#modal1').fadeIn();
    });
    $('#modal1').click(function () {
        $('#modal1').hide();
    });

    //2번째
    $('.img2,.view2').click(function () {
        $('#modal2').fadeIn();
    });
    $('#modal2').click(function () {
        $('#modal2').hide();
    });

    //3번째
    $('.img3,.view3').click(function () {
        $('#modal3').fadeIn();
    });
    $('#modal3').click(function () {
        $('#modal3').hide();
    });
});



// $(function () {
//     $('.img, .view').click(function (e) {

//         if(e.target.tagName === 'IMG'){
//             $('.modalImage').attr('src', e.target.src);
//         }else{
//             $('.modalImage').attr('src', $(e.target).parent().siblings()[0].src)
//         }
//         $('#modal').fadeIn();
//     })

//     $('#modal').click(function () {
//         $('#modal').hide();
//     });
// })
