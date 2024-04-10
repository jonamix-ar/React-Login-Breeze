import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {

    const menuItem = [
        { id: 0, title: 'Inicio', link: '/' },
        { id: 1, title: 'Mis Tramites', link: '/mis-causas' },
        { id: 2, title: 'Mi Perfil', link: '/perfil' },
        { id: 3, title: 'Ayuda', link: '/ayuda' },
        { id: 4, title: 'Contáctanos', link: '/contactanos' },
        { id: 5, title: 'Conócenos', link: '' },
    ]
    
    const icon = <FontAwesomeIcon icon={faUser} title="User" />

    const title = (
        <>
            {icon} {capitalizedFirstName}
        </>
    )

    const logoutItem = { id: 6, title: 'Logout', link: '/logout' }
    menuItem.push(logoutItem)

    return (
        <>
            {menuItem.map((item) => (
                <div key={item.id}>
                    <a href={item.link}>{item.title}</a>
                </div>
            ))}
        </>
    )
}

export default Menu
