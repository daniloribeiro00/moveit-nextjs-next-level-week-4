import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68981163?v=4" alt="Danilo Ribeiro"/>
            <div>
                <strong>Danilo Ribeiro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    );
}