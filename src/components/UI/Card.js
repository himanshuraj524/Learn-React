// import css class.
import './Card.css';

// This component will be a card like component which will contain all the other components inside it, this is what we called children props.
function Card(props) {
    // below we are adding the calsses into our component class which are coming as attributes from the component.
    const classes = 'card ' + props.className;
    // below we are using the children concept for showing components.
    return <div className={classes}>{props.children}</div>;    
}

export default Card;