import React from 'react';
import styles from './styles.module.scss';
// if you want to use style modules it would be better if you use cammelCase for the name of classes
// also if you use few classes for the elements it would be better to use the lib:
// classnames https://github.com/JedWatson/classnames

interface IProps {
  artifact: IArtifact;
}

const CardWithStyleModule = ({ artifact }: IProps) => {
  return (
    <div className={styles['infobox-page-container']}>
      <div className={`${styles['item-box']} ${styles['unique']}`}>
        <div className={`${styles['header']} ${styles['double']}`}
          dangerouslySetInnerHTML={{
            __html: artifact.title
          }} />
        <div className={styles['item-stats']}>
          <div className={styles['group']}>
            {artifact.attributes.map((a: IAttribute, i: number) => (
              <div key={`attr-${i}`}>
                <span className={styles.default}>{a.name}:</span>
                <span className={styles.value}>{a.value}:</span>
              </div>
            ))}
          </div>
          <ul className={`${styles['group']} ${styles['tc']} ${styles['mod']}`}>
            {artifact.modifiers.map((mod: string, i: number) => (
              <li key={`modifiers-${i}`}>{mod}</li>
            ))}
          </ul>
          <div className={`${styles['group']} ${styles['tc']} ${styles['flavour']}`}>
            {artifact.flavour_text}
          </div>
        </div>
        <div className="group">
          <span>Price:&nbsp;</span>
          <span className="price">{artifact.price}</span>
        </div>
        <div className="group artifact-image">
          <img src={artifact.image_url} alt={`image for ${artifact.title}`} />
        </div>
      </div>
    </div >
  );
};

export default CardWithStyleModule;
