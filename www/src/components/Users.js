import React from "react"

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstName: 'Bob',
            lastName: 'Marley',
            bio: 'He is a legend of his generation',
            age: 40,
            isHappy: true
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Due',
        bio: 'I dont know who is that guy',
        age: 2,
        isHappy: false
}
    ]

    render() {
        if (this.users.length > 0) {
            return (<div>
                {this.users.map((el) => (<div className="user" key={el.id}> 
                    <h3>{el.firstName} {el.lastName}</h3>
                    <p>{el.bio}</p>
                    <b>{el.isHappy ? 'Happy :)' : 'Not too much :(' } </b>
                    </div>))}
            </div>
        )
        } else {
            return (<div className="user">
                <h3>There are no users</h3>
            </div>)
        }
    }
} 

export default Users