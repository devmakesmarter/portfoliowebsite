import "../Rechtliches/Footer.css";

export const Footer = () => {



    const handleClick = () => {

        alert("Bitte drücken Sie links auf den Fingerabdruck. Darüber gelangen Sie zu den Cookieeinstellungen")
    }


    return (

        <div> 

    <footer className="footerlinks">
    <nav>
        <ul>
            <p><a href="/src/Components/Rechtliches/Impressum.js" target="_blank" >Impressum</a></p>
        </ul>
        <ul>
            <p><a href="/src/Components/Rechtliches/Datenschutz.js" target="_blank" >Datenschutz</a></p>
        </ul>
        <ul> <p>  <a href="#"  onClick={() => window.openUcSettings()}>Cookie-Einstellungen</a></p></ul>
        
        
      

    </nav>

</footer>

</div>
    )

}