import "../Uebermich/Uebermich.css";
import foto from "../Uebermich/Pictures/uebermich.jpg";



var text = <p>Mit mehr als über zehn Jahre Berufserfahrungen in diversen kaufmännischen Unternehmen, habe ich eine Erkenntnis sehr tief verinnerlicht: Um die Herausforderungen von Morgen zu meistern, muss man die Sprache der Zukunft sprechen – das Programmieren.
Die Fähigkeit eine Idee technisch umzusetzen, genauer gesagt, es für den Computer übersetzen zu können, ist eine Kernkompetenz für die Lösung zukünftiger Herausforderungen. 
ich nach und nach auf meiner Homepage.
</p>;


export const Uebermich = () => {


    return(

        <div> 
        <div className="containerthatcontainsthegriduebermich" id="uebermich">
        <div className="containerforgriduebermich" > 

        <div className="leftsideinsidethegriduebermich" > <div className="containerfortext" > <p>Mit mehr als über zehn Jahre Berufserfahrung in diversen kaufmännischen Unternehmen, habe ich eine Erkenntnis sehr tief verinnerlicht: Um die Herausforderungen von Morgen zu meistern, muss man die Sprache der Zukunft sprechen.
Die Fähigkeit eine Idee technisch umzusetzen, genauer gesagt, es für den Computer übersetzen zu können, ist eine Kernkompetenz für die Lösung zukünftiger Herausforderungen. 

</p>
            </div>
            </div>

        <div className="rightsideinsidethegriduebermich" > <img className="imginsidetherighttgriduebermich" src={foto} alt="foto"></img></div>

        </div>
        </div>
        </div>



    )



}