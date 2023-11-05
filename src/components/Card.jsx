const Card = (props) => {
  const renderPropertyTitle = (property) => {
    if (property) {
      return (
        <h2 className="card-title text-3xl text-primary  justify-center">
          {property}
        </h2>
      );
    }
    return null;
  };

  const renderPropertySubTitle = (property) => {
    if (property) {
      return (
        <h3 className="card-title text-2xl text-secondary justify-center">
          {property}
        </h3>
      );
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
    <article
      id={props.link}
      className="card mx-4  my-8 shadow-2xl shadow-blue-700 border-t-2 border-b-4 border-blue-700"
    >
      <div className="card-body p-2 rounded-xl">
        {renderPropertyTitle(props.title)}
        {renderPropertyParagraph(props.intro)}
        {renderPropertyParagraph(props.moreIntro)}
        {renderCodeBlock(props.codeA)}
        {renderCodeBlock(props.codeB)}
        {renderCodeBlock(props.codeC)}
        <div className="p-2 shadow-xl shadow-blue-500 rounded-xl border-t-2  border-blue-700 mt-4">
          <div className="rounded-xl flex flex-col gap-2">
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
            {renderPropertySubTitle(props.subtitle_A)}
            {renderPropertyParagraph(props.subIntro_A)}
            {renderPropertyParagraph(props.moreSubIntro_A)}
            {renderCodeBlock(props.codeSubA_A)}
            {renderCodeBlock(props.codeSubB_A)}
            {renderCodeBlock(props.codeSubC_A)}
            {renderPropertyParagraph(props.textA_A)}
            {renderCodeBlock(props.codeTextAA_A)}
            {renderCodeBlock(props.codeTextAB_A)}
            {renderCodeBlock(props.codeTextAC_A)}
            {renderPropertyParagraph(props.textB)}
            {renderCodeBlock(props.codeTextBA_A)}
            {renderCodeBlock(props.codeTextBB_A)}
            {renderCodeBlock(props.codeTextBC_A)}
            {renderPropertySubTitle(props.subtitle_B)}
            {renderPropertyParagraph(props.subIntro_B)}
            {renderPropertyParagraph(props.moreSubIntro_B)}
            {renderCodeBlock(props.codeSubA_B)}
            {renderCodeBlock(props.codeSubB_B)}
            {renderCodeBlock(props.codeSubC_B)}
            {renderPropertyParagraph(props.textA_B)}
            {renderCodeBlock(props.codeTextAA_B)}
            {renderCodeBlock(props.codeTextAB_B)}
            {renderCodeBlock(props.codeTextAC_B)}
            {renderPropertyParagraph(props.textB_B)}
            {renderCodeBlock(props.codeTextBA_B)}
            {renderCodeBlock(props.codeTextBB_B)}
            {renderCodeBlock(props.codeTextBC_B)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
