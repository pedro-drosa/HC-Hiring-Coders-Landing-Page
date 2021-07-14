import {InputHTMLAttributes} from 'react';
import './style.scss';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return(
    <input {...props}/>
  )
}