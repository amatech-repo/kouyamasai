import EmailIcon from "@mui/icons-material/Email";
import LazyLoad from "react-lazy-load";
import { MailTo } from "./Amatech/MailTo";
import YoutubeIcon from "@mui/icons-material/YouTube";

type Props = {
    name: string;
    label: string;
    knowMoreLink?: string;
    mail: string;
    YoutubeLink?: string;
};

export const Info = (props: Props) => {
    const { name, label, knowMoreLink, mail, YoutubeLink } = props;
    return (
        <>
            <LazyLoad height={300}>
                <img src="./images/ogp.PNG" alt="プロフィール画像" />
            </LazyLoad>
            <section className="section-info">
                <h2 className="name">{name}</h2>
                <p className="stack">{label}</p>
                {knowMoreLink && (
                    <small>
                        <a href={knowMoreLink} target="_" rel="noopener noreferrer">
                            Know more
                        </a>
                    </small>
                )}
                <div className="contact">
                    {/* <MailTo email={mail} subject="お話しましょう！" body="こんにちは！あまてく！" className="mailto">
                        <EmailIcon className="icon" fontSize="small" />
                        <span>Email</span>
                    </MailTo> */}
                    {YoutubeLink && (
                        <div className="Youtube">
                            <a href={YoutubeLink} target="_" rel="noopener noreferrer" >
                                <YoutubeIcon className="icon" fontSize="small" />
                                <span>Youtube</span>
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
