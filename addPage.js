

function btnSubmit() {
    let boots = document.getElementById("input__boots").value;
    let color = document.getElementById("input__color").value;
    let price = document.getElementById("input__price").value;
    let picture = document.getElementById("input__picture").value;

const file_name = boots;
const file_color = color;
const file_price = price;

        let boot = [{
           boots: boots,
           color: color,
           price: price,
           picture: picture
        }];
       const json = JSON.stringify(boot, null, 2);
       const blob = new Blob([json], { type: 'application/json'} );
       const link = document.createElement('a');
       link.href = URL.createObjectURL(blob);
       link.download = `${file_name.value}_${file_color.value}_${file_price.value}.json`;
       link.click();

       boots.value = "";
       color.value = "";
       price.value = "";
       picture.value = "";
}
