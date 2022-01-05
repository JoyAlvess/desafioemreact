import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/img/logoJoyce.png';
import signature from '../public/img/signature.png';
import style from './layout.module.scss';

interface LayoutProps {
    children: JSX.Element;
}

export default function Layout({children} : LayoutProps) {
    return (
        <>
            <Head>
                <title>Desafios Resolvidos</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600&family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>

            <nav className={style.containerNav}>
                <ul className={style.itensNav}>
                    <li className={style.logo}>
                        <Link href="#">
                            <Image
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Glossário
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Formulário de Compras
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Lista de Compras
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Quiz
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>
                                Blog Post
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className={style.main}>{children}</main>

            <footer className={style.footer}>
                <div className={style.itensFooter}>
                    <span>Feito por </span>
                    <Image 
                        src={signature}
                        alt="Imagen de Coração"
                    />
                    <span> Joy Alves</span>
                </div>
            </footer>
        </>
    );
}