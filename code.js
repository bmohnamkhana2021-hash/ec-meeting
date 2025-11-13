 
 //value of month-auto populated
 function setMonth() {
    const dateInput = document.getElementById('date').value;
    if (dateInput) {
        const date = new Date(dateInput);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        document.getElementById('month').value = `${month}, ${year}`;
    }
}
//Populate Reporting Unit List / Drop down
const reportingUnit=["Amarabati","Bagdanga","Baliara New","Baliara Old","Bijoybati","Bishalaxmipur","Budhakhali","Dakshin Chandanpiri","Dakshin Chandranagar","Dakshin Durgapur","Dakshin Shibrampur","Debnagar","Debnibas","Dwariknagar","Fatikpur","Ganeshnagar East","Ganeshnagar West","Haripur","Iswaripur","Kusumtala","Maharajganj","Moushuni 1st Gheri","Namkhana I","Namkhana II","Nandabhanga","Narayanpur PHC SC","Narayanpur Part","Patibunia","Radhanagar","Rajnagar","Rajnagar Srinathgram I","Rajnagar Srinathgram II","Shibnagar Abad I","Shibnagar Abad II","Shibpur","Uttar Chandanpiri","Uttar Shibrampur"];
const myDropdown=document.getElementById("reportingUnit");
 reportingUnit.forEach(function(fruit) {
            const option = document.createElement("option");
            option.textContent = fruit;
            option.value = fruit;
            myDropdown.appendChild(option);
        });

//Teenage EC validation

document.getElementById("reportForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const totalEC = parseInt(document.getElementById("totalEC").value) || 0;
    const teenEC = parseInt(document.getElementById("teenEC").value) || 0;

    // Validation
    if (teenEC > totalEC) {
        showMessage("⚠️ Teenage EC কখনোই Total ECর চেয়ে বেশী হতে পারে না। রিপোর্ট আবার চেক করুন।", "warning");
        return;
    }

    showMessage("⏳ Submitting your report...", "info");

    const formData = new FormData(event.target);
    const url = "https://script.google.com/macros/s/AKfycbxD30udCtrfUtvvQBOVCADBQLAFiD-0LaC2GvRSLshLFEBiVh97YHtFnSRCm2HenTeG/exec";

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            showMessage("✅ Submitted successfully!", "success");
            event.target.reset();
        } else {
            throw new Error("Server responded with an error");
        }
    } catch (error) {
        showMessage("❌ Submission failed! Please try again.", "error");
        console.error("Submission error:", error);
    }
});
// ✅ Modern centered message popup with overlay
function showMessage(message, type = "info") {
    // Create overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    // Create message box
    let msgBox = document.createElement("div");
    msgBox.textContent = message;
    msgBox.className = `popup-message ${type}`;

    // Add overlay and message box to body
    overlay.appendChild(msgBox);
    document.body.appendChild(overlay);

    // Fade-in
    setTimeout(() => {
        overlay.classList.add("show");
        msgBox.classList.add("show");
    }, 10);

    // Auto remove after 3s
    setTimeout(() => {
        msgBox.classList.remove("show");
        overlay.classList.remove("show");
        setTimeout(() => overlay.remove(), 500);
    }, 3000);
}







