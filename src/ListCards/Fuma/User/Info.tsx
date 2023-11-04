import LazyLoad from "react-lazy-load";
import YoutubeIcon from "@mui/icons-material/YouTube";

type Props = {
  name: string;
  label: string;
  knowMoreLink?: string;
  mail: string;
  YoutubeLink?: string;
};

export const Info = (props: Props) => {
  const { name, label, knowMoreLink, YoutubeLink } = props;
  return (
    <>
      <LazyLoad height={300}>
        {/* ogp.PNGを新しく追加した画像に変更してください */}
        {/* 例: ./images/**.png */}
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
          {YoutubeLink && (
            <div className="Youtube">
              <a href={YoutubeLink} target="_" rel="noopener noreferrer">
                <YoutubeIcon className="icon" fontSize="small" />
                <span>Youtube</span>
              </a>
            </div>
          )}
          {/* 応用編: 好きなサイトに飛べるボタンを作成しよう */}
          <a href="" target="_" rel="noopener noreferrer">
            <span>あまてくHP</span>
          </a>
        </div>
      </section>
    </>
  );
};
