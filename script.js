function convert() {
    const university = document.getElementById("university").value;
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const resultDiv = document.getElementById("result");

    // Reset result
    resultDiv.textContent = "";

    if (university === "") {
        resultDiv.textContent = "Please select a university.";
        return;
    }

    if (isNaN(inputValue)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    if (conversionType === "cgpa-to-percent" && inputValue > 10) {
        resultDiv.textContent = "CGPA cannot be more than 10.00";
        return;
    }

    if (conversionType === "percent-to-cgpa" && inputValue > 100) {
        resultDiv.textContent = "Percentage cannot be more than 100.00";
        return;
    }

    let result;
    if (conversionType === "cgpa-to-percent") {
        result = cgpaToPercentage(inputValue, university);
        resultDiv.textContent = `Percentage: ${result.toFixed(2)}%`;
    } else {
        result = percentageToCgpa(inputValue, university);
        resultDiv.textContent = `CGPA: ${result.toFixed(2)}`;
    }
}

function cgpaToPercentage(cgpa, uni) {
    switch (uni) {
        case "AMITY":
            return cgpa * 10;
        case "BITS":
            return cgpa * 9.5;
        case "CU-PG":
            return (cgpa - 0.5) * 10;
        case "CU-UG":
            return cgpa * 10;
        case "GU":
            return cgpa * 9.5;    
        case "IIT-KGP":
            return cgpa * 10;
        case "JADAVPUR":
            return (cgpa - 0.75) * 10;
        case "KALYANI":
            return cgpa * 9.5;
        case "MAKAUT":
            return (cgpa - 0.75) * 10;
        case "NITDGP":
            return (cgpa - 0.5) * 10;
        case "UGB":
            return cgpa * 9.5;    
        default:
            return cgpa * 10;
    }
}

function percentageToCgpa(percentage, uni) {
    switch (uni) {
        case "AMITY":
            return percentage / 10;
        case "BITS":
            return percentage / 9.5;    
        case "CU-PG":
            return (percentage / 10) + 0.5;
        case "CU-UG":
            return percentage / 10;
        case "GU":
            return percentage / 9.5;    
        case "IIT-KGP":
            return percentage / 10;
        case "JADAVPUR":
            return (percentage / 10) + 0.75;
        case "KALYANI":
            return percentage / 9.5;
        case "MAKAUT":
            return (percentage / 10) + 0.75;
        case "NITDGP":
            return (percentage / 10) + 0.5;
        case "UGB":
            return percentage / 9.5;    
        default:
            return percentage / 10;
    }
}

function clearFields() {
    document.getElementById("inputValue").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("university").value = "";
}
