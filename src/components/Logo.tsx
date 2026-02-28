function Logo() {
  return (
    <div className="transition-all capitalize text-4xl pointer-events-none scale-75 md:scale-100">
        <p className='[&>span]:inline-block [&>span]:lowercase'>
            no
            <span className='rotate-45 translate-x-1.5 -translate-y-3'>t</span>
            <span className='-rotate-45 -translate-x-1 translate-y-1'>e</span>
        </p>
    </div>
  )
}

export default Logo