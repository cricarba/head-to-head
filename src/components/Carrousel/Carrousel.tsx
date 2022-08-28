import React from "react";
import { CarrouselProps } from "./Carrousel.Type";
import "./Carrousel.css";
export const Carrousel = ({images}: CarrouselProps): JSX.Element => {
   const [currently, setCurrently] = React.useState<number>(0);
   const [next, setNext] = React.useState<number>(1);
   const [previous, setPrevious] = React.useState<number>(images.length - 1);

    const max = images.length - 1;
    const moveTo : number = 1;

    const moveToNext = () => {    
        var nextIndex = next === max  ? 0 : next + moveTo ;
        setPrevious(currently);
        setCurrently(next);
        setNext(nextIndex);
    }

    const moveToPrevious = () =>{  
        var previousIndex = previous == 0 ? max : previous - moveTo ;
        setPrevious(previousIndex);
        setNext(currently);
        setCurrently(previous);
    }
    return (
        < React.Fragment>
           <img src={`${images[previous]}`} onClick={moveToPrevious}></img>
           <br></br>
           <img src={`${images[currently]}`} className="currently"></img>
           <br></br>
           <img src={`${images[next]}`} onClick={moveToNext}></img>
           
        </React.Fragment>
    )
}