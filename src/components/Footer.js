import React from 'react'

export default function Footer(props) {
    return (
        <footer className={`bg-${props.mode} text-center text-lg-start`} id='footer'>
            <div className={`text-center p-2`} style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',color: props.mode==='dark'?'white':'black'}}>
                © 2023 Copyright : Shaikh Osman
            </div>
        </footer>
    )
}
