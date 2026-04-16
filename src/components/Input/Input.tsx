import {InputProps} from './type.ts'
import classNames from "classnames";
// import {forwardRef} from "react";
const MyInput=(props:InputProps)=>{
    const {size,type='text',disabled,clearable,showPassword,prepend,append,prefix,suffix}=props
    const classes=classNames('my-input',{
        [`my-input--${type}`]:type,
        [`my-input--${size}`]:size,
        'is-disabled':disabled,
        'is-prepend': !!prepend,    // 对应 $slots.prepend
        'is-append': !!append,      // 对应 $slots.append
        'is-prefix': !!prefix,      // 对应 $slots.prefix
        'is-suffix': !!suffix,      // 对应 $slots.suffix
    })
    // 如果是input
    if(type!=='textarea') {
        return (
            <div className={classes}>
                {/*prepand插槽*/}
                {prepend&& <div className={"my-input__prepend"}>{prepend}</div> }
                <div className={"my-input__wrapper"}>
                    {prefix&& <div className={"my-input__prefix"}>{prefix}</div>}
                    <input type={type} disabled={disabled} className={"my-input__inner"}/>
                    {suffix&& <div className={"my-input__suffix"}>{suffix}</div>}
                </div>
                {/* append*/}
                {prepend&& <div className={"my-input__append"}>{prepend} </div>}

            </div>

        )
    }else{
        //如果不是input
        return (
            <div></div>
        )
    }
}
export default MyInput