import React from 'react';
export default function Button({children, variant='primary', size='md', disabled=false, className='', onClick}){
  const classes = `btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`;
  return <button className={classes} disabled={disabled} aria-label={children} onClick={onClick}>{children}</button>;
}
