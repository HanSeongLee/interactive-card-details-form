import type { NextPage } from 'next'
import styles from './style.module.scss';
import CardInteractionFormContainer from 'containers/CardInteractionFormContainer';
import Container from 'components/Container';

const Home: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
                <Container>
                    <CardInteractionFormContainer className={styles.cardInteractionFormContainer} />
                </Container>
            </main>
        </>
    );
};

export default Home
