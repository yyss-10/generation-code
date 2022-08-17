import { useSelector } from "react-redux";
import Prism from "prismjs";
import './../css/prism.css';
import './../css/common.css'
import { useEffect } from "react";

function Output() {
  // 横幅
  const width = useSelector((state) => state.width)
  // 縦幅
  const height = useSelector((state) => state.height)
  // 背景色
  const bgColor = useSelector((state) => state.bgColor)
  // 文字色
  const txtColor = useSelector((state) => state.txtColor)
  // テキスト
  const text = useSelector((state) => state.text)
  // 枠線
  const border = useSelector((state) => state.border)
  // 枠色
  const borderColor = useSelector((state) => state.borderColor)
  // 角丸
  const radius = useSelector((state) => state.radius)

  useEffect(() => {
    Prism.highlightAll();
  });

  // ボタンのstyle
  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,
    color: `#${txtColor}`,
    backgroundColor: `#${bgColor}`,
    borderWidth: border ? `${border}px` : 0,
    borderStyle: `solid`,
    borderColor: `#${borderColor}`,
    borderRadius: radius ? `${radius}px` : 0,
    cursor: 'pointer'
  }

  // ボタンCSSコード
  const buttonCssCode = `button {
  ${ width ? `width: ${width}px;` : 'width: 0;' }
  ${ height ? `height: ${height}px;` : 'height: 0;' }
  ${ txtColor ? `color: '#${txtColor}';` : 'color: transparent;' }
  ${ bgColor ? `background-color: '#${bgColor}';` : 'background-color: transparent;'}
  ${ !border ? 'border: 0;' : (borderColor ? `border: '${border}px solid #${borderColor};'` : `border: '${border}px solid transparent';`)}
  ${ radius ? `border-radius: ${radius}px;` : 'border-radius: 0;' }
  cursor: 'pointer';
}`

  return (
    <div className="output">
      <div className="output_review">
        <h2>▼ 生成されたボタン（はみ出した場合、スクロール化）</h2>
        <div className="output_button">
          <button type="button" style={
            buttonStyle
          }>{ text }</button>
        </div>
      </div>
      <div className="output_code">
        <div className="output_codeHtml">
          <h2>▼ コード</h2>
          <h3>・HTML</h3>
          <pre>
            <code className="language-html">
              {`<button type="button">${ text }</button>`}
            </code>
          </pre>
        </div>
        <div className="output_codeCss">
          <h3>・CSS</h3>
          <pre>
            <code className="language-css">
              { buttonCssCode }
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Output;