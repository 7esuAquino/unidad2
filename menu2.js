fetch('menu.json')
.then(respose => Response.json())
.then( data =>{
    const menuContainer = document.getElementById
    ('menu-container');
    let total = 0;
    data.items.forEach(categor => {
        const categoryTitle = document.createElementById('h2');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild (categoryTitle);

        const table = document.createElement('table');
        const tableHead = <tr><th>Foto</th><th>Descripcion</th><th>precio</th><th>Seleccionar</th></tr>;
        let tableBody = '';

        category.items.forEach(item => {
            tableBody +=`<tr>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name} - ${item.description}</td>
            <td>${item.price}</td>
            <td><input type="checkbox" data-price = "${item.price.replace('$','')}"onchange="updateTotal()"</td>
            </tr>`;
        });
        table.innerHTML = tableContent;
        menuContainer.appendChild(table);
    });
});
function updateTotal(){
    const checkbox = document.querySelectorAll('input[type="checkbox"[data-price]');
    let currentTotal = 0;
    checkbox.forEach(checkbox =>{
        if(checkbox.checked){
            currentTotal += parseFloat(checkbox.getAttribute('data-price'));
        }
    });
document.getElementById('total').textContent = currentTotal.toFixed(2);
}