import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Description(){
    return (
        <>
        <div className={styles.description}>
          <p>Lorem ipsum dolor sit amet,&nbsp;
            <code className={styles.code}> XXXXXX</code>
          </p>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">By{' '}
              <Image src="/AP-dev.png" alt="AP Logo" className={styles.apLogo} width={100} height={90} priority />
            </a>
          </div>
        </div>
        </>
    )
}