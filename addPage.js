let form = document.getElementById("form");
boots_array = [];

function btnSubmit() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let boots = {
            input__boots: event.target['input__price'].value,
            input__color: event.target['input__price'].value,
            input__price: event.target['input__price'].value,
        }
        event.target.reset();
        boots_array.push(boots);
        console.log(boots_array);
        createDownloadLink(boots);
    });
}

function createDownloadLink(boots) {
    let text = JSON.stringify(boots);
    let link = document.createElement('a');
    const json = JSON.stringify(boots, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'boots.json');
}