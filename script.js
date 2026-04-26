let liquidElement = document.getElementById("liquid");
let resultElement = document.getElementById("result");

function addChemical(chemical) {
    if (chemical === 'calcium') {
        liquidElement.style.height = "80%";
        liquidElement.style.backgroundColor = "lightblue"; // تأثير الكالسيوم
        resultElement.innerHTML = "تفاعل الكالسيوم: تم إضافة شوارد الكالسيوم!";
    } else if (chemical === 'magnesium') {
        liquidElement.style.height = "70%";
        liquidElement.style.backgroundColor = "lightgreen"; // تأثير المغنيزيوم
        resultElement.innerHTML = "تفاعل المغنيزيوم: تم إضافة شوارد المغنيزيوم!";
    } else if (chemical === 'phosphate') {
        liquidElement.style.height = "50%";
        liquidElement.style.backgroundColor = "lightyellow"; // تأثير الفوسفات
        resultElement.innerHTML = "تفاعل الفوسفات: تم إضافة فوسفات ثنائية الصوديوم!";
    }
}