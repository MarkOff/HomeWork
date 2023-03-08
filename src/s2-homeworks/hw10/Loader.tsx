import s from './Loader.module.css';
import loader from './Spinner-1s-200px.svg'

export const Loader = () => <div className={s.loader}>
    <img src={loader} alt="loader"/>
</div>
