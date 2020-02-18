export const receiveAllFriends = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/friends`,
        method: 'GET'
    })
}

// ///////
// export const receiveAFriend = (userId) => {
//     return $.ajax({
//         url: `/api/users/${userId}`,
//         method: 'GET'
//     })
// }