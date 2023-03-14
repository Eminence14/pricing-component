import './Plans.css';
import { plansData } from '../../data/plans';
import { useRef, useState } from 'react';

const Plans = () => {
    const [isMonthly, setIsMonthly] = useState(true)
    const toggle = useRef(null)
    function handleClick() {
        toggle.current.classList.toggle('active')
        setIsMonthly(!isMonthly)
    }

    return (
        <div className='container'>
            <header>
                <h1>Our Pricing</h1>
                <div className="toggler flexed">
                    <h5>Annually</h5>
                    <div className="toggle-container flexed" ref={toggle} onClick={handleClick}>
                        <div className="inner-toggle"></div>
                    </div>
                    <h5>Monthly</h5>
                </div>
            </header>
            <div className='plan-container'>
                {plansData.map((plan, ind) => (
                    <div className='plan-card' key={ind}>
                        <div className='plan-name'>{plan.name}</div>
                        <div className="plan-price">
                            ${isMonthly ? plan.prices[0] : plan.prices[1]}
                        </div>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className='feature' key={i}>{feature}</div>
                            ))}
                        </div>
                        <button>Learn more</button>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Plans