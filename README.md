[<img src="./app/assets/images/benmologo.png" width="200" align=center>](http://benmo.herokuapp.com/)

# 

Benmo is a clone of Venmo, which is a service of PayPal, Inc., a licensed provider of money transfer services. This web application allows users to create an account to use transaction services with their friends.

[Live Demo](http://benmo.herokuapp.com/)

![Benmo Main](./README/benmo.gif)

## Technology
* Frontend: `JavaScript`, `React.js`, `Redux.js`
* Backend: `Ruby on Rails`, `PostgreSQL`, `ActiveRecord`

## Features and MVPs

### User authorization
* Securely salt and hash users' passwords using BCrypt
* Users are able to sign up, login, and logout

![Search](./README/benmo_login.gif)

```ruby
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

```

### Transaction Initiation
* User is able to send payments to friends


![Search](./README/benmo_sendmoney.gif)

```javascript
    handleChange(e, field) {
        if (field === "amount" && parseFloat(e.target.value) < 0) {
            this.setState({ [field]: 0 });
        } else {
            this.setState({ [field]: parseFloat(e.target.value).toFixed(2) });
        }
    }

    handleSubmit(e) {
        if (parseFloat(this.state.amount) === 0) {
            alert("You must give a valid amount");
        } else if (this.state.receiver_id === null) {
            alert("You must select a payee");
        } else {
            this.props.createATransaction(this.state, this.props.currentUser);
        }
    }
```

### Transaction History View
* User is able to see the list of the past transactions in the order of processed date and time


![Search](./README/benmo_transactionhistory.gif)

```javascript
    componentDidMount() {
        this.props.clearTransactions()
        this.props.fetchAll(this.props.currentUser)
    } 

    getDate(string) {
        const month = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"]
        let date = new Date(Date.parse(string));
        
        return (
            `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} at ${date.toTimeString().slice(0, 5)}`
        )
    }
```

### Friends Request



## Future Plans
* Allow users to add comments along with initiating transactions
* Create Responsive UI for different mobile devices

