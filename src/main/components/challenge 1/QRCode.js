import "../../styles/challenge 1/QRCode.css";
import qrlogo from "../../images/challenge 1/image-qr-code.png";

export default function QRCode() {
    return (
        <>
            <div className={'QRCode'}>
                <div className={'QRCard'}>
                    <img className={'QRCardImage'} src={qrlogo} alt={'qrcode logo'}/>
                    <div className={'QRHeaderText'}>
                        Improve your front-end skills by building projects
                    </div>
                    <div className={'QRFooterText'}>
                        Scan the QR code to visit Frontend Mentor and take
                        your coding skills to the next level
                    </div>
                </div>
            </div>
        </>
    )
}