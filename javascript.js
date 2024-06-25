// Menu toggle
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }

    // Efek scroll
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    });

    // Modal elements
    var modal = $('#myModal');
    var modalTitle = $('#modal-title');
    var modalDescription = $('#modal-description');

    // Click event for gallery items
    $('.gallery-item img').click(function () {
        var src = $(this).attr('src');
        var title = $(this).parent().data('title');
        var description = $(this).parent().data('description');

        modalTitle.text(title);
        modalDescription.html(description); // Menggunakan .html() untuk memasukkan HTML dari deskripsi

        modal.show();

        setTimeout(function () {
            $('#gallery-description').addClass('show');
        }, 10);
    });

    // Close modal
    $('.close').click(function () {
        modal.hide();
        $('#gallery-description').removeClass('show');
    });

    // Check lebar saat resize
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 989) {
            menu.css("display", "block");
        } else {
            menu.css("display", "none");
        }
        klikMenu();
    });
    // Comment Form Handling
const commentForm = document.getElementById('commentForm');
const commentText = document.getElementById('commentText');
const commentsList = document.getElementById('commentsList');

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = commentText.value;

    commentsList.appendChild(newComment);
    commentText.value = '';
});

    
});
