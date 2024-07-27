import React from 'react'

import {
    IconArrowDownUp
} from '../assets/icons/_index'

export default function NavigationBar({brandTitle = "DCODE", logout = () => console.log("hello world")}) {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <IconArrowDownUp/>
            </label>
        </div>
        <div className="flex-1">
            <a className="text-xl btn btn-ghost">{brandTitle}</a>
        </div>
        {/* <div className="flex-none">
            <ul className="px-1 menu menu-horizontal">
                <li>
                    <details>
                        <summary>
                            Action
                        </summary>
                        <ul className="p-2 rounded-t-none bg-base-100">
                            <li><a onClick={logout}>Logout</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div> */}
    </div>
  )
}
