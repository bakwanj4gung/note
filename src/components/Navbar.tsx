import Logo from './Logo'
import ButtonMode from './ButtonMode'

function Navbar() {
  return (
    <div className="flex items-center justify-between border-b py-6">
        <Logo />
        <ButtonMode />
    </div>
  )
}

export default Navbar