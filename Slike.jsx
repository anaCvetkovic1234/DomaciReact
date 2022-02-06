import React,{useState} from 'react';
import "./Slike.css";
import KarticaSlika from '../../Elementi/KarticaSlika/KarticaSlika';
function Slike() {
    var slike=[
        "https://media.istockphoto.com/photos/young-black-woman-with-curly-hair-in-yellow-dress-and-with-styles-picture-id1295901898?s=612x612",
        "https://media.istockphoto.com/photos/beautiful-emotional-woman-wearing-shiny-dress-picture-id1311529540?s=612x612",
        "https://media.istockphoto.com/photos/fashion-portrait-of-caucasian-woman-in-tight-black-jersey-dress-with-picture-id1294183777?s=612x612",
        "https://media.istockphoto.com/photos/party-time-cheerful-young-african-american-woman-dancing-in-confetti-picture-id1286580777?s=612x612",
        "https://media.istockphoto.com/photos/woman-legs-in-black-ankle-boots-with-bag-picture-id947152114?s=612x612",
        "https://media.istockphoto.com/photos/young-woman-in-cowboy-boots-sits-on-the-street-picture-id1298389643?s=612x612",
        
    ];
    const [korpa,setKorpa]=useState([]);
    function unesiNoviElement(link){
        setKorpa([...korpa,link]);
        console.log(korpa);
    }
    function izbaciElement(link1){
        setKorpa(korpa.filter(link=>link!==link1));
        console.log(korpa);
    }
    var i=0,i1=0;
    return (
        <div id='slike'>
            <h1 className='naslovi'>Odeca</h1>
            <div className='galerija'>
                { slike.map((slika)=>(
                    <KarticaSlika key={++i} slika={slika} naslov={"Haljine i cizme"} opis={"opis"} funkcija={unesiNoviElement} dugme={"Dodaj u korpu"}/>
                ))}
            </div>
            <h1 className='naslovi'>Dodaj u korpu</h1>
            <div className='galerija'>
                { korpa.map((slika)=>(
                    <KarticaSlika key={++i1} slika={slika} naslov={"Dodato u korpu"} opis={"opis"} funkcija={izbaciElement} dugme={"Izbaci iz korpe"}/>
                ))}
            </div>
        </div>
    )
}

export default Slike
