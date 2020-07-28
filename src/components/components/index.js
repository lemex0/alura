import react from 'react'

function Buttonlink(props){
    // props => (className: "o que alguem  passar", href: "/")
        console.log(props)
    return (
<a href={props.href} className={props.className}>
    {props.children}
    Novo Vídeo
</a>
    );
} 

export default Buttonlink;