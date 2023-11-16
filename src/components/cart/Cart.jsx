import { useState } from 'react';
import style from './Cart.module.css';
import { CartItem } from './CartItem';

export function Cart() {
    const [count, setCount] = useState(0);

    function telefonas(diff, cartItemTitle) {
        setCount(count + diff);
        if (diff === -1) {
            console.log(`Is krepselio isimta: ${cartItemTitle}`);
        } else {
            console.log(`I krepseli ideta: ${cartItemTitle}`);
        }
    }

    return (
        <div className={style.cart}>
            <h2 className={style.title}>Viso: {count}</h2>

            <CartItem title="Pomidoras" skambutis={telefonas} />
            <CartItem title="Agurkas" skambutis={telefonas} />
            <CartItem title="Grietine" skambutis={telefonas} />
        </div>
    )
}