import type { NextPage } from 'next'
import styles from './style.module.scss';
import CardInteractionFormContainer from 'containers/CardInteractionFormContainer';
import Container from 'components/Container';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.hidden}>
                    Interactive Card Details Form
                </h1>
                <Container className={styles.container}>
                    <CardInteractionFormContainer className={styles.cardInteractionFormContainer} />
                </Container>
            </main>
        </>
    );
};

export default Home
