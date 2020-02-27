import React from 'react';
import './styles.scss';

interface IProps {
  artifact: IArtifact;
}
const Card = ({ artifact }: IProps) => {
  return (
    <div className="infobox-page-container">
      <div className="item-box unique">
        <div className="header double" dangerouslySetInnerHTML={{
          __html: artifact.title
        }} />
        <div className="item-stats">
          <div className="group">
            {artifact.attributes.map((a: IAttribute, i: number) => (
              <div>
                <span className="default">{a.name}:&nbsp;</span>
                <span className="tc value">{a.value}</span>
              </div>
            ))}
          </div>

          <ul className="group tc mod">
            {artifact.modifiers.map((mod: string, i: number) => (
              <li key={`modifiers-${i}`}>{mod}</li>
            ))}
          </ul>
          <div className="group tc flavour" dangerouslySetInnerHTML={{
            __html: artifact.flavour_text
          }} />
        </div>
        <div className="group">
          <span>Price:&nbsp;</span>
          <span className="price">{artifact.price}</span>
        </div>
        <div className="group artifact-image">
          <img src={artifact.image_url} alt={`image for ${artifact.title}`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
