export const receiveAllTransactions = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/transactions`,
        method: 'GET'
    })
} //returns an ajax object (json return value and etc)

export const createATransaction = (transaction, user) => { 
    //with the given transaction and user info, sending the request to the controller(backend) so that it updates the database accordingly
    return $.ajax({
        url: `api/users/${user.id}/transactions`,
        method: 'POST',
        data: { transaction } // transaction is transaction_params in the 'transactions_controller.rb' 
    })
} 
// 1. this ajax call sends the data to the controller
// 2. then backend (index.json.jbuilder) returns a response (payload)

// graph
export const fetchGraphData = (userId) => (
    $.ajax({
        url: `api/transactions/users/${userId}`,
        method: "GET"
    })
)