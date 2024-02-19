// Sự kiện khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Lấy thẻ combobox
    var fileList = document.getElementById('fileList');

    // Gọi hàm để lấy danh sách tên file
    loadFileList();

    // Hàm để lấy danh sách tên file
    function loadFileList() {
        // Sử dụng đối tượng XMLHttpRequest để đọc danh sách tên file từ tệp văn bản
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Chia chuỗi thành mảng các tên file
                var fileNames = this.responseText.split('\n').filter(Boolean);

                // Thêm tên file vào combobox
                fileNames.forEach(function(fileName) {
                    var option = document.createElement('option');
                    option.value = fileName;
                    option.text = fileName;
                    fileList.add(option);
                });
            }
        };
        // Mở tệp văn bản để đọc
        xhttp.open("GET", "../assets/study/fileList.txt", true);
        xhttp.send();
    }

});

// Hàm được gọi khi chọn một tệp từ combobox
function loadSelectedFile() {
    // Lấy thẻ combobox và giá trị được chọn
    var fileList = document.getElementById('fileList');
    var selectedFile = fileList.value;

    // Sử dụng đối tượng XMLHttpRequest để đọc file được chọn
    var xhttp = new XMLHttpRequest();

    // Mở tệp với phương thức GET, và chỉ định tên tệp được chọn
    xhttp.open("GET", "../assets/study/" + selectedFile, true);

    // Xử lý sự kiện khi yêu cầu thành công
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Gán nội dung đọc được từ tệp vào phần tử có id là "output"
            // document.getElementById("output").innerHTML = this.responseText;
            var leftTextbox = document.querySelector('.content-left');
            leftTextbox.value = this.responseText;
        }
    };
    xhttp.send();
    xhttp = new XMLHttpRequest();
     // Mở tệp với phương thức GET, và chỉ định tên tệp được chọn
     xhttp.open("GET", "../assets/translate/" + selectedFile, true);

        // Xử lý sự kiện khi yêu cầu thành công
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Gán nội dung đọc được từ tệp vào phần tử có id là "output"
                // document.getElementById("output").innerHTML = this.responseText;
                var rightTextbox = document.querySelector('.content-right');
                rightTextbox.value = this.responseText;
            }
        };
    // Gửi yêu cầu đến server để đọc tệp
    xhttp.send();
}

// Hàm được gọi khi nhấn nút "Hiển thị Dữ liệu"
function loadData() {
    // Sử dụng đối tượng XMLHttpRequest để đọc file
    var xhttp = new XMLHttpRequest();

    // Lấy thẻ combobox và giá trị được chọn
    var fileList = document.getElementById('fileList');
    var selectedFile = fileList.value;

    // Mở tệp với phương thức GET, và chỉ định tên tệp được chọn
    xhttp.open("GET", "../assets/study/" + selectedFile, true);

    // Xử lý sự kiện khi yêu cầu thành công
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Gán nội dung đọc được từ tệp vào phần tử có id là "output"
            document.getElementById("output").innerHTML = this.responseText;
        }
    };

    // Gửi yêu cầu đến server để đọc tệp
    xhttp.send();
}

document.getElementById('btn-right').addEventListener('click', function() {
    // Lấy nội dung từ content-right
    var rightTextbox = document.querySelector('.content-right');
    var contentToSave = rightTextbox.value;

    // Tạo đối tượng Blob với nội dung cần lưu và kiểu dữ liệu là text/plain
    var blob = new Blob([contentToSave], { type: 'text/plain' });

    // Tạo đường dẫn (URL) cho Blob
    var blobURL = URL.createObjectURL(blob);

    // Tạo đối tượng link để tạo sự kiện click
    var link = document.createElement('a');
    link.href = blobURL;
    
    // Đặt tên file và kiểu MIME
    link.download = 'C2Bxx.txt';
    
    // Thêm link vào body
    document.body.appendChild(link);

    // Mô phỏng sự kiện click để tải file
    link.click();

    // Xóa đối tượng link sau khi đã thực hiện xong
    document.body.removeChild(link);
});

// document.getElementById('btn-menu').addEventListener('click', function() {
//         var navList = document.getElementById('nav');
//         navList.classList.toggle('menu-hidden');
//     });

    //Hide Header
const taskbarhide = document.querySelector('.ti-angle-double-left')
const taskbarshow = document.querySelector('.ti-angle-double-right')
// const taskbar = document.querySelector('.menu-hidden')
const headerjs = document.querySelector('.js-header')
const contentjs = document.querySelector('.js-content')
var menuHiddenElements = document.querySelectorAll('.menu-hidden');

function ShowTaskbar(){
    // taskbar.classList.remove('hidden')
    menuHiddenElements.forEach(function(element) {
        element.classList.remove('hidden');
    });
    taskbarhide.classList.remove('hidden')
    taskbarshow.classList.add('hidden')
    headerjs.classList.remove('js-changewidth')
    contentjs.classList.remove('js-changemargin')
    contentjs.classList.add('add-animation1')
    headerjs.classList.add('add-animation1')
    contentjs.classList.remove('add-animation')
    headerjs.classList.remove('add-animation')
}
function HideTaskbar(){
    // taskbar.classList.add('hidden')
    menuHiddenElements.forEach(function(element) {
        element.classList.add('hidden');
    });
    taskbarhide.classList.add('hidden')
    taskbarshow.classList.remove('hidden')
    headerjs.classList.add('js-changewidth')
    contentjs.classList.add('js-changemargin')
    contentjs.classList.remove('add-animation1')
    headerjs.classList.remove('add-animation1')
    contentjs.classList.add('add-animation')
    headerjs.classList.add('add-animation')
}

taskbarhide.addEventListener('click',HideTaskbar)
taskbarshow.addEventListener('click',ShowTaskbar)