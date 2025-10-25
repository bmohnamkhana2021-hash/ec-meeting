//value of month-auto populated
 function setMonth() {
            const dateInput = document.getElementById('date').value;
            if (dateInput) {
                const monthName = new Date(dateInput).toLocaleString('default', { month: 'long' });
                document.getElementById('month').value = monthName;
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
document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let totalEC = parseInt(document.getElementById("totalEC").value) || 0;
    let teenEC = parseInt(document.getElementById("teenEC").value) || 0;

    if (teenEC > totalEC) {
        alert("⚠️ Teenage EC কখনোই Total ECর চেয়ে বেশী হতে পারে না। রিপোর্ট আবার চেক করুন।");
        return;
    }

    const formData = new FormData(event.target);
    const url = "https://script.google.com/macros/s/AKfycbxD30udCtrfUtvvQBOVCADBQLAFiD-0LaC2GvRSLshLFEBiVh97YHtFnSRCm2HenTeG/exec";

    // sendBeacon sends data in background and does not block
    const blob = new Blob([new URLSearchParams(formData)], { type: "application/x-www-form-urlencoded" });
    navigator.sendBeacon(url, blob);

    alert("✅ Submitted successfully!");
    event.target.reset();
});
 

