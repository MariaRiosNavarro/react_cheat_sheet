import { Link } from "react-router-dom";

const Card = (props) => {
  const renderPropertyTitle = (property) => {
    if (property) {
      return (
        <h2 className="card-title text-3xl text-secondary justify-center p-4 ">
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
    code10,
    code11,
    code12,
    code13,
    code14,
    code15,
    code16,
    code17,
    code18,
    code19,
    code20,
    code21,
    code22,
    code23,
    code24,
    code25,
    code26,
    code27,
    code28,
    code29,
    code30
  ) => {
    if (code) {
      return (
        <div className="mockup-code min-width-[14rem] my-4">
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
          {renderExtraCodeLinesOdd(code9)}
          {renderExtraCodeLinesEven(code10)}
          {renderExtraCodeLinesOdd(code11)}
          {renderExtraCodeLinesEven(code12)}
          {renderExtraCodeLinesOdd(code13)}
          {renderExtraCodeLinesEven(code14)}
          {renderExtraCodeLinesOdd(code15)}
          {renderExtraCodeLinesEven(code16)}
          {renderExtraCodeLinesOdd(code17)}
          {renderExtraCodeLinesEven(code18)}
          {renderExtraCodeLinesOdd(code19)}
          {renderExtraCodeLinesEven(code20)}
          {renderExtraCodeLinesOdd(code21)}
          {renderExtraCodeLinesEven(code22)}
          {renderExtraCodeLinesOdd(code23)}
          {renderExtraCodeLinesEven(code24)}
          {renderExtraCodeLinesOdd(code25)}
          {renderExtraCodeLinesEven(code26)}
          {renderExtraCodeLinesOdd(code27)}
          {renderExtraCodeLinesEven(code28)}
          {renderExtraCodeLinesOdd(code29)}
          {renderExtraCodeLinesEven(code30)}
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

  // const renderExtraCodeLinesGreen = (code) => {
  //   if (code) {
  //     return (
  //       <pre>
  //         <code>{code}</code>
  //       </pre>
  //     );
  //   }
  //   return null;
  // };

  // const renderExtraCodeLinesRed = (code) => {
  //   if (code) {
  //     return (
  //       <pre>
  //         <code>{code}</code>
  //       </pre>
  //     );
  //   }
  //   return null;
  // };

  const externalLinks = (propierty) => {
    if (propierty) {
      return (
        <Link
          className="text-primary font-bold"
          to={propierty[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {propierty[0]}
        </Link>
      );
    }
    return null;
  };

  return (
    <article
      id={props.link}
      className="flex flex-col max-w-[95vw] mx-auto  my-8 shadow-2xl shadow-blue-700 border-t-2 border-b-4 border-blue-700 md:max-w-[45vw] rounded-xl"
    >
      <div className="flex flex-col justify-start p-4 rounded-xl">
        {renderPropertyTitle(props.title)}
        {renderPropertyParagraph(props.intro)}
        {renderPropertyParagraph(props.moreIntro)}
        {renderCodeBlock(
          props.codeA,
          props.codeA_extra_code1,
          props.codeA_extra_code2,
          props.codeA_extra_code3,
          props.codeA_extra_code4,
          props.codeA_extra_code5,
          props.codeA_extra_code6,
          props.codeA_extra_code7,
          props.codeA_extra_code8,
          props.codeA_extra_code9,
          props.codeA_extra_code10,
          props.codeA_extra_code11,
          props.codeA_extra_code12,
          props.codeA_extra_code13,
          props.codeA_extra_code14,
          props.codeA_extra_code15,
          props.codeA_extra_code16,
          props.codeA_extra_code17,
          props.codeA_extra_code18,
          props.codeA_extra_code19,
          props.codeA_extra_code20,
          props.codeA_extra_code21,
          props.codeA_extra_code22,
          props.codeA_extra_code23,
          props.codeA_extra_code24,
          props.codeA_extra_code25,
          props.codeA_extra_code26,
          props.codeA_extra_code27,
          props.codeA_extra_code28,
          props.codeA_extra_code29,
          props.codeA_extra_code30
        )}
        {renderCodeBlock(
          props.codeB,
          props.codeB_extra_code1,
          props.codeB_extra_code2,
          props.codeB_extra_code3,
          props.codeB_extra_code4,
          props.codeB_extra_code5,
          props.codeB_extra_code6,
          props.codeB_extra_code7,
          props.codeB_extra_code8,
          props.codeB_extra_code9,
          props.codeB_extra_code10,
          props.codeB_extra_code11,
          props.codeB_extra_code12,
          props.codeB_extra_code13,
          props.codeB_extra_code14,
          props.codeB_extra_code15,
          props.codeB_extra_code16,
          props.codeB_extra_code17,
          props.codeB_extra_code18,
          props.codeB_extra_code19,
          props.codeB_extra_code20,
          props.codeB_extra_code21,
          props.codeB_extra_code22,
          props.codeB_extra_code23,
          props.codeB_extra_code24,
          props.codeB_extra_code25,
          props.codeB_extra_code26,
          props.codeB_extra_code27,
          props.codeB_extra_code28,
          props.codeB_extra_code29,
          props.codeB_extra_code30
        )}
        {renderCodeBlock(
          props.codeC,
          props.codeC_extra_code1,
          props.codeC_extra_code2,
          props.codeC_extra_code3,
          props.codeC_extra_code4,
          props.codeC_extra_code5,
          props.codeC_extra_code6,
          props.codeC_extra_code7,
          props.codeC_extra_code8,
          props.codeC_extra_code9,
          props.codeC_extra_code10,
          props.codeC_extra_code11,
          props.codeC_extra_code12,
          props.codeC_extra_code13,
          props.codeC_extra_code14,
          props.codeC_extra_code15,
          props.codeC_extra_code16,
          props.codeC_extra_code17,
          props.codeC_extra_code18,
          props.codeC_extra_code19,
          props.codeC_extra_code20,
          props.codeC_extra_code21,
          props.codeC_extra_code22,
          props.codeC_extra_code23,
          props.codeC_extra_code24,
          props.codeC_extra_code25,
          props.codeC_extra_code26,
          props.codeC_extra_code27,
          props.codeC_extra_code28,
          props.codeC_extra_code29,
          props.codeC_extra_code30
        )}
        {renderPropertyParagraph(props.extraIntroMainTextA)}
        {renderPropertyParagraph(props.extraIntroMainTextB)}
        {renderPropertyParagraph(props.extraIntroMainTextC)}
        {renderPropertyParagraph(props.extraIntroMainTextD)}
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
              props.codeSubA_extra_code10,
              props.codeSubA_extra_code11,
              props.codeSubA_extra_code12,
              props.codeSubA_extra_code13,
              props.codeSubA_extra_code14,
              props.codeSubA_extra_code15,
              props.codeSubA_extra_code16,
              props.codeSubA_extra_code17,
              props.codeSubA_extra_code18,
              props.codeSubA_extra_code19,
              props.codeSubA_extra_code20,
              props.codeSubA_extra_code21,
              props.codeSubA_extra_code22,
              props.codeSubA_extra_code23,
              props.codeSubA_extra_code24,
              props.codeSubA_extra_code25,
              props.codeSubA_extra_code26,
              props.codeSubA_extra_code27,
              props.codeSubA_extra_code28,
              props.codeSubA_extra_code29,
              props.codeSubA_extra_code30
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
              props.codeSubB_extra_code10,
              props.codeSubB_extra_code11,
              props.codeSubB_extra_code12,
              props.codeSubB_extra_code13,
              props.codeSubB_extra_code14,
              props.codeSubB_extra_code15,
              props.codeSubB_extra_code16,
              props.codeSubB_extra_code17,
              props.codeSubB_extra_code18,
              props.codeSubB_extra_code19,
              props.codeSubB_extra_code20,
              props.codeSubB_extra_code21,
              props.codeSubB_extra_code22,
              props.codeSubB_extra_code23,
              props.codeSubB_extra_code24,
              props.codeSubB_extra_code25,
              props.codeSubB_extra_code26,
              props.codeSubB_extra_code27,
              props.codeSubB_extra_code28,
              props.codeSubB_extra_code29,
              props.codeSubB_extra_code30
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
              props.codeSubC_extra_code10,
              props.codeSubC_extra_code11,
              props.codeSubC_extra_code12,
              props.codeSubC_extra_code13,
              props.codeSubC_extra_code14,
              props.codeSubC_extra_code15,
              props.codeSubC_extra_code16,
              props.codeSubC_extra_code17,
              props.codeSubC_extra_code18,
              props.codeSubC_extra_code19,
              props.codeSubC_extra_code20,
              props.codeSubC_extra_code21,
              props.codeSubC_extra_code22,
              props.codeSubC_extra_code23,
              props.codeSubC_extra_code24,
              props.codeSubC_extra_code25,
              props.codeSubC_extra_code26,
              props.codeSubC_extra_code27,
              props.codeSubC_extra_code28,
              props.codeSubC_extra_code29,
              props.codeSubC_extra_code30
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
              props.codeTextAA_extra_code10,
              props.codeTextAA_extra_code11,
              props.codeTextAA_extra_code12,
              props.codeTextAA_extra_code13,
              props.codeTextAA_extra_code14,
              props.codeTextAA_extra_code15,
              props.codeTextAA_extra_code16,
              props.codeTextAA_extra_code17,
              props.codeTextAA_extra_code18,
              props.codeTextAA_extra_code19,
              props.codeTextAA_extra_code20,
              props.codeTextAA_extra_code21,
              props.codeTextAA_extra_code22,
              props.codeTextAA_extra_code23,
              props.codeTextAA_extra_code24,
              props.codeTextAA_extra_code25,
              props.codeTextAA_extra_code26,
              props.codeTextAA_extra_code27,
              props.codeTextAA_extra_code28,
              props.codeTextAA_extra_code29,
              props.codeTextAA_extra_code30
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
              props.codeTextAB_extra_code10,
              props.codeTextAB_extra_code11,
              props.codeTextAB_extra_code12,
              props.codeTextAB_extra_code13,
              props.codeTextAB_extra_code14,
              props.codeTextAB_extra_code15,
              props.codeTextAB_extra_code16,
              props.codeTextAB_extra_code17,
              props.codeTextAB_extra_code18,
              props.codeTextAB_extra_code19,
              props.codeTextAB_extra_code20,
              props.codeTextAB_extra_code21,
              props.codeTextAB_extra_code22,
              props.codeTextAB_extra_code23,
              props.codeTextAB_extra_code24,
              props.codeTextAB_extra_code25,
              props.codeTextAB_extra_code26,
              props.codeTextAB_extra_code27,
              props.codeTextAB_extra_code28,
              props.codeTextAB_extra_code29,
              props.codeTextAB_extra_code30
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
              props.codeTextAC_extra_code10,
              props.codeTextAC_extra_code11,
              props.codeTextAC_extra_code21,
              props.codeTextAC_extra_code13,
              props.codeTextAC_extra_code14,
              props.codeTextAC_extra_code15,
              props.codeTextAC_extra_code16,
              props.codeTextAC_extra_code17,
              props.codeTextAC_extra_code18,
              props.codeTextAC_extra_code19,
              props.codeTextAC_extra_code20,
              props.codeTextAC_extra_code21,
              props.codeTextAC_extra_code22,
              props.codeTextAC_extra_code23,
              props.codeTextAC_extra_code24,
              props.codeTextAC_extra_code25,
              props.codeTextAC_extra_code26,
              props.codeTextAC_extra_code27,
              props.codeTextAC_extra_code28,
              props.codeTextAC_extra_code29,
              props.codeTextAC_extra_code30
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
              props.codeTextBA_extra_code10,
              props.codeTextBA_extra_code11,
              props.codeTextBA_extra_code12,
              props.codeTextBA_extra_code13,
              props.codeTextBA_extra_code14,
              props.codeTextBA_extra_code15,
              props.codeTextBA_extra_code16,
              props.codeTextBA_extra_code17,
              props.codeTextBA_extra_code18,
              props.codeTextBA_extra_code19,
              props.codeTextBA_extra_code20,
              props.codeTextBA_extra_code21,
              props.codeTextBA_extra_code22,
              props.codeTextBA_extra_code23,
              props.codeTextBA_extra_code24,
              props.codeTextBA_extra_code25,
              props.codeTextBA_extra_code26,
              props.codeTextBA_extra_code27,
              props.codeTextBA_extra_code28,
              props.codeTextBA_extra_code29,
              props.codeTextBA_extra_code30
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
              props.codeTextBB_extra_code10,
              props.codeTextBB_extra_code11,
              props.codeTextBB_extra_code12,
              props.codeTextBB_extra_code13,
              props.codeTextBB_extra_code14,
              props.codeTextBB_extra_code15,
              props.codeTextBB_extra_code16,
              props.codeTextBB_extra_code17,
              props.codeTextBB_extra_code18,
              props.codeTextBB_extra_code19,
              props.codeTextBB_extra_code20,
              props.codeTextBB_extra_code21,
              props.codeTextBB_extra_code22,
              props.codeTextBB_extra_code23,
              props.codeTextBB_extra_code24,
              props.codeTextBB_extra_code25,
              props.codeTextBB_extra_code26,
              props.codeTextBB_extra_code27,
              props.codeTextBB_extra_code28,
              props.codeTextBB_extra_code29,
              props.codeTextBB_extra_code30
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
              props.codeTextBC_extra_code10,
              props.codeTextBC_extra_code11,
              props.codeTextBC_extra_code12,
              props.codeTextBC_extra_code13,
              props.codeTextBC_extra_code14,
              props.codeTextBC_extra_code15,
              props.codeTextBC_extra_code16,
              props.codeTextBC_extra_code17,
              props.codeTextBC_extra_code18,
              props.codeTextBC_extra_code19,
              props.codeTextBC_extra_code20,
              props.codeTextBC_extra_code21,
              props.codeTextBC_extra_code22,
              props.codeTextBC_extra_code23,
              props.codeTextBC_extra_code24,
              props.codeTextBC_extra_code25,
              props.codeTextBC_extra_code26,
              props.codeTextBC_extra_code27,
              props.codeTextBC_extra_code28,
              props.codeTextBC_extra_code29,
              props.codeTextBC_extra_code30
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
              props.codeSubA_A_extra_code10,
              props.codeSubA_A_extra_code11,
              props.codeSubA_A_extra_code12,
              props.codeSubA_A_extra_code13,
              props.codeSubA_A_extra_code14,
              props.codeSubA_A_extra_code15,
              props.codeSubA_A_extra_code16,
              props.codeSubA_A_extra_code17,
              props.codeSubA_A_extra_code18,
              props.codeSubA_A_extra_code19,
              props.codeSubA_A_extra_code20,
              props.codeSubA_A_extra_code21,
              props.codeSubA_A_extra_code22,
              props.codeSubA_A_extra_code23,
              props.codeSubA_A_extra_code24,
              props.codeSubA_A_extra_code25,
              props.codeSubA_A_extra_code26,
              props.codeSubA_A_extra_code27,
              props.codeSubA_A_extra_code28,
              props.codeSubA_A_extra_code29,
              props.codeSubA_A_extra_code30
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
              props.codeSubB_A_extra_code10,
              props.codeSubB_A_extra_code11,
              props.codeSubB_A_extra_code12,
              props.codeSubB_A_extra_code13,
              props.codeSubB_A_extra_code14,
              props.codeSubB_A_extra_code15,
              props.codeSubB_A_extra_code16,
              props.codeSubB_A_extra_code17,
              props.codeSubB_A_extra_code18,
              props.codeSubB_A_extra_code19,
              props.codeSubB_A_extra_code20,
              props.codeSubB_A_extra_code21,
              props.codeSubB_A_extra_code22,
              props.codeSubB_A_extra_code23,
              props.codeSubB_A_extra_code24,
              props.codeSubB_A_extra_code25,
              props.codeSubB_A_extra_code26,
              props.codeSubB_A_extra_code27,
              props.codeSubB_A_extra_code28,
              props.codeSubB_A_extra_code29,
              props.codeSubB_A_extra_code30
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
              props.codeSubC_A_extra_code10,
              props.codeSubC_A_extra_code11,
              props.codeSubC_A_extra_code12,
              props.codeSubC_A_extra_code13,
              props.codeSubC_A_extra_code14,
              props.codeSubC_A_extra_code15,
              props.codeSubC_A_extra_code16,
              props.codeSubC_A_extra_code17,
              props.codeSubC_A_extra_code18,
              props.codeSubC_A_extra_code19,
              props.codeSubC_A_extra_code20,
              props.codeSubC_A_extra_code21,
              props.codeSubC_A_extra_code22,
              props.codeSubC_A_extra_code23,
              props.codeSubC_A_extra_code24,
              props.codeSubC_A_extra_code25,
              props.codeSubC_A_extra_code26,
              props.codeSubC_A_extra_code27,
              props.codeSubC_A_extra_code28,
              props.codeSubC_A_extra_code29,
              props.codeSubC_A_extra_code30
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
              props.codeTextAA_A_extra_code10,
              props.codeTextAA_A_extra_code11,
              props.codeTextAA_A_extra_code12,
              props.codeTextAA_A_extra_code13,
              props.codeTextAA_A_extra_code14,
              props.codeTextAA_A_extra_code15,
              props.codeTextAA_A_extra_code16,
              props.codeTextAA_A_extra_code17,
              props.codeTextAA_A_extra_code18,
              props.codeTextAA_A_extra_code19,
              props.codeTextAA_A_extra_code20,
              props.codeTextAA_A_extra_code21,
              props.codeTextAA_A_extra_code22,
              props.codeTextAA_A_extra_code23,
              props.codeTextAA_A_extra_code24,
              props.codeTextAA_A_extra_code25,
              props.codeTextAA_A_extra_code26,
              props.codeTextAA_A_extra_code27,
              props.codeTextAA_A_extra_code28,
              props.codeTextAA_A_extra_code29,
              props.codeTextAA_A_extra_code30
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
              props.codeTextAB_A_extra_code10,
              props.codeTextAB_A_extra_code11,
              props.codeTextAB_A_extra_code12,
              props.codeTextAB_A_extra_code13,
              props.codeTextAB_A_extra_code14,
              props.codeTextAB_A_extra_code15,
              props.codeTextAB_A_extra_code16,
              props.codeTextAB_A_extra_code17,
              props.codeTextAB_A_extra_code18,
              props.codeTextAB_A_extra_code19,
              props.codeTextAB_A_extra_code20,
              props.codeTextAB_A_extra_code21,
              props.codeTextAB_A_extra_code22,
              props.codeTextAB_A_extra_code23,
              props.codeTextAB_A_extra_code24,
              props.codeTextAB_A_extra_code25,
              props.codeTextAB_A_extra_code26,
              props.codeTextAB_A_extra_code27,
              props.codeTextAB_A_extra_code28,
              props.codeTextAB_A_extra_code29,
              props.codeTextAB_A_extra_code30
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
              props.codeTextAC_A_extra_code10,
              props.codeTextAC_A_extra_code11,
              props.codeTextAC_A_extra_code12,
              props.codeTextAC_A_extra_code13,
              props.codeTextAC_A_extra_code14,
              props.codeTextAC_A_extra_code15,
              props.codeTextAC_A_extra_code16,
              props.codeTextAC_A_extra_code17,
              props.codeTextAC_A_extra_code18,
              props.codeTextAC_A_extra_code19,
              props.codeTextAC_A_extra_code20,
              props.codeTextAC_A_extra_code21,
              props.codeTextAC_A_extra_code22,
              props.codeTextAC_A_extra_code23,
              props.codeTextAC_A_extra_code24,
              props.codeTextAC_A_extra_code25,
              props.codeTextAC_A_extra_code26,
              props.codeTextAC_A_extra_code27,
              props.codeTextAC_A_extra_code28,
              props.codeTextAC_A_extra_code29,
              props.codeTextAC_A_extra_code30
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
              props.codeTextBA_A_extra_code10,
              props.codeTextBA_A_extra_code11,
              props.codeTextBA_A_extra_code12,
              props.codeTextBA_A_extra_code13,
              props.codeTextBA_A_extra_code14,
              props.codeTextBA_A_extra_code15,
              props.codeTextBA_A_extra_code16,
              props.codeTextBA_A_extra_code17,
              props.codeTextBA_A_extra_code18,
              props.codeTextBA_A_extra_code19,
              props.codeTextBA_A_extra_code20,
              props.codeTextBA_A_extra_code21,
              props.codeTextBA_A_extra_code22,
              props.codeTextBA_A_extra_code23,
              props.codeTextBA_A_extra_code24,
              props.codeTextBA_A_extra_code25,
              props.codeTextBA_A_extra_code26,
              props.codeTextBA_A_extra_code27,
              props.codeTextBA_A_extra_code28,
              props.codeTextBA_A_extra_code29,
              props.codeTextBA_A_extra_code30
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
              props.codeTextBB_A_extra_code10,
              props.codeTextBB_A_extra_code11,
              props.codeTextBB_A_extra_code12,
              props.codeTextBB_A_extra_code13,
              props.codeTextBB_A_extra_code14,
              props.codeTextBB_A_extra_code15,
              props.codeTextBB_A_extra_code16,
              props.codeTextBB_A_extra_code17,
              props.codeTextBB_A_extra_code18,
              props.codeTextBB_A_extra_code19,
              props.codeTextBB_A_extra_code20,
              props.codeTextBB_A_extra_code21,
              props.codeTextBB_A_extra_code22,
              props.codeTextBB_A_extra_code23,
              props.codeTextBB_A_extra_code24,
              props.codeTextBB_A_extra_code25,
              props.codeTextBB_A_extra_code26,
              props.codeTextBB_A_extra_code27,
              props.codeTextBB_A_extra_code28,
              props.codeTextBB_A_extra_code29,
              props.codeTextBB_A_extra_code30
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
              props.codeTextBC_A_extra_code10,
              props.codeTextBC_A_extra_code11,
              props.codeTextBC_A_extra_code12,
              props.codeTextBC_A_extra_code13,
              props.codeTextBC_A_extra_code14,
              props.codeTextBC_A_extra_code15,
              props.codeTextBC_A_extra_code16,
              props.codeTextBC_A_extra_code17,
              props.codeTextBC_A_extra_code18,
              props.codeTextBC_A_extra_code19,
              props.codeTextBC_A_extra_code20,
              props.codeTextBC_A_extra_code21,
              props.codeTextBC_A_extra_code22,
              props.codeTextBC_A_extra_code23,
              props.codeTextBC_A_extra_code24,
              props.codeTextBC_A_extra_code25,
              props.codeTextBC_A_extra_code26,
              props.codeTextBC_A_extra_code27,
              props.codeTextBC_A_extra_code28,
              props.codeTextBC_A_extra_code29,
              props.codeTextBC_A_extra_code30
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
              props.codeSubA_B_extra_code10,
              props.codeSubA_B_extra_code11,
              props.codeSubA_B_extra_code12,
              props.codeSubA_B_extra_code13,
              props.codeSubA_B_extra_code14,
              props.codeSubA_B_extra_code15,
              props.codeSubA_B_extra_code16,
              props.codeSubA_B_extra_code17,
              props.codeSubA_B_extra_code18,
              props.codeSubA_B_extra_code19,
              props.codeSubA_B_extra_code20,
              props.codeSubA_B_extra_code21,
              props.codeSubA_B_extra_code22,
              props.codeSubA_B_extra_code23,
              props.codeSubA_B_extra_code24,
              props.codeSubA_B_extra_code25,
              props.codeSubA_B_extra_code26,
              props.codeSubA_B_extra_code27,
              props.codeSubA_B_extra_code28,
              props.codeSubA_B_extra_code29,
              props.codeSubA_B_extra_code30
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
              props.codeSubB_B_extra_code10,
              props.codeSubB_B_extra_code11,
              props.codeSubB_B_extra_code12,
              props.codeSubB_B_extra_code13,
              props.codeSubB_B_extra_code14,
              props.codeSubB_B_extra_code15,
              props.codeSubB_B_extra_code16,
              props.codeSubB_B_extra_code17,
              props.codeSubB_B_extra_code18,
              props.codeSubB_B_extra_code19,
              props.codeSubB_B_extra_code20,
              props.codeSubB_B_extra_code21,
              props.codeSubB_B_extra_code22,
              props.codeSubB_B_extra_code23,
              props.codeSubB_B_extra_code24,
              props.codeSubB_B_extra_code25,
              props.codeSubB_B_extra_code26,
              props.codeSubB_B_extra_code27,
              props.codeSubB_B_extra_code28,
              props.codeSubB_B_extra_code29,
              props.codeSubB_B_extra_code30
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
              props.codeSubC_B_extra_code10,
              props.codeSubC_B_extra_code11,
              props.codeSubC_B_extra_code12,
              props.codeSubC_B_extra_code13,
              props.codeSubC_B_extra_code14,
              props.codeSubC_B_extra_code15,
              props.codeSubC_B_extra_code16,
              props.codeSubC_B_extra_code17,
              props.codeSubC_B_extra_code18,
              props.codeSubC_B_extra_code19,
              props.codeSubC_B_extra_code20,
              props.codeSubC_B_extra_code21,
              props.codeSubC_B_extra_code22,
              props.codeSubC_B_extra_code23,
              props.codeSubC_B_extra_code24,
              props.codeSubC_B_extra_code25,
              props.codeSubC_B_extra_code26,
              props.codeSubC_B_extra_code27,
              props.codeSubC_B_extra_code28,
              props.codeSubC_B_extra_code29,
              props.codeSubC_B_extra_code30
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
              props.codeTextAA_B_extra_code10,
              props.codeTextAA_B_extra_code11,
              props.codeTextAA_B_extra_code12,
              props.codeTextAA_B_extra_code13,
              props.codeTextAA_B_extra_code14,
              props.codeTextAA_B_extra_code15,
              props.codeTextAA_B_extra_code16,
              props.codeTextAA_B_extra_code17,
              props.codeTextAA_B_extra_code18,
              props.codeTextAA_B_extra_code19,
              props.codeTextAA_B_extra_code20,
              props.codeTextAA_B_extra_code21,
              props.codeTextAA_B_extra_code22,
              props.codeTextAA_B_extra_code23,
              props.codeTextAA_B_extra_code24,
              props.codeTextAA_B_extra_code25,
              props.codeTextAA_B_extra_code26,
              props.codeTextAA_B_extra_code27,
              props.codeTextAA_B_extra_code28,
              props.codeTextAA_B_extra_code29,
              props.codeTextAA_B_extra_code30
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
              props.codeTextAB_B_extra_code10,
              props.codeTextAB_B_extra_code11,
              props.codeTextAB_B_extra_code12,
              props.codeTextAB_B_extra_code13,
              props.codeTextAB_B_extra_code14,
              props.codeTextAB_B_extra_code15,
              props.codeTextAB_B_extra_code16,
              props.codeTextAB_B_extra_code17,
              props.codeTextAB_B_extra_code18,
              props.codeTextAB_B_extra_code19,
              props.codeTextAB_B_extra_code20,
              props.codeTextAB_B_extra_code21,
              props.codeTextAB_B_extra_code22,
              props.codeTextAB_B_extra_code23,
              props.codeTextAB_B_extra_code24,
              props.codeTextAB_B_extra_code25,
              props.codeTextAB_B_extra_code26,
              props.codeTextAB_B_extra_code27,
              props.codeTextAB_B_extra_code28,
              props.codeTextAB_B_extra_code29,
              props.codeTextAB_B_extra_code30
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
              props.codeTextAC_B_extra_code10,
              props.codeTextAC_B_extra_code11,
              props.codeTextAC_B_extra_code12,
              props.codeTextAC_B_extra_code13,
              props.codeTextAC_B_extra_code14,
              props.codeTextAC_B_extra_code15,
              props.codeTextAC_B_extra_code16,
              props.codeTextAC_B_extra_code17,
              props.codeTextAC_B_extra_code18,
              props.codeTextAC_B_extra_code19,
              props.codeTextAC_B_extra_code20,
              props.codeTextAC_B_extra_code21,
              props.codeTextAC_B_extra_code22,
              props.codeTextAC_B_extra_code23,
              props.codeTextAC_B_extra_code24,
              props.codeTextAC_B_extra_code25,
              props.codeTextAC_B_extra_code26,
              props.codeTextAC_B_extra_code27,
              props.codeTextAC_B_extra_code28,
              props.codeTextAC_B_extra_code29,
              props.codeTextAC_B_extra_code30
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
              props.codeTextBA_B_extra_code10,
              props.codeTextBA_B_extra_code11,
              props.codeTextBA_B_extra_code12,
              props.codeTextBA_B_extra_code13,
              props.codeTextBA_B_extra_code14,
              props.codeTextBA_B_extra_code15,
              props.codeTextBA_B_extra_code16,
              props.codeTextBA_B_extra_code17,
              props.codeTextBA_B_extra_code18,
              props.codeTextBA_B_extra_code19,
              props.codeTextBA_B_extra_code20,
              props.codeTextBA_B_extra_code21,
              props.codeTextBA_B_extra_code22,
              props.codeTextBA_B_extra_code23,
              props.codeTextBA_B_extra_code24,
              props.codeTextBA_B_extra_code25,
              props.codeTextBA_B_extra_code26,
              props.codeTextBA_B_extra_code27,
              props.codeTextBA_B_extra_code28,
              props.codeTextBA_B_extra_code29,
              props.codeTextBA_B_extra_code30
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
              props.codeTextBB_B_extra_code10,
              props.codeTextBB_B_extra_code11,
              props.codeTextBB_B_extra_code12,
              props.codeTextBB_B_extra_code13,
              props.codeTextBB_B_extra_code14,
              props.codeTextBB_B_extra_code15,
              props.codeTextBB_B_extra_code16,
              props.codeTextBB_B_extra_code17,
              props.codeTextBB_B_extra_code18,
              props.codeTextBB_B_extra_code19,
              props.codeTextBB_B_extra_code20,
              props.codeTextBB_B_extra_code21,
              props.codeTextBB_B_extra_code22,
              props.codeTextBB_B_extra_code23,
              props.codeTextBB_B_extra_code24,
              props.codeTextBB_B_extra_code25,
              props.codeTextBB_B_extra_code26,
              props.codeTextBB_B_extra_code27,
              props.codeTextBB_B_extra_code28,
              props.codeTextBB_B_extra_code29,
              props.codeTextBB_B_extra_code30
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
              props.codeTextBC_B_extra_code10,
              props.codeTextBC_B_extra_code11,
              props.codeTextBC_B_extra_code12,
              props.codeTextBC_B_extra_code13,
              props.codeTextBC_B_extra_code14,
              props.codeTextBC_B_extra_code15,
              props.codeTextBC_B_extra_code16,
              props.codeTextBC_B_extra_code17,
              props.codeTextBC_B_extra_code18,
              props.codeTextBC_B_extra_code19,
              props.codeTextBC_B_extra_code20,
              props.codeTextBC_B_extra_code21,
              props.codeTextBC_B_extra_code22,
              props.codeTextBC_B_extra_code23,
              props.codeTextBC_B_extra_code24,
              props.codeTextBC_B_extra_code25,
              props.codeTextBC_B_extra_code26,
              props.codeTextBC_B_extra_code27,
              props.codeTextBC_B_extra_code28,
              props.codeTextBC_B_extra_code29,
              props.codeTextBC_B_extra_code30
            )}
            {externalLinks(props.externalLinksA)}
            {externalLinks(props.externalLinksB)}
            {externalLinks(props.externalLinksC)}
            {externalLinks(props.externalLinksD)}
            {externalLinks(props.externalLinksE)}
            {externalLinks(props.externalLinksF)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;

// import { Link } from "react-router-dom";

// const Card = (props) => {
//   const renderProperty = (property) => {
//     if (property) {
//       return <p>{property}</p>;
//     }
//     return null;
//   };

//   const renderCodeBlock = (codes) => {
//     return codes.map((code, index) => {
//       if (code) {
//         return (
//           <div className="mockup-code min-width-[14rem] my-4" key={index}>
//             <pre>
//               <code>{code}</code>
//             </pre>
//           </div>
//         );
//       }
//       return null;
//     });
//   };

//   const renderExternalLink = (link) => {
//     if (link && link[0]) {
//       return (
//         <Link
//           className="text-primary font-bold"
//           to={link[1]}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {link[0]}
//         </Link>
//       );
//     }
//     return null;
//   };

//   const renderSections = (section, numCodes) => {
//     const codeArray = Array.from(
//       { length: numCodes },
//       (_, index) => section[`code${String.fromCharCode(65 + index)}`]
//     );

//     return (
//       <div className="flex flex-col gap-2">
//         {renderProperty(section.subtitle)}
//         {renderProperty(section.subIntro)}
//         {renderProperty(section.moreSubIntro)}
//         {renderCodeBlock(codeArray)}
//         {renderProperty(section.textA)}
//         {renderCodeBlock(codeArray.slice(numCodes, numCodes * 2))}
//         {renderProperty(section.textB)}
//         {renderCodeBlock(codeArray.slice(numCodes * 2, numCodes * 3))}
//         {renderProperty(section.textC)}
//         {renderCodeBlock(codeArray.slice(numCodes * 3, numCodes * 4))}
//         {renderExternalLink(section.externalLink)}
//       </div>
//     );
//   };

//   return (
//     <article
//       id={props.link}
//       className="flex flex-col max-w-[95vw] mx-auto my-8 shadow-2xl shadow-blue-700 border-t-2 border-b-4 border-blue-700 md:max-w-[45vw] rounded-xl"
//     >
//       <div className="flex flex-col justify-start p-4 rounded-xl">
//         {renderProperty(props.title)}
//         {renderProperty(props.intro)}
//         {renderProperty(props.moreIntro)}
//         {renderCodeBlock([props.code])}
//         {renderSections(props.sectionA, 10)}
//         {renderSections(props.sectionB, 10)}
//         {renderSections(props.sectionC, 10)}
//       </div>
//     </article>
//   );
// };

// export default Card;
