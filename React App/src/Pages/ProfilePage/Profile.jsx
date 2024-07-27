import React from 'react'
import "./profile.scss"

export default function Profile() {
    return (
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="userInfo">
                    <span>Username:<b>Rohan</b></span>
                    <span>Email: <b>xyz</b></span>
                    <span>College: <b>xyz</b></span>
                    <span>Email: <b>xyz</b></span>
                    <span>Email: <b>xyz</b></span>

                    {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Add New Post</button>
                </div>
            </div>
        </div>
    )
}
