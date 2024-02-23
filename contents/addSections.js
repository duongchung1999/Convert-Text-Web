import { CreateNewSection } from './firebase.js';
import { loadFileList } from './firebase.js';
import { ShowNewFile } from './firebase.js';
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-section");
    const addSectionsForm = document.querySelector(".add-sections");
    const closeFormButton = document.querySelector(".js-add-sections-close");
    const yesButton = document.querySelector(".add-sections-yes");
    const noButton = document.querySelector(".add-sections-no");
    const inputSectionName = document.querySelector(".add-sections-input input");

    addButton.addEventListener("click", function () {
        addSectionsForm.style.display = "flex";
    });

    // Ẩn form khi nhấn nút "Close" hoặc nút "No"
    closeFormButton.addEventListener("click", function () {
        addSectionsForm.style.display = "none";
    });
    noButton.addEventListener("click", function () {
        addSectionsForm.style.display = "none";
    });

    // Ẩn form khi nhấn nút "Yes" và thực hiện các bước tiếp theo
    yesButton.addEventListener("click", function () {
        
        var sectionName = inputSectionName.value;
        CreateNewSection(sectionName);
        // loadFileList();
        ShowNewFile(sectionName)
        addSectionsForm.style.display = "none";
        // Thực hiện các bước tiếp theo ở đây
    });
});