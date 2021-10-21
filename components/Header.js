import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> Imposter Syndrome
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with my progress
      </p>
    </div>
  );
};

export default Header;
