import { SaveDataToFirebase } from './firebase.js';
document.addEventListener("DOMContentLoaded", function () {
    const btnSave = document.getElementById("btn-right");
    const confirmDialog = document.querySelector(".js-confirm");
    const confirmYes = document.querySelector(".js-confirm-yes");
    const confirmNo = document.querySelector(".js-confirm-no");
    const confirmClose = document.querySelector(".js-close");
    const confirmHeaderText = document.querySelector(".js-confirm-header");
    const confirmContainer = document.querySelector(".confirm-container");

    let headerText = "Bạn có chắc chắn muốn lưu dữ liệu này?";
    // Hiển thị hộp thoại xác nhận khi người dùng click vào nút "Lưu"
    btnSave.addEventListener("click", function () {
        confirmHeaderText.textContent = headerText; 
        confirmDialog.style.display = "flex"; // Hiển thị hộp thoại xác nhận
    });

    // Bắt sự kiện cho nút "Có" trong hộp thoại xác nhận
    confirmYes.addEventListener("click", function () {
        // Thực hiện bước tiếp theo hoặc hành động mong muốn ở đây
        // SaveDataToFirebase();
        // confirmHeaderText.textContent = "Lưu dữ liệu thành công"; 
        // console.log("Người dùng chọn Có. Đang tiến hành bước tiếp theo.");
        
        // // Đóng hộp thoại xác nhận
        
        // confirmDialog.style.display = "none";
        confirmHeaderText.textContent = "Lưu dữ liệu thành công"; 
        confirmHeaderText.style.height = "150px";
        confirmHeaderText.style.color = "#fff";
        confirmContainer.style.background = "#5f7e5c";
        confirmYes.style.display = "none";
        confirmNo.style.display = "none";
        setTimeout(function() {
            SaveDataToFirebase();
            console.log("Người dùng chọn Có. Đang tiến hành bước tiếp theo.");
            confirmYes.style.display = "flex";
            confirmNo.style.display = "flex";
            confirmHeaderText.style.height = "125px";
            confirmHeaderText.style.color = "#000";
            confirmContainer.style.background = "#fff";
            confirmDialog.style.display = "none";
        }, 1000);
        
        
            
    });

    // Bắt sự kiện cho nút "Không" trong hộp thoại xác nhận
    confirmNo.addEventListener("click", function () {
        // Không làm gì hoặc xử lý khi người dùng từ chối
        console.log("Người dùng chọn Không. Hủy bỏ hành động.");

        // Đóng hộp thoại xác nhận
        confirmDialog.style.display = "none";
    });

    confirmClose.addEventListener("click", function () {
        console.log("Người dùng chọn Close. Hủy bỏ hành động.");
        confirmDialog.style.display = "none";
    });
});
