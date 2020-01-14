export const receiveAllTransactions = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/transactions`,
        method: 'GET'
    })
}

export const createTransaction = (transaction) => {
    return $.ajax({
        url: `api/transactions`,
        method: 'POST',
        data: { transaction }
    })
}