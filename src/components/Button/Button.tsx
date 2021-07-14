import {ButtonHTMLAttributes} from 'react';
import './style.scss';

export function Button(props:ButtonHTMLAttributes<HTMLButtonElement>) {
  return(
    <button {...props}>{props.children}</button>
  )
}