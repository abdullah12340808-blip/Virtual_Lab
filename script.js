// بيانات المواد والجلسات
const data = {
    "2": {
        "1": {
            "الكيمياء الفيزيائية": ["جلسة 1", "جلسة 2"],
            "الحاسوب": ["جلسة 1", "جلسة 2"],
            "الصيدلانيات1": ["جلسة 1", "جلسة 2"],
            "الكيمياء العضوية1": ["جلسة 1", "جلسة 2"],
        },
        "2": {
            "الكيمياء العضوية2": ["جلسة 1", "جلسة 2"],
            "الكيمياء الحيوية1": ["جلسة 1", "جلسة 2"],
            "العقاقير1": ["جلسة 1", "جلسة 2"],
            "التحليلية1": ["جلسة 1", "جلسة 2"],
            "الصيدلانيات1": ["جلسة 1", "جلسة 2"],
        }
    },
    "3": {
        "1": {
            "التحليلية2": ["جلسة 1", "جلسة 2"],
            "الأحياء1": ["جلسة 1", "جلسة 2"],
            "العقاقير2": ["جلسة 1", "جلسة 2"],
            "فارماكولوجي1": ["جلسة 1", "جلسة 2"],
            "التكنولوجيا الصيدلية": ["جلسة 1", "جلسة 2"],
        },
        "2": {
            "التحليل الآلي": ["جلسة 1", "جلسة 2"],
            "كيمياء العقاقير": ["جلسة 1", "جلسة 2"],
            "الدمويات": ["سحب الدم", "جلسة 2"],
            "فارماكولوجي2": ["جلسة 1", "جلسة 2"],
            "الكيمياء صيدلية1": ["جلسة 1", "جلسة 2"],
            "الأحياء2": ["جلسة 1", "جلسة 2"],
        }
    }
};

// تحميل خيارات الفصل بناءً على السنة
function loadFasalOptions() {
    const year = document.getElementById("yearSelect").value;
    const faselSelect = document.getElementById("faselSelect");
    if (year) {
        const fasels = data[year];
        faselSelect.innerHTML = '<option value="">-- اختر الفصل --</option>';
        for (const fasel in fasels) {
            const option = document.createElement("option");
            option.value = fasel;
            option.textContent = `الفصل ${fasel}`;
            faselSelect.appendChild(option);
        }
        document.getElementById("faselSelection").style.display = "block";
    }
}

// تحميل المواد بناءً على الفصل
function loadMaterias() {
    const year = document.getElementById("yearSelect").value;
    const fasel = document.getElementById("faselSelect").value;
    const materiaSelect = document.getElementById("materiaSelect");
    if (fasel) {
        const materias = data[year][fasel];
        materiaSelect.innerHTML = '<option value="">-- اختر المادة --</option>';
        for (const materia in materias) {
            const option = document.createElement("option");
            option.value = materia;
            option.textContent = materia;
            materiaSelect.appendChild(option);
        }
        document.getElementById("materiaSelection").style.display = "block";
    }
}

// تحميل الجلسات بناءً على المادة
function loadSessions() {
    const year = document.getElementById("yearSelect").value;
    const fasel = document.getElementById("faselSelect").value;
    const materia = document.getElementById("materiaSelect").value;
    const sessionSelect = document.getElementById("sessionSelect");
    if (materia) {
        const sessions = data[year][fasel][materia];
        sessionSelect.innerHTML = '<option value="">-- اختر الجلسة --</option>';
        sessions.forEach(session => {
            const option = document.createElement("option");
            option.value = session;
            option.textContent = session;
            sessionSelect.appendChild(option);
        });
        document.getElementById("sessionSelection").style.display = "block";
    }
}

// بدء الاختبار بناءً على الجلسة
function startTest() {
    const session = document.getElementById("sessionSelect").value;
    if (session) {
        document.getElementById("testArea").style.display = "block";
        document.getElementById("testDescription").textContent = `اختبار الجلسة: ${session}`;
        document.getElementById("testContent").innerHTML = `
            <p>هذا هو الاختبار للمادة والجلسة المحددة. على الطالب إتمام التفاعل بنجاح.</p>
            <button onclick="runTest()">ابدأ التفاعل</button>
        `;
    }
}

// محاكاة التفاعل الكيميائي
function runTest() {
    document.getElementById("testContent").innerHTML = `
        <p>تم بدء التفاعل الكيميائي بنجاح! النتيجة ستظهر بعد قليل.</p>
        <div class="test-tube">
            <div class="liquid" style="height: 70%; background-color: lightblue;"></div>
        </div>
    `;
}