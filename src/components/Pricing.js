import React, { useState, useEffect } from "react";
import mixMasteringData from '../data/pricing-data/mix-master-data'
import preSetsData from '../data/pricing-data/pre-sets-data'
import './Pricing.css'

function Pricing(){

    useEffect(() => {
        document.title = "LLXYD | Pricing";
    }, []);

    const [mixmasterStates, setMixmasterStates] = useState(Array(mixMasteringData.length).fill(false))
    const [presetStates, setPresetStates] = useState(Array(preSetsData.length).fill(false))

    const toggleMixmasterState = (index) => {
        const updatedMixmasterStates = [...mixmasterStates]
        updatedMixmasterStates[index] = !updatedMixmasterStates[index]
        setMixmasterStates(updatedMixmasterStates)
    }
    const togglePresetState = (index) => {
        const updatedPresetStates = [...presetStates]
        updatedPresetStates[index] = !updatedPresetStates[index]
        setPresetStates(updatedPresetStates)
    }

    return(
        <>
            <main className="main-element-pricing">
                <section className="first-section">
                    <h2 className="product-title">MIX / MASTER</h2>
                    {mixMasteringData.map((mixMaster, index) => (
                        <div key={mixMaster.id}>
                            <div className="product-set-wrap">
                                <div className="product-set">
                                    <div onClick={() => toggleMixmasterState(index)} className={mixmasterStates[index] ? `${mixMaster.class} product-column` : 'product-column'}>
                                        <h3 className="name-pricing">{mixMaster.name}</h3>
                                        <p className="sound-class-pricing">{mixMaster.soundClass} / <span className="price-span">{`$${mixMaster.price}`}</span></p>
                                        <p className="read-more-pricing">INFORMATION</p>
                                        <div className="desc-column">
                                            {mixMaster.desc.split('\n').map((line, index) => (
                                                <p className="mixmaster-description" key={index}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <a href={mixMaster.checkout}>
                                        <button id={`${mixMaster.id}-buy-btn`} className="buy-pricing-btns left-pricing-btns">
                                            BUY
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <section>
                    <h2 className="product-title">PRE-SETS</h2>
                    {preSetsData.map((preSet, index) => (
                        <div key={preSet.id}>
                            <div className="product-set">
                                <div onClick={() => togglePresetState(index)} className={presetStates[index] ? `${preSet.class} product-column` : 'product-column'}>
                                    <h3 className="name-preset">{preSet.name}</h3>
                                </div>
                                <a href={preSet.checkout}>
                                    <button id={`${preSet.id}-buy-btn`} className="buy-pricing-btns right-pricing-btns">BUY</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Pricing