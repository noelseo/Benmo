export const receiveAllFriends = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/friends`,
        method: 'GET'
    })
}