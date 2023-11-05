const Card = (props) => {
  const renderPropertyTitle = (property) => {
    if (property) {
      return <h2 className="card-title">{property}</h2>;
    }
    return null;
  };

  const renderPropertySubTitle = (property) => {
    if (property) {
      return <h3 className="card-title">{property}</h3>;
    }
    return null;
  };

  const renderPropertyParagraph = (property) => {
    if (property) {
      return <p>{property}</p>;
    }
    return null;
  };

  const renderCodeBlock = (code) => {
    if (code) {
      return (
        <div className="mockup-code">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      );
    }
    return null;
  };

  return (
    <article className="card">
      <div className="card-body">
        {renderPropertyTitle(props.title)}
        {renderPropertyParagraph(props.intro)}
        {renderPropertyParagraph(props.moreIntro)}
        {renderCodeBlock(props.codeA)}
        {renderCodeBlock(props.codeB)}
        {renderCodeBlock(props.codeC)}
        <div className="card">
          <div className="card-body">
            {renderPropertySubTitle(props.subtitle)}
            {renderPropertyParagraph(props.subIntro)}
            {renderPropertyParagraph(props.moreSubIntro)}
            {renderCodeBlock(props.codeSubA)}
            {renderCodeBlock(props.codeSubB)}
            {renderCodeBlock(props.codeSubC)}
            {renderPropertyParagraph(props.textA)}
            {renderCodeBlock(props.codeTextAA)}
            {renderCodeBlock(props.codeTextAB)}
            {renderCodeBlock(props.codeTextAC)}
            {renderPropertyParagraph(props.textB)}
            {renderCodeBlock(props.codeTextBA)}
            {renderCodeBlock(props.codeTextBB)}
            {renderCodeBlock(props.codeTextBC)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
