import React, {useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Anime from './components/Anime';


function App() {
    const [content, setContent] = useState('Content')

    const changeContent =() => {
        setContent('Anime')
    };

    return (
        <div>
            <Header onChangeContent={changeContent} />
            {
                content === 'Content' ? <Content /> : <Anime />
            }
        </div>
    )

}

export default App;