import {AdvantagesProps} from './Advantages.props';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    
                </div>
            ))}      
        </>
    );
};