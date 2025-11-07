 
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
document.getElementById("reportForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const totalEC = parseInt(document.getElementById("totalEC").value) || 0;
    const teenEC = parseInt(document.getElementById("teenEC").value) || 0;

    // Validation
    if (teenEC > totalEC) {
        alert("⚠️ Teenage EC কখনোই Total ECর চেয়ে বেশী হতে পারে না। রিপোর্ট আবার চেক করুন।");
        return;
    }

    // Show instant feedback
    const feedback = document.getElementById("feedback");
    if (feedback) {
        feedback.textContent = "⏳ Submitting your report...";
        feedback.style.color = "blue";
    } else {
        alert("⏳ Submitting your report...");
    }

    const formData = new FormData(event.target);
    const url = "https://script.google.com/macros/s/AKfycbxD30udCtrfUtvvQBOVCADBQLAFiD-0LaC2GvRSLshLFEBiVh97YHtFnSRCm2HenTeG/exec";

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            if (feedback) {
                feedback.textContent = "✅ Submitted successfully!";
                feedback.style.color = "green";
                 setTimeout(() => {
                    feedback.textContent = "";
                    feedback.style.display = "none";
                }, 3000);                
            } 
            event.target.reset();
        } else {
            throw new Error("Server responded with an error");
        }
    } catch (error) {
        if (feedback) {
            feedback.textContent = "❌ Submission failed! Please try again.";
            feedback.style.color = "red";
        } else {
            alert("❌ Submission failed! Please try again.");
        }
        console.error("Submission error:", error);
    }
});




