// import artistCss from '@/styles/Artist.module.css';
import Image from 'next/image'


export default function ArtistComponent(props){
    
    return (
        <>
            <div className={artistCss.flipCard}>
                <div className={artistCss.flipCardInner}>
                    <div className={artistCss.flipCardFront}>
                        <Image src={props.src} alt="Artist Img" width={200} height={200} priority/>
                    </div>
                    <div className={artistCss.flipCardBack}>
                        <h1>{props.aka}</h1>
                        
                        <p>{props.description}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}