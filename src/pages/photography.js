import Brussels1 from '../photos/IMG_4173.JPG'
import Brussels2 from '../photos/IMG_4207.JPG'
import Munich1 from '../photos/IMG_6511.JPG'
import Munich2 from '../photos/IMG_6462.JPG'
import Munich3 from '../photos/IMG_6527.JPG'
import Berlin1 from '../photos/IMG_4831.JPG'
import Berlin2 from '../photos/IMG_4911.JPG'
import Vienna1 from '../photos/IMG_5499.JPG'
import Vienna2 from '../photos/IMG_5755.JPG'
import Neuschwanstein1 from '../photos/IMG_6177.JPG'
import Neuschwanstein2 from '../photos/IMG_6334.JPG'
import Venice1 from '../photos/IMG_6674.JPG'
import Venice2 from '../photos/IMG_6695.JPG'
import Venice3 from '../photos/IMG_6783.JPG'
import Venice4 from '../photos/IMG_6863.JPG'
import Florence1 from '../photos/IMG_7027.JPG'
import Florence2 from '../photos/IMG_7066.JPG'
import Florence3 from '../photos/IMG_7369.JPG'
import Florence4 from '../photos/IMG_7417.JPG'
import Florence5 from '../photos/IMG_7429.JPG'
import Vatican1 from '../photos/IMG_7655.JPG'
import Vatican2 from '../photos/IMG_7715.JPG'
import Rome1 from '../photos/IMG_7489.JPG'
import Rome2 from '../photos/IMG_8396.JPG'
import Rome3 from '../photos/IMG_8255.JPG'
import Paris1 from '../photos/IMG_8557.JPG'
import Paris2 from '../photos/IMG_8611.JPG'
import Paris3 from '../photos/IMG_8655.JPG'
import Paris4 from '../photos/IMG_8794.JPG'
import Paris5 from '../photos/IMG_8850.JPG'
import CliffsOfMoher1 from '../photos/IMG_8953.JPG'
import CliffsOfMoher2 from '../photos/IMG_8947.JPG'
import CliffsOfMoher3 from '../photos/IMG_9180.JPG'
import CliffsOfMoher4 from '../photos/IMG_9200.JPG'
import CliffsOfMoher5 from '../photos/IMG_9205.JPG'
import CliffsOfMoher6 from '../photos/IMG_9255.JPG'
import CliffsOfMoher7 from '../photos/IMG_9266.JPG'
import CliffsOfMoher8 from '../photos/IMG_9284.JPG'
import CliffsOfMoher9 from '../photos/IMG_9315.JPG'
import InisOirr1 from '../photos/IMG_8975.JPG'
import InisOirr2 from '../photos/IMG_8981.JPG'
import InisOirr3 from '../photos/IMG_9001.JPG'
import InisOirr4 from '../photos/IMG_9030.JPG'
import InisOirr5 from '../photos/IMG_9056.JPG'
import InisOirr6 from '../photos/IMG_9067.JPG'
import InisOirr7 from '../photos/IMG_9074.JPG'


function Photo(props){
  return (
    <div className="gallery-spot">
      <a target="_blank" rel="noreferrer" href={props.filePath} >
        <img className="photo"
          src={props.filePath}
          alt={props.name}
        />
      </a>
      <div className="location">
        <div className="location-text">{props.location}</div>
      </div>
    </div>
  )
}

export default function Photography() {
  return (
    <div className="photography">
      <div className="section-header">Photography</div>
        <div className="gallery">
          <Photo 
            filePath={CliffsOfMoher7}
            alt="Cliffs of Moher Lookout Tower" 
            location="Cliffs of Moher, Ireland"
          />
          <Photo 
            filePath={CliffsOfMoher6}
            alt="Cliffs of Moher" 
            location="Cliffs of Moher, Ireland"
          />
          <Photo 
            filePath={InisOirr5}
            alt="Inis O&iacute;rr" 
            location="Inis O&iacute;rr, Ireland"
          />
          <Photo 
            filePath={InisOirr6}
            alt="Inis O&iacute;rr" 
            location="Inis O&iacute;rr, Ireland"
          />
          <Photo 
            filePath={Paris2}
            alt="Sacr&eacute;-Coeur" 
            location="Sacr&eacute;-Coeur Paris, France"
          />
          <Photo 
            filePath={Paris1}
            alt="Arc de Triomphe" 
            location="Arc de Triomphe Paris, France"
          />
          <Photo 
            filePath={Rome2}
            alt="Roman Colosseum" 
            location="Roman Colosseum Rome, Italy"
          />
          <Photo 
            filePath={Florence5}
            alt="Florence" 
            location="Florence, Italy"
          />
          <Photo 
            filePath={Vatican2}
            alt="Saint Peter's Square" 
            location="Saint Peter's Square, Vatican City"
          />
          <Photo 
            filePath={Venice4}
            alt="Venice" 
            location="Venice, Italy"
          />
          <Photo 
            filePath={InisOirr4}
            alt="Inis O&iacute;rr" 
            location="Inis O&iacute;rr, Ireland"
          />
          <Photo 
            filePath={Paris5}
            alt="Eiffel Tower" 
            location="Eiffel Tower Paris, France"
          />
          <Photo 
            filePath={Florence3}
            alt="Florence" 
            location="Florence, Italy"
          />
          <Photo 
            filePath={InisOirr2}
            alt="Inis O&iacute;rr" 
            location="Inis O&iacute;rr, Ireland"
          />
          <Photo 
            filePath={CliffsOfMoher5}
            alt="Cliffs of Moher" 
            location="Cliffs of Moher, Ireland"
          />
          <Photo 
            filePath={InisOirr7}
            alt="Inis O&iacute;rr" 
            location="Inis O&iacute;rr, Ireland"
          />
          <Photo 
            filePath={CliffsOfMoher9}
            alt="Cliffs of Moher" 
            location="Cliffs of Moher, Ireland"
          />
          <Photo 
            filePath={Venice2}
            alt="Venice" 
            location="Venice, Italy"
          />
          <Photo 
            filePath={Venice1}
            alt="Venice" 
            location="Venice, Italy"
          />
          <Photo 
            filePath={Vienna1} 
            alt="Vienna Gardens" 
            location="Vienna, Austria"
          />
          <Photo 
            filePath={Brussels1} 
            alt="Brussels center" 
            location="Grote Markt Brussels, Belgium"
          />
          <Photo 
            filePath={Brussels2} 
            alt="Brussels center" 
            location="Grote Markt Brussels, Belgium"
          />
          <Photo 
            filePath={Munich1} 
            alt="Olympiapark Munich" 
            location="Olympiapark Munich, Germany"
          />
          <Photo 
            filePath={Munich2} 
            alt="Olympiapark Munich" 
            location="Olympiapark Munich, Germany"
          />
          <Photo 
            filePath={Munich3} 
            alt="Olympiapark Munich" 
            location="Olympiapark Munich, Germany"
          />
          <Photo 
            filePath={Berlin2} 
            alt="Berlin" 
            location="Berlin, Germany"
          />
          <Photo 
            filePath={Florence2}
            alt="Florence" 
            location="Florence, Italy"
          />
          <Photo 
            filePath={CliffsOfMoher3}
            alt="Cliffs of Moher" 
            location="Cliffs of Moher, Ireland"
          />
          <Photo 
            filePath={Neuschwanstein1} 
            alt="Neuschwanstein" 
            location="Hohenschwangau, Germany"
          />
          <Photo 
            filePath={Neuschwanstein2} 
            alt="Neuschwanstein Terrace Views" 
            location="Hohenschwangau, Germany"
          />
          <Photo 
            filePath={Paris3} 
            alt="Building in Paris" 
            location="Paris, France"
          />
          <Photo 
            filePath={Venice3} 
            alt="Venice Port" 
            location="Venice, Italy"
          />
          <Photo 
            filePath={Paris4} 
            alt="View from the Eiffel Tower" 
            location="Paris, France"
          />
          <Photo 
            filePath={Berlin1} 
            alt="Berlin" 
            location="Berlin, Germany"
          />
        </div>
    </div>
  );
}
