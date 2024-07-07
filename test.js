
let data = []
    fetch("./data.json")
    .then((response) => {
        return response.json();
      })
    .then((response) => data = response)

const user = () => {
    event.preventDefault()
    let valueSearch = document.getElementById("formSearch").value;
    const userNew = data.filter((item) => {
        return item.name.toLowerCase().includes(valueSearch.toLowerCase());
    })
    console.log(data)
    console.log(userNew)

}
data();