import './App.scss'

function App() {
    return <header className='flex justify-between'>
        <div className="logo flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus" width="24"
                 height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="12" y1="9" x2="12" y2="15"></line>
            </svg>
            Informatica
        </div>
        <nav className='flex gap-4'>
            <a href="#">product</a>
            <a href="#">About</a>
            <a href="#">BLog</a>
            <a href="#">Career</a>
        </nav>
    </header>

}

export default App
