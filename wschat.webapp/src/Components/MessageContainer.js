import React from 'react'

const MessageContainer = ({messages}) => {
  return (
    <div>
        {
            messages.map((message, index) => {
                return (
                    <table striped bordered>
                        <tr key={index}>
                            <td>{message.user}: {message.message}</td>
                        </tr>
                    </table>
                )
            })
        }
    </div>
  )
}

export default MessageContainer
