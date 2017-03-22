import React from 'react';
import ReactDOM from 'react-dom';


var contacts = [
    {
        id: 1,
        name: 'Дима Петров',
        phoneNumber: '+79851112233',
        image: 'https://pp.userapi.com/c638427/v638427992/143f4/Nq7_E56I_B0.jpg',
    },
    {
        id: 2,
        name: 'Настя Мошникова',
        phoneNumber: '+798533344355',
        image: 'https://pp.userapi.com/c837429/v837429984/3a7f6/qX-E-PN-xhk.jpg',
    },
    {
        id: 3,
        name: 'Полина Немчак',
        phoneNumber: '+79856667788',
        image: 'https://pp.userapi.com/c638617/v638617983/16010/NwBl43f1VI8.jpg',
    },
    {
        id: 4,
        name: 'Никита Кожедуб',
        phoneNumber: '+79859990011',
        image: 'https://pp.userapi.com/c628522/v628522318/6bb8/C_sR3nZMF7E.jpg',
    },
]

class Contact extends React.Component {
    render(){
        return <li className='contacts__item'>
            <img className='contacts__img' src={ this.props.image } />
            <div className='contacts__info'>
                <div className='contacts__name'>{ this.props.name }</div>
                <div className='contacts__phone'>{ this.props.phoneNumber }</div>
            </div>
        </li>;
    }
}

class App extends React.Component {
    render() {
        return <div className='contacts'>
                <ul className='contacts__list'>
                    {
                        contacts.map(el => {
                            return <Contact key={ el.id } name={ el.name } phoneNumber={ el.phoneNumber } image={ el.image } />;
                        })
                    }
                </ul>
            </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
