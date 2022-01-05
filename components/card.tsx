import Image from 'next/image';
import Link from 'next/link';
import photo from '../public/img/cardimg.jpg'
import style from './card.module.scss';

interface cardProps {
    img: StaticImageData;
    alt: string;
    title: string;
    description: string;
}

export default function Card({ img, alt, title, description }: cardProps) {
    return (
        <div className={style.card}>
            <div className={style.image}>
                <Image
                    src={img}
                    alt={alt}
                />
            </div>

            <div className={style.description}>
                <h2>{title}</h2>
                <p>{description}</p>

                <Link href="#">
                    <a>Ver mais</a>
                </Link>
            </div>
        </div>
    );
}