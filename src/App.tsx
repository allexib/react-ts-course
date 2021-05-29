import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Kama', email: 'faf@gag.cc', address: {city: 'Daga', street: 'Ara', zipcode: '111'}},
        {id: 2, name: 'Gaba', email: 'faf@gag.cc', address: {city: 'Dag', street: 'Ara', zipcode: '111'}}
    ]
    return (
        <div>
            <Card variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Кнопка</button>
                <div>text</div>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;
