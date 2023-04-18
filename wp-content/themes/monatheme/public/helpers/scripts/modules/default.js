export default function MonaCreateModuleDefault() {
    var sidebarProduct = document.querySelector('#sidebar-product');
    if (sidebarProduct) {
        sidebarProduct.addEventListener('submit', function () {
            // Thay thế tất cả các ký tự # thừa bằng một ký tự # duy nhất
            var url = window.location.href.replace(/#+/g, '#');

            // Kiểm tra xem #mona-list-product đã có trong URL hay chưa
            if (url.indexOf('#mona-list-product') === -1) {
                // Nếu chưa có, thêm #mona-list-product vào URL
                window.location.href = url + '#mona-list-product';
            }
        });
    }
}
