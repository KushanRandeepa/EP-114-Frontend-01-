document.getElementById('btn-save').addEventListener("click",
    () => {
        let txtname = document.getElementById('nameFeild').value
        let txtaddress = document.getElementById('addressFeild').value
        let txtage = document.getElementById('ageFeild').value

        let requestBody = {
            "name": txtname,
            "address": txtaddress,
            "age": txtage
        }
        fetch("http://localhost:8080/student/create", {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: new Headers({ "Content-Type": "application/json" })
        }).then(data => ('JSON'))
            .then(data => {
                confirm("saved !")
            })
        document.getElementById('nameFeild').innerHTML = "";
        document.getElementById('addressFeild').innerHTML = ""
        document.getElementById('ageFeild').innerHTML = ""
    });



document.getElementById('btn-view').addEventListener("click", () => {
    let table = document.getElementById('tbl-student');
    let tblbody = `<tr>
               <td>ID</td>
                <td>Name</td>
                <td>Address</td>
                <td>Age</td>
             </tr>`

    fetch("http://localhost:8080/student/all")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                tblbody += `<tr>
                             <td>${element.id}</td>
                              <td>${element.name}</td>
                              <td>${element.address}</td>
                              <td>${element.age}</td>
                            </tr>`
            });
            table.innerHTML = tblbody;

        });
});