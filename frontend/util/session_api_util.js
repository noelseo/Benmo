//util works as a middleman between frontend and backend
//uses http request through ajax method(Asynchronous JavaScript And XML.) and sends the request to rails
//ajax method returns the XMLHttpRequest object that it creates

// Ajax powered web page retrieves the web page from the server which is new or changed unlike other web - page where you have to refresh the page to get the latest information.

// Rails triggers an Ajax Operation in following ways

// Some trigger fires: The trigger could be a user clicking on a link or button, the users inducing changes to the data in the field or on a form
// Web client calls the server: A Java - script method, XMLHttpRequest, sends data linked with the trigger to an action handler on the server.The data might be the ID of a checkbox, the whole form or the text in the entry field
// Server does process: The server side action handler does something with the data and retrieves an HTML fragment to the web client
// Client receives the response: The client side JavaScript, which Rails generates automatically, receives the HTML fragment and uses it to update a particular part of the current


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