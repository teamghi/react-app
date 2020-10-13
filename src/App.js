import React, {useState} from 'react';
import logo1 from './logo.svg';
import logo2 from './logo512.png';
import './App.css';


function App() {
    
    const [logoSrc, setLogoSrc] = useState('');
    
    const changeSrc = () => {
        if (logoSrc === logo1)
        {
            setLogoSrc(logo2);
        } else {
            setLogoSrc(logo1);
        }
    };
    
    return (
        <div className="App">
            <h1>Hello world !</h1>
            <button onClick={changeSrc}>Toggle logo</button>
            <Logo logoSrc={logoSrc}/>
        </div>
    );
}

function Logo(props) {
    return (
        <img src={props.logoSrc} alt={'logo'}/>
    );
}

export default App;
