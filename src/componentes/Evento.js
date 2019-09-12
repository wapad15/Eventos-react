import React from 'react'
import PropTypes from 'prop-types'

const Evento = (props) => {

  const { name, logo, description, url} = props.info;

  if (!name) return null;
  
  let desc = description.text;
   
  if (desc === null) {
    desc = "";
  } else {
    if (desc.length > 250) {
      desc = desc.substr(0, 250);
    }
  }
 

  return ( 
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {logo !== null ?
            <img src={logo.url} alt={name.text} />
            : ""
          }
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{name.text}</h3>
          <p>{desc}</p>
        </div>
        <div className="uk-card-footer">
          <a className="uk-button uk-button-secondary" href={url} target="_blank" rel="noopener noreferrer">
              Informacion
          </a>
        </div>
      </div>
    </div>
   );
}
 
Evento.propTypes = {
  info: PropTypes.object.isRequired,
}
export default Evento;