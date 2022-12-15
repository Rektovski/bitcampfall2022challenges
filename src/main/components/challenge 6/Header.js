import "../../design/challenge 6/headerStyle.css";
import grandmaLogo from "../../assets/challenge 6/image-hero.jpg";
import rightIcon from "../../assets/challenge 6/icon-arrow-right.svg";

export default function Header(props) {
    const setLocation = () => {
        props.changeLocation();
    }

    return (
        <>
            <div className={'ArtHeader'}>
                <figure className={'rectangle'}></figure>
                <img className={'grandmaHeroImage'} src={grandmaLogo} alt={"grandmaLogo"}/>
                {
                    window.innerWidth >= 1200 &&
                    <div>
                        <div className={'ArtHeaderBigText'}>MODERN</div>
                        <div className={'ArtHeaderBigText2'}>ART GALLERY</div>
                    </div>
                }


                <div className={'ArtHeaderRightSide'}>
                    {
                        (
                            window.innerWidth < 1200 &&
                            <div className={'ArtHeaderTitle'}>
                                <div className={'ArtHeaderBigTextTablet'}>MODERN</div>
                                <div className={'ArtHeaderBigTextTablet2'}>ART GALLERY</div>
                            </div>
                        )
                    }
                    <div className={'ArtHeaderArticle'}>
                        The arts in the collection of the Modern Art Gallery all started from a spark of inspiration.
                        Will these pieces inspire you? Visit us and find out.
                    </div>

                    <div className={'LocationBoxSpace'} onClick={setLocation}>
                        <div className={'LocationBoxText flex-fill'}>
                            OUR LOCATION
                        </div>
                        <div className={'LocationRightArrowSpace'}>
                            <img src={rightIcon} alt={'rightIcon'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}