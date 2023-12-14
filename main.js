function displayTable() {
    let table = document.createElement('table')
    console.log(table)

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')

        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td')
            td.textContent = i * 10 + j;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.body.appendChild(table)
}

displayTable()

