import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import './../css/common.css'

function Input() {
  const dispatch = useDispatch()

  // 横幅
  const [widthVal, setWidthVal] = useState(useSelector((state) => state.width))
  const changeWidth = (e) => {
    const eValue = e.target.value.replace(/^0+/, '');
    setWidthVal(eValue.replace(/[^0-9]/ig, ""));
  }
  useEffect(() => {
    dispatch({ type: "WIDTH_CHANGE", payload: widthVal })
  }, [widthVal])

  // 縦幅
  const [heightVal, setHeightVal] = useState(useSelector((state) => state.height))
  const changeHeight = (e) => {
    const eValue = e.target.value.replace(/^0+/, '');
    setHeightVal(eValue.replace(/[^0-9]/ig, ""));
  }
  useEffect(() => {
    dispatch({ type: "HEIGHT_CHANGE", payload: heightVal })
  }, [heightVal])

  // 背景色
  const [bgColorVal, setBgColorVal] = useState(useSelector((state) => state.bgColor))
  const changeBgColor = (e) => {
    setBgColorVal(e.target.value.replace(/[^a-fA-F0-9]/ig, ""));
  }
  useEffect(() => {
    dispatch({ type: "BG_COLOR_CHANGE", payload: bgColorVal })
  }, [bgColorVal])

  // 文字色
  const [txtColorVal, setTxtColorVal] = useState(useSelector((state) => state.txtColor))
  const changeTxtColor = (e) => {
    setTxtColorVal(e.target.value.replace(/[^a-fA-F0-9]/ig, ""))
  }
  useEffect(() => {
    dispatch({ type: "TXT_COLOR_CHANGE", payload: txtColorVal })
  }, [txtColorVal])

  // テキスト
  const [textVal, setTextVal] = useState(useSelector((state) => state.text))
  const changeText = (e) => {
    setTextVal(e.target.value)
  }
  useEffect(() => {
    dispatch({ type: "TEXT_CHANGE", payload: textVal })
  }, [textVal])

  // 枠線
  const [borderVal, setBorderVal] = useState(useSelector((state) => state.border))
  const changeBorder = (e) => {
    const eValue = e.target.value
    console.log(eValue.length);
    if(!(/^0/.test(eValue))) {
      setBorderVal(eValue.replace(/[^0-9]/ig, ""))
    } else {
      setBorderVal(0)
    }
  }
  useEffect(() => {
    dispatch({ type: "BORDER_CHANGE", payload: borderVal })
  }, [borderVal])

  // 枠色
  const [borderColorVal, setBorderColorVal] = useState(useSelector((state) => state.borderColor))
  const changeBorderColor = (e) => {
    setBorderColorVal(e.target.value.replace(/[^a-fA-F0-9]/ig, ""))
  }
  useEffect(() => {
    dispatch({ type: "BORDER_COLOR_CHANGE", payload: borderColorVal })
  }, [borderColorVal])

  // 角丸
  const [radiusVal, setRadiusVal] = useState(useSelector((state) => state.radius))
  const changeRadius = (e) => {
    const eValue = e.target.value
    if(!(/^0/.test(eValue))) {
      setRadiusVal(eValue.replace(/[^0-9]/ig, ""))
    } else {
      setRadiusVal(0)
    }
  }
  useEffect(() => {
    dispatch({ type: "RADIUS_CHANGE", payload: radiusVal })
  }, [radiusVal])

  return (
    <div className="input">
      <h2>▼ 値の設定</h2>
      <ul>
        <li>
          <span>横幅：</span><input type="text" value={ widthVal } onChange={(e) => changeWidth(e)} maxLength='4' /> px
        </li>
        <li>
          <span>縦幅：</span><input type="text" value={ heightVal } onChange={(e) => changeHeight(e)} maxLength='4' /> px
        </li>
        <li>
          <span>文字：</span><input type="text" value={ textVal } onChange={(e) => changeText(e) } />
        </li>
        <li>
          <span>文字色：</span># <input type="text" value={ txtColorVal } onChange={(e) => changeTxtColor(e)} maxLength='6' />
        </li>
        <li>
          <span>背景色：</span># <input type="text" value={ bgColorVal } onChange={(e) => changeBgColor(e)} maxLength='6' />
        </li>
        <li>
          <span>枠線：</span><input type="text" value={ borderVal } onChange={(e) => changeBorder(e)} maxLength='4' /> px
        </li>
        <li>
          <span>枠色：</span># <input type="text" value={ borderColorVal } onChange={(e) => changeBorderColor(e)} maxLength='6' />
        </li>
        <li>
          <span>角丸：</span><input type="text" value={ radiusVal } onChange={(e) => changeRadius(e)} maxLength='4' /> px
        </li>
      </ul>
    </div>
  );
}

export default Input;