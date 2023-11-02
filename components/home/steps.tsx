import { useChain } from "@cosmos-kit/react";
import { LargeButton } from "components/base/buttons";
import { Connected, Connecting, Disconnected, NotExist, Rejected, WalletConnectComponent } from "components/wallet-ui";
import { chainName } from "config";
import { chakra, Stack, Box, Text, Button, Flex, Center } from "@chakra-ui/react";


export default function Steps() {
    const {
        connect,
        openView,
        status,
        username,
        address,
        message,
        wallet,
        chain: chainInfo,
        logoUrl,
    } = useChain(chainName);


    const chain = {
        chainName,
        label: chainInfo.pretty_name,
        value: chainName,
        icon: logoUrl,
    };


    // Events
    const onClickConnect: MouseEventHandler = async (e) => {
        e.preventDefault();
        await connect();
    };

    const onClickOpenView: MouseEventHandler = (e) => {
        e.preventDefault();
        openView();
    };


    // Components
    const connectWalletButton = (
        <WalletConnectComponent
            width="260px"
            walletStatus={status}
            disconnect={
                <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
            }
            connecting={<Connecting />}
            connected={
                <Connected buttonText={'My Wallet'} onClick={onClickOpenView} />
            }
            rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
            error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
            notExist={
                <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
            }
        />
    );



    function toRegistration() {
        router.push('/register');

    }

    return (
        <>
            <Center>
                <div className="steps-container">

                    <div className="steps-card">
                        <div className="inner-card">
                            <div className="step-one-card">
                                <h1>  <Text
                                    fontSize={{
                                        base: "4xl",
                                        sm: "5xl",
                                        md: "6xl",
                                    }}
                                    display={{
                                        base: "block",
                                        lg: "inline",
                                    }}
                                    w="full"
                                    bgClip="text"
                                    bgColor="green.400"
                                    fontWeight="extrabold"
                                >1</Text></h1>
                                <h1 className="medium-text" color="green.400">Swap Into Stargaze</h1>
                                <p>From any blockchain into Stargaze</p>
                                <br />
                                <LargeButton
                                    width="260px"
                                    btnContent="Go to app"
                                    handleClick={toRegistration}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="steps-card">
                        <div className="inner-card">
                            <div className="step-one-card">
                                <h1>
                                    <Text
                                        fontSize={{
                                            base: "4xl",
                                            sm: "5xl",
                                            md: "6xl",
                                        }}
                                        display={{
                                            base: "block",
                                            lg: "inline",
                                        }}
                                        w="full"
                                        bgClip="text"
                                        color="#648BA7"
                                        fontWeight="extrabold"
                                    >2</Text></h1>
                                <Text
                                    fontWeight="extrabold"
                                    fontSize=" 1.5rem"
                                    lineHeight="1.5"
                                    color="#648BA7">Enter Raffle</Text>
                                <p>Purchase Raffle Token with USDC</p>
                                <br />
                                {connectWalletButton}

                            </div>
                        </div>
                    </div>
                    <div className="steps-card">
                        <div className="inner-card">
                            <div className="step-one-card">
                                <h1>
                                    <Text
                                        fontSize={{
                                            base: "4xl",
                                            sm: "5xl",
                                            md: "6xl",
                                        }}
                                        display={{
                                            base: "block",
                                            lg: "inline",
                                        }}
                                        w="full"
                                        bgClip="text"
                                        bgColor="#805AD5"
                                        fontWeight="extrabold"
                                    >3</Text></h1>
                                <Text fontWeight="extrabold"
                                    fontSize=" 1.5rem"
                                    lineHeight="1.5"
                                    color="#805AD5">Winner Declared 1/1/24</Text>
                                <p>Follow updates on DAO DAO</p>
                                <br />
                                <LargeButton
                                    width="260px"
                                    btnContent="Follow Terp on X"
                                    handleClick={toRegistration}

                                />

                            </div>
                        </div>
                    </div>
                </div>
            </Center>
        </>
    )
}