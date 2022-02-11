import React from 'react';

import '../styles/Header.scss';

export default function Coffee() {
    return (
        <a
            className="buyButton"
            target="_blank"
            href="https://www.buymeacoffee.com/muzamilrank"
        >
            <img
                className="coffeeImage"
                src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                alt="Buy me a coffee"
            />
            <span className="coffeeButtonText">Buy me a coffee</span>
        </a>
    );
}