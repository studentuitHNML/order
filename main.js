
setInterval(function (){
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth()+1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const hour_2= hour.toString().padStart(2,"0");
    const minutes = currentDate.getMinutes();
    const minutes_2 = minutes.toString().padStart(2,"0");
    const second = currentDate.getSeconds();
    const second_2 = second.toString().padStart(2,'0');
    const daysOfWeek = ["Chủ Nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
    const daysOfWeekIndex = currentDate.getDay();
    const dayOfWeek= daysOfWeek[daysOfWeekIndex];
    const dateTime =`${dayOfWeek}, ${day}/${month}/${year}, ${hour_2}:${minutes_2}:${second_2}`;
document.getElementById("updateTime").textContent=dateTime;},1000)

var food = ['Bún bò','Hủ tiếu','Bánh canh','Phở bò','Nuôi','Bánh mỳ thịt','Bánh cuốn'];
var cost = ['20.000','18.000','17.000','19.000','15.000','12.000','15.000'];
var combine = [];
for (let i=0;i<food.length;i++)
{
    var item = {
        foodName: food[i],
        costValue: cost [i]
    };
    combine.push(item);
}
var combineJSON = JSON.stringify(combine);
localStorage.setItem("combine",combineJSON);

var push = JSON.parse(localStorage.getItem("combine"))
console.log(push);

document.addEventListener("select",function(){
    const tableSelected=document.querySelector("table-slt");
    const foodSelected= document.querySelector("food-slt");
    tableSelected.addEventListener("update", updateOrder);
    foodSelected.addEventListener("update",updateOrder);
})

function updateOrder () {
    const tableUpdate = document.querySelector("table-slt").value;
    const foodUpdate = document.querySelector("food-slt").value;
    const quantity = 1;
    const getPrice = function(foodName) {
        for (let i=0;i<combine.length;i++)
        {
            if (combine[i].foodName === foodName )
            {
                return combine[i].costValue;
            }
        }
    }
    var newRow = document.createElement("tr");
    var foodCell = document.createElement("td");
    foodCell.textContent = foodSelected;
    var quantityCell = document.createElement("td");
    quantityCell.textContent = quantity;
    var priceCell = document.createElement("td");
    priceCell.textContent = getPrice;
    
    newRow.appendChild(foodCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(priceCell);
    
    var orderTable = document.querySelector("orderTable");
    OrderTable.appendChild(newRow);
}
