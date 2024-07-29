import React from 'react'

import MessagerImage from '../../src/assets/img/1024.png'

function Messenger() {
  return (
    <div>
        <button
            // className="fixed px-4 py-2 font-bold text-white bg-blue-700 rounded-full shadow-lg bg-blue bottom-5 right-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            className="fixed px-4 py-2 font-bold text-white rounded-full bottom-5 right-5 focus:outline-none focus:ring-2 focus:ring-opacity-50"
            onClick={() => window.open('https://m.me/100381302855923', '_blank')}>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full shadow-lg">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={MessagerImage} />
                    </div>
                </div>
                <div className="text-white bg-blue-700 shadow-lg chat-bubble">Chat Us On Messenger</div>
            </div>
        </button>
    </div>
  )
}

export default Messenger