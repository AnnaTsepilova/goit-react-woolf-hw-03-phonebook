import css from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={css.section} title={title}>
      {title && <h2 className={css.subTitle}>{title}</h2>}
      {children}
    </div>
  );
}
