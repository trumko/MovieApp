import React from "react"
import classnames from 'classnames'

import Logo from 'components/Logo/Logo'

import './Header.scss'

export default function Header({ className, children }) {

  return (
    <div className={classnames('mr_header', className)}>
      <div className="mr_container mr_headerContent">
        <Logo />
        {children}
      </div>
    </div>
  )
}
