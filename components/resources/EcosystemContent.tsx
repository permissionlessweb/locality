import { Button, Center } from '@chakra-ui/react';
import { networkData } from './networks';
import React, { useState, useEffect } from "react";
import Network  from './content';

export const EcosystemContent = () => {
    const [availableNetwork, setAvailableNetwork] = useState<Network[]>();
    const [active, setActive] = useState<string>("1");

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActive(event.currentTarget.id);

        if (event.currentTarget.id === '1') {
            setAvailableNetwork(networkData);
        }

        if (event.currentTarget.id === '2') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Hotlines";
            }));
        }

        if (event.currentTarget.id === '3') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Global";
            }));
        }

        if (event.currentTarget.id === '4') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Mental Health";
            }));
        }

        if (event.currentTarget.id === '5') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Manuals";
            }));
        }

        if (event.currentTarget.id === '6') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Integration";
            }));
        }
        if (event.currentTarget.id === '7') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Education";
            }));
        }
        if (event.currentTarget.id === '8') {
            setAvailableNetwork(networkData.filter(function (item) {
                return item.name === "Policy";
            }));
        }
    };

    useEffect(() => {
        setAvailableNetwork(networkData);
    }, []);

    return (
        <section className="ecosystem-section">
            <div className="container">

                <Center>
                    <p className="sub-heading">
                    </p></Center>
                <div className={'sortbuttons'} id={'myDIV'}>
                    <Button
                        key={1}
                        className={active === "1" ? "active" : undefined}
                        id={"1"}
                        onClick={handleClick}>
                        All</Button>
                    <Button
                        key={2}
                        className={active === "2" ? "active" : undefined}
                        id={"2"}
                        onClick={handleClick}
                    >HOTLINES</Button>
                    <Button
                        key={3}
                        className={active === "3" ? "active" : undefined}
                        id={"3"}
                        onClick={handleClick}
                    >HOTLINES - Global</Button>
                    <Button
                        key={4}
                        className={active === "4" ? "active" : undefined}
                        id={"4"}
                        onClick={handleClick}
                    >MENTAL HEALTH </Button>
                    <Button
                        key={5}
                        className={active === "5" ? "active" : undefined}
                        id={"5"}
                        onClick={handleClick}
                    >PRODUCTS</Button>
                    <Button
                        key={6}
                        className={active === "6" ? "active" : undefined}
                        id={"6"}
                        onClick={handleClick}
                    >SERVICES</Button>
                    <Button
                        key={7}
                        className={active === "7" ? "active" : undefined}
                        id={"7"}
                        onClick={handleClick}
                    >COMMUNITIES</Button>

                </div>
                <div className="network-section">
                    {availableNetwork && availableNetwork.map((item, i) => (
                        <a key={i} href={item.wikilink} target="_blank" rel="noopener noreferrer">
                            <div key={i} className="networklist-tiles">
                                <h5>{item.network}</h5>
                                <h6>{item.description}</h6>
                                <span className={'networkname'}>{item.name}</span>
                                <span className={'status'}>
                                    {item.status === 'ComingSoon' ?
                                        <span className={'nodot'}></span> : <span className={'dot'}></span>}
                                    &nbsp;{item.status}</span>
                            </div> </a>
                    ))}

                </div>

            </div>
        </section>

    );
};
