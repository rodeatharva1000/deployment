function add(event){
            event.preventDefault();

            let a = parseInt(document.getElementById('id_1').value, 10);
            let b = parseInt(document.getElementById('id_2').value, 10);
            

            if (document.getElementById('addition').checked) {
                document.getElementById("add_res").innerHTML = a+b;
            }
            else if (document.getElementById('subtraction').checked) {
                document.getElementById("add_res").innerHTML = a-b;
            }
            else if (document.getElementById('multiplication').checked) {
                document.getElementById("add_res").innerHTML = a*b;
            }
            else if (document.getElementById('division').checked) {
                document.getElementById("add_res").innerHTML = a/b;
            }
        }