const Card = (props) => {
  const renderPropertyTitle = (property) => {
    if (property) {
      return (
        <h2 className="card-title text-3xl text-secondary justify-center ">
          {property}
        </h2>
      );
    }
    return null;
  };

  const renderPropertySubTitle = (property) => {
    if (property) {
      return (
        <h3 className="card-title text-xl text-secondary justify-center text-center p-4">
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

  const renderCodeBlock = (
    code,
    code1,
    code2,
    code3,
    code4,
    code5,
    code6,
    code7,
    code8,
    code9,
    code10
  ) => {
    if (code) {
      return (
        <div className="mockup-code min-width-[14rem]">
          <pre>
            <code>{code}</code>
          </pre>
          {renderExtraCodeLinesOdd(code1)}
          {renderExtraCodeLinesEven(code2)}
          {renderExtraCodeLinesOdd(code3)}
          {renderExtraCodeLinesEven(code4)}
          {renderExtraCodeLinesOdd(code5)}
          {renderExtraCodeLinesEven(code6)}
          {renderExtraCodeLinesOdd(code7)}
          {renderExtraCodeLinesEven(code8)}
          {renderExtraCodeLinesGreen(code9)}
          {renderExtraCodeLinesRed(code10)}
        </div>
      );
    }
    return null;
  };

  const renderExtraCodeLinesOdd = (code) => {
    if (code) {
      return (
        <pre>
          <code>{code}</code>
        </pre>
      );
    }
    return null;
  };

  const renderExtraCodeLinesEven = (code) => {
    if (code) {
      return (
        <pre>
          <code className="text-accent">{code}</code>
        </pre>
      );
    }
    return null;
  };

  const renderExtraCodeLinesGreen = (code) => {
    if (code) {
      return (
        <pre>
          <code className="text-success">{code}</code>
        </pre>
      );
    }
    return null;
  };

  const renderExtraCodeLinesRed = (code) => {
    if (code) {
      return (
        <pre>
          <code className="text-error">{code}</code>
        </pre>
      );
    }
    return null;
  };

  return (
    <article
      id={props.link}
      className="card max-w-[95vw] mx-auto  my-8 shadow-2xl shadow-blue-700 border-t-2 border-b-4 border-blue-700"
    >
      <div className="card-body p-4 rounded-xl">
        {renderPropertyTitle(props.title)}
        {renderPropertyParagraph(props.intro)}
        {renderPropertyParagraph(props.moreIntro)}
        {renderCodeBlock(props.codeA)}
        {renderCodeBlock(props.codeB)}
        {renderCodeBlock(props.codeC)}
        <div className="">
          <div className="flex flex-col gap-2  ">
            {renderPropertySubTitle(props.subtitle)}
            {renderPropertyParagraph(props.subIntro)}
            {renderPropertyParagraph(props.moreSubIntro)}
            {renderCodeBlock(
              props.codeSubA,
              props.codeSubA_extra_code1,
              props.codeSubA_extra_code2,
              props.codeSubA_extra_code3,
              props.codeSubA_extra_code4,
              props.codeSubA_extra_code5,
              props.codeSubA_extra_code6,
              props.codeSubA_extra_code7,
              props.codeSubA_extra_code8,
              props.codeSubA_extra_code9,
              props.codeSubA_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubB,
              props.codeSubB_extra_code1,
              props.codeSubB_extra_code2,
              props.codeSubB_extra_code3,
              props.codeSubB_extra_code4,
              props.codeSubB_extra_code5,
              props.codeSubB_extra_code6,
              props.codeSubB_extra_code7,
              props.codeSubB_extra_code8,
              props.codeSubB_extra_code9,
              props.codeSubB_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubC,
              props.codeSubC_extra_code1,
              props.codeSubC_extra_code2,
              props.codeSubC_extra_code3,
              props.codeSubC_extra_code4,
              props.codeSubC_extra_code5,
              props.codeSubC_extra_code6,
              props.codeSubC_extra_code7,
              props.codeSubC_extra_code8,
              props.codeSubC_extra_code9,
              props.codeSubC_extra_code10
            )}
            {renderPropertyParagraph(props.textA)}
            {renderCodeBlock(
              props.codeTextAA,
              props.codeTextAA_extra_code1,
              props.codeTextAA_extra_code2,
              props.codeTextAA_extra_code3,
              props.codeTextAA_extra_code4,
              props.codeTextAA_extra_code5,
              props.codeTextAA_extra_code6,
              props.codeTextAA_extra_code7,
              props.codeTextAA_extra_code8,
              props.codeTextAA_extra_code9,
              props.codeTextAA_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAB,
              props.codeTextAB_extra_code1,
              props.codeTextAB_extra_code2,
              props.codeTextAB_extra_code3,
              props.codeTextAB_extra_code4,
              props.codeTextAB_extra_code5,
              props.codeTextAB_extra_code6,
              props.codeTextAB_extra_code7,
              props.codeTextAB_extra_code8,
              props.codeTextAB_extra_code9,
              props.codeTextAB_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAC,
              props.codeTextAC_extra_code1,
              props.codeTextAC_extra_code2,
              props.codeTextAC_extra_code3,
              props.codeTextAC_extra_code4,
              props.codeTextAC_extra_code5,
              props.codeTextAC_extra_code6,
              props.codeTextAC_extra_code7,
              props.codeTextAC_extra_code8,
              props.codeTextAC_extra_code9,
              props.codeTextAC_extra_code10
            )}
            {renderPropertyParagraph(props.textB)}
            {renderCodeBlock(
              props.codeTextBA,
              props.codeTextBA_extra_code1,
              props.codeTextBA_extra_code2,
              props.codeTextBA_extra_code3,
              props.codeTextBA_extra_code4,
              props.codeTextBA_extra_code5,
              props.codeTextBA_extra_code6,
              props.codeTextBA_extra_code7,
              props.codeTextBA_extra_code8,
              props.codeTextBA_extra_code9,
              props.codeTextBA_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBB,
              props.codeTextBB_extra_code1,
              props.codeTextBB_extra_code2,
              props.codeTextBB_extra_code3,
              props.codeTextBB_extra_code4,
              props.codeTextBB_extra_code5,
              props.codeTextBB_extra_code6,
              props.codeTextBB_extra_code7,
              props.codeTextBB_extra_code8,
              props.codeTextBB_extra_code9,
              props.codeTextBB_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBC,
              props.codeTextBC_extra_code1,
              props.codeTextBC_extra_code2,
              props.codeTextBC_extra_code3,
              props.codeTextBC_extra_code4,
              props.codeTextBC_extra_code5,
              props.codeTextBC_extra_code6,
              props.codeTextBC_extra_code7,
              props.codeTextBC_extra_code8,
              props.codeTextBC_extra_code9,
              props.codeTextBC_extra_code10
            )}
            {renderPropertySubTitle(props.subtitle_A)}
            {renderPropertyParagraph(props.subIntro_A)}
            {renderPropertyParagraph(props.moreSubIntro_A)}
            {renderCodeBlock(
              props.codeSubA_A,
              props.codeSubA_A_extra_code1,
              props.codeSubA_A_extra_code2,
              props.codeSubA_A_extra_code3,
              props.codeSubA_A_extra_code4,
              props.codeSubA_A_extra_code5,
              props.codeSubA_A_extra_code6,
              props.codeSubA_A_extra_code7,
              props.codeSubA_A_extra_code8,
              props.codeSubA_A_extra_code9,
              props.codeSubA_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubB_A,
              props.codeSubB_A_extra_code1,
              props.codeSubB_A_extra_code2,
              props.codeSubB_A_extra_code3,
              props.codeSubB_A_extra_code4,
              props.codeSubB_A_extra_code5,
              props.codeSubB_A_extra_code6,
              props.codeSubB_A_extra_code7,
              props.codeSubB_A_extra_code8,
              props.codeSubB_A_extra_code9,
              props.codeSubB_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubC_A,
              props.codeSubC_A_extra_code1,
              props.codeSubC_A_extra_code2,
              props.codeSubC_A_extra_code3,
              props.codeSubC_A_extra_code4,
              props.codeSubC_A_extra_code5,
              props.codeSubC_A_extra_code6,
              props.codeSubC_A_extra_code7,
              props.codeSubC_A_extra_code8,
              props.codeSubC_A_extra_code9,
              props.codeSubC_A_extra_code10
            )}
            {renderPropertyParagraph(props.textA_A)}
            {renderCodeBlock(
              props.codeTextAA_A,
              props.codeTextAA_A_extra_code1,
              props.codeTextAA_A_extra_code2,
              props.codeTextAA_A_extra_code3,
              props.codeTextAA_A_extra_code4,
              props.codeTextAA_A_extra_code5,
              props.codeTextAA_A_extra_code6,
              props.codeTextAA_A_extra_code7,
              props.codeTextAA_A_extra_code8,
              props.codeTextAA_A_extra_code9,
              props.codeTextAA_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAB_A,
              props.codeTextAB_A_extra_code1,
              props.codeTextAB_A_extra_code2,
              props.codeTextAB_A_extra_code3,
              props.codeTextAB_A_extra_code4,
              props.codeTextAB_A_extra_code5,
              props.codeTextAB_A_extra_code6,
              props.codeTextAB_A_extra_code7,
              props.codeTextAB_A_extra_code8,
              props.codeTextAB_A_extra_code9,
              props.codeTextAB_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAC_A,
              props.codeTextAC_A_extra_code1,
              props.codeTextAC_A_extra_code2,
              props.codeTextAC_A_extra_code3,
              props.codeTextAC_A_extra_code4,
              props.codeTextAC_A_extra_code5,
              props.codeTextAC_A_extra_code6,
              props.codeTextAC_A_extra_code7,
              props.codeTextAC_A_extra_code8,
              props.codeTextAC_A_extra_code9,
              props.codeTextAC_A_extra_code10
            )}
            {renderPropertyParagraph(props.textB_A)}
            {renderCodeBlock(
              props.codeTextBA_A,
              props.codeTextBA_A_extra_code1,
              props.codeTextBA_A_extra_code2,
              props.codeTextBA_A_extra_code3,
              props.codeTextBA_A_extra_code4,
              props.codeTextBA_A_extra_code5,
              props.codeTextBA_A_extra_code6,
              props.codeTextBA_A_extra_code7,
              props.codeTextBA_A_extra_code8,
              props.codeTextBA_A_extra_code9,
              props.codeTextBA_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBB_A,
              props.codeTextBB_A_extra_code1,
              props.codeTextBB_A_extra_code2,
              props.codeTextBB_A_extra_code3,
              props.codeTextBB_A_extra_code4,
              props.codeTextBB_A_extra_code5,
              props.codeTextBB_A_extra_code6,
              props.codeTextBB_A_extra_code7,
              props.codeTextBB_A_extra_code8,
              props.codeTextBB_A_extra_code9,
              props.codeTextBB_A_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBC_A,
              props.codeTextBC_A_extra_code1,
              props.codeTextBC_A_extra_code2,
              props.codeTextBC_A_extra_code3,
              props.codeTextBC_A_extra_code4,
              props.codeTextBC_A_extra_code5,
              props.codeTextBC_A_extra_code6,
              props.codeTextBC_A_extra_code7,
              props.codeTextBC_A_extra_code8,
              props.codeTextBC_A_extra_code9,
              props.codeTextBC_A_extra_code10
            )}
            {renderPropertySubTitle(props.subtitle_B)}
            {renderPropertyParagraph(props.subIntro_B)}
            {renderPropertyParagraph(props.moreSubIntro_B)}
            {renderCodeBlock(
              props.codeSubA_B,
              props.codeSubA_B_extra_code1,
              props.codeSubA_B_extra_code2,
              props.codeSubA_B_extra_code3,
              props.codeSubA_B_extra_code4,
              props.codeSubA_B_extra_code5,
              props.codeSubA_B_extra_code6,
              props.codeSubA_B_extra_code7,
              props.codeSubA_B_extra_code8,
              props.codeSubA_B_extra_code9,
              props.codeSubA_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubB_B,
              props.codeSubB_B_extra_code1,
              props.codeSubB_B_extra_code2,
              props.codeSubB_B_extra_code3,
              props.codeSubB_B_extra_code4,
              props.codeSubB_B_extra_code5,
              props.codeSubB_B_extra_code6,
              props.codeSubB_B_extra_code7,
              props.codeSubB_B_extra_code8,
              props.codeSubB_B_extra_code9,
              props.codeSubB_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeSubC_B,
              props.codeSubC_B_extra_code1,
              props.codeSubC_B_extra_code2,
              props.codeSubC_B_extra_code3,
              props.codeSubC_B_extra_code4,
              props.codeSubC_B_extra_code5,
              props.codeSubC_B_extra_code6,
              props.codeSubC_B_extra_code7,
              props.codeSubC_B_extra_code8,
              props.codeSubC_B_extra_code9,
              props.codeSubC_B_extra_code10
            )}
            {renderPropertyParagraph(props.textA_B)}
            {renderCodeBlock(
              props.codeTextAA_B,
              props.codeTextAA_B_extra_code1,
              props.codeTextAA_B_extra_code2,
              props.codeTextAA_B_extra_code3,
              props.codeTextAA_B_extra_code4,
              props.codeTextAA_B_extra_code5,
              props.codeTextAA_B_extra_code6,
              props.codeTextAA_B_extra_code7,
              props.codeTextAA_B_extra_code8,
              props.codeTextAA_B_extra_code9,
              props.codeTextAA_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAB_B,
              props.codeTextAB_B_extra_code1,
              props.codeTextAB_B_extra_code2,
              props.codeTextAB_B_extra_code3,
              props.codeTextAB_B_extra_code4,
              props.codeTextAB_B_extra_code5,
              props.codeTextAB_B_extra_code6,
              props.codeTextAB_B_extra_code7,
              props.codeTextAB_B_extra_code8,
              props.codeTextAB_B_extra_code9,
              props.codeTextAB_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextAC_B,
              props.codeTextAC_B_extra_code1,
              props.codeTextAC_B_extra_code2,
              props.codeTextAC_B_extra_code3,
              props.codeTextAC_B_extra_code4,
              props.codeTextAC_B_extra_code5,
              props.codeTextAC_B_extra_code6,
              props.codeTextAC_B_extra_code7,
              props.codeTextAC_B_extra_code8,
              props.codeTextAC_B_extra_code9,
              props.codeTextAC_B_extra_code10
            )}
            {renderPropertyParagraph(props.textB_B)}
            {renderCodeBlock(
              props.codeTextBA_B,
              props.codeTextBA_B_extra_code1,
              props.codeTextBA_B_extra_code2,
              props.codeTextBA_B_extra_code3,
              props.codeTextBA_B_extra_code4,
              props.codeTextBA_B_extra_code5,
              props.codeTextBA_B_extra_code6,
              props.codeTextBA_B_extra_code7,
              props.codeTextBA_B_extra_code8,
              props.codeTextBA_B_extra_code9,
              props.codeTextBA_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBB_B,
              props.codeTextBB_B_extra_code1,
              props.codeTextBB_B_extra_code2,
              props.codeTextBB_B_extra_code3,
              props.codeTextBB_B_extra_code4,
              props.codeTextBB_B_extra_code5,
              props.codeTextBB_B_extra_code6,
              props.codeTextBB_B_extra_code7,
              props.codeTextBB_B_extra_code8,
              props.codeTextBB_B_extra_code9,
              props.codeTextBB_B_extra_code10
            )}
            {renderCodeBlock(
              props.codeTextBC_B,
              props.codeTextBC_B_extra_code1,
              props.codeTextBC_B_extra_code2,
              props.codeTextBC_B_extra_code3,
              props.codeTextBC_B_extra_code4,
              props.codeTextBC_B_extra_code5,
              props.codeTextBC_B_extra_code6,
              props.codeTextBC_B_extra_code7,
              props.codeTextBC_B_extra_code8,
              props.codeTextBC_B_extra_code9,
              props.codeTextBC_B_extra_code10
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
