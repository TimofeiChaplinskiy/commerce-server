const apiInsertNewOrder =  'http://ec2-54-190-128-187.us-west-2.compute.amazonaws.com' + '/api/orders';


//send POST request to add new Order
function* insertNewOrder(payload) {
    try {
        let response =  fetch(apiInsertNewOrder, {
            method: 'POST',
            crossDomain:true,
            mode: "cors", // or without this line
            redirect: 'follow',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.payload.data)
        });
        yield console.log(`response = ${JSON.stringify(response)}`);
        return yield response;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export const Api = {
    insertNewOrder
};
