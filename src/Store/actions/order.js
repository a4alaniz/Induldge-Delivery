export const submitOrder = (order) => dispatch => {
    fetch("http://localhost:3001/api/v1/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            order
        })
    })
    .then(response => response.json())
 }