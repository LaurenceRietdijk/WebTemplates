function showStep(stepNo) {
    document.querySelectorAll('fieldset').forEach(fieldset => {
        fieldset.style.display = 'none'; 
    });

    document.getElementById(`step${stepNo}`).style.display = 'block';
}


document.getElementById("first-name").addEventListener("invalid", function (event) {
    // event.preventDefault();
    if (event.target.validity.patterMismatch) {
        alert("oops");
    }
});