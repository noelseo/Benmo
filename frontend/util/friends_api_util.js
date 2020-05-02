export const receiveAllFriends = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}/friends`,
        method: 'GET'
    })
}

// http://localhost:3000/api/users/2/friends
// for user: 2
//{"4":{"id":4,"first_name":"Noah","last_name":"Cayman"},"6":{"id":6,"first_name":"Charlie","last_name":"Brown"},"7":{"id":7,"first_name":"Andrew","last_name":"Smith"},"8":{"id":8,"first_name":"Jon","last_name":"Bent"},"5":{"id":5,"first_name":"Jacob","last_name":"Bent"},"3":{"id":3,"first_name":"Mike","last_name":"Madsen"}}