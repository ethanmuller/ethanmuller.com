import React from "react"


const aStyles = {
  marginBottom: '1em',
  display: 'inline-block',
};

const liStyles = {
  marginBottom: '3em',
};

const Hyperlink = (props) => {
  return (
    <>
      <a href={props.item.href} style={aStyles}>{props.item.title}</a>
      {props.item.description &&
        <small>{props.item.description}</small>
      }
    </>
  );
}

const Hyperlinks = (props) => {
  return (
    <ul>
      {props.links.map(item => (
          <li style={liStyles}>
          <Hyperlink item={item} />
        </li>
      ))}
    </ul>
  )
}

export default Hyperlinks;
