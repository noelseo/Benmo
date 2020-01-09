//util works as a middleman between frontend and backend
//uses http request through ajax method(Asynchronous JavaScript And XML.) and sends the request to rails
//ajax method returns the XMLHttpRequest object that it creates


export const createUser = (user) => { //user info received from the user
    return $.ajax({
        url: '/api/users', //routes.rb ('routes table') routes to users_controller.rb
        method: 'POST',
        data: { user } //{ user: user }
    })
} 

export const loginUser = (user) => {
    return $.ajax({
        url: '/api/session', //routes.rb ('routes table') routes to sessions_controller.rb
        method: 'POST',
        data: { user }
    })
}

export const logoutUser = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}


//session_actions.js <- -> routes.rb