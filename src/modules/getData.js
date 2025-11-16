const getData = () => {
// const getData = (text) => {
    // console.log(text);
    // return [1, 2, 3, 4, 5];
    return fetch('https://ozon2025-test-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        console.log(response);
        return response.json()
    })
    .then(json => console.log(json))
};
export default getData;