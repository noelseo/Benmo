export const receiveAllTransactions = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/transactions`,
        method: 'GET'
    })
} //returns an ajax object (json return value and etc)

export const createATransaction = (transaction, user) => {
    return $.ajax({
        url: `api/users/${user.id}/transactions`,
        method: 'POST',
        data: { transaction } // transaction is transaction_params in the 'transactions_controller.rb'
    })
} //returns an ajax object (json return value and etc)
