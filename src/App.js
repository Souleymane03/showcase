import {SectionWrapper, Download, Features} from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
    return (
        <>
            <SectionWrapper
                title="Your own store of Nifty NFT store. Start Selling & Growing. "
                description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNerf Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Smart User Interface Marketplace"
                description="Experience a buttery UI of ProNef NTF Marketplace. Smooth constant colors of a fluent UI design."
                mockupImg={assets.homeCards}
                reverse
            />
            <Features/>
            <SectionWrapper
                title="Deployement"
                description="ProNerf is build using Expo which runs natively on all users' devices. You can easily get your app into people hands"
                showBtn
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screens. The first lists all NFTs while the second one shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner="banner02"
            />
            <Download  link="https://github.com/Souleymane03/pronerf.git"/>
            <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
                <p className={`${styles.pText} ${ styles.whiteText }`}>Made with love by { " "}
                      <span className="bold">ApiMan</span>
                </p>
            </div>
        </>
    );
}

export default App;
