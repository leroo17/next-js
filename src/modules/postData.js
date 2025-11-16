const getData = () => {
// const getData = (text) => {
    // console.log(text);
    // return [1, 2, 3, 4, 5];
    return fetch('http://localhost:3000/goods/23', {
        method: 'DELETE',

    })
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(json => console.log(json))
    // return fetch('http://localhost:3000/goods', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         id: 23,
    //         title: "Ведьмак 3",
    //         price: 3000,
    //         sale: true,
    //         img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
    //         category: "Игры и софт"
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    // .then((response) => {
    //     console.log(response);
    //     return response.json()
    // })
    // .then(json => console.log(json))
};
export default getData;